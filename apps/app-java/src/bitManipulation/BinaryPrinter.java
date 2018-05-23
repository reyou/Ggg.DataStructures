package bitManipulation;

public class BinaryPrinter {
    /*Given a (decimal - e.g. 3.72) number that is passed in as a string, print the binary rep-
resentation. If the number can not be represented accurately in binary, print “ERROR”*/
    /*First, let’s start of by asking ourselves what a non-integer number in binary looks like. By
analogy to a decimal number, the number n = 0.101 = 1 * (1/2^1) + 0 * (1/2^2) + 1 * (1/2^3).
Printing the int part of n is straight-forward (see below). To print the decimal part, we can
multiply by 2 and check if the 2*n is greater than or equal to one. This is essentially “shifting”
the fractional sum. That is:
r = 2*n = 2*0.101 = 1*(1 / 2^0) + 0*(1 / 2^1) + 1*(1 / 2^2) = 1.01
If r >= 1, then we know that n had a 1 right after the decimal point. By doing this continu-
ously, we can check every digit.*/

    public static void main(String[] args) {
        printBinary("2.12");
    }

    public static String printBinary(String n) {
        System.out.println("");
        int intPart = Integer.parseInt(n.substring(0, n.indexOf('.')));
        System.out.println("int " + intPart + " = Integer.parseInt(" + n + ".substring(0, " + n + ".indexOf('.')));");
        double decPart = Double.parseDouble(n.substring(n.indexOf('.'), n.length()));
        System.out.println("double " + decPart + " = Double.parseDouble(" + n + ".substring(" + n + ".indexOf('.'), " + n + ".length()));");
        String int_string = "";
        while (intPart > 0) {
            System.out.println("while (" + intPart + " > 0) {");
            System.out.println(intPart + " > 0");
            int r = intPart % 2;
            System.out.println("int " + r + " = " + intPart + " % 2;");
            intPart >>= 1;
            System.out.println(intPart + " >>= 1;");
            int_string = r + int_string;
            System.out.println(int_string + " = " + r + " + " + int_string + ";");
        }
        /*A thread-safe, mutable sequence of characters. A string
        buffer is like a String, but can be modified. At any point
        in time it contains some particular sequence of characters,
        but the length and content of the sequence can be changed
        through certain method calls.*/
        StringBuffer dec_string = new StringBuffer();

        while (decPart > 0) {
            System.out.println("while (" + decPart + " > 0) {");
            if (dec_string.length() > 32) return "ERROR";
            if (decPart == 1) {
                dec_string.append((int) decPart);
                break;
            }
            double r = decPart * 2;
            System.out.println("double " + r + " = " + decPart + " * 2;");
            if (r >= 1) {
                System.out.println("if (" + r + " >= 1) {");
                dec_string.append(1);
                decPart = r - 1;
                System.out.println(decPart + " = " + r + " - 1;");
            } else {
                dec_string.append(0);
                decPart = r;
                System.out.println(decPart + " = " + r + ";");
            }
        }
        String returnVal = int_string + "." + dec_string.toString();
        System.out.println("String " + returnVal + " = " + int_string + " + \".\" + " + dec_string + ".toString();");
        return returnVal;
    }
}
