function personne (nom, age, sexe){
	this.nom = nom;
	this.age =age;
	this.sexe = sexe;

}
let personne1 = new personne ('momo',23,"M");
let personne2 = new personne ('toto',34,"M");
console.log (personne1);
console.log (personne2);
personne1.nom = 'abdou';
console.log (personne1);
