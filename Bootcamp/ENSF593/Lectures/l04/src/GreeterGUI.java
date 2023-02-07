import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

/**
 * Code from Fig 4.20 p. 174
 * @author Yves
 *
 */
public class GreeterGUI extends JFrame 
						implements ActionListener{
	
	private JTextArea display;
	private JTextField inField;
	private JButton goButton;
	private Greeter greeter;
	
	public GreeterGUI(String title) {
		this.greeter = new Greeter();
		this.buildGUI();
		
		//Methods from JFrame
		setTitle(title);
		setSize(300, 200);
		pack();
		setVisible(true);
		
	}
	
	private void buildGUI() {
		// This is where all the graphical elements are added to.
		Container contentPane = getContentPane() ;
		contentPane.setLayout(new BorderLayout());
		
		
		// instantiate all instance variables
		this.display = new JTextArea(10,30);
		this.inField = new JTextField(10);
		this.goButton = new JButton("Click here for a greeting");
		
		
		//adding action listeners
		this.goButton.addActionListener(this);
		
		
		JPanel inputPanel = new JPanel();
		inputPanel.add(new JLabel("Input your name here: ")); 
		inputPanel.add( inField );
		
		contentPane.add("North", inputPanel);
		contentPane.add("Center" , display );
		contentPane.add("South" , goButton );
	}
	

	public void actionPerformed(ActionEvent e) {
		
		//TODO implement button callback
		if(e.getSource() == goButton) {
			String name = inField.getText();
			
			display.setText(greeter.greet(name));
		}
		
	}
	
	
	public static void main(String[] args) {
		
		new GreeterGUI("Greeter");
	}

}
