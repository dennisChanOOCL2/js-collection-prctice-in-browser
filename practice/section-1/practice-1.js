'use strict';

function collectSameElements(collectionA, collectionB) {

  var result = [];

  for(var i = 0; i<collectionA.length; i++){
    var str1 = collectionA[i];
    for(var j = 0; j<collectionB.length; j++){
      var str2 = collectionB[j];
      if(str1 === str2) {
        result.push(str2);
      }
    }
  }


  return result;
}
