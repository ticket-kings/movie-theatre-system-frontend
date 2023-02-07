
/**
 * 
 * p. 348
 * 
 * @author yves
 *
 */
public abstract class Animal {
	
	protected String kind;// Cow, pig, cat, etc.

	public Animal() {
	}

	public String toString() {
		return "I am a " + kind + " and I go " + speak();
	}

	public abstract String speak(); // Abstract method

	public static void main(String[] args) {
		Animal a = new Dog();
		
		System.out.println(a.toString());
		
		//Cannot instantiate an abstract class
//		a = new Animal();

	}

}
