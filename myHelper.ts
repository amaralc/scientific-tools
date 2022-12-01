const listOfMembers = [
  {
    name: 'john',
    age: 20,
  },
  {
    name: 'ana',
    age: 27,
  },
  {
    name: 'maria',
    age: 25,
  },
];

const orderedListOfAges = listOfMembers.map((member) => member.age).sort();
