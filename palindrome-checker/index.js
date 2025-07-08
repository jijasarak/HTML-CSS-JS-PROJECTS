function checkPalindrome(){
  const input = document.querySelector("input");
  const text = input.value;
  const inputText = text.replace(/[^a-zA-Z0-9]/g, "");

  let reverse = "";
  for(let i = inputText.length-1; i >= 0; i--){
    reverse += inputText[i];
  }
  if(inputText.toLowerCase() === reverse.toLowerCase()){
    document.getElementById("output").innerHTML = `Yes, <span>${"'"+text+"'"}</span> is a palindrome!`
  }else{
    document.getElementById("output").innerHTML = `No, <span>${"'"+text+"'"}</span> is not a palindrome!`
  }
}