var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

// Only change code below this line
function updateRecords(id, prop, value) 
{
  //console.log(collection[id].hasOwnProperty("tracks"));

 if(id == 2548 || id == 2468 || id == 1245 || id == 5439)
 {
    if(prop == "album" || prop == "artist")
    {
      if(value != "")
      {
        collection[id][prop] = value;
      } 
      else
      {
        delete collection[id][prop];
      }
    }
    else if(prop == "tracks")
    {
      if((collection[id].hasOwnProperty("tracks")) && value == "")
      {
        delete collection[id][prop];
      }
      else if(collection[id].hasOwnProperty("tracks"))
      {
        collection[id][prop].push(value);
      }
      else
      {
        collection[id][prop] = [value];
      }
    }
  }

  return collection;
}

// Alter values below to test your code
updateRecords(1245, "album", "Riptide");
console.log(collection);

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
