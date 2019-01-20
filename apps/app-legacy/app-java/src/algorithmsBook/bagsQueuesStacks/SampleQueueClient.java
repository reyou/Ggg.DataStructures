package algorithmsBook.bagsQueuesStacks;

import algorithmsBook.bookContent.In;
import algorithmsBook.bookContent.Queue;

public class SampleQueueClient {
    public static void main(String[] args) {
        String name = "D:\\Git\\Ggg\\Ggg.Sandbox\\textFiles\\integers.txt";
        int[] result1 = readInts(name);
        for (int i : result1) {
            System.out.println(i);
        }
    }

    public static int[] readInts(String name) {
        In in = new In(name);
        Queue<Integer> q = new Queue<Integer>();
        while (!in.isEmpty()) {
            q.enqueue(in.readInt());
        }
        int N = q.size();
        int[] a = new int[N];
        for (int i = 0; i < N; i++) {
            a[i] = q.dequeue();
        }
        return a;
    }
}
