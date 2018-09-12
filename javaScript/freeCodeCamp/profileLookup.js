var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop)
{
  console.log(contacts[0].hasOwnProperty("firstName"));
  console.log(contacts[0].firstName);

 if(contacts[0].firstName == name && contacts[0].hasOwnProperty("firstName"))
 {
   if(contacts[0].hasOwnProperty(prop))
   {
     return contacts[0][prop];
   }
   else
   {
     return "No such property";
   }
 }
 else if(contacts[1].firstName == name && contacts[1].hasOwnProperty("firstName"))
 {
   if(contacts[1].hasOwnProperty(prop))
   {
     return contacts[1][prop];
   }
   else
   {
     return "No such property";
   }
 }
 else if(contacts[2].firstName == name && contacts[2].hasOwnProperty("firstName"))
 {
   if(contacts[2].hasOwnProperty(prop))
   {
     return contacts[2][prop];
   }
   else
   {
     return "No such property";
   }
 }
 else if(contacts[3].firstName == name && contacts[3].hasOwnProperty("firstName"))
 {
   if(contacts[3].hasOwnProperty(prop))
   {
     return contacts[3][prop];
   }
   else
   {
     return "No such property";
   }
 }
 else
 {
   return "No such contact";
 }
}

lookUpProfile("Akira", "likes");

/* * * * * * * * * * * * * * * * * *
                                   *
                                   *
 * * * * * * * * * * * * * * * * * */

//Other practice programs from freeCodeCamp:

function checkEqual(a, b) {
  return a == b ? "true" : "false";
}

console.log(checkEqual(1, 1));

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}

console.log(findGreater(5,3));

