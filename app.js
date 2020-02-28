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
if (confirm ("vouler-vous faire un sondage aprés examen"))
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