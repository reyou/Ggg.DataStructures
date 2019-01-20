package algorithmsBook.fundamentals;

/*What is the largest value of N for which this program takes
less 1 hour to compute the value of F(N) ? Develop a better
implementation of F(N) that saves computed values in an array.*/
public class Fibonacci {
    public static long F(int N) {
        if (N == 0) return 0;
        if (N == 1) return 1;
        return F(N - 1) + F(N - 2);
    }

    public static void main(String[] args) {
        for (int N = 0; N < 30; N++) {
            System.out.println(N + " " + F(N));
        }
    }
}
