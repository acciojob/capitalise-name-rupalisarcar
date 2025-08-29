//your JS code here. If required.
function changeUpperCase(){
	const personName= document.getElementById("fname");
	//console.log(personName)
	if(personName){
		personName.value = personName.value.toUpperCase()
	}
}
changeUpperCase();
