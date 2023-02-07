# Lecture l05

## Reading
Reading for Part A:
- Section 5.3 Numeric Data and Operators
- Section 5.5 Numeric Processing Examples
- Section 5.6 From the Java Library java.text.NumberFormat

Reading for Part B:
- Section 5.4 From the Java Library java.lang.Math
- Section 5.7 Character Data and Operators
- Section 5.8 Example: Character Conversions


Additional reading:  
Depending on how familiar you are with data types it would be good to review Section 5.2 and see `BooleanOperatorTest.java`

## Backlog
No backlog.

## Experimenting with types and operators
Topics:
- Data types
- Operators
- Precedence
- Type promotion
- Type casting

See `DataTypeTest.java`

## NumberFormat class
See `NumberFormatTest.java`.

Includes an example of `printf()`. More details on `printf()` [here](https://www.baeldung.com/java-printstream-printf).

Note that `Locale.getDefault()` will return current default locale. Similarly, `Locale.setDefault()` will set the locale for the duration of the program.

## Create a GUI to generate a random password
Based on knowledge we gained from Section 5.7 and 5.8, we would like to write a GUI that:
- Generates a password (String) of random characters
- Allows the user to choose the length of the password
- Characters are randomly chosen from `'A'` to `'Z'`.

We anticipate that our password generator might be used in other contexts. Therefore, we create two classes: `PasswordGenerator` and `RandomPasswordGUI`.

To develop the password generation algorithm, a separate file `PasswordGeneratorDev.java` is available.

Some questions to get the thought process started:
- How will the user select the length of the password in the GUI?
- How to generate random numbers in Java?
- How to convert a random number to a character?

Some ideas for extending this program:
- Extend the character set used
- Allow the user to select the character set
- Handle random seed.
- Display [password entropy](https://generatepasswords.org/how-to-calculate-entropy/).

## Exercises
- Self-Study exercises are useful