const element = document.getElementsByClassName('slider');
let pos = { top: 0, left: 0, x: 0, y: 0 };

for (const ele of element) {
    const mouseDownHandler = (e) => {
        ele.style.userSelect = 'none';
    
        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };
    
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };
    
    const mouseMoveHandler = (e) => {
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;
    
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };
    
    const mouseUpHandler = ()  =>{
        ele.style.removeProperty('user-select');
    
        document.removeEventListener('mousemove', mouseMoveHandler);
    };
    
    ele.addEventListener('mousedown', mouseDownHandler);   
}


// Sticky for Navigation Bar
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-nav");
  } else {
    header.classList.remove("sticky-nav");
  }

  if (window.pageYOffset > 100) {
    document.getElementById("myHeader").style.height = "50px";
  } else {
    document.getElementById("myHeader").style.height = "90px";
  }
}

