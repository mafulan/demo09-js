var oBtn1  = document.getElementById("btn1");
var oDiv1 = document.getElementById("div1");
var  oDiv2  = document.getElementById("div2");
var oColor1 = document.getElementById("color1");
var oColor2 = document.getElementById("color2");
var oColor3 = document.getElementById("color3");
var oWidth1 = document.getElementById("width1");
var oWidth2 = document.getElementById("width2");
var oWidth3 = document.getElementById("width3");
var oHeight1 = document.getElementById("height1");
var oHeight2 = document.getElementById("height2");
var oHeight3 = document.getElementById("height3");
var oBtn2  = document.getElementById("btn2");
var oBtn3  = document.getElementById("btn3");
  oBtn1.onclick = function(){
      oDiv2.style.display="block";
  }
  oColor1.onclick = function(){
      oDiv1.style.backgroundColor="red";
  }
  oColor2.onclick = function(){
    oDiv1.style.backgroundColor="yellow";
}
oColor3.onclick = function(){
    oDiv1.style.backgroundColor="blue";
}
oWidth1.onclick = function(){
    oDiv1.style.width="150px";
}
oWidth2.onclick = function(){
    oDiv1.style.width="200px";
}
oWidth3.onclick = function(){
    oDiv1.style.width="250px";
}
oHeight1.onclick = function(){
    oDiv1.style.height="150px";
}
oHeight2.onclick = function(){
    oDiv1.style.height="200px";
}
oHeight3.onclick = function(){
    oDiv1.style.height="250px";
}
oBtn2.onclick = function(){
    oDiv1.style.backgroundColor="white";
    oDiv1.style.width="100px";
    oDiv1.style.height="100px";

}
oBtn3.onclick = function(){
    oDiv2.style.display="none";
}