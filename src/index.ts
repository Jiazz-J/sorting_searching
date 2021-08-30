import {mergeSort} from './merge-sort';
import {ListNode, mergeTwoLists} from './merge-two-sorted-lists';
import {removeElement} from './remove-element';
import {isValid} from './validate-parenthesis';
import {isEmpty, LoDashWrapper} from 'lodash';

/*
const input = [3, 4, 1, 0, -2];

console.log(mergeSort(input));
 */

// console.log(isValid('()[]{}'));

/* const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(l1, l2) ?? 'yield null'); */

// console.log(mergeTwoLists(new ListNode(0), null));

const nums = [3, 2, 2, 3];

console.log(removeElement(nums, 2));

console.log('🚀 ~ file: index.ts ~ line 23 ~ nums', nums);

console.log(
  '🚀 ~ file: index.ts ~ line 29 ~ nums.findIndex(3)',
  nums.indexOf(3)
);
