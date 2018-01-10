
$(document).ready(function(){
  $('#sizePicker').submit(function(i){
    i.preventDefault(); 
    makeGrid();
    coloring();
        
 });
});


const table = $("#pixel_canvas");
 function makeGrid(){
     table.html(''); //banned to created to new grid
     const height = $('#input_height').val();
     const width = $('#input_width').val();
       for (let i = 0; i < height; i++) 
  {
    table.append('<tr></tr>');
  }
    
  for (let i = 0; i < width; i++) 
    {
    $('tr').append('<td></td>');
  }

     }
  
     
     function coloring (){
         const color = $('input[type=color]').val();
         $('td').mousedown(function(event) {
    switch (event.which) {
        case 1:
            $(this).css('background-color', color);
            break;
        case 2:
            alert('Middle Mouse button pressed. U Did mistake. use only button right and left on your mouse');
            break;
        case 3:
            $(this).css('background-color', 'white');
            event.preventDefault();
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
     }
        
 table.contextmenu(function(event){
  event.preventDefault();
});

     