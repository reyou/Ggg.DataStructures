package TheAlgorithmDesignManual.AaaIntroduction;

public class SubsetGraph {


    public static void main(String[] args) {
        char set[] = {'a', 'b', 'c', 'd', 'e'};
        subset(set, 0, "");
    }

    public static void subset(char[] set, int pos, String curSubset) {

        if (pos < set.length) {
            // we have two options for each item in the subset
            // exclude item from the subset
            subset(set, pos + 1, curSubset);
            //include item to the subset
            subset(set, pos + 1, curSubset + " " + set[pos]);

        } else {
            System.out.println("{ " + curSubset + " }");
        }
    }
}




