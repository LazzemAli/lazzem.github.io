
function calcTime(offset){
    a=document.getElementsByName('77').value;
    let b=new Date()
    let utc=b.getTime()+(b.getTimezoneOffset()*60000);
    
    let nd=new Date(utc+(3600000*offset));
    
    document.write("the local time is"+nd.toLocaleString());
   

}
function time(){

document.write(calcTime('-3'))<br>
document.write(calcTime('+4.3'))<br>
document.write(calcTime('+9'))<br>
document.write(calcTime('+0.4'))

}







    

   