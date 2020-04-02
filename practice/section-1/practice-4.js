'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];

  for(var i = 0; i<collectionA.length; i++){
    var str1 = collectionA[i].key;
    for(var j = 0; j<objectB.value.length; j++){
      var str2 = objectB.value[j];
      if(str1 === str2) {
        result.push(str2);
      }
    }
  }


  return result;
}
