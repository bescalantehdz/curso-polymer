


fetch('http://localhost:3000/employees/')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        const message = document.getElementById("message");
        message.innerText = response.status;
        return;
      }else{
      	const message = document.getElementById("message");
      	message.innerText = response.status;
      }

      // Examine the text in the response
    response.json().then(function(data) {

		var persona = [];
    	persona  = data;

        //console.log(persona);
        const mensaje = document.getElementById("table");
        const cabeza = document.getElementById("cabeza");
        const cuerpo = document.getElementById("cuerpo");
        
   mensaje.innerHTML = 
   					 '<tr class="cabeza">'+
                     '<th>ID</th>'+
                     '<th>Nombres</th>'+
                      '<th>AP</th>'+
                      '<th>email</th>'
                       '</tr>'
         for (var i = 0; i < persona.length; i++) {
        
       
        mensaje.innerHTML +='<tr class="body">'+
        '<td>'+persona[i].id+'</td>'+
        '<td>'+persona[i].first_name+'</td>'+
        '<td>'+persona[i].last_name+'</td>'+
        '<td>'+persona[i].email+'</td>'+
        '</tr>';
      
      }
      	




});
    }




  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });



for (var i = 0; i < persona.length; i++) {
       
       console.log(persona[i]);
	}


