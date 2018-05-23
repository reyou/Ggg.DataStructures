package algorithmsBook.bagsQueuesStacks;

import java.io.File;

public class ListingFiles {
    public static void main(String[] args) {
        File folder = new File("D:\\Git\\Ggg\\Ggg.DataStructures\\");
        listContent(folder.getAbsolutePath(), "");
    }

    private static void listContent(String absolutePath, String intent) {
        File folder = new File(absolutePath);
        File[] listOfFiles = folder.listFiles();
        for (File file : listOfFiles) {
            if (file.isDirectory()) {
                String absolutePath1 = file.getAbsolutePath();
                System.out.println(intent + absolutePath1);
                listContent(absolutePath1, intent + "\t");
            } else {
                System.out.println(intent + file.getName());
            }
        }

    }
}
