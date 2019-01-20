package algorithmsBook.bagsQueuesStacks;

import algorithmsBook.bookContent.Queue;

public class JosephusProblem {
    public static void main(String[] args) {
        Queue<Integer> peopleQ = new Queue<>();
        for (int i = 0; i < 124; i++) {
            peopleQ.enqueue(i + 1);
        }
        while (peopleQ.size() > 0) {
            Integer alive = peopleQ.dequeue();
            if (peopleQ.size() == 1) {
                System.out.println(alive + " is survival!");
                break;
            }
            Integer dead = peopleQ.dequeue();
            System.out.println(dead + " is dead.");
            peopleQ.enqueue(alive);
        }

    }
}
