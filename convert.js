function myfunction(){
    var x = Number(document.getElementById("fCurrent").value);
    var y = Number(document.getElementById("tCurrent").value);
    var amoun = Number(document.getElementById("amount").value);
    if(x > y){
        var conver = 1/( x * amoun);
    }else if(x == 23000 && y == 23000){
        alert("tự tính cho nhanh")
    }else if( x == 1 && y == 1) {
        alert("tự tính cho nhanh")
    }else{
        var conver = y*amoun*x;
    }
    document.getElementById("123").innerHTML = conver;
}