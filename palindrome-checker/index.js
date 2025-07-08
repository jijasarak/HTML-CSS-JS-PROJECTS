function checkPalindrome(){
  const input = document.querySelector("input");
  const text = input.value;
  let reverse = "";
  for(let i = text.length-1; i >= 0; i--){
    reverse += text[i];
  }
  if(text.toLowerCase() === reverse.toLowerCase()){
    document.getElementById("output").innerHTML = `Yes, <span>${"'"+text+"'"}</span> is a palindrome!`
  }else{
    document.getElementById("output").innerHTML = `No, <span>${"'"+text+"'"}</span> is not a palindrome!`
  }
}