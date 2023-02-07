/**
 * 
 * Unchecked exceptions.
 * 
 * Multiple catch block, specific to general.
 * 
 * Finally always executed, used for cleaning up resources.
 * 
 */
public class ExceptionIntroduction {


	public static void main(String[] args) {
		String input = "abc";
		int num = 0;
		int div = 5;
		try{
			num = Integer.parseInt(input);
			num = num / div;
			System.out.println("successful");
		}
		//TODO add a catch block to catch NumberFormatException
		catch(NumberFormatException e) {
//			e.printStackTrace();
			System.out.println(e.getMessage());
			//TODO: where to we see exit codes in Eclipse? 
			System.exit(-1);
		}
		
		//TODO add second block to catch all exceptions
		catch(Exception e) {
			System.out.println(""+e.getClass()+": "+e.getMessage());
			
		}
		
		//TODO add finally block printing the number
		finally {
			System.out.println("Finally: always executed. Num="+num);
		}
	
	
	} 
}


