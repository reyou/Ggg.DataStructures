package algorithmsBook.analysisOfAlgorithms;

import algorithmsBook.bookContent.Stack;

// How to implement a queue using two stacks?
// https://stackoverflow.com/questions/69192/how-to-implement-a-queue-using-two-stacks
public class QueueWithTwoStacks {
    private class Queue<E>{
        private Stack<E> inbox = new Stack<>();
        private Stack<E> outbox = new Stack<>();

        public void queue(E item){
            inbox.push(item);
        }
        public E dequeue(){
            if(outbox.isEmpty()){
                while (!inbox.isEmpty()){
                    outbox.push(inbox.pop());
                }
            }
            return outbox.pop();
        }
    }
}
