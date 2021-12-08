/* global google */
(function () {
  'use strict';

  function doTimeoutWithPromise(callback, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(callback());
        } catch (e) {
          reject(e);
        }
      }, delay);
    });
  }

  const tagInput = $('#tag');
  const rowsInput = $('#rows');
  const placesList = $('#sidebar ul');

  const infoWindow = new google.maps.InfoWindow();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {
      lat: -25.363882,
      lng: 131.044922
    }
  });

  $('#go').submit(async e => {
    e.preventDefault();

    try {
      const response = await fetch(`http://api.geonames.org/wikipediaSearch?q=${tagInput.val()}&maxRows=${rowsInput.val()}&username=mbaskin&type=json`);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      //console.log(data);

      let selectedPlace;
      const bounds = new google.maps.LatLngBounds();
      data.geonames.forEach(place => {
        const marker = new google.maps.Marker({
          position: {
            lat: place.lat,
            lng: place.lng
          },
          map: map,
          animation: google.maps.Animation.DROP,
          title: place.title,
          icon: place.thumbnailImg ? {
            url: place.thumbnailImg,
            scaledSize: new google.maps.Size(50, 50)
          } : undefined
        });

        marker.addListener('click', () => {
          infoWindow.setContent(`
            <h3>${place.title}</h3>
            <p>${place.summary}</p>
            <br>
            <a target="_blank" href="http://${place.wikipediaUrl}">more info</a>
          `);
          infoWindow.open(map, marker);
        });

        bounds.extend(marker.getPosition());

        const li = $(`
          <li>
            <img src="${place.thumbnailImg}" alt="${place.title}">
            <span>${place.title}</span>
            <div class="summary">${place.summary}</div>
          </li>`)
          .appendTo(placesList)
          .click(async () => {
            if (selectedPlace === place) {
              $('.summary').slideUp('slow');
              selectedPlace = null;
              return;
            }
            selectedPlace = place;
            $('.summary').slideUp('slow');
            li.find('.summary').slideDown('slow');

            const boundsToGoTo = map.getBounds();
            boundsToGoTo.extend(marker.getPosition());
            map.fitBounds(boundsToGoTo);

            // setTimeout(() => map.panTo(marker.getPosition()), 1000);
            // setTimeout(() => map.setZoom(18), 2000);
            /*new Promise((resolve, reject) => {
              setTimeout(() => {
                map.panTo(marker.getPosition());
                setTimeout(() => {
                  resolve();
                }, 1000);
              }, 1000);
            })
            .then(() => map.setZoom(18));*/
            await doTimeoutWithPromise(() => map.panTo(marker.getPosition()), 1000);
            await doTimeoutWithPromise(() => map.setZoom(18), 1000);
          });
      });
      map.fitBounds(bounds);
    }
    catch (error) {
      console.error(error);
    }
  });


  //////////////

  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        google.maps.drawing.OverlayType.RECTANGLE,
      ],
    },
    markerOptions: {
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    },
    circleOptions: {
      fillColor: "#ffff00",
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1,
    },
  });

  drawingManager.setMap(map);

  let markers = [];
  let circles = [];
  let polygons = [];

  /*google.maps.event.addListener(drawingManager, 'overlaycomplete', e => {
    console.log(e.overlay.position.lat(), e.overlay.position.lng());
    markers.push({ lat: e.overlay.position.lat(), lng: e.overlay.position.lng() });
    localStorage.setItem('markers', JSON.stringify(markers));
  });*/

  google.maps.event.addListener(drawingManager, 'markercomplete', marker => {
    const markerLoc = marker.getPosition();
    markers.push(markerLoc);
    localStorage.setItem('markers', JSON.stringify(markers));
  });

  google.maps.event.addListener(drawingManager, 'circlecomplete', circle => {
    const circleLoc = { center: circle.getCenter(), radius: circle.getRadius() };
    circles.push(circleLoc);
    localStorage.setItem('circles', JSON.stringify(circles));
  });

  google.maps.event.addListener(drawingManager, 'polygoncomplete', polygon => {
    const polygonLoc = polygon.getBounds();
    polygons.push(polygonLoc);
    localStorage.setItem('polygons', JSON.stringify(polygons));
  });

  const markerData = localStorage.getItem('markers');
  if (markerData) {
    markers = JSON.parse(localStorage.getItem('markers'));
    markers.forEach(place => {
      new google.maps.Marker({
        position: {
          lat: place.lat,
          lng: place.lng
        },
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Your marker',
        icon: {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          scaledSize: new google.maps.Size(50, 50)
        }
      });
    });
  }

  const circleData = localStorage.getItem('circles');
  if (circleData) {
    circles = JSON.parse(localStorage.getItem('circles'));
    circles.forEach(place => {
      new google.maps.Circle({
        radius: place.radius,
        center: place.center,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Your circle',
      });
    });
  }

  const polygonData = localStorage.getItem('polygons');
  if (polygonData) {
    polygons = JSON.parse(localStorage.getItem('polygons'));
    polygons.forEach(place => {
      new google.maps.Polygons({
        bounds: place.bounds,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Your polygon',
      });
    });
  }

}());