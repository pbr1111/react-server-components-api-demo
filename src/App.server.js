/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {Suspense} from 'react';

import Post from './app/Post.server';
import PostList from './app/PostList.server';
import EditButton from './shared/EditButton.client';
import SearchField from './app/SearchField.client';
import PostSkeleton from './app/post/PostSkeleton';
import PostListSkeleton from './app/post-list/PostListSkeleton';

export default function App({selectedId, isEditing, searchText}) {
  return (
    <div className="main">
      <section className="col sidebar">
        <section className="sidebar-header">
          <img
            className="logo"
            src="logo.svg"
            width="22px"
            height="20px"
            alt=""
            role="presentation"
          />
          <strong>React Posts</strong>
        </section>
        <section className="sidebar-menu" role="menubar">
          <SearchField />
          <EditButton postId={null}>New</EditButton>
        </section>
        <nav>
          <Suspense fallback={<PostListSkeleton />}>
            <PostList searchText={searchText} />
          </Suspense>
        </nav>
      </section>
      <section key={selectedId} className="col post-viewer">
        <Suspense fallback={<PostSkeleton isEditing={isEditing} />}>
          <Post selectedId={selectedId} isEditing={isEditing} />
        </Suspense>
      </section>
    </div>
  );
}
