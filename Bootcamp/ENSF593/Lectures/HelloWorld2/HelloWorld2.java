
public class HelloWorld2 {

	private String greeting = "Hello World!";
	
	public void greet() {
		System.out.println(this.greeting);
	}
	
	public static void main(String[] argv) {
		
		HelloWorld2 hello = new HelloWorld2();
	    HelloWorld2 ensf = new HelloWorld2();
	    hello.greet();
	    hello.greeting = "Go Flames Go";
	    hello.greet();
	    
	    ensf.greet();
	    ensf.greeting = "ENSF 593 is great!";
	    ensf.greet();
	    
	}
}
