
public class BooleanOperatorTest {
	
	public static void aANDb(boolean a, boolean b) {
		System.out.println(a+" && "+b+" = "+(a&&b));
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		aANDb(false, false);
		aANDb(false, true);
		aANDb(true, false);
		aANDb(true, true);
		
		//short circuit
		Object obj = null;
		boolean isValid = false;
		
		/*
		 * if isValid is false, AND evaluates to false,
		 * no need to check the second operand
		 * in case obj = null, this would cause an exception
		 */
		if(isValid && (obj.getClass() == Object.class)) {
			System.out.println(obj);
		}
		
		

	}

}
