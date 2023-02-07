
/**
 * Represents a riddle with question and answer.
 * 
 * @author Yves
 *
 */
public class Riddle {
	
	/**
	 * The question of the riddle
	 */
	private String question;
	
	/**
	 * The answer to the riddle question
	 */
	private String answer;
	
	/**
	 * Class constructor
	 * 
	 * @param q the riddle question
	 * @param a the the riddle answer
	 */
	public Riddle(String q, String a) {
		this.question = q;
		this.answer = a;
	}
	
	/**
	 * @return the question
	 */
	public String getQuestion() {
		return this.question;
	}
	
	/**
	 * @return the answer
	 */
	public String getAnswer() {
		return this.answer;
	}

}
