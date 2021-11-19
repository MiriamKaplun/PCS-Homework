/* global google */
(function () {
  'use strict';

  const userInput = $('#userInput');
  const go = $('#go');
  const list = $('#list');

  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.108847085561855, lng: -74.21764970472604 },
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.Map
  });

  go.click(() => {
    fetch(`http://api.geonames.org/wikipediaSearch?q=${userInput.val()}&maxRows=10&username=mbaskin&type=json`)
      .then(r => r.json())
      .then(info => {
        console.log('ajax got', info);
        list.empty();
        const bounds = new google.maps.LatLngBounds();
        info.geonames.forEach(a => {
          list.append(`<li><h4>${a.title}</h4><img src="${a.thumbnailImg}"></li>`);
          const location = { lat: a.lat, lng: a.lng };
          bounds.extend(location);
          map.fitBounds(bounds);
          new google.maps.Marker({
            position: location,
            map: map,
            title: a.title,
            icon: {
              url: a.thumbnailImg,
              scaledSize: new google.maps.Size(50, 50)
            }
          });
        });
      });
  });
}());