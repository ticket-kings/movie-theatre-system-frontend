
public class DataTypeTest {

	public static void main(String[] args) {
		double a = 65.2;
		char b = 'A';
		int c = (int)a;
		//do we need casting here or will these be promoted.
		int d = b;
		char e = (char)c; //remove the cast when showing students
		short f = (short)a; //remove the cast when showing students
		
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
		System.out.println(d);
		System.out.println(e);
		System.out.println(f);
		
		System.out.println("----------------------------------------");
		
		System.out.println("13/5 = "+ (13/5));
		System.out.println("13.0/5 = "+ (13.0/5));
		System.out.println("(int)13.5 / 5 = "+((int)13.5 / 5));
		System.out.println("13%5 = "+ (13%5));
		
		System.out.println("----------------------------------------");
		
		//change to double to see difference
		float x = 0;
		for(int i=0; i<10; i++) {
			x += 1.0/10.0;
			System.out.println(""+i+": "+x);
		}
	} 
}
