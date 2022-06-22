window.onload = function() {
    $.getJSON("./json/replicable.json", function(json) {
        var logo = json.logo;
        var logoAnchor = $("#header-bar-logo");
        var logoImage = document.createElement("img");
        logoImage.src = logo["src"];
        logoImage.alt = logo["alt"];
        logoAnchor.append(logoImage);
        var head = json.head;
        var headContainer = $("head");
        head.forEach(item => {
            headContainer.append(item);
        });
        var nav = json.nav;
        var navBar = $("nav");
        var navItems = [];
        for (var item in nav) {
            navItems.push(nav[item]);
        };
        navItems.forEach(item => {
            var e = document.createElement("a");
            e.innerHTML = item["name"];
            e.href = window.location.protocol + "//" + window.location.host + window.location.pathname + item["href"];
            e.id = item["id"];
            e.classList = item["classes"];
            var currentURL = window.location.href;
            if (e.href == currentURL) {
                e.classList.add("active");
            }
            e.onclick = item["onclick"];
            e.attributes = item["attributes"];
            e.target = item["target"];
            navBar.append(e)
        });
    });
};
