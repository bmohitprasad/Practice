import java.util.*;
public class test4 {

    public static void main(String[] args) {
        int [] arr = {1, 2, 1};
        ArrayList<Integer> ls = new ArrayList<>();
        printFirst(0, arr.length, 2, 0, ls, arr);
    }
    
    public static boolean printFirst (int ind, int n, int target, int sum, ArrayList<Integer> ls, int [] arr) {
        if (ind == n ) 
        {
            if (sum == target) {
                System.out.println(ls);
                return true;
            }
            else {
                return false;
            }
        }

        ls.add(arr[ind]);
        sum += arr[ind];
        if (printFirst(ind + 1, n, target, sum, ls, arr)) return true;
        
        ls.remove(ls.size() - 1);
        sum -= arr[ind];
        if (printFirst(ind + 1, n, target, sum, ls, arr)) return true;       
        return false;
    }
}

