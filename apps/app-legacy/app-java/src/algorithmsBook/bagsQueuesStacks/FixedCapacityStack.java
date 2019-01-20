package algorithmsBook.bagsQueuesStacks;

public class FixedCapacityStack<Item> {
    public static void main(String[] args) {
        FixedCapacityStack<String> s = new FixedCapacityStack<>(100);
        s.push("qqq");
        s.push("www");
        s.push("eee");
        System.out.println(s.pop());
        System.out.println(s.pop());
        System.out.println(s.pop());
    }

    private Item[] a; // stack entries
    private int N; // size

    public FixedCapacityStack(int cap) {
        a = (Item[]) new Object[cap];
    }

    private void resize(int max) {
        // Move stacks of size N <= max to a new array of size max.
        Item[] temp = (Item[]) new Object[max];
        for (int i = 0; i < N; i++) {
            temp[i] = a[i];
            a = temp;
        }
    }

    public boolean isEmpty() {
        return N == 0;
    }

    public int size() {
        return N;
    }

    public void push(Item item) {
        if (N == a.length) {
            resize(a.length * 2);
        }
        a[N++] = item;
    }

    public Item pop() {
        // Remove item from top of stack.
        Item item = a[--N];
        a[N] = null; // Avoid loitering.
        if (N > 0 && N == a.length / 4) {
            resize(a.length / 2);
        }
        return item;
    }
}
