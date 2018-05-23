# Ggg.DataStructures
Data Structures practices and code samples. In computer science, a data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently.

A program is a sequence of statements, with declarations, assignments, conditionals, loops, calls, and returns. Programs typically have a nested structure : a statement among the statements in a block within a conditional or a loop may itself be a conditional or a loop. For example, the while loop in rank() contains an if statement.
If your intent is to make a copy of an array, then you need to declare, create, and initialize a new array and then copy all of the entries in the original array to the new array.
 There are three important rules of thumb in developing recursive programs:
1- The recursion has a base case—we always include a conditional statement as the first statement in the program that has a return .
2- Recursive calls must address subproblems that are smaller in some sense, so that recursive calls converge to the base case. 
3- Recursive calls should not address subproblems that overlap.
 Violating any of these guidelines is likely to lead to incorrect results or a spectacularly inefficient program
 Thus the value of 10&6 is 14 and the value of 10^6 is 12. 
 Writing code that embraces data abstraction (defining and using data types, with data-type values held in objects) is widely referred to as
object-oriented programming. The basic concepts that we have just covered are the starting point for object-oriented programming, so it is worthwhile to briefly summarize them. 
 Whitelisting is one of many clients that can take advantage of binary search.
 Generally, immutable types (string) are easier to use and harder to misuse than mutable (array) types because the scope of code that can change their values is far smaller. It is easier to debug code that uses immutable types because it is easier to guarantee that variables in client code that uses them remain in a consistent state. 
When writing code involving linked lists, we must always be careful to properly handle the exceptional cases (when the linked list is empty, when the list has only one or two nodes) and the boundary cases (dealing with the first or last items). This is usually much trickier than handling the normal cases.
The very same approach that scientists use to understand the natural world is effective for studying the running time of programs:
■ Observe some feature of the natural world, generally with precise measurements.
■ Hypothesize a model that is consistent with the observations.
■ Predict events using the hypothesis.
■ Verify the predictions by making further observations.
■ Validate by repeating until the hypothesis and observations agree.

The classic example of a program whose running time is logarithmic in the problem size is binary search.
The prototypical examples of linearithmic algorithms are Merge.sort() and Quick.sort().
Quadratic Selection.sort()  and Insertion.sort()
Cubic. A typical program whose running time has order of growth N 3 has three nested for loops, used for some calculation involving all triples of N elements. 
Exponential algorithms are extremely slow, you will never run one of them to completion for a large problem.
You should consider running doubling ratio experiments for every program that you write where performance matters—doing so is a very simple way to estimate the order of growth of the running time, perhaps revealing a performance bug where a program may turn out to be not as efficient as you might think.
 the quicksort algorithm for sorting (perhaps the most widely used sorting algorithm) is quadratic in the worst case, but randomly ordering the input gives a probabilistic guarantee that its running time is linearithmic. Every time you run the algorithm, it will take a different
amount of time, but the chance that the time will not be linearithmic is so small as to be negligible.
Analyzing memory usage is much easier than analyzing running time, primarily because not as many program statements are involved (just declarations) and because the analysis reduces complex objects to the primitive types, whose memory usage is well-defined and simple to understand:
we can count up the number of variables and weight them by the number of bytes according to their type.
 Therefore, each String object uses a total of 40 bytes (16 bytes for object overhead plus 4 bytes for each of the three int instance variables plus 8 bytes for
the array reference plus 4 bytes of padding). This space requirement is in addition to the space needed for the characters themselves, which are in the array. 
 For example, when your program calls a method, the system allocates the memory needed for the method (for its local variables) from a special area of memory called the stack (a system pushdown stack), and when the method returns to the caller, the memory is returned to the stack. For this reason, creating arrays or other large objects in recursive programs is dangerous, since each recursive call implies significant memory usage. 
When you create an object with new , the system allocates the memory needed for the object from another special area of memory known as the heap (not the same as the binary heap data structure), and you must remember that every object lives until no references to it remain, at which point a system process known as garbage collection reclaims its memory for the heap.
Sorting cost model. When studying sorting algorithms, we count compares and exchanges. For algorithms that do not use exchanges, we count array accesses.
Shellsort: gains efficiency by making a tradeoff between size and partial order in the subsequences. At the beginning, the subsequences are short; later in the sort, the subsequences are partially sorted. Shellsort is useful even for large arrays, particularly by contrast with selection sort and insertion sort. It also performs well on arrays that are in arbitrary order (not necessarily random). Indeed, constructing an array for which shellsort runs slowly for a particular increment sequence is usually a challenging exercise.
 it is known that the worst-case number of compares for Algorithm 2.3 is proportional to N^3/2 .
Experienced programmers sometimes choose shellsort because it has acceptable running time even for moderately large arrays; it requires a small amount of code; and it uses no extra space. 
 If you need a solution to a sorting problem, and are working in a situation where a system sort may not be available (for example, code destined
for hardware or an embedded system), you can safely use shellsort, then determine sometime later whether it will be worthwhile to replace it with a more sophisticated method.
You can sort millions of items (or more) with mergesort, but not with insertion sort or selection sort. The primary drawback of mergesort is that it requires extra space proportional to N, for the auxiliary array for merging. If space is at a premium, we need to consider another method. On the other hand, we can cut the running time of mergesort substantially with some carefully considered modifications to the implementation.
 When addressing a new problem, your best bet is to use the simplest implementation with which you are comfortable and then refine it if it becomes a bottleneck.
 
