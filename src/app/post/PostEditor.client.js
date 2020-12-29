/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {useState, unstable_useTransition} from 'react';
import {createFromReadableStream} from 'react-server-dom-webpack';

import PostPreview from './PostPreview';
import {useRefresh, useCache} from '../../shared/Cache.client';
import {useLocation} from '../../shared/LocationContext.client';
import {useMutation} from '../../shared/hooks/useMutation';

export default function PostEditor({postId, initialTitle, initialBody}) {
  const {clear} = useCache();
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const [location, setLocation] = useLocation();
  const [startNavigating, isNavigating] = unstable_useTransition();
  const [isSaving, savePost] = useMutation({
    endpoint:
      postId !== null
        ? `https://jsonplaceholder.typicode.com/posts//${postId}`
        : `/notes`,
    method: postId !== null ? 'PUT' : 'POST',
  });
  const [isDeleting, deletePost] = useMutation({
    endpoint: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    method: 'DELETE',
  });

  async function handleSave() {
    const payload = {title, body};
    const requestedLocation = {
      selectedId: postId,
      isEditing: false,
      searchText: location.searchText,
    };
    await savePost(payload);
    navigate(requestedLocation);
  }

  async function handleDelete() {
    const payload = {};
    const requestedLocation = {
      selectedId: null,
      isEditing: false,
      searchText: location.searchText,
    };
    await deletePost(payload);
    navigate(requestedLocation);
  }

  function navigate(nextLocation) {
    startNavigating(() => {
      clear();
      setLocation(nextLocation);
    });
  }

  const isDraft = postId === null;
  return (
    <div className="post-editor">
      <form
        className="post-editor-form"
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}>
        <label className="offscreen" htmlFor="post-title-input">
          Enter a title for your post
        </label>
        <input
          id="post-title-input"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="offscreen" htmlFor="post-body-input">
          Enter the body for your post
        </label>
        <textarea
          id="post-body-input"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </form>
      <div className="post-editor-preview">
        <div className="post-editor-menu" role="menubar">
          <button
            className="post-editor-done"
            disabled={isSaving || isNavigating}
            onClick={() => handleSave()}
            role="menuitem">
            <img
              src="checkmark.svg"
              width="14px"
              height="10px"
              alt=""
              role="presentation"
            />
            Done
          </button>
          {!isDraft && (
            <button
              className="post-editor-delete"
              disabled={isDeleting || isNavigating}
              onClick={() => handleDelete()}
              role="menuitem">
              <img
                src="cross.svg"
                width="10px"
                height="10px"
                alt=""
                role="presentation"
              />
              Delete
            </button>
          )}
        </div>
        <div className="label label--preview" role="status">
          Preview
        </div>
        <h1 className="post-title">{title}</h1>
        <PostPreview title={title} body={body} />
      </div>
    </div>
  );
}
