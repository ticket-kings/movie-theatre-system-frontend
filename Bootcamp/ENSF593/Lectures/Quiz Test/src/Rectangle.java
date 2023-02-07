
public class Rectangle implements IMeasurements{
	
	int x1, y1, x2, y2;
	
	public int getArea() {
		
		int area = Math.abs(x2 - x1) * Math.abs(y2 -y1);
		
		return area;
	}
	
	public static void main(String[] args) {
		
		Rectangle rectangle = new Rectangle();
		
		rectangle.x2 = 5;
		rectangle.y2 = 5;
		rectangle.x1 = 0;
		rectangle.y1 = 0;
		
		System.out.println(rectangle.getArea());
		
		
		
		double[] dd = {1.0, 3.0, 5.0, 7.0, 9.0};
		int[] ii = {1, 3, 5, 7, 9};
		
		dd[0] = ii[0];
		
		
		System.out.println(dd[3] == ii[3]);
		
		

		
	}

}
