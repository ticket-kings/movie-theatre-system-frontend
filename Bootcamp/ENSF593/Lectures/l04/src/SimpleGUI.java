import java.awt.Container;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class SimpleGUI extends JFrame{

	private JLabel label;
	
	public SimpleGUI(String title) {
		
		this.setTitle(title);
		
		this.label = new JLabel();
		this.label.setText("I am label");
		
		Container content = this.getContentPane();
		
		content.add("Center", this.label);
		
		this.setSize(200, 100);
		this.setVisible(true);
		
	}
	public static void main(String[] args) {
/*		
		JFrame frame = new JFrame();
		frame.setTitle("Hello World!");
		
		JLabel label = new JLabel();
		label.setText("I am Label");
		
		Container content = frame.getContentPane();
		
		content.add("Center", label);
		
		frame.setSize(200, 100);
		frame.setVisible(true);

	}
*/
}
