class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let curr = head;

  while (curr) {
    if (curr.next) {
      if (curr.val === curr.next.val) {
        curr.next = curr.next.next;
        continue;
      }
    }
    curr = curr.next;
  }

  return head;
}
