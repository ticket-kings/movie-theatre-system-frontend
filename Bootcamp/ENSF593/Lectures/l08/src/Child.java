
public class Child extends Parent{
	
	//TODO comment out these Constructors. How are attributes initialized?
	public Child() {
		super();
	}
	
	public Child(int childValue) {
		
//		privateInt=childValue; //not allowed
		protectedInt=childValue+1;
		publicInt=childValue+2;
	}
	

}
