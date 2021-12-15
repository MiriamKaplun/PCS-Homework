(function () {
  'use strict';
 
  const leftear = $('#parts').append('<img class="pic" src="images/leftear.png"></img>');
  const eyeGlasses = $('#parts').append('<img class="pic" src="images/eyesGlasses.png"></img>');
  const mouth = $('#parts').append('<img class="pic" src="images/mouth.png"></img>');
  const rightear = $('#parts').append('<img class="pic" src="images/rightear.png"></img>');
  const nose = $('#parts').append('<img class="pic" src="images/nose.png"></img>');

  let nextZIndex = 1;

  let dragging = null; //false;
  let offset;

  const parts1 = [leftear, eyeGlasses, mouth, rightear, nose];

 function partLocation (location) {
    parts1.forEach(part => {
      console.log(part[0]);
      //part.localStorage.setItem('location', JSON.stringify(location));
    });
  }

  //const partLocation1 = JSON.parse(localStorage.getItem('partLocation1')) || [];

  $(document)
    .on('mousedown', '.pic', e => {
      console.log('mousedown');
      dragging = $(e.target);
      offset = { x: e.offsetX, y: e.offsetY };
      dragging.css({ zIndex: nextZIndex++ });
    })
    .mousemove(e => {
      if (dragging) {
        e.preventDefault(); // prevent weird occasional no drag cursor
        console.log('mousemove', e.offsetY, e.offsetX);
        dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
      }
    })
    .mouseup(e => {
      if (dragging) {
        console.log('mouseup');
        dragging = null;
        const position = { top: e.pageY - offset.y, left: e.pageX - offset.x };
        console.log(position);
        localStorage.setItem('position', JSON.stringify(position));
        partLocation(position);
        /*partLocation1.forEach (part2 => {
           
        });*/
      }
    });
}());