package algorithmsBook.unionFind;

import algorithmsBook.bookContent.StdIn;
import algorithmsBook.bookContent.StdOut;

public class UF {
    private int[] id;
    private int count;

    public UF(int N) {
        count = N;
        id = new int[N];
        for (int i = 0; i < N; i++) {
            id[i] = i;
        }
    }

    public int count() {
        return count;
    }

    public boolean connected(int p, int q) {
        return find(p) == find(q);
    }

    public int find(int p) {
        return id[p];
    }

    public void union(int p, int q) {
// Put p and q into the same component.
        int pID = find(p);
        int qID = find(q);
        // Nothing to do if p and q are already
        // in the same component.
        if (pID == qID) return;

        // Rename p's component to q's name.
        for (int i = 0; i < id.length; i++) {
            if (id[i] == pID) {
                id[i] = qID;
            }
            count--;
        }
    }

    public static void main(String[] args) {
        // Solve dynamic connectivity problem on StdIn.
        System.out.println("Enter size of Union Find: ");
        int N = StdIn.readInt();
        UF uf = new UF(N);
        System.out.println("Size of Union Find: " + N);
        System.out.println("Enter p: ");
        while (!StdIn.isEmpty()) {
            // Read pair to connect
            int p = StdIn.readInt();
            System.out.println("p " + p);
            System.out.println("Enter q: ");
            int q = StdIn.readInt();
            System.out.println("q " + q);
            // Ignore if connected.
            if (uf.connected(p, q)) {
                System.out.println("Connected ignore.");
                continue;
            }
            // Combine components
            uf.union(p, q);
            // and print connection.
            StdOut.println(p + " " + q);
        }
        StdOut.println(uf.count() + " components.");
    }
}
