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