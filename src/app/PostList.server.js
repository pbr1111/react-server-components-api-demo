/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {fetch} from 'react-fetch';

import SidebarPost from './post-list/SidebarPost';

export default function PostList({searchText}) {
  const posts = fetch('https://jsonplaceholder.typicode.com/posts')
    .json()
    ?.filter((p) => p.title.includes(searchText));

  return posts.length > 0 ? (
    <ul className="posts-list">
      {posts.map((post) => (
        <li key={post.id}>
          <SidebarPost post={post} />
        </li>
      ))}
    </ul>
  ) : (
    <div className="posts-empty">
      {searchText
        ? `Couldn't find any posts titled "${searchText}".`
        : 'No posts created yet!'}{' '}
    </div>
  );
}
