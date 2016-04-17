function createMatrix(rowc, colc) {
    var matrix = [];

    for (var i = 0; i < rowc; i++) {
        matrix[i] = [];
        for (var j = 0; j < colc; j++) {
            matrix[i][j] = (Math.random() * 100 + 1) ^ 0;
        }
    }

    return matrix;
}


function sumMatrix(mat1, mat2) {
    var resMat = [];
    if (isEqual(mat1, mat2)) {
        throw new TypeError("Matrix dimensions don't match.");
    }
    for (var i = 0; i < mat1.length; i++) {
      resMat[i] = [];
        for (var j = 0; j < mat1[i].length; j++) {
          resMat[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return resMat;
}


function isEqual(mat1, mat2) {
    if (mat1.length !== mat2.length) {
        return false;
    }
    for (var i = 0; i < mat1.length; i++) {
        if (mat1[i].length !== mat2[i].lenth) {
            return false;
        }
    }
    return true;
}
