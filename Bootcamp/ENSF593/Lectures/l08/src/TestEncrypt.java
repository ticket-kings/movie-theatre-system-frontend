
/**
 * 
 * Adapted from Fig 8.17
 * 
 * @author yves
 *
 */
public class TestEncrypt {

	public static void main(String[] args) {
		
		Cipher transposer = new Transpose();
		
		String plain = "Hello Calgary!";
		
		
		
		//Using a different Cipher subclass does not cause changes to below code
		
		String encrypted = transposer.encrypt(plain);
		String decrypted = transposer.decrypt(encrypted);
		
		System.out.println("Cipher: "+transposer.getClass());
		
		System.out.println("plain "+plain);
		
		System.out.println("encrypted: "+encrypted);
		
		System.out.println("decrypted: "+decrypted);

	}

}
