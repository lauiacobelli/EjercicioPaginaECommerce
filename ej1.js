

		var imagen = 0;
          var slides = [];
          var productos = []
          var prod = 0
          
  
        
        var categoria = document.getElementsByClassName('category');
        var title_product = document.getElementsByClassName('title_product');
        var precio_product = document.getElementsByClassName('price_product');

        var jsonData = JSON.parse(JSON.stringify(json1));
        for (var i = 0; i < jsonData.slides.length; i++) {
            var counter = jsonData.slides[i];
            slides.push(counter.imgName);
        }
        for (var i = 0; i < jsonData.products.length; i++) {
            var counter = jsonData.products[i];
            productos.push(counter);
        }

        function accion_click(tipo) { 
           
            imagen = imagen + tipo;
            if(imagen == jsonData.slides.length) imagen = 0;
            if(imagen == -1) imagen = jsonData.slides.length -1; 
            document.getElementById('foto').src = "images/" + slides[imagen];

            
		}

		
        /*PRODUCTOS*/

       	for(var i = 0; i < jsonData.products.length; i++){

       		
		var numero = i + 1 ;
		var prod = 'product' + numero.toString();
            document.getElementById(prod).getElementsByTagName('img')[0].src = 'images/' + productos[i].image;
            document.getElementById(prod).getElementsByTagName('p')[1].innerHTML = productos[i].title;  
            document.getElementById(prod).getElementsByTagName('p')[0].innerHTML = productos[i].attributes[1].value;
            document.getElementById(prod).getElementsByTagName('p')[2].innerHTML = ('$ ' + productos[i].price.listPrice).strike();
            document.getElementById(prod).getElementsByTagName('p')[3].innerHTML = '$ ' + productos[i].price.sellingPrice;

            if(productos[i].price.listPrice == productos[i].price.sellingPrice){
            		document.getElementById(prod).getElementsByTagName('p')[2].style.visibility = "hidden";
            		document.getElementById(prod).getElementsByTagName('h1')[0].style.visibility = "hidden";
            }

        }
            

        /*CATEGORIAS*/

        var jsonData2 = JSON.parse(JSON.stringify(json2));
        var categoria = [];
    	var ul = document.getElementById('ul-menu');
			
		for (var i = 0; i < jsonData2.menu.categories.length; i++) {
            var counter = jsonData2.menu.categories[i];
            	var numero = i + 1 ;
				var nombreLista = 'cat' + numero.toString();
				var li = document.createElement("LI");
				li.setAttribute('class', nombreLista);
				var a = document.createElement('a');
				a.setAttribute('href', counter.href);
				a.innerHTML = counter.title;
				li.appendChild(a);
				ul.appendChild(li);
			}

				





		/*FILTROS*/	
	
        var filtros = [];
    	for (var i = 0; i < jsonData.filters.length; i++) {
            var counter = jsonData.filters[i];

			filtros.push(counter);
			var numero = i + 1 ;
			var nombreLista = 'filter' + numero.toString();

			var lista = document.getElementById(nombreLista);
			lista.getElementsByTagName('p')[0].innerHTML = counter.title;
	
			for (var j = 0; j < counter.values.length; j++){
				var x = document.createElement("INPUT");
				x.setAttribute("type", "checkbox");
				x.setAttribute("value", counter.values[j]);
				var w = document.createElement("A");
				w.setAttribute("href", "");
				w.innerHTML = counter.values[j];
				
				lista.appendChild(x);
				lista.appendChild(w);
				lista.appendChild(document.createElement('br'));

				


				
				

			}
			

			}





			





        

            


