
/**
 * 
 * ReferenceFig 8.16
 * 
 * @author yves
 *
 */
public class Transpose extends Cipher{

	//TODO override encode()
	String encode(String s) {
		StringBuilder sb = new StringBuilder(s);
		sb.reverse();
		String result = sb.toString();
		return result;
	}
	

	//TODO override decode()
	String decode(String s) {
		StringBuilder sb = new StringBuilder(s);
		sb.reverse();
		String result = sb.toString();
		return result;
	}

}
