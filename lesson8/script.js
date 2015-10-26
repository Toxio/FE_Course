
$(document).ready(function() {
	//Task №1 Insert name in to input tag
	var input = document.getElementsByTagName("input");
	function insertName(){
	    for (var i=0; i < input.length; i++){
	        if(!(input[i].type === 'checkbox')){
	            input[i].setAttribute('name',input[i].id);
	        }
	    }
	}
	insertName();
});

//Task №2 fill form from  'https://randomuser.me/api/'
	
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data){
      var dataUser = data.results[0].user;
      console.log(dataUser);
      var user = {
          fullName: dataUser.name.first + " " + dataUser.name.last,
          login: dataUser.username,
          password: dataUser.password,         
          mail: dataUser.email,
          location: dataUser.location
      }
      fillForm(user);
    }
});

function fillForm(user){
 $('form input').each(function(){
 	var id = $(this).attr('id')
 	$(this).val(user[id])
 })
 
   // $("#name").val(user.fullName); 
   // $("#login").val(user.login); 
  	// $("input[id^='email']").val(user.mail);   
   // $("input[id^='password").val(user.password);
   // $("#city").val(user.location.city); 
   // $("#zip").val(user.location.zip); 
   // $("#street").val(user.location.street);        
}


// Task 3

$(document).ready(function() {
	var form = $("#registration")[0];
	console.log(form);
	form.onsubmit = function(event){ 		
    	event.preventDefault();
    	var userSend = $('form').serializeArray();
        // var userSend = {
        //     name: event.target[0].value,
        //     login: event.target[1].value,
        //     email: event.target[2].value,
        //     password: event.target[4].value,
        //     city: event.target[7].value,
        //     zip: event.target[8].value,
        //     state: event.target[9].value,
        //     street: event.target[10].value,
        //     building:event.target[11].value 
        // } 
		sendForm(userSend,'GET') ;
    	sendForm(userSend,'POST');
	};

function sendForm(dataSend,typeReguest){
  $.ajax({
  	type : typeReguest,    
  	url: 'https://robohash.org/',
  	data: dataSend,
  	success: function(data){
    	console.log("Success", data);      
    	},
    error:  console.log("Fail", fail)
	});
}

});
