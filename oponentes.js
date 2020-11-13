function oponente(){
	let select = document.getElementById('monstro');
	let oponente1 = select.options[select.selectedIndex].value;
	if(oponente1 =="Goblin"){
		goblin();
	}else if(oponente1 =="Soldado"){
		soldado();
	}else if(oponente1 =="Ciclope"){
		ciclope();
	}
};

function bg(npc,at,def){
	document.getElementById('oponente').style.backgroundImage = "url("+npc+")";
	document.getElementById('oponente2').style.backgroundImage = "url("+at+")";
	document.getElementById('oponente3').style.backgroundImage = "url("+at+")";
	document.getElementById('oponente4').style.backgroundImage = "url("+def+")";
}

function goblin(){
	let goblin={
		HpMaxI: 500,
		HpAtI: 500,
		ManaMaxI: 50,
		ManaAtI: 50,
		DanoAtI: 0.5, 
		DanoMagI: 0.5,
		img: "goblin.png",
		imgat: "goblinat.png",
		imgdef: "goblindef.png",
		};
		
	HpMaxI = goblin.HpMaxI;
    HpAtI = goblin.HpAtI;
    ManaMaxI = goblin.ManaMaxI;
    ManaAtI = goblin.ManaAtI;
	DanoAtI = goblin.DanoAtI;
	DanoMagI = goblin.DanoMagI;
	
	bg(goblin.img,goblin.imgat,goblin.imgdef);

}

function soldado(){
	let soldado={
		HpMaxI: 1000,
		HpAtI: 1000,
		ManaMaxI: 100,
		ManaAtI: 100,
		DanoAtI: 1, 
		DanoMagI: 1,
		img: "soldado.png",
		imgat: "soldadoat.png",
		imgdef: "soldadodef.png",
		};

    HpMaxI = soldado.HpMaxI;
    HpAtI = soldado.HpAtI;
    ManaMaxI = soldado.ManaMaxI;
    ManaAtI = soldado.ManaAtI;
	DanoAtI = soldado.DanoAtI;
	DanoMagI = soldado.DanoMagI;

	bg(soldado.img,soldado.imgat,soldado.imgdef);
	document.getElementById('oponente').style.backgroundSize = "80%";
	document.getElementById('oponente4').style.backgroundSize = "80%";
}

function ciclope(){
	let ciclope={
		HpMaxI: 2000,
		HpAtI: 2000,
		ManaMaxI: 100,
		ManaAtI: 100,
		DanoAtI: 1.5, 
		DanoMagI: 1.5,
		img: "ciclope.png",
		imgat: "ciclopeat.png",
		imgdef: "ciclopedef.png",
		};

    HpMaxI = ciclope.HpMaxI;
    HpAtI = ciclope.HpAtI;
    ManaMaxI = ciclope.ManaMaxI;
    ManaAtI = ciclope.ManaAtI;
	DanoAtI = ciclope.DanoAtI;
	DanoMagI = ciclope.DanoMagI;

	bg(ciclope.img,ciclope.imgat,ciclope.imgdef);
	document.getElementById('oponente').style.width = "200px";
	document.getElementById('oponente2').style.width = "300px";
	document.getElementById('oponente3').style.width = "300px";
	document.getElementById('oponente4').style.width = "250px";
	document.getElementById('oponente').style.height = "200px";
	document.getElementById('oponente2').style.height = "400px";
	document.getElementById('oponente3').style.height = "400px";
	document.getElementById('oponente4').style.height = "200px";
	document.getElementById('oponente').style.backgroundSize = "80%";
	document.getElementById('oponente4').style.backgroundSize = "80%";
	document.getElementById('menu').style.top = "32px";
	document.getElementById('menu').style.left = "340px";
	document.getElementById('mensagem').style.top = "32px";
	document.getElementById('mensagem').style.left = "340px";
	document.getElementById('vitoria').style.top = "32px";
	document.getElementById('vitoria').style.left = "340px";
	document.getElementById('derrota').style.top = "32px";
	document.getElementById('derrota').style.left = "340px";
	document.getElementById('empate').style.top = "32px";
	document.getElementById('empate').style.left = "340px";
}