# Lecture l02

## Reading
Reading for Part A:
- Section 2.2 Strings
- Section 2.4 Class definition

Reading for Part B:
- Section 2.5 CASE STUDY

Additional reading for `InteractiveRiddleUser.java`:
- Section 2.6 Scanner

## Backlog
### Compile and run
Compile and run (see Fig on p. 49):

`javac -sourcepath src/ -d bin/ src/HelloWorld.java`

`java -cp bin/ HelloWorld`

### Review l01 Riddle
From `riddle-uml.txt` implement `Riddle.java`. Use `RiddleTester.java` to test.

### Javadoc
Show basic javadoc.

### Inheritance UML
- Using plantUML, create UML Diagram on page 17. (see `example_uml.txt`)

## Riddle and RiddleUser
Section 2.4

UML in Fig on p. 73 demonstrates relationship between Riddle and RiddleUser.

Steps:
- Re-use Riddle.java from `l01`
- Complete `RiddleUser.java` (see TODOs)
- How does plantUML show the 'uses' relationship?
- Implement an interactive version `InteractiveRiddleUser.java` using `Scanner`. This will use string comparison and if-else.

See Fig 2.1 on p. 62 for UML describing String class.

## Primitive vs Reference types
Demonstrate using visual execution [Java on Pythontutor](http://www.pythontutor.com/java.html)

Use `Test.java`.

## OneRowNim
Section 2.5

Steps:
- What is the difference between public, protected and private modifiers (Table 2.2)
- Ex 2.9 what is the difference between class and instance variables?
- Study `OneRowNim.java` complete `TODO`
- Implement `OneRowNimTester.java` that will test all methods.


## Exercises
 - Ex 2.13: Syntax errors
 - Ex 2.19 - 2.21 Cube, CubeUser, input
 - Ex 2.23 Language UML