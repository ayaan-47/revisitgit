MAJOR UPDATE SHIT 
THE VAR WALA THING IS NOW OLD AND ALL SO WE HAVE TO USE LET OR CONST FROM NOW
Var is not restricted i mean we can still use it but let and const are new and update now So yeah keep this small thing in mind.

NOTES FOR JAVASCRIPT 
#########################################
29 october 2020

New stuff -> 
**********************************************
const num = 30;


HERE CONST MEANS CONSTANT 
The number cant be changed further and is a CONSTANT type of Number or a variable you can say
**********************************************

let numerical = 10;

Now i don't exactly know what this thing does but till now i think it works the same as var wala stuff

Can say works similar to var 
**********************************************







// int char float etc 
// VAR-> All kind of variables can be stored
var age,days;
age=18;
days=365*age;
var aashi;  
aashi = "This is a Name"
var point_ayaan;
var point_panther;
var name="Ayaan";

//OUTPUTS
document.write("Hello From Javascript") // for writing on the top of HTML
console.log("Hello From Console Log") // for printing in inspect element console

alert("Hello "+aashi+" Your age is: "+days) // for making popup alrrts in html
document.getElementById("id_of_the_element").innerHTML = 50/25; // for changing the html value by using ids 
var name = 'Random'; // you can take any random name form the User
 	var roll = 'RandomRoll';// you can take any random roll fro the user
 	var sentence= 'Hi '+name+'My Roll is: '+roll;
 	console.log(sentence); 
 	alert(sentence)// 
// OPERATORS

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y




##############################


JavaScript Type Operators
Operator	Description
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type



##############################



JavaScript Bitwise Operators
Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
Operator	Description	Example	Same as	Result	Decimal
&	AND	
|	OR	
~	NOT
^	XOR	
<<	Zero fill left shift	
>>	Signed right shift	
>>>	Zero fill right shift


##############################

var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123

JavaScript Booleans
Booleans can only have two values: true or false.

Example
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false



JavaScript Arrays
JavaScript arrays are written with square brackets.

Array items are separated by commas.

The following code declares (creates) an array called cars, containing three items (car names):

Example
var cars = ["Saab", "Volvo", "BMW"];


##################################

JavaScript Objects
JavaScript objects are written with curly braces {}.

Object properties are written as name:value pairs, separated by commas.

Example
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
objectname    (property)

HOW TO CALL AN Object
objectname.property

##################################

The typeof Operator
You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression:

Example
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

###################################

FUnctions

C/c++ int perimeter(lenght, breadth)
{
	int l,b;

}

Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

Example
Calculate the product of two numbers, and return the result:

var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}


#################################

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius;


Functions Used as Variable Values
Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

Example
Instead of using a variable to store the return value of a function:

var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";
You can use the function directly, as a variable value:

var text = "The temperature is " + toCelsius(77) + " Celsius";


#############################

var f = area(10,20); // GLOBAL VAR

function area(l,b)
{
 var a = l*b;  // LOCAL VAR
 return a;
}
console.log("The area is "+area(12,33)+"  complete");

#############################
Object Functions

Object Methods
Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.

Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}
A method is a function stored as a property.

Example
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
The this Keyword
In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.

Read more about the this keyword at JS this Keyword.

Accessing Object Methods
You access an object method with the following syntax:

objectName.methodName()
###################################################################

Common HTML Events
Here is a list of some common HTML events:

Event	Description
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page

HTML Events
An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

An HTML web page has finished loading
An HTML input field was changed
An HTML button was clicked
Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

With single quotes:

<element event='some JavaScript'>
With double quotes:

<element event="some JavaScript">
In the following example, an onclick attribute (with code), is added to a <button> element:

Example
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>




<!DOCTYPE html>
 <html>
 <h2 id="header">This is a Header</h2>
 <body>

 <script type="text/javascript">

 	var myname = "No I am aashi " 
 	function changing()
 	{
 		document.getElementById("area").innerHTML = myname;


 	}
 	function colors()
 	{
 		
		document.getElementById("area").style.color = 'red';
 	}
</script>
 <p>this is a paragraph</p>
 <h2 id="simple">This is a small header</h2>

  <h2 id="area" onclick="">I am Ayaan</h2>

  <button onclick="changing()" > Button to Change Name	</button>
  <button onclick="colors()">Color Change Button	</button>
 </body>

 </html>


Common HTML Events
Here is a list of some common HTML events:

Event	Description
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page

Link for More events https://www.w3schools.com/jsref/dom_obj_event.asp



######################################################

Strings have started 

Six other escape sequences are valid in JavaScript:

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
THESE ARE THE ESCAPE CHARS

// Making Strings
let color = "purple";

// Single quotes work too:
let city = 'Tokyo';

//Strings have a length:
city.length; //5

//We can access specific characters using their index:
city[0]; //'T'
city[3]; //'y'

// String methods:
'hello'.toUpperCase(); // "HELLO";
'LOL'.toLowerCase(); // "lol"
'    omg  '.trim(); // "omg"

// String methods with arguments:
// ==============================

//indexOf returns the index where the character is found (or -1 if not found)
'spider'.indexOf('i'); //2
'vesuvius'.indexOf('u'); //3 - only returns FIRST matching index
'cactus'.indexOf('z'); //-1 not found

// slice - returns a "slice" of a string
"pancake".slice(3); //"cake" - slice from index 3 onwards
"pancake".slice(0, 3); //"pan" - slice from index 0 up to index 3

// replace - returns a new string, with the FIRST match replaced
"pump".replace("p", "b"); //"bump" - only replaces first "p"

// String Template Literals
// Use backtick characters, NOT SINGLE QUOTES!
// ========================
const color = "olive green";
const msg = `My favorite color is: ${color}` //"My favorite color is: olive green"

const str = `There are ${60 * 60 * 24} seconds in a day`//"There are 86400 seconds in a day"


