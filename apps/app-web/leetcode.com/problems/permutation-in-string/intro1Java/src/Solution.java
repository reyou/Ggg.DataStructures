class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int[] map = new int[256];
        for (char ch: s1.toCharArray()) {
            map[ch]++;
        }
        for (int idx = 0, start = 0; idx < s2.length(); idx++) {
            char ch = s2.charAt(idx);
            if (--map[ch] < 0)
                while (map[ch] != 0) {
                    map[s2.charAt(start++)]++;
                }
            else if (idx - start + 1 == s1.length()) {
                return true;
            }
        }
        return false;
    }
}