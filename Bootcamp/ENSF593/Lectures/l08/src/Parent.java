
public class Parent {
	
	private int privateInt=0;
	protected int protectedInt=0;
	public int publicInt=0;
	
	public Parent() {
		privateInt=-3;
		protectedInt=-2;
		publicInt=-1;
	}
	
	private int privateGetPrivateInt() {
		return privateInt;
	}
	
	protected int protectedGetPrivateInt() {
		return privateInt;
	}
	
	public int publicGetPrivateInt() {
		return privateInt;
	}
	
	

}
