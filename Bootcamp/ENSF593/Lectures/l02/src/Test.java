
/**
 * 
 * To demonstrate primitive and reference types
 * in http://www.pythontutor.com/java.html
 * 
 * @author pauc
 *
 */
public class Test {
    
    /**
     * A primitive type attribute
     */
    private int a;
    
    /**
     * A reference type attribute
     */
    private String text;
    
    public Test(String t){
      this.text = t;
      this.a = 10;
    }
    
    public void setText(String t){
      this.text = t;
    }
    
    public String getText(){
      return this.text; 
    }
      
    
    public static void main(String[] args) {
      
      
      Test testObject;
      testObject = new Test("Hello");
      System.out.println(testObject.getText());
      testObject.setText("World");
      System.out.println(testObject.getText());
      

    }
}
