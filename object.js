var person={
    fname:"Abhiram",
    lname:"Prahlad",
    age:25,
    ownsCar:true
}

console.log(person);

//dot notation
console.log("fname vth dot notation => "+person.fname);

//bracket notation
console.log("fname vth bracket notation => "+person['lname']);

//nested object
var p={
    fnmae:"Steve",
    lname:"Ronger",
    age:102,
    isAvenger:true,
    frnd:["Abhi","Priya","Sanju","Jenny"],
    address:{
        state:"Michigan",
        city:{
            name:"Brooklyn",
            pincode:509202
        }
    }
}

console.log(p.frnd[0])

console.log(p.address.city.name)

p.isAvenger=false

console.log(p.isAvenger)

//new Properties adding

p.movies=["hi","bye","c u"]

console.log(p)

//movies accessible

console.log(p.movies[0])

//delete property

delete p.age

console.log(p)

/*o/p=>{ fname: 'Abhiram', lname: 'Prahlad', age: 25, ownsCar: true }
fname vth dot notation => Abhiram
fname vth bracket notation => Prahlad
Abhi
Brooklyn
false
{
  fnmae: 'Steve',
  lname: 'Ronger',
  age: 102,
  isAvenger: false,
  frnd: [ 'Abhi', 'Priya', 'Sanju', 'Jenny' ],
  address: { state: 'Michigan', city: { name: 'Brooklyn', pincode: 509202 } },
  movies: [ 'hi', 'bye', 'c u' ]
}
hi
{
  fnmae: 'Steve',
  lname: 'Ronger',
  isAvenger: false,
  frnd: [ 'Abhi', 'Priya', 'Sanju', 'Jenny' ],
  address: { state: 'Michigan', city: { name: 'Brooklyn', pincode: 509202 } },
  movies: [ 'hi', 'bye', 'c u' ]
}*/
