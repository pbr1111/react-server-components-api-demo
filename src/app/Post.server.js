/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {fetch} from 'react-fetch';

import PostPreview from './post/PostPreview';
import EditButton from '../shared/EditButton.client';
import PostEditor from './post/PostEditor.client';

export default function Post({selectedId, isEditing}) {
  const post =
    selectedId != null
      ? fetch(`https://jsonplaceholder.typicode.com/posts/${selectedId}`).json()
      : null;

  if (post === null) {
    if (isEditing) {
      return (
        <PostEditor postId={null} initialTitle="Untitled" initialBody="" />
      );
    } else {
      return (
        <div className="post--empty-state">
          <span className="post-text--empty-state">
            Click a post on the left to view something! 🥺
          </span>
        </div>
      );
    }
  }

  let {id, title, body} = post;
  if (isEditing) {
    return <PostEditor postId={id} initialTitle={title} initialBody={body} />;
  } else {
    return (
      <div className="post">
        <div className="post-header">
          <h1 className="post-title">{title}</h1>
          <div className="post-menu" role="menubar">
            <EditButton postId={id}>Edit</EditButton>
          </div>
        </div>
        <PostPreview body={body} />
      </div>
    );
  }
}
