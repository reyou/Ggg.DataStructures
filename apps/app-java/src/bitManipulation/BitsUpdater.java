package bitManipulation;

public class BitsUpdater {
    public static void main(String[] args) {
        int n = 1000000000;
        int m = 10101;
        int i = 2;
        int j = 6;
        runUpdateBits(n, m, i, j);
    }

    public static int runUpdateBits(int n, int m, int i, int j) {
        System.out.println("");
        int max = ~0;
        System.out.println("int max = ~0;");
        System.out.println("int " + max + " = ~0;");
        // 1’s through position j, then 0’s
        System.out.println("");
        System.out.println("1’s through position j, then 0’s");
        System.out.println("int left = max - ((1 << j) - 1);");
        int left = max - ((1 << j) - 1);
        System.out.println("int " + left + " = " + max + "- ((1 << " + j + ") - 1);");
        System.out.println("");
        // 1’s after position i
        System.out.println("1’s after position i");
        int right = ((1 << i) - 1);
        System.out.println("int right = ((1 << i) - 1);");
        System.out.println("int " + right + " = ((1 << " + i + ") - 1);");
        System.out.println("");
        // 1's, with 0s between i and j
        System.out.println("1's, with 0s between i and j");
        int mask = left | right;
        System.out.println("int mask = left | right;");
        System.out.println("int " + mask + " = " + left + "| " + right + ";");
        System.out.println("");
        // clear i through j, then put m in there
        System.out.println("clear i through j, then put m in there");
        System.out.println("return (n & mask) | (m << i);");
        System.out.println("return (" + n + " & " + mask + ") | (" + m + " << " + i + ");");
        int retunValue = (n & mask) | (m << i);
        System.out.println("int " + retunValue + " = (n & mask) | (m << i);");
        return retunValue;
    }
}
