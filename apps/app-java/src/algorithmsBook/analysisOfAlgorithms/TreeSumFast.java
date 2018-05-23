package algorithmsBook.analysisOfAlgorithms;

import algorithmsBook.helpers.GggHelpers;
import algorithmsBook.fundamentals.BinarySearch;

import java.util.Arrays;

public class TreeSumFast {
    public static void main(String[] args) {
        int[] ints = GggHelpers.GenerateRandomInts(-10000, 10000, 10000);
        int count = count(ints);
        System.out.println(count);
    }

    public static int count(int[] a) {
        // Count triples that sum to 0.
        Arrays.sort(a);
        int N = a.length;
        int cnt = 0;
        for (int i = 0; i < N; i++) {
            for (int j = i + 1; j < N; j++) {
                if (BinarySearch.rank(-a[i] - a[j], a) > j) {
                    cnt++;
                }
            }
        }
        return cnt;
    }

}
