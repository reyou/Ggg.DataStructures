package interviewbit;

import java.lang.reflect.Array;
import java.util.*;

//=============================================================================
// https://www.interviewbit.com/problems/array_bug/
//=============================================================================
public class RotateArray {
    public static void main(String[] args){
    /*The size, isEmpty, get, set, iterator, and listIterator operations run in
    constant time. The add operation runs in amortized constant time, that is,
    adding n elements requires O(n) time. All of the other operations run in linear
    time (roughly speaking). The constant factor is low compared to that for the
    LinkedList implementation.*/
        ArrayList<Integer> arrayList = new ArrayList<>();
        for (int i =0; i < 10; i++){
            arrayList.add(i);
        }
        int b = 5;
        ArrayList<Integer> rotatedArray = rotateArray(arrayList, b);
        // https://stackoverflow.com/questions/85190/how-does-the-java-for-each-loop-work
        for(Integer item : rotatedArray){
            System.out.print(item);
            System.out.print(" ,");
        }
    }
    public static ArrayList<Integer> rotateArray(ArrayList<Integer> A, int B) {
        ArrayList<Integer> ret = new ArrayList<Integer>();
        if (B > A.size()) {
            B = B % A.size();
        }
        Integer minCounter = 0;
        for (int i = 0; i < A.size(); i++) {
            if (i + B < A.size()) {
                ret.add(A.get(i + B));
            } else {
                ret.add(A.get(minCounter));
                minCounter++;
            }
        }
        return ret;
    }
}
