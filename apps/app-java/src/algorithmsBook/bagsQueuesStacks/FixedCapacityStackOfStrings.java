package algorithmsBook.bagsQueuesStacks;

import java.util.ArrayList;
import java.util.List;

public class FixedCapacityStackOfStrings {
    public static void main(String[] args){
        FixedCapacityStackOfStrings s;
        s = new FixedCapacityStackOfStrings(100);
        ArrayList<String> stringList = new ArrayList<>();
        stringList.add("qqq");
        stringList.add("www");
        stringList.add("fff");
        stringList.add("eee");
        for(String q : stringList){
            s.push(q);
        }
        System.out.println(s.pop());
        System.out.println(s.pop());
        System.out.println(s.pop());

    }
    private String[] a; // stack entries
    private int N; // size

    public FixedCapacityStackOfStrings(int cap) {
        a = new String[cap];
    }

    public boolean isEmpty() {
        return N == 0;
    }

    public int size() {
        return N;
    }

    public void push(String item) {
        a[N] = item;
        N++;
    }

    public String pop() {
        N--;
        String lastItem = a[N];
        return lastItem;
    }
}
