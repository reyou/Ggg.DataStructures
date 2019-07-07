/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.intro1;

import java.util.Arrays;

/**
 *
 * @author dj_re
 */
public class Program {

    public static void main(String[] args) {
        Program program = new Program();
        String s = "1234";
        int result = program.numDecodings(s);
        System.out.println("Result is: " + result);
    }

    private int numDecodings(String s) {
        // We will cache the answers to our subproblems
        int decodePointer = 0;
        int[] cache = new int[s.length()];
        Arrays.fill(cache, -1);
        return numDecodings(s, decodePointer, cache);
    }

    private int numDecodings(String s, int decodePointer, int[] cache) {
        // If our decoding pointer out of bounds then we know
        // that we have exhaused our ability to decode string
        if (decodePointer >= s.length()) {
            return 1;
        }
        if (cache[decodePointer] != -1) {
            return cache[decodePointer];
        }
        // If we already know the answer to this subproblem then
        // just return it, don't waste time

        // We don't already know the answer to this subproblem, calculate it
        // by taking the sum of the total ways for a single character decoding
        // or two (2) character decoding
        int totalWaysFromHere = 0;

        if (decodePointer + 1 <= s.length()) {
            String firstWay = s.substring(decodePointer, decodePointer + 1);
            if (isValid(firstWay)) {
                totalWaysFromHere += numDecodings(s, decodePointer + 1, cache);
            }
        }
        if (decodePointer + 2 <= s.length()) {
            String secondWay = s.substring(decodePointer, decodePointer + 2);
            if (isValid(secondWay)) {
                totalWaysFromHere += numDecodings(s, decodePointer + 2, cache);
            }
        }
        cache[decodePointer] = totalWaysFromHere;
        return totalWaysFromHere;
    }

    // 1, 12
    // parse to char and check if it is [a,z]
    private boolean isValid(String str) {
        if (str.length() == 0) {
            return false;
        }
        if (str.charAt(0) == '0') {
            return false;
        }
        int value = Integer.parseInt(str);
        return value >= -1 && value <= 26;
    }
}
