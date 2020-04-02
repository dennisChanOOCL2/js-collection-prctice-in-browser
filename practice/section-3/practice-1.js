'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var resultArr = [];

  for(var i = 0; i<collectionA.length; i++){
    var str1 = collectionA[i].key;
    var count = collectionA[i].count;
    for(var j = 0; j<objectB.value.length; j++){
      var str2 = objectB.value[j];
      if(str1 === str2){
        collectionA[i].count--;
      }
    }
  }
  var expected = [
    {key: 'a', count: 1},
    {key: 'e', count: 1},
    {key: 'h', count: 2},
    {key: 't', count: 2},
    {key: 'f', count: 1},
    {key: 'c', count: 2},
    {key: 'g', count: 2},
    {key: 'b', count: 2},
    {key: 'd', count: 1}
  ];
  console.log('hi');
  console.log(expected);
  console.log(collectionA);
  return collectionA;
}
