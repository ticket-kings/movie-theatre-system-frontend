# Lecture l07

## Reading
Reading Part A:
- Section 7.2 String Basics
- Section 7.5 From the Java Library: java.lang.StringBuffer
- Section 7.9 Comparing Strings

Reading Part B:
- Section 7.10: From the Java Library: java.util.StringTokenizer
- Section 4.6 From the Java Library: java.io.File and File Input


Additional reading:  
- Section 7.8 Processing Each Character in a String


## Backlog
No backlog.


## Comparing Strings

Strings are immutable. Study 7.9.2 String Identity Versus String Equality.

Use StringBuffer (older, synchronized) or StringBuilder (newer, (not synchronized)) for dynamic strings.

See [here](https://stackoverflow.com/questions/355089/difference-between-stringbuilder-and-stringbuffer) for recommendation on why to use StringBuilder 

Solve Ex 7.16 p. 321 `StringComparison.java`  
Solve Ex. 7.18 p. 323 `StringManipulation.java`


## Revisit Random Password generation
Instead of using char as integer idea, create a string with all allowed characters and index into it with a random number. Use StringBuffer or StringBuilder to collect the password.

Use `PasswordGeneratorDev.java`

## Count number of words and sentences in text
Using StringTokenizer, File and Scanner, load text from a file and count number of words and sentences.

Use `TextAnalysis.java`

Side note: Once we know arrays (Ch. 9) we will look at String.split(), which is preferred over StringTokenizer to split Strings.

## Exercises
- Self study Ex 7.12 and 7.13
- Self study Ex. 7.16 and 7.18
