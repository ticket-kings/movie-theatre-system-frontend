
/**
 * 
 * Alternative to Fig 8.7 p. 351
 * 
 * Abstract class implements interface 
 * -> subclasses will have to implement speak().
 * 
 * @author yves
 *
 */
public abstract class Animal2 implements Speakable {
	
	protected String kind;// Cow, pig, cat, etc.

	public Animal2() {
	}

	public String toString() {
		return "I am a " + kind + " and I go " + 
				this.speak();
	}


	public static void main(String[] args) {
		Animal2 a = new Dog2();
		
		System.out.println(a.toString());
		
		Speakable s = (Speakable)a;
		System.out.println(s.speak());
		
		String b = "hello";
		

	}

}
