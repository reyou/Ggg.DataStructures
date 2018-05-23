package algorithmsBook.fundamentals;


import java.util.Arrays;

public class BinarySearch {
    public static void main(String[] args) {
        int[] whitelist = {1, 3, 5, 32, 12, 123, 71};
        Arrays.sort(whitelist);
        int rank = rank(123, whitelist);
        System.out.println("rank: " + rank);
        rank = rank(1, whitelist);
        System.out.println("rank: " + rank);
    }

    public static int rank(int key, int[] a) {
        // Array must be sorted.
        int lo = 0;
        int hi = a.length - 1;
        while (lo <= hi) {
            // Key is in a[lo..hi] or not present.
            int mid = lo + (hi - lo) / 2;
            if (key < a[mid]) hi = mid - 1;
            else if (key > a[mid]) lo = mid + 1;
            else return mid;
        }
        return -1;
    }
}
