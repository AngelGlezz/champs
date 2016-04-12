
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 30;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				"preguntas": [
				    {
				      "pregunta": "¿Cuántas Champions League ha ganado el Real Madrid?",
				      "respuestas": [
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "10",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "11",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "8",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién es el jugador con más partidos en Champions League?",
				      "respuestas": [
				        {
				          "respuesta": "Iker Casillas",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Xavi Hernández",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Raúl González",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Fernando Hierro",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué equipos disputaron la final de la temporada 2014-15?",
				      "respuestas": [
				        {
				          "respuesta": "Real Madrid vs Bayern",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Barcelona vs Real Madrid",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Juventus vs Barcelona",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Bayern vs Juventus",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué estadio ha ganado dos Champions el Barcelona?",
				      "respuestas": [
				        {
				          "respuesta": "Olímpico de Berlín",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Stade de France",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Allianz Arena",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Wembley",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué año ganó la Décima el Madrid frente al Atlético?",
				      "respuestas": [
				        {
				          "respuesta": "2010",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2006",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2012",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2014",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Contra qué equipo ganó la Champions el Barcelona en 2006?",
				      "respuestas": [
				        {
				          "respuesta": "Juventus",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ajax",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Arsenal",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Manchester United",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué estadio se jugará la final de la Champions 2015-2016?",
				      "respuestas": [
				        {
				          "respuesta": "Camp Nou",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "San Siro",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Allianz Arena",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Bernabéu",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántas Copas de Europa ha ganado el Benfica?",
				      "respuestas": [
				        {
				          "respuesta": "2",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "5",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Contra qué equipo ganó su última Champions el Bayern?",
				      "respuestas": [
				        {
				          "respuesta": "Barcelona",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Real Madrid",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Valencia",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Dortmund",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál es la mejor posición conseguida por el Atlético en Champions?",
				      "respuestas": [
				        {
				          "respuesta": "Campeón",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cuartos de Final",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Subcampeón",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Semifinal",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Contra qué equipo anotó su mítica volea Zidane?",
				      "respuestas": [
				        {
				          "respuesta": "Bayern Munich",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Bayer Leverkusen",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Ajax",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Benfica",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué jugador del United fue el único en fallar su penal en la final del 2008?",
				      "respuestas": [
				        {
				          "respuesta": "Carrick",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Tévez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Giggs",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cristiano",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Último jugador mexicano en jugar una final de Champions",
				      "respuestas": [
				        {
				          "respuesta": "Rafa Márquez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Chicharito",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Hugo Sánchez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Miguel Layún",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué equipos protagonizaron la única final de Champions de dos partidos?",
				      "respuestas": [
				        {
				          "respuesta": "Atlético vs Bayern",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Madrid vs Bayern",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Atlético vs Real Madrid",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Bayern vs Barcelona",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué año se le denomina Champions League?",
				      "respuestas": [
				        {
				          "respuesta": "1997",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2001",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1995",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1992",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién de los siguientes personajes ha ganado la Champions League como jugador y entrenador?",
				      "respuestas": [
				        {
				          "respuesta": "Mourinho",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Heynckes",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Guardiola",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Laurent Blanc",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién es el futbolista que más veces ha ganado la Champions League?",
				      "respuestas": [
				        {
				          "respuesta": "Raúl",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Messi",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Gento",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Di Stéfano",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántas Champions ha ganado Zlatan?",
				      "respuestas": [
				        {
				          "respuesta": "1",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "0",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál fue el marcador de la última final de Champions?",
				      "respuestas": [
				        {
				          "respuesta": "1-3",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "2-1",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2-3",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "4-1",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Máximo anotador actual de la Champions League",
				      "respuestas": [
				        {
				          "respuesta": "Messi",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Suárez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cristiano",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Di Stéfano",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántas Champions ha ganado el Barcelona?",
				      "respuestas": [
				        {
				          "respuesta": "6",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "9",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "5",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Mexicano que juega en el Benfica?",
				      "respuestas": [
				        {
				          "respuesta": "Miguel Layún",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alan Pulido",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Raúl Jiménez",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Raúl Gudiño",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántos Balones de Oro tiene Lionel Messi?",
				      "respuestas": [
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "6",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "5",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "4",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Actual jugador del PSG?",
				      "respuestas": [
				        {
				          "respuesta": "Thiago Silva",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Ronaldinho",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Neymar",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ezequiel Lavezzi",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Jugador que fue suspendido por morder al rival?",
				      "respuestas": [
				        {
				          "respuesta": "Edinson Cavani",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis Suárez",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Neymar",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Pepe",
				          "tipo": "false"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		})
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";
  	
  	if(aciertos<=10){
	  	aficionado="";
	  	msg="retírate. Ni Manchester United dio tantas penas esta temporada.";
  	}

  	if(aciertos>=11 && aciertos<=15){
	  	aficionado="";
	  	msg="hasta el Porto se quedó más cerca de avanzar…";
  	}

  	if(aciertos>=16 && aciertos<=20){
	  	aficionado="";
	  	msg="¡Me gustas para mi equipo! Yo creo que Luis Enrique te ficharía, para la banca, pero te ficharía";
  	}
  	
  	if(aciertos>=21){
	  	aficionado="";
	  	msg="¡Nivel leyenda! ¡Que te nombren técnico del Madrid para ganar la Onceava!";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: Atletico de Madrid "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " Barcelona primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/");
		window.open("https://twitter.com/share?text="+text+"&hashtags=juanfutbol&url="+url,"","width=500, height=300");

	}else{
		
		
		
	}
	
	});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});
});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


