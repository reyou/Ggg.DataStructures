/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.intro1;

/**
 *
 * @author dj_re
 */
public class Program {

    public static void main(String[] args) {
        test1();
    }

    private static void test1() {
        Program program = new Program();
        String s = "3+5*2";
        int result = program.calculate(s);
        System.out.format("Result is %s", result);
    }

    private static void test2() {
        Program program = new Program();
        String s = "31+102*2-20/10+5-21";
        int result = program.calculate(s);
        System.out.format("Result is %s", result);
    }

    private int calculate(String s) {
        char operand = '+';
        int i = 0;
        // sub current number
        int currentSubDigit = 0;
        // sub prev number
        int resultToThePoint = 0;
        int result = 0;

        while (i < s.length() || currentSubDigit > 0) {
            char c = i < s.length() ? s.charAt(i) : 'e';
            if (Character.isDigit(c)) {
                currentSubDigit = currentSubDigit * 10 + (c - '0');
            } else if (c != ' ') {
                if (operand == '+') {
                    result += currentSubDigit;
                    resultToThePoint = currentSubDigit;
                } else if (operand == '-') {
                    result -= currentSubDigit;
                    resultToThePoint = -currentSubDigit;
                } else if (operand == '*') {
                    result -= resultToThePoint;
                    result += resultToThePoint * currentSubDigit;
                    resultToThePoint *= currentSubDigit;
                } else {
                    result -= resultToThePoint;
                    result += resultToThePoint / currentSubDigit;
                    resultToThePoint /= currentSubDigit;
                }
                currentSubDigit = 0;
                operand = c;
            }
            i++;
        }
        return result;
    }
}
