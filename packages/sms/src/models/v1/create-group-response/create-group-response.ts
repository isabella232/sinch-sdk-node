/**
 * Model: CreateGroupResponse
 *
 * THIS FILE HAS BEEN AUTOMATICALLY GENERATED. DO NOT EDIT.
 *
 */

import { GroupAutoUpdate } from '../group-auto-update';

export interface CreateGroupResponse {

  /** The ID used to reference this group. */
  id?: string;
  /** Name of group, if set. */
  name?: string;
  /** The number of members currently in the group. */
  size?: number;
  /** Timestamp for group creation. Format: YYYY-MM-DDThh:mm:ss.SSSZ */
  created_at?: Date;
  /** Timestamp for when the group was last updated. Format: YYYY-MM-DDThh:mm:ss.SSSZ */
  modified_at?: Date;
  /** Phone numbers (MSISDNs) of child group will be included in this group. If present, this group will be auto populated.  Constraints: Elements must be group IDs. */
  child_groups?: object[];
  /** @see GroupAutoUpdate */
  auto_update?: GroupAutoUpdate;
}


