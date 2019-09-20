// https://github.com/wjacobs71086/shopping-list.git
'use strict';


// Adding the gathered value to the bottom of the list and stlye.  $('.shopping-item').last('li .shopping-item');
function addedItem() {
  $('#js-shopping-list-form').submit(function( event ) {
    event.preventDefault();
    //console.log('addedItem is running');
    if (typeof $('#shopping-list-entry').val() === 'string' ){
      // The Value entered in the form.
      let enteredValue = $('#shopping-list-entry').val();
      //$('.shopping-item').last('li .shopping-item').append(enteredValue).addClass('.shopping-list');
      $('.shopping-list').append(generateListItem(enteredValue));
      //console.log(enteredValue);
      
      return enteredValue;
    }
  });
  
}
function generateListItem(enteredValue){
  return `<li>
  <span class="shopping-item">${enteredValue}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`;

}


// Delete shopping Item
function deleteItem(){
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){
    event.preventDefault();
    $(this).closest('li').remove();
  });
  
}

// Check shopping Item
function checkItem(){
  //console.log('Check Item Running');
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    event.preventDefault();
    let spanItem = $(this).closest('li').children('span');
    $(spanItem).toggleClass('shopping-item__checked');
  });
}


function init(){
  deleteItem();
  addedItem();
  checkItem();
}

$(init)





