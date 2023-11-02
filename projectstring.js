function fname(){
    var a=document.getElementsByName("name")[0].value;
    var b=document.getElementById("out");
    b.innerHTML=a.length;
}


function freplace(){
    // var a=document.write("sorry");
    var a=document.getElementsByName("name")[0].value;
    var b=document.getElementById("out");
    b.innerHTML=a.replace(a,"HAVE A NICE DAY");
}

function fuppercase(){
    var a=document.getElementsByName("name")[0].value;
    var b=document.getElementById("out");
    b.innerHTML=a.toUpperCase();
}

function flowercase(){
    var a=document.getElementsByName("name")[0].value;
    var b=document.getElementById("out");
    b.innerHTML=a.toLowerCase();
}
// function clear(){
//     var a=document.getElementsByid("out");
//     a.value="thank";
// }

