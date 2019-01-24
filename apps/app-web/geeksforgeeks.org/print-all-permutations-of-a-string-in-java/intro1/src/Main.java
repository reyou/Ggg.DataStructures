public class Main {

    public static void main(String[] args) {

        String text = "abb";
        PrintPermutations(text);
    }

    private static void PrintPermutations(String text) {
        String builder = "";
        String remainder = text;
        PrintPermutations2(builder, remainder);
    }

    private static void PrintPermutations2(String builder, String remainder) {
        if (remainder.length() != 0) {
            for (int i = 0; i < remainder.length(); i++) {
                String builder2 = builder + remainder.toCharArray()[i];
                String rem2 = remainder.substring(0, i) + remainder.substring(i + 1);
                PrintPermutations2(builder2, rem2);
            }
        } else {
            System.out.println(builder);
        }
    }
}


