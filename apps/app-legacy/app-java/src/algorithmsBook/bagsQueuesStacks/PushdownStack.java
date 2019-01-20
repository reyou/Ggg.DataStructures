package algorithmsBook.bagsQueuesStacks;

import java.util.Iterator;


public class PushdownStack<Item> implements Iterable<Item> {
    private class Node {
        // nested class to define nodes
        Item item;
        Node next;
    }

    private Node first;
    private int N;

    public boolean isEmpty() {
        return first == null;
    }

    public int size() {
        return N;
    }

    public void push(Item item) {
        // Add item to top of stack.
        Node oldFirst = first;
        first = new Node();
        first.item = item;
        first.next = oldFirst;
        N++;
    }

    public Item pop() {
        // Remove item from top of stack.
        Item item = first.item;
        first = first.next;
        N--;
        return item;
    }

    @Override
    public Iterator<Item> iterator() {
       return new PushdownStackIterator();
    }

    private class PushdownStackIterator implements Iterator<Item> {
        @Override
        public boolean hasNext() {
            return false;
        }

        @Override
        public Item next() {
            return null;
        }
    }
}
