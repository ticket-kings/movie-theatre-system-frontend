
public class StringComparison {
	
	/**
	 * Ex 7.16 p. 321
	 * 
	 * @startuml
	 * object "''java'', s1, s2" as s1
	 * s1 : value="java"
	 * 
	 * 
	 * @enduml
	 */
	public static void main(String[] args) {
		String s1 = "java", s2 = "java";
		//TODO: add other declarations
		
		System.out.println("a. s1 == s2 "+(s1 == s2));
		System.out.println("b. s1.equals(s2) "+(s1.equals(s2)));
		//TODO: add other comparisons

	}

}
