/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.intro1;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

/**
 *
 * @author dj_re
 */
public class Program {

    public static void main(String[] args) {
        Program program = new Program();
        String s = "applepenapple";
        List<String> wordDict = Arrays.asList(new String[]{"apple", "pen"});
        boolean wordBreak = program.wordBreak(s, wordDict);
        System.out.format("result: %s", wordBreak);
    }

    public boolean wordBreak(String s, List<String> wordDict) {
        return word_Break(s, new HashSet(wordDict), 0);
    }

    private boolean word_Break(String s, HashSet wordDict, int start) {
        if (start == s.length()) {
            return true;
        }
        // applepenapple
        for (int end = start + 1; end <= s.length(); end++) {
            String substring = s.substring(start, end);
            if (wordDict.contains(substring)) {
                boolean result = word_Break(s, wordDict, end);
                if (result) {
                    return true;
                }
            }
        }
        return false;
    }
}
