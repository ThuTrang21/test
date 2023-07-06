function tinh(){
var xau=window.document.getElementById("xau").value;
var a=xau.split(" ");
var max=a[0].length;
for(var i=0; i< a.length; i++){
    if(a[i].length>=max){
    var x=i;
    var d = a[i];
break;}
}var y="Từ dài nhất là " + a.slice(x,x+1);
var b=a.join(" ");
var z=" xuất hiện ở vị trí " + b.indexOf(d);
window.document.getElementById("kq").value=y+z;
console.log(b);
}
