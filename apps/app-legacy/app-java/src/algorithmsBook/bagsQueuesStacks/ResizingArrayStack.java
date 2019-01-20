package algorithmsBook.bagsQueuesStacks;

import java.util.Iterator;

public class ResizingArrayStack<Item> implements Iterable<Item> {

    public static void main(String args[]) {
        ResizingArrayStack<String> items = new ResizingArrayStack<>();
        items.push("hello");
        items.push("this");
        items.push("is");
        items.push("an");
        items.push("iterator");
        items.push("example.");
        for (String item : items) {
            System.out.println(item + " ");
        }
    }

    private Item[] a = (Item[]) new Object[1]; // stack items
    private int N = 0;

    public boolean isEmpty() {
        return N == 0;
    }

    public int size() {
        return N;
    }

    private void resize(int max) {
        Item[] newArray = (Item[]) new Object[max];
        for (int i = 0; i < N; i++) {
            newArray[i] = a[i];
        }
        a = newArray;
    }

    public void push(Item item) {
        if (N + 1 >= a.length) {
            resize(a.length * 2);
        }
        a[N] = item;
        N++;
    }

    public Item pop() {
        if (N < a.length / 4) {
            resize(a.length / 2);
        }
        N--;
        return a[N];
    }


    @Override
    public Iterator<Item> iterator() {
        return new ReverseArrayIterator();
    }

    private class ReverseArrayIterator implements Iterator<Item> {
        private int i = N;

        public boolean hasNext() {
            return i > 0;
        }

        public Item next() {
            return a[--i];
        }

        public void remove() {
        }

    }

}
