import javax.swing.*;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;

import java.awt.*;
import java.awt.event.*;

public class RandomPasswordGUI extends JFrame 
							implements ActionListener{
	
	//TODO: Add instance variable declarations
	private PasswordGenerator generator;
	
	public RandomPasswordGUI(String title) {
		generator = new PasswordGenerator();
		
		this.buildGUI();
		
		setTitle(title);
		setSize(300, 200);
		pack();
		
	}
	
	private void buildGUI() {
		Container contentPane = getContentPane() ;
		contentPane.setLayout(new BorderLayout());
		
		
		//TODO: instantiate all visual instance variables
		
		
		
		//TODO: adding  listeners

		
		
		JPanel inputPanel = new JPanel();
		inputPanel.add(new JLabel("Choose password length: ")); 
		inputPanel.add( pwdLength );
		
		contentPane.add("North", inputPanel);
		contentPane.add("Center" , display );
		contentPane.add("South" , goButton );
	}
	
	public void run() {
		setVisible(true);
		
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		//TODO: Implement Button event
		
	}
	
	
	public static void main(String[] args) {
		
		RandomPasswordGUI app = new RandomPasswordGUI("Generate Random Password");
		app.run();
	}

	

}
