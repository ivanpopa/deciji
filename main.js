var naslov=document.getElementById('naslov');
var text="SAJT ZA NAJMLAĐE";
var char=text.split("");
var rez='';
var i=0;
function typing(){
  if(text.length>i){
    naslov.innerHTML+=text.charAt(i);
    i++;
    setTimeout(typing,100);
  }
  }
typing();
function color{

}
