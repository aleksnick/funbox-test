const colors = [
  "islands#blueIcon",
  "islands#redIcon",
  "islands#darkOrangeIcon",
  "islands#nightIcon",
  "islands#darkBlueIcon",
  "islands#pinkIcon",
  "islands#grayIcon",
  "islands#brownIcon",
  "islands#darkGreenIcon",
  "islands#violetIcon"
];

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

export function showPoints(map, points, onDragPoint) {
  ymaps.ready(function() {
    var pointsCollection = new ymaps.GeoObjectCollection(null, {
      // Метку можно перемещать.
      draggable: true
    });

    var linesCollection = new ymaps.GeoObjectCollection(null, {
      // Цвет с прозрачностью.
      strokeColor: "#00000088",
      // Ширину линии.
      strokeWidth: 4
    });

    var onDragEnd = function(i) {
      return function(e) {
        if (onDragPoint) {
          onDragPoint(i, e.originalEvent.target.geometry._coordinates);
        }
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
          preset: colors[i % colors.length]
        }
      );

      point.events.add(["dragend"], onDragEnd(i));
      pointsCollection.add(point);
    }

    showLines(linesCollection, points);

    map.geoObjects.removeAll();
    map.geoObjects.add(linesCollection);
    map.geoObjects.add(pointsCollection);
  });
}

export function showLines(linesCollection, points) {
  for (var i = 1; i < points.length; i++) {
    linesCollection.add(
      new ymaps.Polyline([points[i - 1].geometry, points[i].geometry])
    );
  }
}
