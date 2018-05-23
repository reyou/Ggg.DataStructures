package algorithmsBook.analysisOfAlgorithms;

import algorithmsBook.bookContent.StdOut;
import algorithmsBook.bookContent.Stopwatch;

public class ThreeSum {


    public static int count(int[] a) { // Count triples that sum to 0.
        int N = a.length;
        int cnt = 0;
        Stopwatch timer = new Stopwatch();
        for (int i = 0; i < N; i++)
            for (int j = i + 1; j < N; j++)
                for (int k = j + 1; k < N; k++)
                    if (a[i] + a[j] + a[k] == 0)
                        cnt++;
        double time = timer.elapsedTime();
        StdOut.println(cnt + " triples " + time);
        return cnt;
    }

    public static void main(String[] args) {
        int[] a = getInts();
        StdOut.println(count(a));
    }

    public static int[] getInts() {
        int count = 10000 / 4;
        int[] ints = new int[count];
        for (int i = 0; i < count; i++) {
            ints[i] = i;
        }
        return ints;
    }
}
