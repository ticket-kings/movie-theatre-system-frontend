
/**
 * Using try-catch to handle user input.
 *
 */
public class UserReadException {

	/**
	 * 
	 * Uses a while loop and try-catch to
	 * prompt user until a valid integer is entered.
	 * 
	 * @param reader a KeyboardReader
	 * @return valid integer entered by the user
	 */
	public static int getIntFromUser(KeyboardReader reader) {
		
		//TODO implement this method
		//Hint: use a boolean to indicate we found a valid number
		int val = 0;
		boolean numberNotValid = true;
		while(numberNotValid) {
//		while(true) {
			try {
				reader.prompt("Enter any integer: ");
				val = reader.getKeyboardInt();
				numberNotValid = false;
//				break;
			} catch (NumberFormatException e) {
				reader.display("Problem: "+e.getMessage());
				reader.display("Please enter an integer, such as 2, 102, etc.");

			}
		}
		return val;
	}
	
	/**
	 * 
	 * Uses a while loop and try-catch to
	 * prompt user until a valid double is entered.
	 * 
	 * @param reader a KeyboardReader
	 * @return valid double entered by the user
	 */
	public static double getDoubleFromUser(KeyboardReader reader) {
		
		//TODO implement this method
		//TODO Hint Double.NaN exists and can be checked with Double.isNaN()
		double val = Double.NaN;
		while(Double.isNaN(val)) {
			try {
				reader.prompt("Enter any number: ");
				val = reader.getKeyboardDouble();
			}catch(NumberFormatException e) {
				reader.display("\tProblem: "+e.getMessage());
				reader.display("\tPlease enter a number such as 2.2, -3.5, etc.");
			}
		}
		
		return val;
	}
	
	public static void main(String[] args) {
		
		KeyboardReader reader = new KeyboardReader();
		
//		System.out.println(getIntFromUser(reader));
		
		System.out.println(getDoubleFromUser(reader));
		

	}

}
