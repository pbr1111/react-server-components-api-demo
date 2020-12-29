/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {unstable_useTransition} from 'react';

import {useLocation} from './LocationContext.client';

export default function EditButton({postId, children}) {
  const [, setLocation] = useLocation();
  const [startTransition, isPending] = unstable_useTransition();
  const isDraft = postId == null;
  return (
    <button
      className={[
        'edit-button',
        isDraft ? 'edit-button--solid' : 'edit-button--outline',
      ].join(' ')}
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          setLocation((loc) => ({
            selectedId: postId,
            isEditing: true,
            searchText: loc.searchText,
          }));
        });
      }}
      role="menuitem">
      {children}
    </button>
  );
}
