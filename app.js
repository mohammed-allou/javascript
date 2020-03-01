/*let chiffre1 =10;
let chiffre2 ="20";
let chiffre3 = 5;
let genre = true;
var maVariable = chiffre2 != chiffre1 && chiffre1< chiffre2;
alert(maVariable);
console.log(maVariable);
alert(typeof chiffre1);
alert(typeof chiffre2);
alert(typeof genre);*/
/*if (confirm ("vouler-vous faire un sondage aprés examen"))
{ 
let userInput = prompt ('supper ! quelle est ta note d\'examen?');
if (userInput<10 && userInput>0) {
	alert("il faut faire des efforts" );
}
else if (userInput == 10 && userInput<13) {
	alert( 'c\'est pas mal!');
}
else if (userInput>= 13 && userInput<15){
	alert('bien continu!');
}
else{
	alert('trés bien, felicitation!!');
}
}
else{
	alert ("c\'est domage !!!");
}
let monLangage = prompt("quel est votre langage préferer ? ");
 switch (monLangage){
 	case 'php':
 	alert("c\'est bien, mais il y \'a mieux!!");
 	break;
 	case 'ruby':
 	alert('genial');
 	break;
 	case 'js':
 	alert('c\'est que je préfere!!');
 	break;
 	default:
 	alert('desolé!!je ne sais pas encors ce langage');
 }

  do {
 	num1 = parseInt(prompt(" veuillez entrez le nbr 1 :") );
 	}while (isNaN (num1));

 	let num2 = parseInt(prompt("entrez le nbr 2 :"));
 while(isNaN(num2)){
 	num2 = parseInt(prompt("ce n\'est pas un nembre veuillez entrez le nbr 2 :") );
 	 }
 	
 	 let resultat = num1 + num2;
 
 	alert("la resultat est : "+ num1 + "+" + num2 +"=" + resultat );

 for (let repetition =  0;repetition <10; repetition+=3) {
 	console.log(repetition);
 }
*/
 let pseudo = "momo";
 let tableau = ['oujda','berkan', 'ahfir',pseudo,55];
 alert(tableau.indexOf('ahfir'));/*pour afficher l'index de item */
 console.log(tableau);
 console.log(tableau[3]);
 tableau[5]= 'saidia';/*pour ajouter une case */
 console.log(tableau);
 tableau[4] = 'nador';/* modifier une case */
 console.log(tableau);
 tableau.push(['55']);/*ajouter une case à la dernier place */
 console.log(tableau);
 tableau.pop();		  /* supprimer le dernier item*/
 console.log(tableau);
 tableau.shift();	  /* supprimer le premier item*/
 console.log(tableau.length);
 tableau.splice(2,0,'zaio','fezwan');/* (ou se place ,combient d'item supprime," ajouter des valeurs", ...,...)*/
console.log(tableau);

 let fruitPref =[];
 while(true){
 	let promptext = prompt("veuillez entrer votre fruit preferer :");
 	if (promptext != ""){
 		fruitPref.push(promptext);
 	}else{
 		break;
 	}
 	console.log(fruitPref);
 }
 for (var i = 0; i < fruitPref.length; i++) {
 	console.log('index => '+i+'| valeur =>'+fruitPref[i]);

 	let lesFruitsPreferer = fruitPref.join (' et ');/* pour afficher les item en chaine de caractére*/
 console.log('les fruits que j\'aiment sont : '+lesFruitsPreferer);
 }





 
 


 