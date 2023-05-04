window.addEventListener("DOMContentLoaded",function(){
    var btn=document.getElementById("btn");
    var form=document.getElementById("form");
    var name=document.getElementById("name");
    var lastName=document.getElementById("lastName");
    var send=document.getElementById("send")
    var email=document.getElementById("email")
    
   btn.addEventListener("click",function(){
    form.style.opacity=1;
    form.style.filter="none"
  btn.style.opacity=0;
  btn.style.zIndex=-1
   })
   send.addEventListener("click",function(){
    form.style.opacity=0.2;
    form.style.filter="blur(3px)"
  btn.style.opacity=1;
  btn.style.zIndex=1
    var userName=name.value;
    var userLastName=lastName.value;
    var userEmail=email.value;
   setTimeout(function(){
   if(userLastName!=""&&userLastName!=""&&userEmail!=""){
    alert("Name:"+userName+"\nlast name:"+userLastName+"\nEmail:"+userEmail);
    
   }
   
   },3)
   
   })
})
