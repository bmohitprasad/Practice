import java.util.*;

public class test {
    public static void main(String[] args) {
        ArrayList<Integer> ls = new ArrayList<>();
        int [] arr = {1, 2, 1};
        int target = 2;

        summer(0, 3, arr, ls, target, 0);
        // System.out.println(ds);
    }

    public static void summer(int ind, int n, int [] arr, ArrayList<Integer> ls, int target, int sum) {
        if (ind == n){
            if (sum == target) {
                System.out.println(ls);
            }
            return;
        }

        sum += arr[ind];
        ls.add(arr[ind]);
        summer(ind + 1, n, arr, ls, target, sum);

        sum -= arr[ind];
        ls.remove(ls.size() -1);
        summer(ind + 1, n, arr, ls, target, sum);
    }
}
