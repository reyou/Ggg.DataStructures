package TheAlgorithmDesignManual.AaaIntroduction;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

// https://stackoverflow.com/a/4640179/929902
public class Powerset {
    public static void main(String[] args) {
        // {1,2,5,9,10}
        Set<Integer> originalSet = new HashSet<>();
        originalSet.add(1);
        originalSet.add(2);
        originalSet.add(5);
        originalSet.add(9);
        originalSet.add(10);
        Set<Set<Integer>> sets = powerSet(originalSet);
        for (Set<Integer> sets2 : sets) {
            for (Integer setItem : sets2) {
                System.out.print(setItem + ", ");
            }
            System.out.println("");
        }
    }

    public static Set<Set<Integer>> powerSet(Set<Integer> originalSet) {
        Set<Set<Integer>> sets = new HashSet<Set<Integer>>();
        if (originalSet.isEmpty()) {
            sets.add(new HashSet<Integer>());
            return sets;
        }
        List<Integer> list = new ArrayList<Integer>(originalSet);
        Integer head = list.get(0);
        Set<Integer> rest = new HashSet<Integer>(list.subList(1, list.size()));
        for (Set<Integer> set : powerSet(rest)) {
            Set<Integer> newSet = new HashSet<Integer>();
            newSet.add(head);
            newSet.addAll(set);
            sets.add(newSet);
            sets.add(set);
        }
        return sets;
    }

}
