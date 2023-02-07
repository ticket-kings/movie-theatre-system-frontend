
/**
 * 
 * Alternative to Dog1.java
 * -> parent class implements Speakable, need to override speak() here.
 * @author pauc
 *
 */
public class Dog2 extends Animal2{

	public Dog2() {
		kind = "dog";
	}

	@Override
	public String speak() {
		return "woof";
	}
	


	

}
