import java.util.Scanner; // Import the Scanner class

class MyClass {
  public static void main(String[] args) {
    int x, y, sum;
    Scanner myObj = new Scanner(System.in); // Create a Scanner object
      System.out.print("");
    x = myObj.nextInt(); // Read user input

    System.out.print("");
    y = myObj.nextInt(); // Read user input

    sum = x + y;  // Calculate the sum of x + y
    System.out.print("Sum is  " +sum); // Print the summ
  }
} 