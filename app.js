//DATA//
const todo = [];
//DATA//

//LARY//
//constructor of items objects
function Item(name) {
    this.name = name;
    this.time = undefined;
    this.person = undefined;
    this.phone = undefined;
    this.place = undefined;
};
//use constructor and add to array
function add_item(item) {
    let object_item = new Item(item);
    todo.push(object_item);
}

//LARY//

//VIEW//
//show the list from array
function show_list(){
    $('#list').html('');
        todo.forEach(function(item){
        var li = document.createElement("LI");
        var span = document.createElement("span");
         // span.setAttribute("class", i);
         span.textContent = '  remove';

        var textnode = document.createTextNode(item.name);
        li.appendChild(textnode);
        li.appendChild(span);
        $('#list').append(li);
        //addevent listener to remove
        span.addEventListener('click', (function() {
         var to_remove = todo.indexOf(item);
         todo.splice(to_remove,1);
         show_list();
     }));//addEventListener
 });//for Each
}//show_list
//listener for button
$("button").click(function(){
    let new_item = $("input:text").val();
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
//VIEW//
