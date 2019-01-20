package algorithmsBook.fundamentals;

public class CircularRotation {
    public static void main(String[] args) {
        String input1 = "ACTGACG";
        String input2 = "TGACGAC";
        boolean result = CheckAreCircular(input1, input2);
        System.out.println(result);
    }

    private static boolean CheckAreCircular(String input1, String input2) {
        if (input1.length() != input2.length()) {
            return false;
        }
        String input3 = input1 + input1;
        if (input3.contains(input2)) {
            return true;
        }
        return false;
    }
}
