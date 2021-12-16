(function () {
  'use strict';

  let nextZIndex = 1;

  let dragging = null; //false;
  let offset;

  function partLocation() {
    const parts = $('.pic');
    const partArray = [];
    parts.each((i, p) => {
      console.log(i, p);
      const part = $(p);
      partArray.push({
        src: part.attr('src'),
        top: part.css('top'),
        left: part.css('left'),
        zIndex: part.css('zIndex')
      });
      localStorage.setItem('parts', JSON.stringify(partArray));
    });
  }

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
    .mouseup(() => {
      if (dragging) {
        console.log('mouseup');
        dragging = null;
        //const position = { top: e.pageY - offset.y, left: e.pageX - offset.x };
        //console.log(position);
        //localStorage.setItem('position', JSON.stringify(position));
        partLocation();
      }
    });

  if (localStorage.location) {
    const partsInfo = JSON.parse(localStorage.location);
    partsInfo.forEach(partInfo => {
      $(`img[src="${partInfo.src}"]`).css(/*{
          top: partInfo.top,
          left: partInfo.left,
          zIndex: partInfo.zIndex
        }*/partInfo);
    });
  }

  const cacheParts = localStorage.getItem('parts');
  if (cacheParts) {
    JSON.parse(cacheParts).forEach(part => {
      console.log(part);
      $(`<img class="pic" src="${part.src}">`).css({
        top: part.top,
        left: part.left,
        zIndex: part.zIndex
      }).appendTo("#parts");
    });
  } else {
    $('#parts').append('<img class="pic" src="images/leftear.png">');
    $('#parts').append('<img class="pic" src="images/eyesGlasses.png">');
    $('#parts').append('<img class="pic" src="images/mouth.png">');
    $('#parts').append('<img class="pic" src="images/rightear.png">');
    $('#parts').append('<img class="pic" src="images/nose.png">');
  }
}());