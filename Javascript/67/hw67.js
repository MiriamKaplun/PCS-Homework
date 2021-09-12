(function () {
  'use strict';

  const messageBox = get('button');
  const message = get('message');
  const ok = get('ok');

  function get(id) {
    return document.getElementById(id);
  }

  messageBox.addEventListener('click', () => {
    message.style.display = "block";
  });

  ok.addEventListener('click', () => {
    message.style.display = "none";
  });

}());