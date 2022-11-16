var element =[document.getElementById("myprogressBar"),document.getElementById("myprogressBar2"),document.getElementById("myprogressBar3"),document.getElementById("myprogressBar4"), ];
var width = 1;
var ct = 0;
var bd = document.getElementById("img")
var identity = setInterval(scene, 25);
function scene() {

  if (width >= 100) {
    clearInterval(identity);
  } else {
      
    width++; 
    element[ct].style.width = width + '%'; 

      if (width == 100){
          width = 1;
          element[ct].style.width ="0";
          ct++
      }
      if(ct == 0){
          bd.style.cssText = 
          `width: 500px;
          height: 500px;
          background: url("banner.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position:center`
      }else if(ct==1){
          bd.style.cssText = 
          `width: 500px;
          height: 500px;
          background: url("banner01.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position:center`
      }else if(ct==2){
          bd.style.cssText = 
          `width: 500px;
          height: 500px;
          background: url("banner02.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position:center`
      }else if(ct==3){
          bd.style.cssText = 
          `width: 500px;
          height: 500px;
          background: url("banner03.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position:center`
      }

      if (ct == 4){
          ct = 0;
      }

  }
}