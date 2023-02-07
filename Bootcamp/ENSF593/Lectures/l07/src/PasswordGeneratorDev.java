//TODO: Implement IDEA 1 with StringBuilder

public class PasswordGeneratorDev {

	public static void main(String[] args) {
		
		// IDEA 1:
		// String allPossible = "abcde%+...";
		// create a loop for numberOfChars
		// pick one of the allPossible characters with a random number
		// allPossible.charAt(random number);
//		String allPossible = "AaBb+-$#";
//		int idx = (int)((allPossible.length()-0)*Math.random() + 0);
//		System.out.println(allPossible.charAt(idx));
		
		//IDEA 2:
		// create a loop for numberOfChars
		//   Create a random number between 'A' and 'Z'
		//     use char to represent letters, can use arithmetic
		//   Add to this convert this number to char and add to password
		
		String set1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		String set2 = "0123456789";
		
		String allPossible = set1 + set2;
		
		StringBuilder password = new StringBuilder();
		int pwdLength = 10;
		int idx;
		
		for (int i = 0; i < pwdLength; i++) {
			
			idx = (int)((allPossible.length() - 0) * Math.random() + 0);
			password.append(allPossible.charAt(idx));
			
		}
		
		String pwdString = password.toString();
		
		
//		//TODO: Implement idea 1 or idea 2
//		//Math.random() returns [0, 1)
//		int i =0;
//		while(i<100) {
//			char letter = (char)(('Z'-'A')* Math.random() + 'A' + 1);
//		
//			password += letter; // password = password + letter
//			i++;
//		}
		
		
		System.out.println(pwdString);
		System.out.println(pwdString.contains("Z"));

	}

}
