/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/
public class Solution {
    public Node connect(Node root) {

        if (root == null) return null;

        List<Node> cur = new ArrayList<>();
        cur.add(root);

        while (!cur.isEmpty()) {

            for(int i = 0; i < cur.size() -1; i ++) {
                cur.get(i).next = cur.get(i+1);
            }

            List<Node> next = new ArrayList<>();
            for(Node n:cur) {
                if (n.left !=null) {
                    next.add(n.left);
                }

                if (n.right != null) {
                    next.add(n.right);
                }
            }

            cur = next;
        }
        return root;
        

    }

}