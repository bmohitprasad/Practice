import java.util.*;
public class hello {
    public static void main (String [] args) {
        Scanner sc = new Scanner (System.in);
        System.out.println("enter the n: ");
        int n = sc.nextInt();

        runner (1, n);
        // sc.close();
    }

    public static void runner (int i, int n) {
        if (i > n) return;
        runner (i  + 1, n);
        System.out.println("Hello " + i);
    }
}
