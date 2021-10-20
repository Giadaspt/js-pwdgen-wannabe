
const firstname = prompt('Qual è il tuo nome?');
const surname = prompt('Ed il tuo cognome?');
const prefColor = prompt('Qual è il tuo colore preferito?');
const endYear = parseInt('21');
const details = firstname+surname+prefColor+endYear;
let totLetter = details.length;

console.log(firstname);
console.log(surname);
console.log(prefColor);
console.log(details);


document.getElementById('details').innerHTML = 
`
  ${details}
`;

document.getElementById('password').innerHTML = 
`
  ${totLetter}
`;