$.getJSON("./json/replicable.json", function(json) {
    var nav = json.nav;
    var navBar = $("nav");
    var navItems = [];
    for (var item in nav) {
        navItems.push(nav[item]);
    };
    navItems.forEach(item => {
        var e = document.createElement("a");
        e.innerHTML = item["name"];
        e.href = item["href"];
        e.id = item["id"];
        e.classList = item["classes"];
        e.attributes = item["attributes"];
        e.target = item["target"];
        navBar.append(e)
    });
});