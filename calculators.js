
function dis(val) { 
    var res=document.getElementById("result").value+=val;
    document.getElementById("result").innerHTML=res;
 }

 function cls(){
    document.getElementById("result").value="";
 }
function singleclr(){
   var re=document.getElementById("result").value;
   document.getElementById("result").value=re.substring(0,re.length-1);

}
function brack(val){
   if(val=='b')
      dis('(');
   else
      dis(')');
}
 function myFunction(event) {
   if(event.key=="=")
      solve();
   if (event.key == '0' || event.key == '1'  || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5'  || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9'  || event.key == '+' || event.key == '-'|| event.key == '*' || event.key == '/' || event.key=='(' || event.key==')' || event.key=='%')
       document.getElementById("result").value += event.key;
}
function factorial(){
   var num=parseInt(document.getElementById("result").value);
   var fact=1;
   for(var i=2;i<=num;i++)
      fact*=i;
   document.getElementById("result").value=fact;
}

 function solve(){
       var p = document.getElementById("result").value;
       try{
         var q = eval(p);
         document.getElementById("result").value = q;
       }
       catch(ex){
         document.getElementById('result').value='Enter valide expression'
       }
      
 }