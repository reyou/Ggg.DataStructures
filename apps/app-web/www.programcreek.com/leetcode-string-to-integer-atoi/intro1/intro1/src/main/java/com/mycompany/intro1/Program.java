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
        Program program = new Program();
        String str = "4193 with words";
        int atoi = program.myAtoi(str);
        System.out.printf("Result is %s", atoi);
    }

    public int myAtoi(String str) {
        if (str == null || str.trim().length() < 1) {
            return 0;
        }
        // trim white spaces
        str = str.trim();

        char flag = '+';

        // check negative or positive
        int i = 0;
        if (str.charAt(0) == '-') {
            flag = '-';
            i++;
        } else if (str.charAt(0) == '+') {
            i++;
        }

        // use double to store result
        double result = 0;

        // calculate the value
        while (str.length() > i) {
            if (str.charAt(i) < '0') {
                break;
            }
            if (str.charAt(i) > '9') {
                break;
            }
            result = result * 10 + (str.charAt(i) - '0');
            i++;
        }
        if (flag == '-') {
            result = -result;
        }
        // handle max and min
        if (result > Integer.MAX_VALUE) {
            return Integer.MAX_VALUE;
        }
        if (result < Integer.MIN_VALUE) {
            return Integer.MIN_VALUE;
        }
        return (int) result;
    }
}
