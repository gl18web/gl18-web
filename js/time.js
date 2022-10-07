function getTime(){
    return new Date();
}
function setCurrentTime(){
    document.getElementById("currentTime").innerHTML = new Date();;
    setTimeout("setCurrentTime()",1000);
}
function setText(id,text){
    document.getElementById(id).innerHTML = text;
}
/*
function time(){
    var date = new Date();
    var monthList = ["一","二","三","四","五","六","七","八","九","十","十一","十二"];
    var dayList = ["一","二","三","四","五"]
    var month = monthList[date.getMonth()] + "月";
    
}
*/