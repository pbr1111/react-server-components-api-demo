/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export default function PostListSkeleton() {
  return (
    <div>
      <ul className="posts-list skeleton-container">
        <li className="v-stack">
          <div
            className="sidebar-post-list-item skeleton"
            style={{height: '5em'}}
          />
        </li>
        <li className="v-stack">
          <div
            className="sidebar-post-list-item skeleton"
            style={{height: '5em'}}
          />
        </li>
        <li className="v-stack">
          <div
            className="sidebar-post-list-item skeleton"
            style={{height: '5em'}}
          />
        </li>
      </ul>
    </div>
  );
}
