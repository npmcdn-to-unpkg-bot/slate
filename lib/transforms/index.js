
/**
 * At range.
 */

import {
  deleteAtRange,
  deleteBackwardAtRange,
  deleteForwardAtRange,
  insertBlockAtRange,
  insertFragmentAtRange,
  insertInlineAtRange,
  insertTextAtRange,
  addMarkAtRange,
  setBlockAtRange,
  setInlineAtRange,
  splitBlockAtRange,
  splitInlineAtRange,
  removeMarkAtRange,
  toggleMarkAtRange,
  unwrapBlockAtRange,
  unwrapInlineAtRange,
  wrapBlockAtRange,
  wrapInlineAtRange,
  wrapTextAtRange,
} from './at-range'

/**
 * At current range.
 */

import {
  _delete,
  deleteBackward,
  deleteForward,
  insertBlock,
  insertFragment,
  insertInline,
  insertText,
  addMark,
  setBlock,
  setInline,
  splitBlock,
  splitInline,
  removeMark,
  toggleMark,
  unwrapBlock,
  unwrapInline,
  wrapBlock,
  wrapInline,
  wrapText,
} from './at-current-range'

/**
 * By key.
 */

import {
  removeNodeByKey,
  setNodeByKey,
} from './by-key'

/**
 * On selection.
 */

import {
  blur,
  collapseToAnchor,
  collapseToEnd,
  collapseToEndOf,
  collapseToEndOfNextBlock,
  collapseToEndOfNextText,
  collapseToEndOfPreviousBlock,
  collapseToEndOfPreviousText,
  collapseToFocus,
  collapseToStart,
  collapseToStartOf,
  collapseToStartOfNextBlock,
  collapseToStartOfNextText,
  collapseToStartOfPreviousBlock,
  collapseToStartOfPreviousText,
  extendBackward,
  extendForward,
  extendToEndOf,
  extendToStartOf,
  focus,
  moveBackward,
  moveForward,
  moveTo,
  moveToOffsets,
  moveToRangeOf,
} from './on-selection'

/**
 * Export.
 *
 * @type {Object}
 */

export default {

  /**
   * At range.
   */

  deleteAtRange,
  deleteBackwardAtRange,
  deleteForwardAtRange,
  insertBlockAtRange,
  insertFragmentAtRange,
  insertInlineAtRange,
  insertTextAtRange,
  addMarkAtRange,
  setBlockAtRange,
  setInlineAtRange,
  splitBlockAtRange,
  splitInlineAtRange,
  removeMarkAtRange,
  toggleMarkAtRange,
  unwrapBlockAtRange,
  unwrapInlineAtRange,
  wrapBlockAtRange,
  wrapInlineAtRange,
  wrapTextAtRange,

  /**
   * At current range.
   */

  delete: _delete,
  deleteBackward,
  deleteForward,
  insertBlock,
  insertFragment,
  insertInline,
  insertText,
  addMark,
  setBlock,
  setInline,
  splitBlock,
  splitInline,
  removeMark,
  toggleMark,
  unwrapBlock,
  unwrapInline,
  wrapBlock,
  wrapInline,
  wrapText,

  /**
   * By key.
   */

  removeNodeByKey,
  setNodeByKey,

  /**
   * On selection.
   */

  blur,
  collapseToAnchor,
  collapseToEnd,
  collapseToEndOf,
  collapseToEndOfNextBlock,
  collapseToEndOfNextText,
  collapseToEndOfPreviousBlock,
  collapseToEndOfPreviousText,
  collapseToFocus,
  collapseToStart,
  collapseToStartOf,
  collapseToStartOfNextBlock,
  collapseToStartOfNextText,
  collapseToStartOfPreviousBlock,
  collapseToStartOfPreviousText,
  extendBackward,
  extendForward,
  extendToEndOf,
  extendToStartOf,
  focus,
  moveBackward,
  moveForward,
  moveTo,
  moveToOffsets,
  moveToRangeOf,

}