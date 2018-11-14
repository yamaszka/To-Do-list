//DATA//
const todo = [];
//DATA//

//LARY//
function Item(name) {
    this.name = name;
    this.time = undefined;
    this.person = undefined;
    this.phone = undefined;
    this.place = undefined;
};

function add_item(item) {
    let object_item = new Item(item);
    todo.push(object_item);
}

//LARY//

//VIEW//
//show the list
function show_list(){
    $('#list').html('');
    todo.forEach(function(item){
        var li = document.createElement("LI");
        var textnode = document.createTextNode(item.name);
        li.appendChild(textnode);
        console.log(item.name);
        $('#list').append(li);
    });
}

$("button").click(function(){
    let new_item = $("input:text").val();
    let error_message = "You should not do nothing";
        if (new_item=="") {
            $('#error').html(error_message);
        }
        else {
            $('#error').html('');
            console.log('nazwa obiektu'+new_item);
            add_item(new_item);
            show_list();
        }
        console.log(todo);
});//click
//VIEW//
