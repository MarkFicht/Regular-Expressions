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


//--- Metacharacters --//
// ^        ^abc        - first character
// $        abc$        - last character
// *        ab*c        - b can be, but must not be
// +        ab-c        - b will perform at least once
// |        a|c         - OR
// .        abc.        - any character
// .{4}     abc .{4}    - abc(space) and 4 any characters after this(with space)
// ?        ab?c?       - can be only once or not at all
// \        e.g. \.  \?  \\  \* for specjal characters like . ? \ *
// []       e.g. [a-zA-Z] [0-9] [0-9ABc C] [a-z0-9-_]
// [^]      e.g. [^a-dGMD] [^gm012 3] [^g m_-] -> all reverse
// []{1}    e.g. [a-z]{2}
// []{1,1}  e.g. [a-z]{1,4} quantity of characters // sum of characters max ||  [a-z]{1,}

// (go){2}                  will search gogo gogo etc.
// html|java(script)?       will search html java javascript(script can be, but must not be)

//--- Classes
// \w           ready class of characters: [a-zA-Z0-9_]  ->Can be expanded!
// [\w@\-\$]    this \w  +  @-$
// \d           all digits
// \s           all spaces, tabs, eol,
// \W \D \S     all reverse