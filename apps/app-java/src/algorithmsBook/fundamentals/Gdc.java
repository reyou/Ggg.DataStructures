package algorithmsBook.fundamentals;

public class Gdc {
    public static void main(String[] args) {
        System.out.println("AlgoFundamentals");
        //=====================================================================
        System.out.println("gdcFun");
        int p = 100;
        int q = 15;
        int result = gdc(p, q);
        System.out.println("Result for " + p + " and " + q + " is " + result);
        p = 16;
        q = 256;
        result = gdc(p, q);
        System.out.println("Result for " + p + " and " + q + " is " + result);
        System.out.println("\n");
        //=====================================================================
        System.out.println("\n");
    }

    /* Compute the greatest common divisor of
    two nonnegative integers p and q as follows:
    If q is 0, the answer is p. If not, divide p by q
    and take the remainder r. The answer is the
    greatest common divisor of q and r.
     */
    public static int gdc(int p, int q) {
        if (q == 0) return p;
        int r = p % q;
        return gdc(q, r);
    }
}
