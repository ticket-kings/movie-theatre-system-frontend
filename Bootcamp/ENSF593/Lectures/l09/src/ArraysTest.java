import java.util.Locale;

public class ArraysTest {

	/**
	 * 
	 * up- or down-size a 1D array
	 * 
	 * @param array input
	 * @param newSize
	 * @return new 1D array with desired size, items copied from input.
	 */
	public static double[] resizeArray(double[] array, int newSize) {
	
		double[] newArray = new double[newSize];
		
		//want to be able to up- and down-size
		int minSize = Math.min(array.length, newSize);
		
		for(int i=0; i<minSize; i++) {
			newArray[i] = array[i];
		}
		
		return newArray;
		
	}
	
	/**
	 * 
	 * Fill all elements of 1D array with value
	 * 
	 * modifies array.
	 * 
	 * @param array
	 * @param value
	 */
	public static void fillArray(double[] array, double value) {
		for(int i=0; i<array.length;i++) {
			array[i] = value;
		}
	
	}
	
	
	/**
	 * 
	 * Prints contents of array on one line with spaces
	 * 
	 * @param array
	 */
	public static void printArray(double[] array) {
		for(int i=0; i<array.length; i++) {
			System.out.printf("%.2f, ", array[i]);
		}
		System.out.println("");
	}
	
	public static void printArray(double[][] array) {

		for (int row = 0; row < array.length; row++) {
			printArray(array[row]);
//			for (int col = 0; col < array[row].length; col++) {
//				System.out.printf("%.2f, ", array[row][col]);
//			}
//			System.out.println("");
		}
	}
	
	public static void main(String[] args) {
		//My default is CH which formats numbers with , rather than .
		Locale.setDefault(Locale.CANADA);
		//--- 1D --------
		System.out.println("\n--- 1D --------\n");
		double[] d = {1., 2., 3.};
		
		printArray(d);
		
		//fillArray
		fillArray(d, 20);
		
		printArray(d);
		
		//Test up-size 
		d = resizeArray(d, 10);
		
		printArray(d);
		
		//Test down-size
		d = resizeArray(d, 5);
		
		printArray(d);
		
		
		//--- 2D --------
		System.out.println("\n--- 2D --------\n");
		double[][] dd = {{1., 2., 3.}, {4., 5., 6.}};
		
		printArray(dd);
		
		//Test up-/down-size
//		dd = resizeArray(dd, 3, 2);
		
//		printArray(dd);
		
		//Test up-/down-size with default value
//		dd = resizeArray(dd, 4, 4, -1.);
		
//		printArray(dd);
	}

}
