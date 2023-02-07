import java.util.Scanner;

/**
 * Code from Fig 4.7 p 157
 * 
 * Adapted to use scanner
 * 
 * @author Yves
 *
 */
public class KeyboardReaderScanner {

	private Scanner reader;
	
	public KeyboardReaderScanner() {
		reader = new Scanner(System.in);
	}
	
	public String getKeyboardInput() {
		return reader.nextLine();
	}
	
	public double getKeyboardDouble() {
		return reader.nextDouble();
	}
	
	public void prompt(String s) {
		System.out.print(s);
	}
	
	public void display(String s) {
		System.out.println(s);	
	}
	
}
