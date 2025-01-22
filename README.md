# Unexpected String Concatenation in JavaScript

This repository demonstrates a common, yet easily overlooked, error in JavaScript: unexpected string concatenation due to loose typing.  The `foo` function intends to perform numerical addition, but due to the implicit type coercion, it performs string concatenation instead.

## Bug
The bug lies in the `foo` function, which accepts two arguments. If one argument is a number and the other is a string, the `+` operator will perform string concatenation rather than numerical addition. This results in an incorrect output.

## Solution
The solution involves explicit type checking or conversion before performing the addition operation. This ensures that the arguments are of the correct type (numbers) before the addition occurs.