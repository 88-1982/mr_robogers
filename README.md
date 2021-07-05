# mr_robogers

#### mr_robogers

#### By DeAunte Hall

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery

## Description
  Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

  Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
  Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
  Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
  These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

  The number 13 should be replaced with "Won't you be my neighbor?"
  The number 21 should be replaced with "Boop".
  The number 32 should be replaced with "Won't you be my neighbor?"
  A user should be able to enter a new number and see new results over and over again.

## Specifications
Describe: forloop(Number)

Test 1: "It should return an array with 0 if the number 0 is inputted."
Expect (forLoop(0)).toEqual([0]);

Test 2: "It should return an array that counts up from 0 to the inputted number."
Expect (5)).toEqual([0,1,2,3,4,5]);

Test 3: "It should return an array that counts from 0 to the inputted number Except for the number 1, which will be Replace with "beep!."
expect (forLoop(5)).toEqual([0,"Beep!",2,3,4,5]);

Test 4: "It should return an array that counts up from 0 to the inputted numbers that contain a 1,2 or 3 which will be replaced with a message."
Expect (forloop(3)).toEqual(["wont you bem my neighbor?"]);





## Setup/Installation Requirements

* _ Clone this repository to your desktop. 
* _ Navigate to the top level of the directory.
* _ Open in your browser


## Known Bugs

No known bugs.

## License
	MIT
Copyright (c) 2021 DeAunte Hall

## Contact Information
	http://www.88-1982@github.com
	godsofolympus88@gmail.com	
