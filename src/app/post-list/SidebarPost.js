/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import excerpts from 'excerpts';
import marked from 'marked';

import ClientSidebarPost from './SidebarPost.client';

export default function SidebarPost({post}) {
  const summary = excerpts(marked(post.body), {words: 20});
  return (
    <ClientSidebarPost
      id={post.id}
      title={post.title}
      expandedChildren={
        <p className="sidebar-post-excerpt">{summary || <i>(No content)</i>}</p>
      }>
      <header className="sidebar-post-header">
        <strong>{post.title}</strong>
      </header>
    </ClientSidebarPost>
  );
}
