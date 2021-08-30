export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function insertAtLast(listNode: ListNode, newListNode: ListNode) {
  let last: ListNode | null = listNode;

  while (last?.next !== null) {
    last = last.next;
  }

  last.next = newListNode;
}

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) {
    return null;
  }

  const listNode = new ListNode();

  while (l1 && l2) {
    const val1 = l1.val;
    const val2 = l2.val;
    let val;

    if (val1 < val2) {
      val = val1;
      l1 = l1.next;
    } else {
      val = val2;
      l2 = l2.next;
    }

    const newListNode = new ListNode(val);

    insertAtLast(listNode, newListNode);
  }

  while (l1) {
    insertAtLast(listNode, new ListNode(l1.val));
    l1 = l1.next;
  }

  while (l2) {
    insertAtLast(listNode, new ListNode(l2.val));
    l2 = l2.next;
  }

  return listNode;
}

/* function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  let mergedList;
  if (l2.val < l1.val) {
    mergedList = new ListNode(l2.val);
    l2 = l2.next;
  } else {
    mergedList = new ListNode(l1.val);
    l1 = l1.next;
  }

  let currentMergedListNode = mergedList;

  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      currentMergedListNode.next = l2;
      break;
    }
    if (l2 === null) {
      currentMergedListNode.next = l1;
      break;
    }
    if (l2.val < l1.val) {
      currentMergedListNode.next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      currentMergedListNode.next = new ListNode(l1.val);
      l1 = l1.next;
    }
    currentMergedListNode = currentMergedListNode.next;
  }

  return mergedList;
}
 */
