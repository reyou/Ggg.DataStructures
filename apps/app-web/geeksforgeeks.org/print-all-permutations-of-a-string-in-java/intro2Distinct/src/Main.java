import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        String text = "geek";
        PrintPermutations(text);
    }

    private static void PrintPermutations(String text) {
        String builder = "";
        String remainder = text;
        PrintPermutations2(builder, remainder);
    }


    private static void PrintPermutations2(String builder, String remainder) {
        if (remainder.length() != 0) {
            ArrayList<Character> tracked = new ArrayList<Character>();
            for (int i = 0; i < remainder.length(); i++) {
                char c = remainder.toCharArray()[i];
                if (!tracked.contains(c)) {
                    tracked.add(c);
                } else {
                    continue;
                }
                String builder2 = builder + c;
                String rem2 = remainder.substring(0, i) + remainder.substring(i + 1);
                PrintPermutations2(builder2, rem2);
            }
        } else {
            System.out.println(builder);
        }
    }
}


