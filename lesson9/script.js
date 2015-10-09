
$(document).ready(function() {
    var header = document.createElement('header');
    var ul = document.createElement('ul');
    ul.className = "menu";
    header.appendChild(ul);
    for(var i = 1; i < 6; i++){
        var li = document.createElement('li');
          li.innerHTML = i + "-й элемент";
          ul.appendChild(li);
      }
    
    document.body.appendChild(header);
  
  $(".menu").before ("<input type='button' value='Меню'>");

});
//var ul = document.createElement('ul');

