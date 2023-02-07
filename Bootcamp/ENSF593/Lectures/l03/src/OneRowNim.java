
/**
 * Code from Fig 3.16 on p. 132
 * @author yves
 *
 */
public class OneRowNim {
	
	private int nSticks = 7;
	private int player = 1;
	
	//TODO: add a constructor without arguments - doing nothing.
	
	public OneRowNim(int sticks) {
		this.nSticks = sticks;
	}
	
	public OneRowNim(int sticks, int starter) {
		this.nSticks = sticks;
		this.player = starter;
	}

	public boolean takeSticks(int num) {
		//TODO: implement returns 
		//      false if num<1, 
		//      true if num>3
		//      true else, and reduces nSticks by num, switches player
		
	}
	
	public int getnSticks() {
		return nSticks;
	}

	public int getPlayer() {
		return player;
	}
	
	//TODO: add gameOver() returning true if nSticks <=0
	
	
	//TODO: add getWinner() returning 
	//      the player number if gameOver()
	//      else 0
	
	
	public void report() {
		System.out.println("Number of sticks left: " + nSticks);
		System.out.println("Next turn by player " + player);
	} 
	
	
	

}
