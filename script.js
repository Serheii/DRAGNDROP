"use strict";

let img = document.getElementsByTagName('img');
        
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

            document.onmouseup = function() {
            elem.style.cursor = 'default';
            document.onmousemove = null;
            document.onmouseup = null;
            }
}