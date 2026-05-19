import java.util.*;
public class hello2 {
    public static void main (String [] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int ans = runner(n);
        System.out.println(ans);
    }

    public static int runner (int n) {
        if (n == 1) return 1;
        return n * runner (n - 1); 
    }
}
