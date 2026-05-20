import java.util.*;
public class test {
    public static void main(String[] args) {
        int [] arr = {3, 1, 2};
        ArrayList<Integer> list = new ArrayList<>();
        printSubsequences(0, list, arr, arr.length);
    }

    public static void printSubsequences(int ind, ArrayList<Integer> list, int [] arr, int n) {
        if (ind == n) {
            for (int it : list){
                System.out.print(it+ " ");
            }
            if (list.size() == 0) {
                System.out.print("{}");
            }
            System.out.println();
            return;
        }

        list.add(arr[ind]);
        printSubsequences(ind + 1, list, arr, n);
        list.remove(list.size() - 1);
        printSubsequences(ind + 1, list, arr, n);
    }
}
