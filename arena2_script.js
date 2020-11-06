function continuar(){
	
	if(HpAtI>0 && HpAt>0){
    document.getElementById('mensagem').style.display = 'none';
	document.getElementById('continuar').style.display = 'none';
	document.getElementById('menu').style.display = 'block';
	
	} else if(HpAtI<=0 && HpAt<=0){
    document.getElementById('mensagem').style.display = 'none';
	document.getElementById('continuar').style.display = 'none';
	setTimeout(function() {
	 document.getElementById('empate').style.display = 'block';
    }, 500);
	
    } else if(HpAtI<=0){
	document.getElementById('mensagem').style.display = 'none';
	document.getElementById('continuar').style.display = 'none';
	setTimeout(function() {
	  document.getElementById('vitoria').style.display = 'block';
    }, 500);
	
	} else if(HpAt<=0){
	document.getElementById('mensagem').style.display = 'none';
	document.getElementById('continuar').style.display = 'none';
	setTimeout(function() {
	  document.getElementById('derrota').style.display = 'block';
    }, 500);
	
	}
}

function moverI(){
    document.getElementById('oponente2').style.display = 'block';
	document.getElementById('oponente').style.display = 'none';
	document.getElementById('menu').style.display = 'none';
	setTimeout(function() {
      document.getElementById('oponente2').style.display = 'none';
	  document.getElementById('oponente').style.display = 'block';
	  document.getElementById('mensagem').style.display = 'block';
	  document.getElementById('continuar').style.display = 'block';
   }, 2000);
                  }
				  
function mover(){
    document.getElementById('voce2').style.display = 'block';
	document.getElementById('voce').style.display = 'none';
	document.getElementById('menu').style.display = 'none';
	setTimeout(function() {
      document.getElementById('voce2').style.display = 'none';
	  document.getElementById('voce').style.display = 'block';
	  document.getElementById('mensagem').style.display = 'block';
	  document.getElementById('continuar').style.display = 'block';
   }, 2000);
                  }
function fuego(){
    document.getElementById('fuego').style.display = 'block';
	document.getElementById('menu').style.display = 'none';
	setTimeout(function() {
      document.getElementById('fuego').style.display = 'none';
	  document.getElementById('mensagem').style.display = 'block';
	  document.getElementById('continuar').style.display = 'block';
   }, 2000);
                  }

function start(){
    document.getElementById('container').style.display = 'block';
	document.getElementById('voce').style.display = 'block';
    document.getElementById('oponente').style.display = 'block';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('atacar').style.display = 'block';
    document.getElementById('defender').style.display = 'block';
    document.getElementById('fogo').style.display = 'block';
    document.getElementById('apresentacao').style.display = 'none';
                  }
				  
