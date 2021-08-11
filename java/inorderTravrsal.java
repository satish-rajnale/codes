class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
            List<Integer> result = new LinkedList<Integer>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode node = root;
        while (true) {
            if (node != null){
                stack.push(node);
                node = node.left;
                continue;
            }
            if (stack.size() == 0) {
                break;
            }
            node = stack.pop();
            result.add(node.val);
            node = node.right;
        }
        return result;
    }
}