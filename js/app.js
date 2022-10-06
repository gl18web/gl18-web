function getTime(){
    return new Date()
    
}
function setCurrentTime(){
    document.getElementById("currentTime").innerHTML = new Date();
    setTimeout("setCurrentTime()",1000)
}
function setText(id,text){
    document.getElementById(id).innerHTML = text
}