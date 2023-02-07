import java.io.*;

/**
 * Code from Fig 4.7 p 157
 * 
 * @author Yves
 *
 */
public class KeyboardReader {

	private BufferedReader reader;
	
	public KeyboardReader() {
		reader = new BufferedReader(
				new InputStreamReader(System.in));
	}
	
	public String getKeyboardInput() {
		return readKeyboard();
	}
	
	public double getKeyboardDouble() {
		return Double.parseDouble(readKeyboard());
	}
	
	public void prompt(String s) {
		System.out.print(s);
	}
	
	public void display(String s) {
		System.out.println(s);	
	}
	
	private String readKeyboard() {
		String line = "";
		try
		{ 
			line = reader.readLine(); 
			
		} catch ( IOException e )
		{ 
			e.printStackTrace();
		}
		return line;
	}
}
