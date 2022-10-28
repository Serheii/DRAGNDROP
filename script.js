"use strict";

let img = document.getElementsByTagName('img');
    
    // img.forEach(element => {
<<<<<<< HEAD
=======
    //     element.style.position = 'absolute';
        // element.setAttribute('position', 'absolute');
>>>>>>> 821e0705075798aaff2f86f088e96623c299fd3b
    //     console.log(element);
    // });
        
    window.addEventListener( 'load', abs );

    function abs() {
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

function mouseDown(eo) {
    eo=eo||window.event;
    eo.preventDefault();
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
>>>>>>> 821e0705075798aaff2f86f088e96623c299fd3b
            document.onmousemove = null;
            }
}