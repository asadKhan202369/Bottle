 

function dom(){
  const canvas = document.querySelector("#home>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00028.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00001.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00003.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00008.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00013.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00018.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00023.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00028.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00033.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00038.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00043.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00048.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00053.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00058.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00063.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00068.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00073.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00078.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00083.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00088.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00093.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00098.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00103.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00108.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00113.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00118.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00123.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00128.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00133.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00138.
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00143.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00148.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00153.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00158.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00163.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00168.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00173.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00178.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00183.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00188.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00193.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00198.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00203.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00208.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00213.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00218.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00223.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00228.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00233.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00238.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00243.webp
  https://www.plasticbean.com/assets/sequences/intro/desktop/PB_Scroll_Test_00248.webp

  
 `;
  return data.split("\n")[index];
}

const frameCount = 52;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:1.8,
      pin:true,
      trigger:"#home",
      // start:"bottom 100%",
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

 

}

dom();

function span(){
  var h1=document.querySelectorAll(".reveal")
  .forEach(function(elem){
      var clutter="";
      elem.textContent.split("").forEach(function(char){
          clutter+=`<span>${char}</span>`;
      })
      elem.innerHTML=clutter;
  })

}
span();

gsap.to("#text h1>span",{
  scrollTrigger:{
    trigger:"#text h1",
    start:"top 50%",
      end:"start 20%",
    scrub:1,
  },
     y:-100,
    opacity:0,
    stagger:.1,
    ease:Expo.easeInout
})


 function hoverdiv(){

    document.querySelector("#blue-wave")
    .addEventListener("click",function(elem){
  
          document.querySelector("#blue-wave").style.height = "85%";
          document.querySelector("#blue-wave .content").style.opacity = "1";
          document.querySelector("#blue-wave .img").style.opacity = "1";
          document.querySelector("#GRS").style.height = "15%";
          document.querySelector("#GRS .content").style.opacity = "0";
          document.querySelector("#GRS .img").style.opacity = "0";

    })


    document.querySelector("#GRS")
    .addEventListener("click",function(elem){
  
          document.querySelector("#blue-wave").style.height = "15%";
          document.querySelector("#blue-wave .content").style.opacity = "0";
          document.querySelector("#blue-wave .img").style.opacity = "0";
          document.querySelector("#GRS").style.height = "85%";
          document.querySelector("#GRS .content").style.opacity = "1";
          document.querySelector("#GRS .img").style.opacity = "1";
       
    })
 }
 

 hoverdiv();

gsap.to("#part3",{
    scrollTrigger:{
      scroller:"body",
      trigger:"#part3",
      start:"top 30%",
      scrub:1,
      pin:true,
    },
    x:0,
    ease:Expo.easeInout
})

gsap.to("#part3 #text3 h1",{
  scrollTrigger:{
    scroller:"body",
    trigger:"#part3",
    start:"top 30%",
    scrub:1,
  },
    x:1050,
    ease:Expo.easeInout
})

gsap.from("#fs svg",{
  opacity:0,
  duration:3
})

var tl = gsap.timeline();

tl.
from("#fs svg",{
  opacity:0,
  scale:0,
  ease:Expo.easeInout,
  duration:2,
})
.to("#fs svg",{
  delay:1,
  y:-150,
  ease:Expo.easeInout,
  duration:.5
})
.to("#fs",{
  height:0
})


function mobilenav(){


    document.querySelector("#menu")
    .addEventListener("click",function(e){
      gsap.to("#mobilenav",{
          x:0,
          ease:Expo.easeInout,
          duration:1
      })
    })

    document.querySelector("#menu")
    .addEventListener("click",function(e){
      gsap.from("#mobilenav #rows .r1",{
        delay:.5,
        x:-1000,
        ease:Expo.easeInout,
        stagger:.1,
        duration:.5
      })
      gsap.to("#mobilenav #contant #icon, #plasticbeanm",{
        delay:1.5,
        opacity:1,
        stagger:.2,
        ease:Expo.easeInout
      })
    })

    document.querySelector("#close")
    .addEventListener("click",function(e){
    
      gsap.to("#mobilenav",{
          x:-1000,
          ease:Expo.easeInout,
          duration:1
      })
      gsap.to("#mobilenav #contant #icon, #plasticbeanm",{
        opacity:0,
        ease:Expo.easeInout
    })

    })

}

mobilenav();


