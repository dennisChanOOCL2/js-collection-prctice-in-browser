'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var resultArr = [];

  for(var i = 0; i<collectionA.length; i++){
    var str1 = collectionA[i].key;
    var count = collectionA[i].count;
    for(var j = 0; j<objectB.value.length; j++){
      var str2 = objectB.value[j];
      if(str1 === str2){
        var tmp = parseInt(collectionA[i].count/3);
        collectionA[i].count -= tmp;
      }
    }
  }
  var expected = [
    {key: 'a', count: 2},
    {key: 'e', count: 5},
    {key: 'h', count: 11},
    {key: 't', count: 20},
    {key: 'f', count: 6},
    {key: 'c', count: 8},
    {key: 'g', count: 7},
    {key: 'b', count: 6},
    {key: 'd', count: 4}
  ];

  console.log(expected);
  console.log(collectionA);
  return collectionA;
}
