$(document).ready(function() {
    $(".row.people .box").on('click', function(e) {
        var name = $(this).children(".name").html().replace(" ", "").toLowerCase();
        window.location.href = '/' + name + ".html";
    });
});  

