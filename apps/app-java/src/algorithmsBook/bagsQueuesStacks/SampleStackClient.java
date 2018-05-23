package algorithmsBook.bagsQueuesStacks;

import algorithmsBook.bookContent.Stack;
import algorithmsBook.bookContent.StdIn;
import algorithmsBook.bookContent.StdOut;

public class SampleStackClient {
    public static void main(String[] args) {
        Stack<Integer> stack;
        stack = new Stack<Integer>();
        while (!StdIn.isEmpty()) {
            int i = StdIn.readInt();
            if (i < 0) {
                break;
            }
            stack.push(i);
        }
        for (int i : stack) {
            StdOut.println(i);
        }
    }
}
