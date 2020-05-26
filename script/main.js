var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
$(document).ready(function(){


    $("#top").text(numbers[4]);
    $("#top").toggleClass("top");
    
    $("#center").text(numbers[5]);
    $("#center").toggleClass("fadeIn");

    $("#bottom").text(numbers[6]);
    $("#bottom").toggleClass("bottom");

});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  var ind, deger;
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");

  if(data == "top" && ev.target.id == "center"){
    deger = document.getElementById(data).innerHTML;
    ev.target.innerHTML = deger;
    
    ind = (Number(deger) + Number(9)) % 10;
    document.getElementById(data).innerHTML = numbers[ind];

    ind = (Number(deger) + Number(1)) % 10;
    document.getElementById("bottom").innerHTML = numbers[ind];
  }
  else if(data == "top" && ev.target.id == "bottom"){
    deger = document.getElementById(data).innerHTML;
    ev.target.innerHTML = deger;
    
    ind = (Number(deger) + Number(8)) % 10;
    document.getElementById("top").innerHTML = numbers[ind];

    ind = (Number(deger) + Number(9)) % 10;
    document.getElementById("center").innerHTML = numbers[ind];
  }
  else if(data == "center" && ev.target.id == "bottom"){
    deger = document.getElementById(data).innerHTML;
    ev.target.innerHTML = deger;  //bottom degeri
    
    ind = (Number(deger) + Number(8)) % 10;
    document.getElementById("top").innerHTML = numbers[ind];

    ind = (Number(deger) + Number(9)) % 10;
    document.getElementById("center").innerHTML = numbers[ind];
  }
  else if(data == "center" && ev.target.id == "top"){
    deger = document.getElementById(data).innerHTML;
    ev.target.innerHTML = deger;  //top degeri
    
    ind = (Number(deger) + Number(1)) % 10;
    document.getElementById("center").innerHTML = numbers[ind];

    ind = (Number(deger) + Number(2)) % 10;
    document.getElementById("bottom").innerHTML = numbers[ind];
  }
  else if(data == "bottom" && ev.target.id == "center"){
    deger = document.getElementById(data).innerHTML;
    ev.target.innerHTML = deger;  //center degeri
    
    ind = (Number(deger) + Number(9)) % 10;
    document.getElementById("top").innerHTML = numbers[ind];

    ind = (Number(deger) + Number(1)) % 10;
    document.getElementById("bottom").innerHTML = numbers[ind];
  }
  else if(data == "bottom" && ev.target.id == "top"){
    deger = document.getElementById(data).innerHTML;
    ev.target.innerHTML = deger;  //top degeri
    
    ind = (Number(deger) + Number(1)) % 10;
    document.getElementById("center").innerHTML = numbers[ind];

    ind = (Number(deger) + Number(2)) % 10;
    document.getElementById("bottom").innerHTML = numbers[ind];
  }
}

