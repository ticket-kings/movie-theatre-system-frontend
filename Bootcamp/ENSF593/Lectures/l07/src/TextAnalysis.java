import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.StringTokenizer;

public class TextAnalysis {

	public static void main(String[] args) throws FileNotFoundException{
		// TODO Implement computing number of words and sentences in test.txt
		
		Scanner sc = new Scanner(new File("test.txt"));
		
		while(sc.hasNextLine()) {
			System.out.println (sc.nextLine());
		}
		sc.close();
	}

	

}
