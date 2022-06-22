$(document).ready(function() {
    $(".tabs ul li:first").addClass("active");
    $(".tabs-content ul").hide();
    $(".tabs-content ul:first").show();

    $(".tabs ul li").click(function() {
        $(".tabs ul li").removeClass("active");
        $(this).addClass("active");
        var activeTab = "#tab" + $(this).attr("tab");
        $(".tabs-content ul").hide();
        $(activeTab).show();
    });
});