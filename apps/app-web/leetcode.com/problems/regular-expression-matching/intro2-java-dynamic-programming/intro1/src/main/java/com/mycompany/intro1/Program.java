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
        String s = "aaa";
        String p = "ab*a*c*a";
        boolean result = program.isMatch(s, p);
        System.out.println("Regex result: " + result);
    }

    private boolean isMatch(String s, String p) {
        // base case
        if (p.length() == 0) {
            return s.length() == 0;
        }
        // special case
        if (p.length() == 1) {
            // if the length of s is 0, return false
            // p = "a" and s = ""
            if (s.length() == 0) {
                return false;
            } // if the first does not match, return false
            // p = "a" s = "a" && p = "."
            else if ((p.charAt(0) != s.charAt(0)) && (p.charAt(0) != '.')) {
                return false;
            } // otherwise, compare the rest of the string of s and p.
            else {
                return isMatch(s.substring(1), p.substring(1));
            }
        } // case 1: when the second char of p is not '*'
        // p = "ab" or p = "a." or p = "aa"
        else if (p.charAt(1) != '*') {
            if (s.length() == 0) {
                return false;
            } else if ((p.charAt(0) != s.charAt(0)) && (p.charAt(0) != '.')) {
                return false;
            } else {
                return isMatch(s.substring(1), p.substring(1));
            }
        } // case2: when the second char of p is '*', complex case!
        // p = "a*" or p = "c*" or p = ".*"
        else {
            // case 2.1 a char && '*' can stand for 0 element
            if (isMatch(s, p.substring(2))) {
                return true;
            }

            // case 2.2 a char && '*' can stand for 1 or more preceding element,
            // so try every substring
            int i = 0;
            while (i < s.length() && (s.charAt(i) == p.charAt(0) || p.charAt(0) == '.')) {
                if (isMatch(s.substring(i + 1), p.substring(2))) {
                    return true;
                }
                i++;
            }
            return false;
        }
    }
}
