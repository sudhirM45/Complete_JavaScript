// string in javascript:
//In JavaScript, a string is a sequence of characters used to represent text. Strings are one of the fundamental data types in JavaScript and are used frequently for operations like manipulation, formatting, searching, and comparison.

// Creating Strings:
// Strings in JavaScript can be created using:

// Single quotes (')
// Double quotes (")
// Template literals (`)

// let singleQuoteString = 'Hello, world!';
// let doubleQuoteString = "Hello, world!";
// let templateLiteralString = `Hello, world!`;


// Features of Strings in JavaScript:
// 1. Immutability:
// Strings are immutable, meaning that once a string is created, it cannot be modified. Any operation that appears to modify a string actually creates a new string.
// 2. String Length:
// Use the .length property to find the length of a string.

//  functions in javaScript:

/*  1.charAt: 
    The charAt method in Java is used to retrieve a character at a specific index from a String.

    syntax:
    char ch = str.charAt(index);
    str: The String from which you want to get the character.
    index: The position (0-based) of the character you want to access.

    example:
    String example = "Hello";
    char c = example.charAt(1); // c will be 'e'
*/

/* 
    2.indexOf:
    The indexOf method in Java is used to find the index of the first occurrence of a specified character or substring within a string.

    syntax:
    int index = str.indexOf(char ch);

    Parameters:
    ch: The character to search for.
    substring: The substring to search for.
    fromIndex: The index from which to start the search.

    Returns:
    The index of the first occurrence of the character or substring.
    Returns -1 if the character or substring is not found.

    Example:
    String example = "Hello, world!";
    int index1 = example.indexOf('o'); // index1 will be 4 (first 'o')
    int index2 = example.indexOf("world");// index2 will be 7
    int index3 = example.indexOf('o', 5); // index3 will be 8 (second 'o')
    int index4 = example.indexOf("Java"); // index4 will be -1 (not found)
*/

/*
    3. substring:
    The substring method in Java is used to extract a portion of a string.

    syntax:

    To extract a substring from a starting index to the end:
    String substr = str.substring(int beginIndex);

    To extract a substring from a starting index to an ending index (exclusive):
    String substr = str.substring(int beginIndex, int endIndex);

    Example:
    String example = "Hello, world!";
    String substr1 = example.substring(7); // substr1 will be "world!"
    String substr2 = example.substring(0, 5);// substr2 will be "Hello"

*/

/* 
    4. slice in string in javascript:

    The slice method in JavaScript is used to extract a section of a string and return it as a new string, without modifying the original string.

    syntax:

    To extract from a starting index to the end:
    let slicedString = str.slice(startIndex);

    To extract from a starting index to an ending index (exclusive):
    let slicedString = str.slice(startIndex, endIndex);

    Example:
    let example = "Hello, world!";
    let slice1 = example.slice(7); // slice1 will be "world!"
    let slice2 = example.slice(0, 5);// slice2 will be "Hello"
    let slice3 = example.slice(-6);// slice3 will be "world!" (using negative index)
    let slice4 = example.slice(2, -3);// slice4 will be "llo, wo"

*/

/*
    5. trim:
    The trim method in JavaScript is used to remove whitespace characters from both ends of a string. It does not modify the original string but returns a new string with the leading and trailing whitespace removed.

    6. replace:

    The replace method in JavaScript is used to search for a specified substring or regular expression pattern within a string and replace it with a new substring.

    7. includes:

    The includes method in JavaScript is used to determine whether a string contains a specified substring. It returns a boolean (true or false) based on whether the substring is found within the string.

    8. split:
    The split method in JavaScript is used to divide a string into an array of substrings based on a specified delimiter (separator).
*/