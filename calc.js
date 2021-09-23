function click1(val){
    
    document.getElementById("disp").value+=val;

}
function clearfun(){
    document.getElementById("disp").value=0;
}
function equalclick(){
    var text=document.getElementById("disp").value
    var res=eval(text)
    document.getElementById("disp").value=res
}