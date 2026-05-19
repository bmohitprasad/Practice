import java.util.*;

public class hello1 {
    public static void main (String [] args) {
        Scanner sc = new Scanner (System.in);
        int n = sc.nextInt();
        runner (n, 1);
    }

    public static void runner (int i, int fact) {
        if (i < 1) {
            System.out.println("factorial: " +fact);
            return;
        }
        runner (i - 1, fact * i);
    }
}