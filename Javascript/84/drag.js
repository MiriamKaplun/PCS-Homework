(function () {
  'use strict';

  let dragging = null; //false;
  let offset;
  /*const theBox = $('.box').mousedown(e => {
    console.log('mousedown');
    dragging = true;
    offset = { x: e.offsetX, y: e.offsetY };
  });*/

  $(document)
    .on('mousedown', '.box', e => {
      console.log('mousedown');
      //dragging = true;
      dragging = $(e.target);
      offset = { x: e.offsetX, y: e.offsetY };
    })
    .mousemove(e => {
      if (dragging) {
        e.preventDefault(); // prevent weird occasional no drag cursor
        console.log('mousemove', e.offsetY, e.offsetX);
        //theBox.css({top: e.pageY - e.offsetY, left: e.pageX - e.offsetX});
        //theBox.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
        dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
      }
    })
    .mouseup(() => {
      if (dragging) {
        console.log('mouseup');
        //dragging = false;
        dragging = null;
      }
    });

  const colorInput = $('#color');
  $('#add').click(() => {
    $('<div class="box"></div>')
      .appendTo($(document.body))
      .css('background-color', colorInput.val());
  });
}());