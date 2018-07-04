//--- Defining a regular expressions ---//
//var regExp = /abc/g;                      //recommended, for JS this expression is constantly
//var regExp = new RegExp('abc', 'g');      //not recommended, dynamic(not constantly) = slower
// /text/g      -> g as global. Is kind of flag
// /text/gmi    -> m for multiline in text.
//              -> i for skipping size of letters.

var regExp = /abc/g;
var text = 'abc is a characters from string abc';

//--- Found regExp or null
//console.log(regExp.exec(text));      // wyrazenie . wykonywane na txt string
//console.log(text.match(regExp));     // txt string . dopasowujemy wyrazenia

//--- T or F -> Testing ours regExp, in any text string
//console.log(regExp.test(text));

//--- Method replace
//console.log(text.replace(regExp, 'XYZ'));

//--- Method split(from text string on table)
//console.log(text.split(' ', 3));

/////////////////////////////////////////////
//--- Metacharacters --//
// ^        ^abc        - first character
// $        abc$        - last character
// *        ab*c        - b can be, but must not be
// +        ab+        - b will perform at least once
// |        a|c         - OR
// .        abc.        - any character
// .{4}     abc .{4}    - abc(space) and 4 any characters after this(with space)
// ?        ab?c?       - can be only once or not at all
// \        e.g. \.  \?  \\  \* for specjal characters like . ? \ *
// []       e.g. [a-zA-Z] [0-9] [0-9ABc C] [a-z0-9-_]
// [^]      e.g. [^a-dGMD] [^gm012 3] [^g m_-] -> all reverse
// []{1}    e.g. [a-z]{2} [a-c]{1} -> occurring a-c once OR [a-c]+
// []{1,1}  e.g. [a-z]{1,4} quantity of characters // sum of characters max ||  [a-z]{1,}

// (go){2}                  will search gogo gogo etc.
// html|java(script)?       will search html java javascript(script can be, but must not be)

//--- Classes
// \w           ready class of characters: [a-zA-Z0-9_]  ->Can be expanded!
// [\w@\-\$]    this \w  +  @-$
// \d           all digits
// \s           all spaces, tabs, eol,
// \W \D \S     all reverse

/////////////////////////////////////////////
//--- Excerise: Find e-mail in text and verify it (all on https://regex101.com/) ---//

//1.Delete a few characters at the beginning string, once.
regExp = /^[a-cA-C]+/g;
text = "AbCdef lorem ipsum dolor sit amet";

console.log(text);
console.log(text.replace(regExp, ''));

//2.Verify Postal Code
regExp = /^\d{2}-[0-9]{3}$/g;

//3.Verify user name(3-16 characters)
regExp = /^[a-zA-Z0-9-_]{3,16}$/g;  //OR /^[\w-_]{3,16}$/

//4.Find color (e.g. #fff OR #FFFFFF OR #123123)
regExp = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/g;

//5.Verify e-mail (.com OR .co.uk)
regExp = /^([\w-\_\.]+)@([a-zA-Z0-9-]+)\.([a-z\.]+)$/g;
