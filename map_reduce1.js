var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' },
];

console.log(officers);


var officersIds = [];
officers.forEach(function (officer) {
  officersIds.push(officer.id);
});

console.log("\n\n");
console.log(officersIds);


var officersIdsx = officers.map(function (officer) {
  return officer.id
});

console.log("\n\n");
console.log(officersIdsx);

var x = officersIdsx.map(function(arg){ return 'Hello ' + arg});

console.log("\n\n");
console.log(x);


/*
[
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
]



[ 20, 24, 56, 88 ]



[ 20, 24, 56, 88 ]



[ 'Hello 20', 'Hello 24', 'Hello 56', 'Hello 88' ]

*/ 