function atacar() {

let acao, Dado;

do{
acao = Math.floor(Math.random() * 3) + 1;
}while(acao==3 && ManaAtI<50);
if(acao==1){ 
                       Dado = Math.floor(Math.random() * 20) + 1;
                       if(Dado == 1)
                       {
                         Dano1 = 10;

                         Dado = Math.floor(Math.random() * 20) + 1;
                         if(Dado == 1)
                         {
                           Dano2 = 10;
                           HpAtI = HpAtI - (2 * Dano1);
                           HpAt = HpAt - (2 * Dano2);
						  
						      document.getElementById('voce3').style.display = 'block';
	                          document.getElementById('voce').style.display = 'none';
	                          document.getElementById('menu').style.display = 'none';
							  document.getElementById('oponente3').style.display = 'block';
	                          document.getElementById('oponente').style.display = 'none';
	                          setTimeout(function() {
                              document.getElementById('voce3').style.display = 'none';
	                          document.getElementById('voce').style.display = 'block';
							  document.getElementById('oponente3').style.display = 'none';
	                          document.getElementById('oponente').style.display = 'block';
	                          document.getElementById('mensagem').style.display = 'block';
	                          document.getElementById('continuar').style.display = 'block';
                              }, 2000);
							  
						   return "Vocês dois se atacaram, mas ambos foram muito desastrados abrindo a guarda durate o ataque então você causou "+Dano1+" de dano, mas por causa da guarda aberta do openente ele ficou com "+HpAtI+" de vida e ele te causou "+Dano2+" de dano, mas por causa da sua guarda aberta você ficou com "+HpAt+" de vida";

						  
						  }
                         else if(Dado == 20)
                         {
                           Dano2 = 400;
                           HpAtI = HpAtI - Dano1;
                           HpAt = HpAt - (2 * Dano2);
						  
						      document.getElementById('voce3').style.display = 'block';
	                          document.getElementById('voce').style.display = 'none';
	                          document.getElementById('menu').style.display = 'none';
							  document.getElementById('oponente3').style.display = 'block';
	                          document.getElementById('oponente').style.display = 'none';
	                          setTimeout(function() {
                              document.getElementById('voce3').style.display = 'none';
	                          document.getElementById('voce').style.display = 'block';
							  document.getElementById('oponente3').style.display = 'none';
	                          document.getElementById('oponente').style.display = 'block';
	                          document.getElementById('mensagem').style.display = 'block';
	                          document.getElementById('continuar').style.display = 'block';
                              }, 2000);
						  
                           return "Vocês dois se atacaram, mas no seu ataque você foi muito desastrado e deixou sua guarda aberta e em contrapartida o seu oponente fez um ataque perfeito então você so causou "+Dano1+" de dano no oponente deixando ele com "+HpAtI+" de vida e ele te causou "+Dano2+" de dano, mas por causa da sua guarda aberta você ficou com "+HpAt+" de vida";

						  
						  }
                          else
                          {
                            Dano2 = (10 * Dado);
                            HpAtI = HpAtI - Dano1;
                            HpAt = HpAt - (2 * Dano2);
						  
						      document.getElementById('voce3').style.display = 'block';
	                          document.getElementById('voce').style.display = 'none';
	                          document.getElementById('menu').style.display = 'none';
							  document.getElementById('oponente3').style.display = 'block';
	                          document.getElementById('oponente').style.display = 'none';
	                          setTimeout(function() {
                              document.getElementById('voce3').style.display = 'none';
	                          document.getElementById('voce').style.display = 'block';
							  document.getElementById('oponente3').style.display = 'none';
	                          document.getElementById('oponente').style.display = 'block';
	                          document.getElementById('mensagem').style.display = 'block';
	                          document.getElementById('continuar').style.display = 'block';
                              }, 2000);
						  
                            return "Vocês dois se atacaram, mas no seu ataque você foi muito desastrado e deixou sua guarda aberta e o seu oponente fez um ataque normal por isso você só causou "+Dano1+" de dano e seu oponente ficou com "+HpAtI+" de vida, já o seu oponente causou "+Dano2+" de dano e por causa da sua guarda aberta você ficou com "+HpAt+" de vida";

						  
						  }
                        }
                        else if (Dado == 20)
                        {
                          Dano1 = 400;

                          Dado = Math.floor(Math.random() * 20) + 1;
                          if(Dado == 1)
                          {
                            Dano2 = 10;
                            HpAtI = HpAtI - (2 * Dano1);
                            HpAt = HpAt - Dano2;
						  
						      document.getElementById('voce3').style.display = 'block';
	                          document.getElementById('voce').style.display = 'none';
	                          document.getElementById('menu').style.display = 'none';
							  document.getElementById('oponente3').style.display = 'block';
	                          document.getElementById('oponente').style.display = 'none';
	                          setTimeout(function() {
                              document.getElementById('voce3').style.display = 'none';
	                          document.getElementById('voce').style.display = 'block';
							  document.getElementById('oponente3').style.display = 'none';
	                          document.getElementById('oponente').style.display = 'block';
	                          document.getElementById('mensagem').style.display = 'block';
	                          document.getElementById('continuar').style.display = 'block';
                              }, 2000);
						  
                            return "Vocês dois se atacaram e você conseguiu fazer um ataque perfeito já o seu oponente foi muito desastrado no ataque dele deixando a sua guarda aberta e por isso você causou "+Dano1+" de dano nele, mas por causa da guarda aberta ele ficou com "+HpAtI+" de vida e ele so te causou "+Dano2+" de dano te deixando com "+HpAt+" de vida";

						  
						  }
                          else if(Dado == 20)
                          {
                            Dano2 = 400;
                            HpAtI = HpAtI - Dano1;
                            HpAt = HpAt - Dano2;
						  
						      document.getElementById('voce3').style.display = 'block';
	                          document.getElementById('voce').style.display = 'none';
	                          document.getElementById('menu').style.display = 'none';
							  document.getElementById('oponente3').style.display = 'block';
	                          document.getElementById('oponente').style.display = 'none';
	                          setTimeout(function() {
                              document.getElementById('voce3').style.display = 'none';
	                          document.getElementById('voce').style.display = 'block';
							  document.getElementById('oponente3').style.display = 'none';
	                          document.getElementById('oponente').style.display = 'block';
	                          document.getElementById('mensagem').style.display = 'block';
	                          document.getElementById('continuar').style.display = 'block';
                              }, 2000);
						  
                            return "Vocês dois se atacaram e ambos conseguiram fazer um ataque perfeito, por isso você causou "+Dano1+" de dano nele deixando-o assim com "+HpAtI+" de vida e ele te causou "+Dano2+" de dano te deixando com "+HpAt+" de vida";

						  
						  }
                          else
                          {
                            Dano2 = (10 * Dado);
                            HpAtI = HpAtI - Dano1;
                            HpAt = HpAt - Dano2;
						  
						      document.getElementById('voce3').style.display = 'block';
	                          document.getElementById('voce').style.display = 'none';
	                          document.getElementById('menu').style.display = 'none';
							  document.getElementById('oponente3').style.display = 'block';
	                          document.getElementById('oponente').style.display = 'none';
	                          setTimeout(function() {
                              document.getElementById('voce3').style.display = 'none';
	                          document.getElementById('voce').style.display = 'block';
							  document.getElementById('oponente3').style.display = 'none';
	                          document.getElementById('oponente').style.display = 'block';
	                          document.getElementById('mensagem').style.display = 'block';
	                          document.getElementById('continuar').style.display = 'block';
                              }, 2000);
						  
                            return "Vocês dois se atacaram e você conseguiu realizar um ataque perfeito e o seu oponente um ataque normal, por isso você causou "+Dano1+" de dano deixando seu oponente com "+HpAtI+" de vida e ele de causou "+Dano2+" de dano te deixando com "+HpAt+" de vida";

						  
						  }
                        }
                        else
                        {
                         Dano1 = (10 * Dado);

                         Dado =Math.floor(Math.random() * 20) + 1;
                         if(Dado == 1)
                         {
                           Dano2 = 10;
                           HpAtI = HpAtI - (2 * Dano1);
                           HpAt = HpAt - Dano2;
						 
						      document.getElementById('voce3').style.display = 'block';
	                          document.getElementById('voce').style.display = 'none';
	                          document.getElementById('menu').style.display = 'none';
							  document.getElementById('oponente3').style.display = 'block';
	                          document.getElementById('oponente').style.display = 'none';
	                          setTimeout(function() {
                              document.getElementById('voce3').style.display = 'none';
	                          document.getElementById('voce').style.display = 'block';
							  document.getElementById('oponente3').style.display = 'none';
	                          document.getElementById('oponente').style.display = 'block';
	                          document.getElementById('mensagem').style.display = 'block';
	                          document.getElementById('continuar').style.display = 'block';
                              }, 2000);
						 
                           return "Vocês dois se atacaram e você realizou um ataque normal ja o seu oponente se atrapalhou no ataque e deixou a guarda aberta com isso você causou "+Dano1+" de dano e por causa da guarda aberta o seu oponente esta com "+HpAtI+" de vida e ele só te causou "+Dano2+" de dano te deixando com "+HpAt+" de vida";

						 
						 }
                         else if (Dado == 20)
                         {
                           Dano2 = 400;
                           HpAtI = HpAtI - Dano1;
                           HpAt = HpAt - Dano2;
						 
						      document.getElementById('voce3').style.display = 'block';
	                          document.getElementById('voce').style.display = 'none';
	                          document.getElementById('menu').style.display = 'none';
							  document.getElementById('oponente3').style.display = 'block';
	                          document.getElementById('oponente').style.display = 'none';
	                          setTimeout(function() {
                              document.getElementById('voce3').style.display = 'none';
	                          document.getElementById('voce').style.display = 'block';
							  document.getElementById('oponente3').style.display = 'none';
	                          document.getElementById('oponente').style.display = 'block';
	                          document.getElementById('mensagem').style.display = 'block';
	                          document.getElementById('continuar').style.display = 'block';
                              }, 2000);
						 
						   return "Vocês dois se atacaram e você realizou um ataque normal e o seu oponente conseguiu realizar um ataque perfeito com isso você causou "+Dano1+" de dano deixando seu oponente com "+HpAtI+" de vida e o seu oponente te causou "+Dano2+" de dano te deixando com "+HpAt+" de vida";

						 
						 }
                         else
                         {
                           Dano2 = (10 * Dado);
                           HpAtI = HpAtI - Dano1;
                           HpAt = HpAt - Dano2;
						  
						      document.getElementById('voce3').style.display = 'block';
	                          document.getElementById('voce').style.display = 'none';
	                          document.getElementById('menu').style.display = 'none';
							  document.getElementById('oponente3').style.display = 'block';
	                          document.getElementById('oponente').style.display = 'none';
	                          setTimeout(function() {
                              document.getElementById('voce3').style.display = 'none';
	                          document.getElementById('voce').style.display = 'block';
							  document.getElementById('oponente3').style.display = 'none';
	                          document.getElementById('oponente').style.display = 'block';
	                          document.getElementById('mensagem').style.display = 'block';
	                          document.getElementById('continuar').style.display = 'block';
                              }, 2000);
							  
							  return "Você e seu inimigo se atacaram, você causou "+Dano1+" de dano nele deixando ele com "+HpAtI+" de vida e ele te causou "+Dano2+" de dano te deixando com "+HpAt+" de vida";
						  
						  }
                        }
}
                else if(acao==2)
				{
                       Dado = Math.floor(Math.random() * 20) + 1;
                       Dano1 = Dado;
                       if (Dano1 == 1)
                       {
                         Dado = Math.floor(Math.random() * 20) + 1;
                         DefesaI = Dado;

                         if (DefesaI == Dano1)
                         {
						 
						     document.getElementById('voce2').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
							 document.getElementById('oponente4').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('voce2').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
							   document.getElementById('oponente4').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
						 
                           return "Você foi atacar o seu oponente, mas acabou se atrapalhando e com isso ele se defendeu perfeitamente negando todo o dano e continuando com "+HpAtI+" de vida";

						 
						 }
                         else if (DefesaI > Dano1)
                         {
                           Dano2 = DefesaI - 1;
                           HpAt = HpAt - (2 * Dano2);
						    
							 document.getElementById('voce2').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
							 document.getElementById('oponente4').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('voce2').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
							   document.getElementById('oponente4').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
						 
                           return "Você foi atacar o seu oponente, mas acabou se atrapalhando e deixou a guarda aberta com isso o seu oponente conseguiu se defender do seu ataque e te contra-atacou te causando "+Dano2+" de dano e te deixando com "+HpAt+" de vida";

						 
						 }
                       }
                       else if (Dano1 == 20)
                       {
                         Dado = Math.floor(Math.random() * 20) + 1;
                         DefesaI = Dado;
                         if (DefesaI == Dano1)
                         {
						             
			                 document.getElementById('voce2').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
							 document.getElementById('oponente4').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('voce2').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
							   document.getElementById('oponente4').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
									 
                           return "Você foi atacar o seu oponente e realizou um ataque perfeito, mas o seu oponente tambem é muito habilidoso e ele consguiu defender perfeitamente o seu golpe tomando nenhum dano e continuando com "+HpAtI+" de vida";

									 
									 }
                         else if (DefesaI < Dano1)
                         {
                          Dano1 = 400 - (10 * DefesaI);
                          HpAtI = HpAtI - Dano1;
						             
                             document.getElementById('voce2').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
							 document.getElementById('oponente4').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('voce2').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
							   document.getElementById('oponente4').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);								
								
                          return "Você foi atacar o seu oponente e realizou um ataque perfito com isso seu oponente foi tentar se defender, mas não conseguiu absorver todo o impacto sofrendo "+Dano1+" de dano e ficando com "+HpAtI+" de vida";

								
									 }
                        }
                        else
                        {
                           Dado =Math.floor(Math.random() * 20) + 1;
                           DefesaI = Dado;
                           if (DefesaI < Dano1)
                           {
                             Dano1 = (10 * Dano1) - (10 * DefesaI);
                             HpAtI = HpAtI - Dano1;
						                
							 document.getElementById('voce2').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
							 document.getElementById('oponente4').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('voce2').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
							   document.getElementById('oponente4').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
										
                             return "Você foi atacar o seu oponente e realizou um ataque normal e com isso ele foi se defender, mas não conseguiu absorver todo o impacto sofrendo "+Dano1+" de dano e ficando com "+HpAtI+" de vida";

										
										}
                           else if (DefesaI == Dano1)
                           {
                             return "Você foi atacar o seu oponente e realizou um ataque normal, mas ele conseguiu se defender perfeitamente";
						                
							 document.getElementById('voce2').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
							 document.getElementById('oponente4').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('voce2').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
							   document.getElementById('oponente4').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
										
                             return "Você foi atacar o seu oponente e realizou um ataque normal, mas ele conseguiu se defender perfeitamente";

										
										}
                           else if (DefesaI > Dano1)
                           {
                           Dano2 = (10 * DefesaI) - (10 * Dano1);
                           HpAt = HpAt - Dano2;
						              
                             document.getElementById('voce2').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
							 document.getElementById('oponente4').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('voce2').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
							   document.getElementById('oponente4').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);

                           return "Você foi atacar o seu oponente e realizou um ataque normal, mas acaba que ele conseguiu se defender e viu uma brecha no seu ataque oque o possibilitou realizar um contra-ataque te causando "+Dano2+" de dano te deixando assim com "+HpAt+" de vida";


									  }

                        }
				        }
                else if(acao==3 && ManaAtI>=50)
				        { 
                       ManaAtI = ManaAtI - 50;
                       Dano2 = 200;
                       Dado = Math.floor(Math.random() * 20) + 1;
                       if (Dado == 1)
                       {
                         Dano1 = 10;
                         HpAtI = HpAtI - Dano1;
                         HpAt = HpAt - (2 * Dano2);
					              
							 document.getElementById('voce2').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
							 document.getElementById('fuegoI2').style.display = 'block';
							 setTimeout(function() {
                               document.getElementById('fuegoI2').style.display = 'none';
                             }, 500);
	                         setTimeout(function() {
                               document.getElementById('voce2').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
                         return "Você foi atacar o seu oponente, mas foi muito desastrado deixando sua guarda aberta com isso e você so causou "+Dano1+" de dano nele o deixando com "+HpAtI+" de vida, ja o seu oponente te atacou com uma bola de fogo te causou "+Dano2+" de dano, mas por causa da sua guarda aberta você ficou com "+HpAt+" de vida e por causa da bola de fogo ele ficou com "+ManaAtI+" de mana";

								  }
                       else if(Dado == 20)
                       {
                         Dano1 = 400;
                         HpAtI = HpAtI - Dano1;
                         HpAt = HpAt - Dano2;
					              
							 document.getElementById('voce2').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
							 document.getElementById('fuegoI2').style.display = 'block';
							 setTimeout(function() {
                               document.getElementById('fuegoI2').style.display = 'none';
                             }, 500);
	                         setTimeout(function() {
                               document.getElementById('voce2').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
								  
                         return "Você foi atacar o seu oponente e conseguiu realizar um ataque perfeito causando "+Dano1+" de dano e o deixando com "+HpAt+" de vida, mas logo em seguida ele te mandou uma bola de fogo te causando "+Dano2+" de dano e te deixando com "+HpAtI+" de vida e com tudo isso ele ficou com "+ManaAtI+" de mana";

								  
								  }
                       else
                       {
                         Dano1 = (10 * Dado);
                         HpAtI = HpAtI - Dano1;
                         HpAt = HpAt - Dano2;
					              
							 document.getElementById('voce2').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
							 document.getElementById('fuegoI2').style.display = 'block';
							 setTimeout(function() {
                               document.getElementById('fuegoI2').style.display = 'none';
                             }, 500);
	                         setTimeout(function() {
                               document.getElementById('voce2').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
								  
                         return "Você foi atacar seu oponente e realizou um golpe normal causando "+Dano1+" de dano e o deixando com "+HpAtI+" de vida, mas logo em seguida ele te atacou com uma bola de fogo te causando "+Dano2+" de dano e te deixando com "+HpAt+" de vida e ficando com "+ManaAtI+" de mana";

								  
								  }
                }
}

function defender() {

let acao, Dado;

do{
acao = Math.floor(Math.random() * 3) + 1;
}while(acao==3 && ManaAtI<50);
if(acao==1){ 

                       Dado = Math.floor(Math.random() * 20) + 1;
                       Dano2 = Dado;

                       if(Dano2 == 1)
                       {
                         Dado = Math.floor(Math.random() * 20) + 1;
                         Defesa = Dado;
                         if (Defesa == Dano2)
                         {
							 document.getElementById('oponente2').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
							 document.getElementById('voce4').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('oponente2').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
							   document.getElementById('voce4').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
                           return "O seu oponente foi te atacar, mas acaba que ele foi meio desastrado no golpe e com isso você conseguiu defende-lo perfeitamente continuando com "+HpAt+" de vida";
                         }
                         else if (Defesa > Dano2)
                         {
                           Dano1 = (10 * Defesa) - (10 * Dano2);
                           HpAtI = HpAtI - (2 * Dano1);
						     document.getElementById('oponente2').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
							 document.getElementById('voce4').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('oponente2').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
							   document.getElementById('voce4').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
                           return "O seu oponente foi te atacar, mas acaba que ele foi muito desastrado no golpe e com isso você conseguiu se defender e o contra-atacou causando "+Dano1+" de dano e o deixando com "+HpAtI+" de vida";   
                         }
                        }
                        else if(Dano2 == 20)
                        {
                           Dado = Math.floor(Math.random() * 20) + 1;
                           Defesa = Dado;
                           if (Defesa == Dano2)
                           {
							 document.getElementById('oponente2').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
							 document.getElementById('voce4').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('oponente2').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
							   document.getElementById('voce4').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
                             return "O seu oponente foi te atacar e ele realizou um ataque perfeito, mas acaba que você tambem é muito habilidoso e conseguiu se defender desse ataque perfeitamente continuando com "+HpAt+" de vida";
                           }
                           else if (Defesa < Dano2)
                           {
                             Dano2 = 400 - (10 * Defesa);
                             HpAt = HpAt - Dano2;
							 document.getElementById('oponente2').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
							 document.getElementById('voce4').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('oponente2').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
							   document.getElementById('voce4').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
                             return "O seu oponente foi te atacar e ele realizou um ataque perfeito e com isso você foi tentar se defender, mas não conseguiu absorver todo o impacto tomando "+Dano2+" de dano e ficando com "+HpAt+" de vida";
                           }
                        }
                        else
                        {
                           Dado = Math.floor(Math.random() * 20) + 1;
                           Defesa = Dado;
                           if (Defesa < Dano2)
                           {
                             Dano2 = (10 * Dano2) - (10 * Defesa);
                             HpAt = HpAt - Dano2;
							 document.getElementById('oponente2').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
							 document.getElementById('voce4').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('oponente2').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
							   document.getElementById('voce4').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
                             return "O seu oponente foi te atacar e ele realizou um ataque normal e com isso você foi tentar se defender, mas não conseguiu absorver todo o impacto tomando "+Dano2+" de dano e ficando com "+HpAt+" de vida";
                           }
                           else if (Defesa == Dano2)
                           {
							 document.getElementById('oponente2').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
							 document.getElementById('voce4').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('oponente2').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
							   document.getElementById('voce4').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
                             return "O seu oponente foi te atacar e com isso você foi se defender se protegendo perfeitamente fazendo você continuar com "+HpAt+" de vida";
                           }
                           else if (Defesa > Dano2)
                           {
                             Dano1 = (10 * Defesa) - (10 * Dano2);
                             HpAtI = HpAtI - Dano1;
							 document.getElementById('oponente2').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
							 document.getElementById('voce4').style.display = 'block';
	                         document.getElementById('voce').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
	                         setTimeout(function() {
                               document.getElementById('oponente2').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
							   document.getElementById('voce4').style.display = 'none';
	                           document.getElementById('voce').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
                             return "O seu oponente foi te atacar e realizou um ataque normal e com isso você conseguiu se defender perfeitamente e observou uma brecha na sua guarda te permetindo um contra-ataque e com isso você causou "+Dano1+" de dano nele o deixando com "+HpAtI+" de vida";
                           }
                        }
  
                }
                else if(acao==2){ 
				        document.getElementById('voce4').style.display = 'block';
	                    document.getElementById('voce').style.display = 'none';
						document.getElementById('oponente4').style.display = 'block';
	                    document.getElementById('oponente').style.display = 'none';
	                    document.getElementById('menu').style.display = 'none';
	                    setTimeout(function() {
						  document.getElementById('voce4').style.display = 'none';
	                      document.getElementById('voce').style.display = 'block';
						  document.getElementById('oponente4').style.display = 'none';
	                      document.getElementById('oponente').style.display = 'block';
	                      document.getElementById('mensagem').style.display = 'block';
	                      document.getElementById('continuar').style.display = 'block';
                        }, 1000);
                       return "Tanto você quanto seu oponente se defenderam e ninguem se atacou logo você continuou com "+HpAt+" de vida e o seu oponente com "+HpAtI+"";
                }
                else if(acao==3){ 
                        ManaAtI = ManaAtI - 50;
                        Dano2 = 200;
                        HpAt = HpAt - Dano2;
						document.getElementById('fuegoI').style.display = 'block';
						document.getElementById('voce4').style.display = 'block';
						document.getElementById('voce').style.display = 'none';
	                    document.getElementById('menu').style.display = 'none';
	                    setTimeout(function() {
                          document.getElementById('fuegoI').style.display = 'none';
						  document.getElementById('voce4').style.display = 'none';
	                      document.getElementById('voce').style.display = 'block';
	                      document.getElementById('mensagem').style.display = 'block';
	                      document.getElementById('continuar').style.display = 'block';
                        }, 2000);
                        return "Você foi se defender, mas acaba que o seu oponente te atacou com uma bola de fogo e com isso você não conseguiu se proteger tomando "+Dano2+" de dano ficando logo com "+HpAt+" de vida e com isso seu oponente tem "+ManaAtI+" de mana";
                }
}

function fuego() {

let acao, Dado;

if(ManaAt<50){ 
	                    document.getElementById('menu').style.display = 'none';
	                    setTimeout(function() {
	                      document.getElementById('mensagem').style.display = 'block';
	                      document.getElementById('continuar').style.display = 'block';
                        }, 500);
               return "Você não pode usar esse feitiço pois so tem "+ManaAt+" de mana";
        }else if(ManaAt>=50){
      ManaAt = ManaAt - 50;
      Dano1 = 200;
      do{
      acao = Math.floor(Math.random() * 3) + 1;
      }while (acao == 3 && ManaAtI < 50);
	  
        if(acao==1){ 
               Dado = Math.floor(Math.random() * 20) + 1;
               if(Dado == 1)
               {
                 Dano2 = 10;
                 HpAt = HpAt - Dano2;
                 HpAtI = HpAtI - (2*Dano1);
				 
				             document.getElementById('oponente2').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
							 document.getElementById('fuego2').style.display = 'block';
							 setTimeout(function() {
                               document.getElementById('fuego2').style.display = 'none';
                             }, 500);
	                         setTimeout(function() {
                               document.getElementById('oponente2').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
                 return "O seu oponente foi te atacar, mas foi muito desastrado e deixou a guarda aberta e com isso ele so causou "+Dano2+" de dano te deixando com "+HpAt+" de vida e você aproveitou e logo em seguida você atirou uma bola de fogo causando "+Dano1+" de dano, mas por causa da guarda aberta ele ficou com "+HpAtI+" de vida e agora você tem "+ManaAt+" de mana";
               }
               else if (Dado == 20)
               {
                 Dano2 = 400;
                 HpAt = HpAt - Dano2;
                 HpAtI = HpAtI - Dano1;
				 
				             document.getElementById('oponente2').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
							 document.getElementById('fuego2').style.display = 'block';
							 setTimeout(function() {
                               document.getElementById('fuego2').style.display = 'none';
                             }, 500);
	                         setTimeout(function() {
                               document.getElementById('oponente2').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
                 return "Você jogou uma bola de fogo no seu oponente o causando "+Dano1+" de dano e com isso ele ficou com "+HpAtI+" de vida e agora você tem "+ManaAt+" de mana, mas logo em seguida ele te atacou realizando um ataque perfeito te causando "+Dano2+" de dano e te deixando com "+HpAt+" de vida";
               }
               else
               {
                 Dano2 = (10 * Dado);
                 HpAt = HpAt - Dano2;
                 HpAtI = HpAtI - Dano1;
				 
				             document.getElementById('oponente2').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
	                         document.getElementById('menu').style.display = 'none';
							 document.getElementById('fuego2').style.display = 'block';
							 setTimeout(function() {
                               document.getElementById('fuego2').style.display = 'none';
                             }, 500);
	                         setTimeout(function() {
                               document.getElementById('oponente2').style.display = 'none';
	                           document.getElementById('oponente').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
                 return "Você jogou uma bola de fogo no seu oponente o causando "+Dano1+" de dano e com isso ele ficou com "+HpAtI+" de vida e agora você tem "+ManaAt+" de mana, mas logo em seguida ele te atacou realizando um golpe normal te causando "+Dano2+" de dano e te deixando com "+HpAt+" de vida";
               }
        }
        else if(acao==2){ 
               HpAtI = HpAtI - Dano1;
			   
	                         document.getElementById('menu').style.display = 'none';
							 document.getElementById('fuego').style.display = 'block';
							 document.getElementById('oponente4').style.display = 'block';
	                         document.getElementById('oponente').style.display = 'none';
	                         setTimeout(function() {
							   document.getElementById('fuego').style.display = 'none';
							   document.getElementById('oponente4').style.display = 'none';
	                         document.getElementById('oponente').style.display = 'block';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
               return "Você jogou uma bola de fogo no seu oponente e ele tentou se defender porem foi em vão e com isso você causou "+Dano1+" de dano o deixando com "+HpAtI+" de vida e você agora tem "+ManaAt+" de mana";
        }
        else if(acao==3){ 
               ManaAtI = ManaAtI - 50;
               Dano2 = 200;
               HpAt = HpAt - Dano1;
               HpAtI = HpAtI - Dano2;
			                 document.getElementById('menu').style.display = 'none';
							 document.getElementById('fuego').style.display = 'block';
							 document.getElementById('fuegoI').style.display = 'block';
	                         setTimeout(function() {
							   document.getElementById('fuego').style.display = 'none';
							   document.getElementById('fuegoI').style.display = 'none';
	                           document.getElementById('mensagem').style.display = 'block';
	                           document.getElementById('continuar').style.display = 'block';
                             }, 2000);
               return "Tanto você quanto seu oponente jogaram uma bola de fogo um no outro e você causou "+Dano1+" de dano no seu oponente o deixando com "+HpAtI+" de vida e com isso você tem "+ManaAt+" de mana e ele tambem te causou "+Dano2+" de dano te deixando com "+HpAt+" de vida e ele agora tem "+ManaAtI+" de mana";
        }
   }
}