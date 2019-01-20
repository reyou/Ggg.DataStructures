package questions;

public class FibonacciNumber {
    public static void main(String[] args) {
        int result = fibo(15);
        System.out.print(result);
    }

    // https://en.wikipedia.org/wiki/Fibonacci_number
    // Write a method to generate the nth Fibonacci number.
    // The Fibonacci Sequence is the series of numbers:
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    static int fibo(int n) {
        // Error condition.
        if (n < 0) {
            return -1;
        }
        if (n == 0) {
            return 0;
        }
        int a = 1, b = 1;
        for (int i = 3; i <= n; i++) {
            int c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}
