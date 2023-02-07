
/**
 * We can through an exception in code.
 * 
 * Is declared as part of the method header.
 *
 */
public class ThrowException {

	/**
	 * @param a
	 * @param b
	 * @return sum of a and b
	 * @throws IllegalArgumentException if a and be are non-positive
	 */
	public static int addPositive(int a, int b) throws IllegalArgumentException{
		//TODO implement method
		if(a<0 || b<0) {
			throw new IllegalArgumentException("One or both arguments are negative");
		}
		
		return a+b;
	}

	public static void main(String[] args){
		
		//TODO test addPositive method
		System.out.println(addPositive(4, -5));
	}

}
