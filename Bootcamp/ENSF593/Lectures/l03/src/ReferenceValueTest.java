
/**
 * 
 * To demonstrate pass value and pass reference
 * in http://www.pythontutor.com/java.html
 * 
 * @author Yves
 *
 */
public class ReferenceValueTest {

	private int a;

	public ReferenceValueTest(int  b){
		this.a = b;
	}

	public void setA(int b){
		this.a = b;
	}

	public int getA(){
		return this.a; 
	}

	public static void changeMethod(int n) {
		System.out.println("in changeMethod n = " + n);
		n=100;
		System.out.println("in changeMethod n = " + n);
	}

	public static void changeMethod(ReferenceValueTest o) {
		System.out.println("in changeMethod a = " + o.getA());
		o.setA(100);
		System.out.println("in changeMethod a = " + o.getA());
	}    
	
	public static void main(String[] args) {
		int k = 10;
		System.out.println("in main k = " + k);
		changeMethod(k);
		System.out.println("in main k = " + k);


		ReferenceValueTest testObject = new ReferenceValueTest(10);
		System.out.println("in main a = "+testObject.getA());
		changeMethod(testObject);
		System.out.println("in main a = "+testObject.getA());


	}
}
