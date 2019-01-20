package algorithmsBook.bagsQueuesStacks;

import java.util.Iterator;

public class FifoQueue<Item> implements Iterable<Item> {
    private Node first; // link to least recently added node.
    private Node last; // link to most recently added node.
    private int N;

    public boolean isEmpty() {
        return first == null;
    }

    public int size() {
        return N;
    }

    public void enqueue(Item item) {
        // Add item to the end of the list.
        Node node = new Node();
        node.item = item;
        if (!isEmpty()) {
            Node oldLast = last;
            oldLast.next = node;

        } else {
            first = node;
        }
        last = node;
        N++;
    }

    public Item dequeue() {
        if (isEmpty()) {
            return null;
        }
        Item item = first.item;
        N--;
        if (N == 0) {
            first = null;
            last = null;
        } else {
            first = first.next;
        }
        return item;
    }


    @Override
    public Iterator<Item> iterator() {
        return new FifoQueueIterator<Item>();
    }

    /*An iterator over a collection. Iterator takes the place of
    Enumeration in the Java Collections Framework. Iterators differ
    from enumerations in two ways: Iterators allow the caller to remove
    elements from the underlying collection during the iteration with
    well-defined semantics. Method names have been improved.*/
    private class FifoQueueIterator<Item> implements Iterator<Item> {
        @Override
        public boolean hasNext() {
            return false;
        }

        @Override
        public Item next() {
            return null;
        }
    }

    private class Node {
        // nested class to define nodes
        Item item;
        Node next;
    }
}
