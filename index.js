// https://github.com/wjacobs71086/shopping-list.git
'use strict';

function getValue(){
  $('#js-shopping-list-form').submit(function( event ) {
    if (typeof $('#shopping-list-entry').val() === 'string' ){
      // The Value entered in the form.
      let enteredValue = $('#shopping-list-entry').val();
      //console.log(enteredValue);
      event.preventDefault();
      return enteredValue;
      
    }
  });
}
// Adding the gathered value to the bottom of the list and stlye.  $('.shopping-item').last('li .shopping-item');
function addedItem(enteredValue) {
  //$('.shopping-item').last('li .shopping-item').append(enteredValue);

}

// Delete shopping Item
function deleteItem(){
  $('.shopping-item').click(function(){
    this.toggleClass('.shopping-item','.shopping-item__checked');
  });
  console.log('im here');
}

// Check shopping Item



 
$(deleteItem());
$(addedItem());
$(getValue());
$(addedItem());


