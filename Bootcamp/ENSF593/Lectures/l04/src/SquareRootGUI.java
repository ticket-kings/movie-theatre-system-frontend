import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class SquareRootGUI extends JFrame 
							implements ActionListener{
	
	//TODO: add instance variable declaration.
	
	public SquareRootGUI(String title) {
		this.buildGUI();
		
		//Methods from JFrame
		setTitle(title);
		setSize(300, 200);
		pack();
		
	}
	
	private void buildGUI() {
		//TODO: implement
	}
	

	public void actionPerformed(ActionEvent e) {
		
		//TODO: Implement
	}
	
	public static void main(String[] args) {
		
		new SquareRootGUI("Square-rooter");
	}

}
