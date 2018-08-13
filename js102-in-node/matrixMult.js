//======================================== 
//      JavaScript 102 Exercises - Node
// =======================================

//----------------------------
//    Matrix Multiplication
//----------------------------

var matrixMultiply = function (matrix1, matrix2) {
    var newMatrix = [ [0, 0], [0, 0] ];
    for (var i = 0; i < matrix1.length; i ++) {
        for (var j = 0; j < matrix1[i].length; j++) {
            for (var k = 0; k < matrix1.length; k++) {
                newMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return newMatrix;
};

exports.multMatrix = matrixMultiply;

// var matrix1 = [ [2, 4], [3, 4] ]
// var matrix2 = [ [5, 2], [3, 1] ]

// console.log(matrixMultiply(matrix1, matrix2));