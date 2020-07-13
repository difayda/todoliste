$(document).on("click", "ul li span.todo-value", function() {
    $(this).toggleClass("text-barre");
})
$(document).on("click", "ul li span.delete-button", function() {
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    })

})


$("#todo").on("keypress", function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $("ul.liste-to-do").append(
            "<li>" +
            "<span class='delete-button'><i class='fa fa-trash-o' aria-hidden='true'></i></span>" +
            "<span class='todo-value'>" +
            $(this).val() +
            "</li>"
        );
        $(this).val("");
    }


});