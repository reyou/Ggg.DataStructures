package TheAlgorithmDesignManual.AaaIntroduction;

public class insertion_sort_class {

<<<<<<< HEAD
=======
    /*
     * insertion_sort(item s[], int n) { int i,j;
     *//* counters *//*
                      * for (i=1; i<n; i++) { j=i; while ((j>0) && (s[j] < s[j-1])) {
                      * swap(&s[j],&s[j-1]); j = j-1; } } }
                      */
>>>>>>> 11225bd7ff05b9c85c37a0028972e781d6f0676b
    public void insertion_sort(int[] s, int n) {
        // counters
        int i, j;
        for (i = 1; i < n; i++) {
            j = i;
            while ((j > 0) && (s[j] < s[j - 1])) {
                swap(s, j, j - 1);
                j = j - 1;
            }
        }
    }

    private void swap(int[] s, int i, int i1) {
        int temp = s[i];
        s[i] = s[i1];
        s[i1] = temp;
    }

    // Runner program
    public static void main(String[] args) {
        int[] intArray = new int[] { 2, 5, 7, 12, 1, 8, 17, 11, 4 };
        insertion_sort_class insertion_sort_class = new insertion_sort_class();
        insertion_sort_class.insertion_sort(intArray, intArray.length);
        for (int item : intArray) {
            System.out.print(item + ",");
        }
    }

}
