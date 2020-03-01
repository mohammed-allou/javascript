function personne (nom, age, sexe){
	this.nom = nom;
	this.age =age;
	this.sexe = sexe;

}
function voiture (fab,an,pro){
	this.fabriquant = fab;
	this.annee = an;
	this.proprietaire = pro;
	this.genererMessage = function(){
		alert(pro.nom +'posede une :'+this.fab +' de '+this.an);
	}
}
let personne1 = new personne ('momo',23,"M");
let personne2 = new personne ('toto',34,"M");
console.log (personne1);
console.log (personne2);
personne1.nom = 'abdou';
console.log (personne1);
let voiture1 = new voiture('kia',2015,personne1);
voiture1.genererMessage();