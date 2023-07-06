

function ktra1(){
    var b=window.document.getElementById("pw").value;
    var a=new Array();
     a=b.split('');
     
    for(var i=0; i<a.length; i++){
     if(a[i] >='A' && a[i]<='Z' && (a[0]<'1' || a[0] >'9')&& a.length>=8)
        return true; 
    }
return false;
}
function ktra(){
    if(ktra1()) window.alert("Bạn nhập đúng");
    else window.alert("Bạn nhập sai");
}