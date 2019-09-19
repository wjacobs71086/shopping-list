// https://github.com/wjacobs71086/shopping-list.git
'use strict';


// Adding the gathered value to the bottom of the list and stlye.  $('.shopping-item').last('li .shopping-item');
function addedItem() {
  $('#js-shopping-list-form').submit(function( event ) {
    if (typeof $('#shopping-list-entry').val() === 'string' ){
      // The Value entered in the form.
      let enteredValue = $('#shopping-list-entry').val();
      $('.shopping-item').last('li .shopping-item').append(enteredValue).addClass('.shopping-list');
      console.log(enteredValue);
      
      event.preventDefault();
      return enteredValue;
    }
  });
  console.log('addedItem is running');
}


// Delete shopping Item
function deleteItem(){
  $('.shopping-item').click(function(){
    this.toggleClass('.shopping-item','.shopping-item__checked');
    event.preventDefault();
  });
  console.log('Delete Item running');
}

// Check shopping Item
function checkItem(){
  console.log('Check Item Running');
}


 
$(deleteItem());
$(addedItem());
$(checkItem());



