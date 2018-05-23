package algorithmsBook.analysisOfAlgorithms;

import algorithmsBook.helpers.GggHelpers;
import algorithmsBook.fundamentals.BinarySearch;

import java.util.Arrays;

public class TwoSumFast {
    public static void main(String[] args) {
        int[] randomNumbers = GggHelpers.GenerateRandomInts(-1000000,
                1000000, 100000);
        if (false) {
            System.out.println(randomNumbers.length);
        }
        if (false) {
            for (int a : randomNumbers) {
                System.out.println(a);
            }
        }
        int count = count(randomNumbers);
        System.out.println("Total found: " + count);

    }

    private static int count(int[] a) {
        // Count pairs that sum to 0.
        Arrays.sort(a);
        int N = a.length;
        int cnt = 0;
        for (int i = 0; i < N; i++) {
            if (BinarySearch.rank(-a[i], a) > i) {
                System.out.println(-a[i]);
                cnt++;
            }
        }
        return cnt;
    }
}
