$(document).ready(function() {
    $("nav").click(function(e) {
        $("nav a").removeClass("active");
        $(e.target).addClass("active");
    });
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
window.addEventListener('popstate', function () {
    var anchors = $("nav").children();
    anchors.each(function() {
        if ($(this).attr("href") == window.location.href) {
            $("nav a").removeClass("active");
            $(this).addClass("active")
        };
     });
});
