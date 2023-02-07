
/**
 * 
 * Represents a rectangle.
 * 
 * @author pauc
 *
 */
public class Rectangle {
	
	
	/**
	 * Rectanlge length in pixel
	 */
	private int length;
	/**
	 * 
	 */
	private int width;
	private int x;
	private int y;
	
	
	/**
	 * 
	 * Uses this.length and this.width to calculate area
	 * 
	 * @return area of rectangle as int
	 */
	public int calculateArea() {
		return this.length * this.width;
	}
	
	/**
	 * 
	 * Draws the rectangle to the default location 
	 * using arguments x and y. 
	 * 
	 * @param x x-coordinate of rectangle when drawn
	 * @param y y-coordinate of rectangle when drawn
	 */
	public void draw(int x, int y) {
		
	}
	

}
