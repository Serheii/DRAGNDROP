"use strict";

let img = document.getElementsByTagName('img');
    
    // img.forEach(element => {
    //     element.style.position = 'absolute';
        // element.setAttribute('position', 'absolute');
    //     console.log(element);
    // });
        
    // window.onload = abs;
    // document.onload = abs;
    // document.addEventListener('load', abs );
    window.addEventListener( 'load', abs );

    function abs(){
    for (let index = 0; index < img.length; index++) {
        let element = img[index];
        element.style.left = element.offsetLeft + 'px';
        element.style.top = element.offsetTop + 'px';
}
    for (let index = 0; index < img.length; index++) {
    let element = img[index];
    element.style.position = 'absolute';
    element.addEventListener('mousedown', mouseDown);
}
}

function mouseDown(eo){
    eo=eo||window.event;
    let elem = eo.target;
    let offsetL = eo.pageX - parseFloat(elem.style.left);//смещение точки
    let offsetT = eo.pageY - parseFloat(elem.style.top);//   элемента

    document.body.appendChild(elem);

        document.onmousemove = function(eo) {
        eo=eo||window.event;
        elem.style.left = eo.pageX - offsetL + 'px';
        elem.style.top = eo.pageY - offsetT + 'px';
        elem.style.cursor = 'move';
        }
  
            elem.onmouseup = function() {
            document.onmousemove = null;
            elem.onmouseup = null;
            }
}