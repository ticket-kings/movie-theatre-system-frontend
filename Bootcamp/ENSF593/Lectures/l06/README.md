# Lecture l06

## Reading
Reading for Part A:
- Section 6.3 Counting loops
- Section 6.6 Conditional loops

Reading for Part B:
- Section 6.7 Example: Computing Averages
- Section 6.8 Example: Data Validation


Additional reading:  



## Backlog
No backlog.

## Loop introduction
Add in `Loops.java`:

- for loop: Gradient Descent to approximate the square root.
- while loop: Self-study exercise 6.9 p. 262 
- do while loop: Loosing grass on p.263

**Background on Gradient Descent**
To find the minimum of a function `f(x)` we can use the gradient descent algorithm. Starting from an initial guess `x0`, we iteratively calculate the next guess `x1` by subtracting the the gradient `f'(x) = df(x)/dx` at `x0` multiplied by the learning rate `lr`. The gradient descent step in general is: `x[k+1] = x[k] - lr *  f'(x[k])`.

To approximate the square root, we find the minimum of `f(x) = 1/3 x^3 - ax` where `a` is the number we take the square root of. The derivative is `f'(x) = df(x)/dx = x^2 - a`.

## Review loops

Solve Exercise 6.9 p. 292 using:
- nested for loops
- nested while loops
- nested do-while loops

Use `SkiJump.java`.

## break and continue
A quick intro to `break` and `continue` keywords: [w3schools-break](https://www.w3schools.com/java/java_break.asp)

Are  `break` and `continue` good programming habits? Discussion on [stackexchange](https://softwareengineering.stackexchange.com/questions/58237/are-break-and-continue-bad-programming-practices)

## Calculate averages
- Study calculate averages example Fig 6.10 p. 269.
- How could pseudo-code on p. 266 be written differently using different loop structure, break/continue?
- Incorporate data validation. Validation test is best wrapped in a method. What else could be improved? Thinking about sentinel value, instructions and help messages.

Use `GradeAverage.java`.

## Exercises
- Self study Ex 6.13: Pizza price entry method using codes 1, 2, 3 and 0 to terminate.
- Exercise 6.1, 6.2, 6.3, 6.18, 6.20