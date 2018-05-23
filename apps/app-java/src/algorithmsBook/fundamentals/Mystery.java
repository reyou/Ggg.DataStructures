package algorithmsBook.fundamentals;

public class Mystery {
    public static void main(String[] args) {
        String input1 = "abcdef";
        String result = mystery(input1);
        System.out.println(result);
    }
    private static String mystery(String s) {
        int N = s.length();
        if (N <= 1) {
            return s;
        }
        String a = s.substring(0, N / 2);
        String b = s.substring(N / 2, N);
        return mystery(b) + mystery(a);
    }
}
