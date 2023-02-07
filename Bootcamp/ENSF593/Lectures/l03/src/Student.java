
public class Student {
	
	private String id;
	
	public Student(String s) {
		this.id = s;
	}
	
	@Override
	public String toString() {
		return "id:"+this.id;
	}
	
	public boolean equals(Object that) {
		
		if(this.getClass() != that.getClass()) {
			return false;
		}
		
		Student s = (Student) that;
		System.out.println("Student.equals()");
		return this.id.equals(s.id);
		
		
	}
}
