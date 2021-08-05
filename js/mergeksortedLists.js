/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function (lists) {
    // Base condition
    if (lists === undefined || lists.length === 0) {
        return null;
    }
    return mergeLists(lists, 0, lists.length - 1);
};

const mergeLists = (lists, start, end) => {
    // Base condition
    if (start === end) {
        return lists[start];
    }
    // Mid point of the list of lists
    let mid = start + parseInt((end - start) / 2);
    // Recursive call for left sublist
    let left = mergeLists(lists, start, mid);
    // Recursive call for right sublist
    let right = mergeLists(lists, mid + 1, end);
    // Merge two sorted lists
    return merge(left, right);
};

const merge = (left, right) => {
    // Dummy node
    let head = new ListNode(-1);
    // Temp node
    let temp = head;
    // Loop until either list becomes null
    while (left !== null && right != null) {
        // Choose the value from the left and right which is smaller
        if (left.val < right.val) {
            temp.next = left;
            left = left.next;
        } else {
            temp.next = right;
            right = right.next;
        }
        temp = temp.next;
    }
    // Take all nodes from left list if remaining
    while (left != null) {
        temp.next = left;
        left = left.next;
        temp = temp.next;
    }
    // Take all nodes from right list if remaining
    while (right != null) {
        temp.next = right;
        right = right.next;
        temp = temp.next;
    }
    return head.next;
};