/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function PostEditorSkeleton() {
  return (
    <div
      className="post-editor skeleton-container"
      role="progressbar"
      aria-busy="true">
      <div className="post-editor-form">
        <div className="skeleton v-stack" style={{height: '3rem'}} />
        <div className="skeleton v-stack" style={{height: '100%'}} />
      </div>
      <div className="post-editor-preview">
        <div className="post-editor-menu">
          <div
            className="skeleton skeleton--button"
            style={{width: '8em', height: '2.5em'}}
          />
          <div
            className="skeleton skeleton--button"
            style={{width: '8em', height: '2.5em', marginInline: '12px 0'}}
          />
        </div>
        <div
          className="post-title skeleton"
          style={{height: '3rem', width: '65%', marginInline: '12px 1em'}}
        />
        <div className="post-preview">
          <div className="skeleton v-stack" style={{height: '1.5em'}} />
          <div className="skeleton v-stack" style={{height: '1.5em'}} />
          <div className="skeleton v-stack" style={{height: '1.5em'}} />
          <div className="skeleton v-stack" style={{height: '1.5em'}} />
          <div className="skeleton v-stack" style={{height: '1.5em'}} />
        </div>
      </div>
    </div>
  );
}

function PostPreviewSkeleton() {
  return (
    <div
      className="post skeleton-container"
      role="progressbar"
      aria-busy="true">
      <div className="post-header">
        <div
          className="post-title skeleton"
          style={{height: '3rem', width: '65%', marginInline: '12px 1em'}}
        />
        <div
          className="skeleton skeleton--button"
          style={{width: '8em', height: '2.5em'}}
        />
      </div>
      <div className="post-preview">
        <div className="skeleton v-stack" style={{height: '1.5em'}} />
        <div className="skeleton v-stack" style={{height: '1.5em'}} />
        <div className="skeleton v-stack" style={{height: '1.5em'}} />
        <div className="skeleton v-stack" style={{height: '1.5em'}} />
        <div className="skeleton v-stack" style={{height: '1.5em'}} />
      </div>
    </div>
  );
}

export default function PostSkeleton({isEditing}) {
  return isEditing ? <PostEditorSkeleton /> : <PostPreviewSkeleton />;
}
