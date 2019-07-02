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

    enum Result {
        TRUE,
        FALSE
    }

    private boolean isMatch(String text, String pattern) {
        Result[][] memo = new Result[text.length() + 1][pattern.length() + 1];
        int row = 0;
        int col = 0;
        return dp(row, col, text, pattern, memo);
    }

    private boolean dp(int row, int col, String text, String pattern, Result[][] memo) {
        if (memo[row][col] != null) {
            return memo[row][col] == Result.TRUE;
        }
        boolean ans;
        if (col == pattern.length()) {
            ans = row == text.length();
        } else {
            boolean first_match = (row < text.length() && (pattern.charAt(col) == text.charAt(row) || pattern.charAt(col) == '.'));
            if (col + 1 < pattern.length() && pattern.charAt(col + 1) == '*') {
                ans = (dp(row, col + 2, text, pattern, memo)
                        || first_match && dp(row + 1, col, text, pattern, memo));
            } else {
                ans = first_match && dp(row + 1, col + 1, text, pattern, memo);
            }
        }

        memo[row][col] = ans ? Result.TRUE : Result.FALSE;
        return ans;
    }
}
