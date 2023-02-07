# Lecture l04

## Reading
Reading for Part A:
- Section 4.3 A Command-Line Interface

Reading for Part B:
- Section 4.4 A Graphical User Interface


Additional reading:
- Section 4.5 Case Study: The One Row Nim Game
- Section 5.4 From the Java Library java.lang.Math

## Backlog
Nothing to work on.

## Study command-line interface example
- `KeyboardReader.java` Fig 4.7 p 157
- `GreeterApp.java` Fig 4.7 p. 159

The `KeyboardReader` class could use a `Scanner` in the background instead of `BufferedReader`. See `KeyboardReaderScanner.java` for this implementation.

## Create a Command-Line Interface to calculate square-root
Turn `GreeterApp.java` into a program that asks the user for a number and prints the square-root of the number. 

To calculate the square-root, use `Math.sqrt()`. Alternatively, the `NewtonSquareRoot` class provides a static method `getSquareRoot()`.

## Study graphical user interface example
- `GreeterGUI.java` Fig 4.20 p. 174

## Create a Graphical User Interface to calculate square-root
Turn `GreeterGUI.java` into a program that asks user for a number and displays the square-root of the number. Save code in `SquareRootGUI.java`.

To calculate the square-root, use `Math.sqrt()`. Alternatively, the `NewtonSquareRoot` class provides a static method `getSquareRoot()`.

Compare the UML and code of the GUI and Command-Line programs.

## Exercises
- Change `GreeterApp` to use a `Greeter` object rather than implementing the `greet()` method directly.
- Change `GreeterGUI` to have a `run()` method. Which parts of the constructor should/could you move to `run()`?
- Self-Study exercises are useful