package algorithmsBook.bagsQueuesStacks;

// Reverse a linked list - Iterative method
// https://www.youtube.com/watch?v=sYcOK51hl-A
// Reverse a linked list using recursion
// https://www.youtube.com/watch?v=KYH83T4q6Vs
public class LinkedListReverse {
    public static void main(String[] args) {
        Node node1 = new Node(15);
        reverseLinkedList(node1);
    }

    private static Node reverseLinkedList(Node node1) {
        Node first = node1;
        Node reverse = null;
        while (first != null) {
            Node second = first.next;
            first.next = reverse;
            reverse = first;
            first = second;
        }
        return reverse;
    }

    private static class Node {
        Node(int data) {
            this.data = data;
        }

        int data;
        Node next;
    }
}
