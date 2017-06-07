var outter = document.getElementById("outter"),
    newObj = document.createElement("img"),
    theImg = localStorage['imgMsg'];

newObj.src = theImg;
outter.appendChild(newObj);
