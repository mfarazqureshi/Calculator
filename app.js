function getnumber(num){
    var result = document.getElementById("result")
    result.value += num;
}
function clrresult(){
    var result = document.getElementById("result");
    result.value = "";
}
function getdlt(){
    var result = document.getElementById("result")
    result.value = (result.value).substring(0,(result.value).length-1)
}
function getresult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)

}
function getresultinv(){
    var result = document.getElementById("result");
    result.value = 1/ eval(result.value)

}
function getresultsqr_root(){
    var result = document.getElementById("result");
    result.value = (Math.sqrt(result.value))

}
function getresultsqr(){
    var result = document.getElementById("result");
    result.value = eval(result.value)*eval(result.value)

}
function getresultcube(){
    var result = document.getElementById("result");
    result.value = eval(result.value)*eval(result.value)*eval(result.value)

}