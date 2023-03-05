function ejercicio1() {
	
	let utc1 = new Date();

	let utcTxt = utc1.getFullYear() + "-" + utc1.getMonth() + "-" + utc1.getDate()
		+ " " + utc1.getHours() + ":" + utc1.getMinutes() + ":" + utc1.getSeconds();

	document.write("UTC+1 (España)");
	document.write("<br>" + utcTxt);
	console.log(utcTxt);


	utcTxt = utc1.getUTCFullYear() + "-" + utc1.getUTCMonth() + "-" + utc1.getUTCDate() + " "
		+ utc1.getUTCHours() + ":" + utc1.getUTCMinutes() + ":" + utc1.getUTCSeconds();

	document.write("<br><br>UTC+0");
	document.write("<br>" + utcTxt);
	console.log(utcTxt);

	let utc5 = new Date(utc1.getTime() + 4 * 3600 * 1000);

	utcTxt = utc5.getFullYear() + "-" + utc5.getMonth() + "-" + utc5.getDate()
		+ " " + utc5.getHours() + ":" + utc5.getMinutes() + ":" + utc5.getSeconds();

	document.write("<br><br>UTC+5");
	document.write("<br>" + utcTxt);
	console.log(utcTxt);


	let utc8 = new Date(utc1.getTime() + 8 * 3600 * 1000);

	utcTxt = utc8.getFullYear() + "-" + utc8.getMonth() + "-" + utc8.getDate()
		+ " " + utc8.getHours() + ":" + utc8.getMinutes() + ":" + utc8.getSeconds();

	document.write("<br><br>UTC+8");
	document.write("<br>" + utcTxt);
	console.log(utcTxt);
}


function ejercicio2() {
	
	let nombre = prompt("Introduce tu nombre:");
	let apellidos = prompt("Introduce tus apellidos:");

	let menu = prompt("1 = Mostrar nombre\n2 = Mostrar apellidos");
	
	switch (Number(menu)) {
		case 1:
			document.write(nombre);
			break;
		case 2:
			document.write(apellidos);
			break;
		default:
			document.write("[Error] No has introducido una opción valida.")
			break;
	}
}


function ejercicio3() {
	
	console.log("x al ser global sera 71 dentro del if y fuera de este, al llamarse igual y declararse dos veces se sobreescribe el valor 31 que tenia.");
	
	var x = 31;
	if (true) {

		var x = 71;
		console.log(x);
	}
	console.log(x);
}


function ejercicio4() {

	console.log("No se pueden declarar dos variables let con el mismo nombre en el mismo ambito.");
	/*
	switch (x) {
		case 0:
			let foo;
			break;

		case 1:
			let foo;
			break;
	}
	*/
}


function ejercicio5() {
	document.write("La posada<br>se llamaba \"El toro\".")
}


function ejercicio6() {
	
	let num1 = prompt("Introduce el primer número:");
	let num2 = prompt("Introduce el segundo número:");

	if (Number(num1) > Number(num2))
		alert(num1);
	else
		alert(num2);
}


function ejercicio7() {

	let num = 100;
	document.writeln(num.toString());

	let txt = "hola";
	document.write(Number(txt));
	document.write("<br>Un error típico es que salga NaN (not a number) al intentar convertir algo que no puede convertirse a number.")
}


function ejercicio8() {
	
	class Persona {
		constructor(nombre, apellidos, edad, fechaNacimiento){
			this.nombre = nombre;
			this.apellidos = apellidos;
			this.edad = edad;
			this.fechaNacimiento = new Date(fechaNacimiento);
		}
	}
	
	let persona1 = new Persona("Raúl", "Cordero", 19, "2000-01-01");
	
	document.writeln(typeof(persona1));
	document.write(persona1 instanceof Persona);
}