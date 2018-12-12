//DATA//
let todo = [];
//DATA//

//LARY//
//constructor of items objects
function Item(name) {
    this.name = name;
    this.time = "";
    this.person = "";
    this.phone = "";
    this.place = "";
};
//use constructor and add to array
function add_item(item) {
    let object_item = new Item(item);
    todo.push(object_item);
}
//remove one element from the list
function remove_el(item){
    var to_remove = todo.indexOf(item);
    todo.splice(to_remove,1);
}

function delete_all(){
    todo = [];
    console.log(todo);
}

function get_todo(){
    return todo;
}
//edit objects in todo array, using form
function edit_todo(item){
        item.name = $('#name').val();
        item.time = $('#time').val();
        item.person = $('#person').val();
        item.phone = $('#phone').val();
        item.place = $('#place').val();
        // show_edit_box(item);
        console.log('edit_todo');
        console.log(item.name);
        console.log(item);
}
//LARY//

//VIEW//
//set data to edit form
function show_edit_box(item){
    $('#name').val(item.name);
    $('#time').val(item.time);
    $('#person').val(item.person);
    $('#phone').val(item.phone);
    $('#place').val(item.place);
    // $("#save").click(function(){
        // edit_todo(item);
        //  $('#edit').css('display','none');
        // show_list();
        // console.log('show_edit_box');
    // });//click
    //EACH BUTTON HAS TO HAVE ITS OWN EVENTLISTENER!!!! I CAN NOT PUT A LOT OFLISTENERS ON THE SAME BUTTON AS ABOVE
    $('#save').remove();
    var button = document.createElement("button");
     button.setAttribute("id", "save");
     button.textContent = 'Save';
     $('#edit').append(button);
     button.addEventListener('click', (function() {
         edit_todo(item);
          $('#edit').css('display','none');
          $('.cover').css('display','none');
         show_list();
         console.log('show_edit_box');
  }));//addEventListener
}
//show the list from array
function show_list(){
    console.log('show_list');
    //clean list
    $('#list').html('');
    var array = get_todo();
        array.forEach(function(item){
        var li = document.createElement("LI");
        //add span remove element
        var span = document.createElement("span");
         span.setAttribute("class", "remove");
         span.innerHTML = '<i class="fas fa-trash icon"></i>';
         //add span edit createElement
         var span1 = document.createElement("span");
          span1.setAttribute("class", "edit");
          span1.innerHTML = '<i class="far fa-edit icon"></i>';
        var textnode = document.createTextNode(item.name);
        li.appendChild(textnode);
        li.appendChild(span1);
        li.appendChild(span);
                //create child list
                var ul = document.createElement("ul");
                 ul.setAttribute("id", "inner_list");
                    if(item.time!=""){
                        var t_li = document.createElement("LI");
                        var t_text = document.createTextNode('Time '+item.time);
                        t_li.appendChild(t_text);
                        ul.appendChild(t_li);
                    }//if
                    if(item.person!=""){
                        var per_li = document.createElement("LI");
                        var per_text = document.createTextNode('Name: '+item.person);
                        per_li.appendChild(per_text);
                        ul.appendChild(per_li);
                    }//if
                    if(item.phone!=""){
                        var ph_li = document.createElement("LI");
                        var ph_text = document.createTextNode('Phone number: '+item.phone);
                        ph_li.appendChild(ph_text);
                        ul.appendChild(ph_li);
                    }//if
                    if(item.place!=""){
                        var pl_li = document.createElement("LI");
                        var pl_text = document.createTextNode('Need to come to: '+item.place);
                        pl_li.appendChild(pl_text);
                        ul.appendChild(pl_li);
                    }//if
                li.appendChild(ul);

                 $('#list').append(li);

        //addevent listener to remove
        span.addEventListener('click', (function() {
         remove_el(item);
         show_list();
     }));//addEventListener
     //addevent listener to edit
     span1.addEventListener('click', (function() {
         $('#edit').css('display','block');
         $('.cover').css('display','block');
         show_edit_box(item);
  }));//addEventListener
 });//for Each
 //crete delete button only if to do list has at least one item
 if(todo.length>0){
   $('#delete').css('display','block');
 // var d_button = document.createElement("button");
 //  d_button.setAttribute("id", "delete");
 //  d_button.textContent = 'Delete all';
 //    $('#content').append(d_button);
  //listener for delete delete_all (then using jQuery that does not work)
//   d_button.addEventListener('click', (function() {
    // delete_all();
    // show_list();
//     d_button.remove();
// }));//addEventListener
}
else {
  $('#delete').css('display','none');
}

}//show_list
//listener for button
$("#add").click(function(){
    let new_item = $("#input:text").val();
    let error_message = "You should not do nothing";
        if (new_item=="") {
            $('#error').html(error_message);
        }
        else {
            $('#error').html('');
            add_item(new_item);
            show_list();
        }
        // console.log(todo);
});//click

$('#back').click(function(){
     $('#edit').css('display','none');
     $('.cover').css('display','none');
});

$('#delete').click(function(){
  delete_all();
  show_list();
});
//VIEW//
