function ktra(n){
    for(var i=2; i<=parseInt(Math.sqrt(n));i++){
        if(n%i==0) return false;
    }
    return n>1;
}
function tinh(){
    var n=parseInt(window.document.getElementById("n").value);
    var S=0;
    for(var i=0; i<=n; i++){
        if(ktra(i)){
            S+=i;
        }
    }
    console.log(S);
    window.document.getElementById("tong").value=S;
    
}