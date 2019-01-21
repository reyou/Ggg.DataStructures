Backtracking problems are solved one step at a time. Literally! Here's the general algorithm:

1. Is where I am a solution?
2. No. Ok, where can I go from here? If I can go somewhere, choose a place to go.
3. Go there.
4. Was that a solution? If yes, return true!
5. If there are remaining places to go, choose one and goto #3.
6. Out of places to go. Return false.

(\*) #3 is the recursive step. At that point you are in a new place, and you start from #1 again
