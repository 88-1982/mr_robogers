# Address Book

#### Address Book

#### By DeAunte Hall

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery

## Description
  Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"


## Specifications
Describe: forLoop(number)

Test 1: "It should return an array with 0 if the number 0 is inputted."
Expect (forLoop(0)).toEqual([0]);


Test 2: "It should return an array that counts up from 0 to the inputted number."
Expect (forLoop(5)).toEqual([0, 1, 2, 3, 4, 5]);

Test 3: "It should return an array that counts up from 0 to the inputted number except for the number 1, which will be replaced with 'Beep!'."
Expect (forLoop(5)).toEqual([0, "Beep!", 2, 3, 4, 5]);

Test 4: "It should return an array that counts up from 0 to the inputted number except for the numbers that contain a 1, 2, or 3 which will be replaced with specialized messages."
Expect (forLoop(3)).toEqual(["Wont you be my neighbor?"]);

Test 5: "It should return a specialized message if the number is greater than 9 and contains any of the digits 1,2 and 3."
Expect (forLoop(10)).toEqual(["Beep!"]);

Test 6: "Number 3 message is prioritized over 2, and 2 prioritized over 1 for numbers with multiple digits."
Expect (forLoop(32)).toEqual(["Wont you be my neighbor?"]);





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
