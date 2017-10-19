$(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBuBtm-lim5I635HwWwVjfdfJ6Wtwo-0I4",
        authDomain: "slam-lab.firebaseapp.com",
        databaseURL: "https://slam-lab.firebaseio.com",
        projectId: "slam-lab",
        storageBucket: "slam-lab.appspot.com",
        messagingSenderId: "762491185440"
    };
    firebase.initializeApp(config);
    var people = firebase.database;
    var ref = firebase.database().ref("people");
    ref.on('value', gotData, errorData);
});

function gotData(data){
    //var students = [];
    //var Student = makeStruct("name img email phone social");
    //var Social =  makeStruct("iconID link");

    var social = document.getElementById('undergrad-social');
    var link = document.getElementById('undergrad-link');
    var image = document.getElementById('undergrad-img');
    var name = document.getElementById('undergrad-name');
    var email = document.getElementById('undergrad-email');
    var phone = document.getElementById('undergrad-phone');

    const studentSection = document.getElementById('students');

    var people = data.val();
    var ids = Object.keys(people);

    var i = Math.floor(Math.random() * ids.length);
    var k = ids[i];
    var otherSocial = [];
    var socialData = people[k].social;
    if(!socialData){
        socialData = [];
    }

    image.src = people[k].img;
    name.innerHTML = people[k].name;
    email.innerHTML = '<br>' + people[k].email;
    phone.innerHTML = '<br>' + people[k].phone;

    var socialTypes = Object.keys(socialData);
    for (var j = 0; j < socialTypes.length; j++){
        var type = socialTypes[j];
        addIcon(socialData[type].fa_icon, socialData[type].link, social);
    }
    firebase.database().goOffline();
}

function errorData(error){
    console.log(error);
}

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
/*
function makeStruct(names) {
    var names = names.split(' ');
    var count = names.length;
    function constructor() {
        for (var i = 0; i < count; i++) {
            this[names[i]] = arguments[i];
        }
    }
    return constructor;
}*/