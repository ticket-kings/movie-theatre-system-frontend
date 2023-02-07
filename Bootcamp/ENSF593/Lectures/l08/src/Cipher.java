import java.util.StringTokenizer;

/**
 * TODO: Describe what a Cipher does?
 * 
 * Fig 8.14 p. 359
 * 
 * TODO add encode(), decode();
 * 
 * @author yves
 *
 */
public abstract class Cipher {

	/**
	 * 
	 * Splits text on space, 
	 * call encode on words and 
	 * concatenate encrypted words with space.
	 * 
	 * @param s text
	 * @return concatenated encrypted words
	 */
	public String encrypt(String s) {
		StringBuffer buf = new StringBuffer();
		StringTokenizer tok = new StringTokenizer(s);
		while(tok.hasMoreTokens()) {
			buf.append(encode(tok.nextToken())+" ");
		}
		
		return buf.toString();
		
	}
	
	/**
	 * 
	 * Splits text on space, 
	 * call decode on words and 
	 * concatenate decrypted words with space.
	 * 
	 * @param s text
	 * @return concatenated decrypted words
	 */
	public String decrypt(String s) {
		StringBuffer buf = new StringBuffer();
		StringTokenizer tok = new StringTokenizer(s);
		while(tok.hasMoreTokens()) {
			buf.append(decode(tok.nextToken())+" ");
		}
		
		return buf.toString();
		
	}
	

	//TODO add abstract encode
	abstract String encode(String s);
	
	//TODO add abstract decode
	abstract String decode(String s);
	
}
