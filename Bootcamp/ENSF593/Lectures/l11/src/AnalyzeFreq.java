import java.util.Arrays;
import java.util.Collections;

/**
 * 
 * From UML Fig 9.11 p.405
 * 
 * @author Yves
 *
 */
public class AnalyzeFreq {
	
	private LetterFreq[] freqArr;
	
	public AnalyzeFreq() {
		
		freqArr = new LetterFreq[26];
		
		for(int i=0; i< freqArr.length; i++) {
			freqArr[i] = new LetterFreq((char)('A'+i), 0);
		}
		
	}
	
	public void countLetters(String s) {
		
//		//We are ignoring case, 
//		//trim removes white spaces, redundant because if checks for letters.
//		for(char c: s.trim().toUpperCase().toCharArray()) {
//			//Only alphabet letter are counted
//			if(c<'A' || c>'Z') continue;
//			else freqArr[c-'A'].incrFreq();
//		}
		
		//Ignoring case
		s = s.toUpperCase();
		
		for(int i=0; i<s.length(); i++) {
			char c = s.charAt(i);
			//Only letter of the alphabet are counted
			if(c<'A' || c>'Z') {
				continue;
			}else {
				//'A' is at index 0
				freqArr[c-'A'].incrFreq();
			}
		}
		
		
	}
	
	//TODO change to use Arrays.toString()
	public void printArray() {
//		//Enhanced for loop
//		for(LetterFreq lf: this.freqArr) {
//			System.out.println(lf.getLetter()+": "+lf.getFrequency());
//		}
		
//		//Regular for loop
		for(int i=0; i< freqArr.length; i++) {
			System.out.println(freqArr[i].getLetter()+": "+freqArr[i].getFrequency());
		}
		
	}
	//TODO implement sort() 
	/**
	 * @param descending if true, sort in descending order
	 */
	public void sort(boolean descending) {
		
		//TODO: call Sorting.insertionSort()
		
		if(descending) {
			//TODO: 'reflecting' through the center
			}
			
		}
	}
	
	public void printHist() {
		//Enhanced for loop
		for(LetterFreq lf: this.freqArr) {
			System.out.println(lf.getLetter()+": "+ createBar(lf.getFrequency()));
		}
	}
	
	private String createBar(int num) {
		//TODO could add a factor to reduce the number of * printed, e.g. * = 5 letters
		StringBuffer buf = new StringBuffer();
		for(int i=0; i<num; i++)buf.append("*");
		return buf.toString();
	}
	
	public static void main(String[] argv) {
		AnalyzeFreq analyzer = new AnalyzeFreq();
		
		System.out.println("\n--- printArray() -------\n");
		analyzer.countLetters("A-HELLO-Z");
		analyzer.printArray();
		System.out.println("\n--- printArray()  -------\n");
		analyzer.countLetters("a-hello-z");
		analyzer.printArray();
		//TODO call sort() and print again.
		System.out.println("\n--- sort() printArray()  -------\n");
		analyzer.sort(false);
		analyzer.printArray();
		
		
		
	}
	
	

}
