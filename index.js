'use strict';

function getValue(){
  $('#js-shopping-list-form').submit(function( event ) {
    if (typeof $('#shopping-list-entry').val() === 'string' ){
      $('.shopping-item').closest('li').append($('#shopping-list-entry').val());

      console.log($('#shopping-list-entry').val());
      event.preventDefault();
    }
  });
}




 


$(getValue());

