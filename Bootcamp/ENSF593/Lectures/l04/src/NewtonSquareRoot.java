
public class NewtonSquareRoot {
	
	public static double getSquareRoot(double x) {
		double xPrevious = x;
		double xNext = x / 2.0;
		
		while(Math.abs(xPrevious-xNext) > 0.00001) {
			xPrevious = xNext;
			xNext = xPrevious - (Math.pow(xPrevious, 2) - x) / (2*xPrevious);
		}
		return xNext;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("Sqrt(2) = " + getSquareRoot(2.0));

	}

}
