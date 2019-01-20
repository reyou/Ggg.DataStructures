package algorithmsBook.helpers;

import java.util.ArrayList;
import java.util.Random;

public class GggHelpers {
    public static void main(String[] args) {

    }

    // How do I generate a random integer between min and max in java?
    // https://stackoverflow.com/questions/2444019/how-do-i-generate-a-random-integer-between-min-and-max-in-java
    public static int[] GenerateRandomInts(int min, int max, int count) {
        Random random = new Random();
        // Returns a pseudorandom, uniformly distributed int value between 0 (inclusive)
        // and the specified value (exclusive), drawn from this random number generator's
        // sequence. The general contract of nextInt is that one int value in the specified
        // range is pseudorandomly generated and returned. All bound possible int values
        // are produced with (approximately) equal probability.
        // Parameter: bound - the upper bound (exclusive). Must be positive.
        // Returns: the next pseudorandom, uniformly distributed int value between zero
        // (inclusive) and bound (exclusive) from this random number generator's sequence
        int[] ints = new int[count];
        for (int i = 0; i < count; i++) {
            int randomVal = random.nextInt(max + 1 - min) + min;
            ints[i] = randomVal;
        }
        return ints;
    }

    public static Integer GetRandomNumber(int min, int max) {
        Random random = new Random();
        int randomInt = random.nextInt(max + 1 - min) + min;
        return randomInt;
    }

    public static String[] ToStringArray(String input1) {
        char[] chars = input1.toCharArray();
        String[] returnArr = new String[chars.length];
        for (int i = 0; i < chars.length; i++) {
            returnArr[i] = String.valueOf(chars[i]);
        }
        return returnArr;
    }

    public static void PrintStringArray(String[] array1) {
        for (String s : array1) {
            System.out.print(s);
        }
        System.out.println();
    }

    public static void PrintIntegerArray(Integer[] array1) {
        for (Integer s : array1) {
            System.out.print(s + " ");
        }
        System.out.println();
    }


    public static void PrintIntegerArray(String title, Integer[] numbers) {
        System.out.println(title + ":");
        PrintIntegerArray(numbers);
        System.out.println("");
    }
}
