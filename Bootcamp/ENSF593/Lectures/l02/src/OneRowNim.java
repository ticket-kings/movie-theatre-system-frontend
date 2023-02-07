/**
 * From Fig 2.20 on p.84
 * 
 * @author yves
 *
 */
public class OneRowNim {
	private int nSticks = 7; // Start with 7 sticks .
	private int player = 1; // Player 1 plays first .

	public void takeOne() {
		nSticks = nSticks - 1;
		player = 3 - player;
	} // takeOne ()

	public void takeTwo() {
		nSticks = nSticks - 2;
		player = 3 - player;
	}// takeTwo()

	public void takeThree() {
		nSticks = nSticks - 3;
		player = 3 - player;
	} // takeThree ()

	public void report() {
		//TODO print Number of sticks left: 
		
		//TODO print who has next turn
		
	} // report ()
} // OneRowNim1 class