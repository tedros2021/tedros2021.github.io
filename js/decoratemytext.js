
window.onload=function(){
   const decorationButton= document.getElementById("myDecorationButon");
   //decorationButton.onclick=showAlert;

     function showAlert(){
         alert("Hello, World!");
     }
     
     decorationButton .addEventListener("click",function(){
       document.getElementById("myTextArea").className="textAreaChanged";
       
       
       console.log(parseInt(x));
            
         });


         const ch=document.getElementById("myCheckBox");
        const text =document.getElementById("myTextArea");
        const pageBody =document.getElementById("bd");

         ch.addEventListener("click",function(){
                 if(ch.checked==true){
                  text.className="myCheckBox";
                  pageBody.className="myBody";
                 }
                 else{
                   text.className="none";
                   pageBody.className="";
                 }
         });


}