Quicksort is popular because it is not difficult to implement, works well for a variety of different kinds of input data, and is substantially
faster than any other sorting method in typical applications. The quicksort algorithm is desirable features are that it is in-place (uses only a small auxiliary stack) and that it requires time proportional to N log N on the average to sort an array of length N.
Quicksort is complementary (tamamlayici) to mergesort. Merge Sort and Shell Sort are typically slower than quicksort because they also do data movement within their inner loops.
 the basic quicksort program has one potential liability: it can be extremely inefficient if the partitions are unbalanced. For example, it could be the case that the first partition is on the smallest item, the second partition on the next smallest item, and so forth, so that the program will remove just one item for each call, leading to an excessive number of partitions of large subarrays. Avoiding this situation is the primary reason that we randomly shuffle the array before using quicksort. This action makes it so unlikely that bad partitions will happen consistently that we need not worry about the possibility.
quicksort is typically faster than mergesort because (even though it does 39 percent more compares) it does much less data movement. This mathematical assurance is probabilistic, but you can certainly rely upon it.
quicksort is likely to run significantly faster on most computers for most applications than will any other compare-based sorting method.
The binary heap is a data structure that can efficiently support the basic priority-queue operations. 
When we implemented a priority queue with an array or a linked list, the efficiency of some operations were O(n). 
Using a binary heap, the runtime of both the deleteMin and insert operations is O(log n). 
 In a heap, the parent of the node in position k is in position ⎣k /2⎦ and, conversely, the two children of the node in position
k are in positions 2k and 2k + 1. Instead of using explicit links, we can travel up
and down by doing simple arithmetic on array indices: to move up the tree from a[k] we set k to k/2 ; to move down the tree we set k to 2*k or 2*k+1 
How difficult is the process of building a heap from N given items?
Certainly we can accomplish this task in time proportional to N log N, by proceeding from left to right through the array, using swim() to ensure that the items to the left of the scanning pointer make up a heap-ordered complete tree, like successive priority-queue insertions. 
A clever method that is much more efficient is to proceed from right to left, using sink() to make sub heaps as we go.
if stability is important and space is available, mergesort might be best.
A symbol table is a data structure for key-value pairs that supports two operations: insert (put) a new pair into the table and search for (get) the value as-sociated with a given key. best practice is to make Key types immutable, because consistency cannot otherwise be guaranteed.
Efficiency of binary search depends on our ability to get to the middle of any subarray quickly via indexing (and the only way to get to the middle of a singly linked list is to follow links). 
 Binary search tree data structure, which qualifies as one of the most fundamental algorithms in computer science. 
A more important essential feature of BSTs is that insert is not much more difficult to implement than search. Indeed, a search for a key not in the tree ends at a null link, and all that we need to do is replace that link with a new node containing the key.
 The running times of algorithms on binary search trees depend on the shapes of the trees, which, in turn, depend on the order in which keys are inserted. 
Another way to proceed is to define red-black BSTs as BSTs having red and black links and satisfying the following three restrictions:
■ Red links lean left.
■ No node has two red links connected to it.
■ The tree has perfect black balance : every path from the root to a null link has the same number of black links.
There is a 1-1 correspondence between red-black BSTs defined in this way and 2-3 trees.
 A red–black tree is a kind of self-balancing binary search tree. Each node of the binary tree has an extra bit, and that bit is often interpreted as the color (red or black) of the node. These color bits are used to ensure the tree remains approximately balanced during insertions and deletions.
 The balancing of the tree is not perfect, but it is good enough to allow it to guarantee searching in O(log n) time, where n is the total number of elements in the tree. The insertion and deletion operations, along with the tree rearrangement and recoloring, are also performed in O(log n) time.
Hashing is a classic example of a time-space tradeoff. If there were no memory limitation, then we could do any search with only one memory access by simply using the key as an index in a (potentially huge) array. 
 In summary, we have three primary requirements in implementing a good hash function for a given data type:
■ It should be consistent—equal keys must produce the same hash value.
■ It should be efficient to compute.
■ It should uniformly distribute the keys.
The advantages of BSTs over hashing are that they are based on a simpler abstract interface (no hash function need be designed); red-black BSTs can provide guaranteed worst-case performance; and they support a wider range of operations (such as rank, select, sort, and range search).
Many applications also take advantage of the idea that a symbol table is a dynamic dictionary, where it is easy to look up information and to update the information in the table.
 A path in a graph is a sequence of vertices connected by edges. A simple path is one with no repeated vertices. 
A cycle is a path with at least one edge whose first and last vertices are the same. 
A simple cycle is a cycle with no repeated edges or vertices (except the requisite repetition of the first and last vertices). 
The length of a path or a cycle is its number of edges.







