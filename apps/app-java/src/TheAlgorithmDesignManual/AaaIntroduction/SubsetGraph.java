package TheAlgorithmDesignManual.AaaIntroduction;

public class SubsetGraph {


    public static void main(String[] args) {
        int allData[] = {1, 2, 3, 4, 5};
        subset(allData, 0, "");
    }

    public static void subset(int[] allData, int allDataIndex, String currentSubset) {
        if (allDataIndex < allData.length) {
            // we have two options for each item in the subset
            // exclude item from the subset
            subset(allData, allDataIndex + 1, currentSubset);
            //include item to the subset
            subset(allData, allDataIndex + 1, currentSubset + " " + allData[allDataIndex]);

        } else {
            System.out.println("{ " + currentSubset + " }");
        }
    }
}




