//===================================== 
//      JavaScript 102 Exercises
// ===================================

//----------------------------
//    Matrix Addition
//---------------------------

var matrixAdd = function (matrix1, matrix2) {
    var newMatrix = [];
    for (var i = 0; i < matrix1.length; i++) {
        newMatrix.push([]);
        for (var j = 0; j < matrix1[i].length; j++) {
            newMatrix[i].push(matrix1[i][j] + matrix2[i][j]);
        }
    }
    return newMatrix;
};

exports.addMatrix = matrixAdd;


// var matrix1 = [ [1, 2, 3, 4], [1, 2], [1, 2, 3], [1, 2, 3, 4] ];
// var matrix2 = [ [3, 4, 5, 6], [5, 6], [5, 6, 7], [5, 6, 7, 8] ];

// console.log(matrixAdd(matrix1, matrix2));