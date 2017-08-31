$(function() {
    var undergrads = [];
    var Undergrad = makeStruct("name biolink img email phone other");
    var Social =  makeStruct("iconID link");

    var social = document.getElementById('undergrad-social');
    var link = document.getElementById('undergrad-link');
    var image = document.getElementById('undergrad-img');
    var name = document.getElementById('undergrad-name');
    var email = document.getElementById('undergrad-email');
    var phone = document.getElementById('undergrad-phone');


    /* Add people */
    undergrads.push(new Undergrad('Aiesha Polakampalli', 'people.html#aieshap', 'img/team/Aiesha.jpg', 'polakampalli.2@osu.edu', '(614) 937-7072', []));

    undergrads.push(new Undergrad('Allison Byrer', 'people.html#allisonb', 'img/team/allison.jpg', 'byrer.7@osu.edu', '(614) 805-1847', []));

    undergrads.push(new Undergrad('Jihyung Kil', 'people.html#jihyungk', 'img/team/jihyung.jpg', 'kil.5@osu.edu', '(714) 616-4107', []));

    var katec_social = [];
    katec_social.push(new Social('fa-linkedin', 'http://www.linkedin.com/in/katherine-corbeil-220a52112'));
    undergrads.push(new Undergrad('Kate Corbeil', 'people.html#katec', 'img/team/KateCorbeil.jpg', 'corbeil.4@osu.edu', '(440) 665-9201', katec_social));

    var kathyg_social = [];
    kathyg_social.push(new Social('fa-linkedin', 'http://www.linkedin.com/in/kathy-guo'));
    kathyg_social.push(new Social('fa-github', 'http://github.com/kguo901'));
    undergrads.push(new Undergrad('Kathy Guo', 'people.html#kathyg', 'img/team/kathy.jpg', 'guo.901@osu.edu', '(614) 956-9181', kathyg_social));

    var kevieb_social = [];
    kevieb_social.push(new Social('fa-linkedin', 'https://www.linkedin.com/in/kevie-bovaird-617161144/s'));
    undergrads.push(new Undergrad('Kevie Bovaird', 'people.html#kevieb', 'img/team/kevieb.jpg', 'keviebovaird@gmail.com', '(925) 998-8455', kevieb_social));

    var korrinp_social = [];
    korrinp_social.push(new Social('fa-linkedin', 'https://www.linkedin.com/in/korrin-perry-21aa0011a/'));
    undergrads.push(new Undergrad('Korrin Perry', 'people.html#korrinp', 'img/team/korrinp.jpg', 'perry.2016@osu.edu', '(513) 313-1173', korrinp_social));

    undergrads.push(new Undergrad('Sanghoon Ahn', 'people.html#sanghoona', 'img/team/sanghoon.jpg', 'ahnsanghoon1996@gmail.com', '(614) 495-6425', []));
    /* End of add people */

    // random number between 0 and num of grads - 1
    var index = Math.floor(Math.random() * undergrads.length);
    link.href = undergrads[index].biolink;
    image.src = undergrads[index].img;
    name.innerHTML = undergrads[index].name;
    email.innerHTML = '<br>' + undergrads[index].email;
    phone.innerHTML = '<br>' + undergrads[index].phone;
    var other = undergrads[index].other;
    for (var i = 0; i < other.length; i++) {
        addIcon(other[i].iconID, other[i].link, social);
    }
});

function addIcon(id, link, parent) {
    var listEle = document.createElement("li");

    var socialLink = document.createElement("a");
    socialLink.href = link;
    listEle.appendChild(socialLink);

    var icon = document.createElement("i");
    icon.className = "fa " + id;
    socialLink.appendChild(icon);

    parent.appendChild(listEle);
}

function makeStruct(names) {
    var names = names.split(' ');
    var count = names.length;
    function constructor() {
        for (var i = 0; i < count; i++) {
            this[names[i]] = arguments[i];
        }
    }
    return constructor;
}