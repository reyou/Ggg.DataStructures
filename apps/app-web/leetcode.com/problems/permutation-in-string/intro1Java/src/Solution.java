class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int[] map = new int[256];
        for (char ch: s1.toCharArray()) {
            map[ch]++;
        }
        for (int pointer = 0, matchStart = 0; pointer < s2.length(); pointer++) {
            char s2CharMember = s2.charAt(pointer);
            // s2 char member not found in s1
            map[s2CharMember]--;
            if (map[s2CharMember] < 0) {
                while (map[s2CharMember] != 0) {
                    char c = s2.charAt(matchStart++);
                    map[c]++;
                }
            }
            // s2 char member found in
            else if (pointer - matchStart + 1 == s1.length()) {
                return true;
            }        }
        return false;
    }
}