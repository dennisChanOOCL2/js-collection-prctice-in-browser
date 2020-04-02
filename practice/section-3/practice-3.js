'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionA_Arr = [];
  for(var i = 0; i<collectionA.length; i++){

    var exist = false;
    for(var j = 0; j<collectionA_Arr.length; j++){
      var key = collectionA_Arr[j].key;
      if(key === collectionA[i]){
        collectionA_Arr[j].count++;
        exist = true;
      }
    }
    if(!exist){
      collectionA_Arr.push({key : collectionA[i], count : 1});
    }
  }

  for(var i = 0; i<collectionA_Arr.length; i++){
    var str1 = collectionA_Arr[i].key;
    var count = collectionA_Arr[i].count;
    for(var j = 0; j<objectB.value.length; j++){
      var str2 = objectB.value[j];
      if(str1 === str2){
        var tmp = parseInt(collectionA_Arr[i].count/3);
        collectionA_Arr[i].count -= tmp;
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
  console.log(collectionA_Arr);
  return collectionA_Arr;
}
