
public class InheritanceTest {
	
	public static void main(String[] args) {
		
		//TODO try to access the various attributes and methods
		Parent p = new Parent();
//		System.out.println(p.privateGetPrivateInt());

		Child c = new Child();
		System.out.println(c.protectedGetPrivateInt());
	}

}
