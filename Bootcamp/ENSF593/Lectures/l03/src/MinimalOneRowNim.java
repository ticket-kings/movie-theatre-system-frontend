
public class MinimalOneRowNim {
	
	private int nSticks;
	private int player;
	
	public MinimalOneRowNim(int n) {
		this.nSticks = n;
		this.player = 1;
	}
	
	@Override
	public String toString() {
		return "nSticks = " + this.nSticks + ", player = " + this.player;
	}
	
}
