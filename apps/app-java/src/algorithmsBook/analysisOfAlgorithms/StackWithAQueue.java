package algorithmsBook.analysisOfAlgorithms;

import algorithmsBook.bookContent.Stack;

// Stack with a queue
// https://stackoverflow.com/questions/69192/how-to-implement-a-queue-using-two-stacks
public class StackWithAQueue {
    private class SimulatedQueue<E> {
        public Stack<E> stack = new Stack<>();

        public void insert(E elem) {
            if (!stack.isEmpty()) {
                E topElem = stack.pop();
                insert(elem);
                // post process, reversing the actions.
                stack.push(topElem);
            } else {
                stack.push(elem);
            }
        }

        public E remove() {
            E pop = stack.pop();
            return pop;
        }
    }
}
