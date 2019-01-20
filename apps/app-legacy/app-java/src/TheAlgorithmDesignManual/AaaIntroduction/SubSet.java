package TheAlgorithmDesignManual.AaaIntroduction;
// https://stackoverflow.com/a/5110836/929902
/**
 * @Sherin Syriac
 */

import java.util.ArrayList;
import java.util.List;

public class SubSet {
    ArrayList<List<Integer>> allSubset = new ArrayList<>();

    /**
     * @param args
     */
    public static void main(String[] args) {
        SubSet subSet = new SubSet();
        ArrayList<Integer> set = new ArrayList<>();
        set.add(1);
        set.add(2);
        set.add(3);
        set.add(4);
        subSet.getSubSet(set, 0);
        for (List<Integer> list : subSet.allSubset) {
            System.out.print("{");
            for (Integer element : list) {
                System.out.print(element + ", ");
            }
            System.out.println("}");
        }

    }

    public void getSubSet(ArrayList<Integer> set, int index) {
        if (set.size() == index) {
            ArrayList<Integer> temp = new ArrayList<>();
            allSubset.add(temp);
        } else {
            getSubSet(set, index + 1);
            ArrayList<List<Integer>> tempAllSubsets = new ArrayList<>();
            for (List subset : allSubset) {
                ArrayList<Integer> newList = new ArrayList<>();
                newList.addAll(subset);
                newList.add(set.get(index));
                tempAllSubsets.add(newList);
            }

            allSubset.addAll(tempAllSubsets);
        }

    }

}
