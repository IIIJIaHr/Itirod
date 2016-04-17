(function() {
  function rect() {
    var i, x, y, usr_x, usr_y;
    var vectors = [];
    var points = [];

    // for (i = 0; i < 4; i++) {
    //     usr_x = parseInt(prompt('x' + i + ': '));
    //     usr_y = parseInt(prompt('y' + i + ': '));

    //     if (isNaN(usr_x) || isNaN(usr_y)) {
    //         throw new Error('Некорректный ввод!');
    //     }

    //     points.push({ x: usr_x, y: usr_y });
    // }

    points = [
      { x: 0, y: 0 },
      { x: 2, y: 2 },
      { x: 6, y: -2 },
      { x: 4, y: -4 },
    ];

    vectors = makeVectors(points);

    if (!isRectangle(vectors)) {
      alert('Не прямоугольник');
      return;
    }

    x = parseInt(prompt('x: '));
    y = parseInt(prompt('y: '));

    inPoly(points, x, y) ? alert("Точка лежит в прямоугольнике") : alert("Точка не лежит в прямоугольнике");
  }

  function isRectangle(vectors) {
    var j;
    var count = 0;
    for (var i = 0; i < 4; i++) {
      i === 3 ? j = 0 : j = i + 1;
      if (scalar(vectors[i], vectors[j]) === 0) {
        count++;
      }
    }
    if (count === 4) {
      return true;
    }
    return false;
  }

  function scalar(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
  }

  function makeVectors(points) {
    var vectors = [];
    for (i = 0; i < 3; i++) {
      vectors.push({
        x: points[i + 1].x - points[i].x,
        y: points[i + 1].y - points[i].y
      });
    }

    vectors.push({
      x: points[0].x - points[3].x,
      y: points[0].y - points[3].y
    });
    return vectors;
  }

  function inPoly(points, x, y) {
    npol = points.length;

    j = npol - 1;
    var c = 0;
    for (i = 0; i < npol; i++) {
      if ((((points[i].y <= y) && (y < points[j].y)) || ((points[j].y <= y) && (y < points[i].y))) &&
        (x > (points[j].x - points[i].x) * (y - points[i].y) / (points[j].y - points[i].y) + points[i].x)) {

        c = !c;
      }
      j = i;
    }
    return c;
  }

  window.rect = rect;

})();
