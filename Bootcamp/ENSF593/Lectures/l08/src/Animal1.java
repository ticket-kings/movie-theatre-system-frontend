
/**
 * 
 * Fig 8.7 p. 351
 * @author yves
 *
 */
public class Animal1 {
	
	protected String kind;// Cow, pig, cat, etc.

	public Animal1() {
	}

	public String toString() {
		return "I am a " + kind + " and I go " + 
				((Speakable)this).speak();
	}


	public static void main(String[] args) {
		Animal1 a = new Dog1();
		
		System.out.println(a.toString());
		
		//We instantiate this class, 
		//but it is not a Speakable
		// -> runtime error
		a = new Animal1();
		System.out.println(a.toString());

	}

}
