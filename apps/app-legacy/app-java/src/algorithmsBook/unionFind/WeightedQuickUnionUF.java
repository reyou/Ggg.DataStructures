package algorithmsBook.unionFind;

public class WeightedQuickUnionUF {
    public static void main(String[] args) {
        WeightedQuickUnionUF weightedQuickUnionUF = new WeightedQuickUnionUF(5);
        System.out.println("new WeightedQuickUnionUF(5);");
        weightedQuickUnionUF.print();
        System.out.println("weightedQuickUnionUF.union(1, 2);");
        weightedQuickUnionUF.union(1, 2);
        weightedQuickUnionUF.print();
        System.out.println("weightedQuickUnionUF.union(2, 3);");
        weightedQuickUnionUF.union(2, 3);
        weightedQuickUnionUF.print();
        System.out.println("weightedQuickUnionUF.union(4, 1);");
        weightedQuickUnionUF.union(4, 1);
        weightedQuickUnionUF.print();
        System.out.println("weightedQuickUnionUF.union(2, 4);");
        weightedQuickUnionUF.union(2, 4);
        weightedQuickUnionUF.print();
        System.out.println("weightedQuickUnionUF.union(4, 2);");
        weightedQuickUnionUF.union(4, 2);
        weightedQuickUnionUF.print();
    }

    private void print() {
        for (int i = 0; i < id.length; i++) {
            int idItem = id[i];
            System.out.println("idItem: " + idItem);
        }
        System.out.println("=============");
        for (int i = 0; i < sz.length; i++) {
            int szItem = sz[i];
            System.out.println("szItem: " + szItem);
        }
        System.out.println("================================================\n\n");
    }

    // Parent link (site indexed)
    private int[] id;
    // size of component for roots (site indexed)
    private int[] sz;
    // number of components
    private int count;

    public WeightedQuickUnionUF(int N) {
        count = N;
        id = new int[N];
        for (int i = 0; i < N; i++) {
            id[i] = i;
        }
        sz = new int[N];
        for (int i = 0; i < N; i++) {
            sz[i] = 1;
        }
    }

    public int count() {
        return count;
    }

    public boolean connected(int p, int q) {
        return find(p) == find(q);
    }

    private int find(int p) {
        // Follow links to find a root.
        while (p != id[p]) {
            p = id[p];
        }
        return p;
    }

    public void union(int p, int q) {
        int i = find(p);
        int j = find(q);
        if (i == j) return;
        // Make smaller root point to larger one.
        if (sz[i] < sz[j]) {
            id[i] = j;
            sz[j] += sz[i];
        } else {
            id[j] = i;
            sz[i] += sz[j];
        }
        count--;
    }
}
