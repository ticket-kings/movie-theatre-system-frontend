
public class QuizException1 {
    public void method1(int M) {
        try {
            System.out.println("Entering try block");
            method2(M);
            System.out.println("Exiting try block");
        } catch (Exception e) {
            System.out.println("ERROR: " + e.getMessage());
        }
    }

    public void method2(int M) {
        if (M < 100)
            throw new ArithmeticException(M + " is too small");
    }

public static void main(String[] args) {
		
	QuizException1 analysis = new QuizException1();
	
	analysis.method1(500);

	}

}


