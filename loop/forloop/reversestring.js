function ReverseString(words){
    let reverseword = '';
    for(i = words.length - 1; i >= 0 ; i--){
        reverseword += words.charAt(i);
    }
    return reverseword;
}

console.log(ReverseString('Hello'));
