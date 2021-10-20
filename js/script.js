


const firstname = prompt('Qual è il tuo nome?');
const surname = prompt('Ed il tuo cognome?');
const prefColor = prompt('Qual è il tuo colore preferito?');
const endYear = parseInt('21');
const details = firstname+surname+prefColor+endYear

console.log(firstname);
console.log(surname);
console.log(prefColor);

document.getElementById('details').innerHTML = (firstname+surname+prefColor+endYear);


document.getElementById('password').innerHTML = 
`
  Password: ${firstname}${surname}${prefColor};
`;