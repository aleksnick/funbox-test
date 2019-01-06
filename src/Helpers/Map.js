export function showMap(root, center, zoom, cb) {
  ymaps.ready(function() {
    // Создание карты.
    var map = new ymaps.Map(root, {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: center,
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: zoom
    });

    if (cb) {
      cb(map);
    }
  });
}

export function showPoints(map, points) {
  ymaps.ready(function() {
    var collection = new ymaps.GeoObjectCollection(null, {
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: "islands#blackStretchyIcon",
      // Цвет с прозрачностью.
      strokeColor: "#00000088",
      // Ширину линии.
      strokeWidth: 4,
    });

    var onDrag = function(i) {
      return function(e) {
        points[i].geometry = e.originalEvent.target.geometry._coordinates;
        showPoints(map, points);
      };
    };

    for (var i = 0; i < points.length; i++) {
      var point = new ymaps.GeoObject(
        {
          // Описание геометрии.
          geometry: {
            type: "Point",
            coordinates: points[i].geometry
          },
          // Свойства.
          properties: {
            // Контент метки.
            iconContent: (i + 1).toString(),
            balloonContent: points[i].displayName
          }
        },
        {
          // Метку можно перемещать.
          draggable: true
        }
      );

      point.events.add(["dragend"], onDrag(i));

      collection.add(point);

      if (i > 0) {
        collection.add(
          new ymaps.Polyline([points[i - 1].geometry, points[i].geometry])
        );
      }
    }

    map.geoObjects.removeAll();
    map.geoObjects.add(collection);
  });
}
