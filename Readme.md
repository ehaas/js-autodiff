Automatic differentiation in JavaScript, for node.js.  Uses dual numbers to
compute the derivative of an arbitrary* JavaScript function at a specified
point.  See http://en.wikipedia.org/wiki/Automatic_differentiation

I wrote this purely for my own learning and make no guarantees about its
correctness.  JavaScript doesn't support operator overloading so instead I
parse the function and rewrite it to use dual numbers instead of JavaScript
built-in numbers and math operations.  The advantage of this is that you
can write your JavaScript function in a natural way, instead of manually
using dual numbers.

Requires UglifyJS.  Tested on node.js v0.6.5

\* For an appropriate definition of arbitrary: currently limited to computing
the first derivative of a JavaScript function, subject to the following
constraints:

* Doesn't call other JavaScript functions (other than built-in Math.\* ones)
* Is a pure function (return value depends solely on the argument).
* Other constraints of which I'm not even aware may exist