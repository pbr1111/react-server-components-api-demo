/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import TextWithMarkdown from '../../shared/TextWithMarkdown';

export default function PostPreview({body}) {
  return (
    <div className="post-preview">
      <TextWithMarkdown text={body} />
    </div>
  );
}
