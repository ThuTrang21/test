
function tong(){
    var n = parseFloat(window.document.getElementById("n").value);
    if(n<=0){
 window.alert("Vui lòng nhập lại n>0");}
    var s = 0;
    for(var i=1; i<=n; i++){
    s+=i*n;}
    window.document.getElementById("kq").value=s;
}
