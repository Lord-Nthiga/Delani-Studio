$(document).ready(function(){
    $(".img1").click(function() {
        $(".img1").slideToggle(2000);
        $(".design").slideToggle(2000);
    });
    $(".design").click(function() {
        $(".design").slideToggle(2000);
        $(".img1").slideToggle(2000);
    });
});