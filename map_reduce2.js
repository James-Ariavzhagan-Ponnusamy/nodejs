var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

console.log("\n\n\n")
console.log(pilots)

var totalYears = pilots.reduce(function (accumulator, pilot) {
  return accumulator + pilot.years;
}, 0);

console.log("\n\n\n")
console.log(totalYears)


var totalYears1 = pilots.reduce((accumulator, pilot) => accumulator + pilot.years + 10,0)

console.log("\n\n\n")
console.log(totalYears1)


/*
D:\james\node\w>node  map_reduce2.js




[
  { id: 10, name: 'Poe Dameron', years: 14 },
  { id: 2, name: "Temmin 'Snap' Wexley", years: 30 },
  { id: 41, name: 'Tallissan Lintra', years: 16 },
  { id: 99, name: 'Ello Asty', years: 22 }
]




82




122
*/