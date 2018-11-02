$("a[href='#open1Nov18']").on("click", function(e){
    $("#1Nov18preview").addClass("hide");
    $("#1Nov18").removeClass("hide");
    e.preventDefault();
});

$("a[href='#close1Nov18']").on("click", function(e){
    $("#1Nov18preview").removeClass("hide");
    $("#1Nov18").addClass("hide");
    e.preventDefault();
});