package algorithmsBook.bagsQueuesStacks;

import algorithmsBook.bookContent.Bag;
import algorithmsBook.bookContent.StdIn;
import algorithmsBook.bookContent.StdOut;

public class Stats {
    public static void main(String[] args) {
        Bag<Double> numbers = new Bag<Double>();
        while (!StdIn.isEmpty()) {
            double stdInDouble = StdIn.readDouble();
            System.out.println("Input entered: " + stdInDouble + "\n");
            if (stdInDouble == -1) {
                break;
            }
            numbers.add(stdInDouble);
        }
        int N = numbers.size();
        double sum = 0.0;
        for (double x : numbers) {
            sum = sum + x;
        }
        double mean = sum / N;
        sum = 00;
        for (double x : numbers) {
            sum += (x - mean) * (x - mean);
        }
        double std = Math.sqrt(sum / (N - 1));

        StdOut.printf("Mean: %.2f\n", mean);
        StdOut.printf("Std dev: %.2f\n", std);
    }
}
