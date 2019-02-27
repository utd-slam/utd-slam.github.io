/**
 * Load bios for graduate and undergraduate students from firebase
 */

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
    var undergraduate = new Array(50);
    var graduate = new Array(50);
    var Student = makeStruct("name id bio img email phone social");
    var Social =  makeStruct("iconID link");
    var social = [];

    // Get parent sections
    const undergradSection = document.getElementById('undergradstudents');
    const gradSection = document.getElementById('gradstudents');

    var people = data.val();
    var ids = Object.keys(people);

    for(var i = 0; i < ids.length; i++){
        var k = ids[i];
        social = [];
        var socialData = people[k].social;
        if(!socialData){
            socialData = [];
        }
        var socialTypes = Object.keys(socialData);
        for (var j = 0; j < socialTypes.length; j++){
            var type = socialTypes[j];
            social.push(new Social(socialData[type].fa_icon, socialData[type].link));
        }
        var student = new Student(people[k].name, k, people[k].bio, people[k].img, people[k].email, people[k].phone, social);
        if(people[k].edulevel === 'undergrad'){
            undergraduate[parseInt(people[k].order)-1] = student;
        } else {
            graduate[parseInt(people[k].order)-1] = student;
        }

    }
    for(var i = 0; i < undergraduate.length; i++){
        renderStudent(undergraduate[i], undergradSection);
    }
    for(var i = 0; i < graduate.length; i++){
        renderStudent(graduate[i], gradSection);
    }
    firebase.database().goOffline();

    if(window.location.href.includes('#alumniSection')){
        window.scrollTo(0,document.body.scrollHeight);
    }
}

function errorData(error){
    console.log(error);
}

function renderStudent(studentInfo, parent) {
    var newDiv = outerWrapper(studentInfo.id);

        var newcol = colWrapper(4);
        newDiv.appendChild(newcol);

            var newIconWrap = iconWrapper();
            newcol.appendChild(newIconWrap);

                var profileImg = profileImage(studentInfo.img);
                newIconWrap.appendChild(profileImg);

                var name = nameWrapper(studentInfo.name);
                newIconWrap.appendChild(name);

                var contactIcons = socialIcons(studentInfo.id, studentInfo.email,studentInfo.social);
                newIconWrap.appendChild(contactIcons);

        newcol = colWrapper(8);
        newDiv.appendChild(newcol);

            var bio = '<p>' + studentInfo.bio + '</p>'
            newcol.innerHTML = bio;

    parent.appendChild(newDiv);
}

function outerWrapper(id){
    var newDiv = document.createElement("div");
    newDiv.className = 'row';
    newDiv.id = id;
    newDiv.setAttribute('style', 'padding-top: 100px; margin-top: -100px;');
    return newDiv;
}

function colWrapper(size){
    var newcol = document.createElement("div");
    newcol.className = 'col-sm-' + size;
    return newcol;
}

function iconWrapper(){
    var newdiv = document.createElement("div");
    newdiv.className = 'team-member team-member-small'
    return newdiv;
}

function nameWrapper(name){
    var n = document.createElement("h4");
    n.setAttribute('style', 'margin:25px 0');
    n.textContent = name;
    return n;
}

function profileImage(link){
    var profileLink = document.createElement("a");
    profileLink.className = 'portfolio-link'
    profileLink.setAttribute('data-toggle', 'modal');

    var img = document.createElement("img");
    img.setAttribute('src', link);
    img.className += 'img-responsive img-circle';
    profileLink.appendChild(img);

    return profileLink;
}

function socialIcons(id, email, social){
    var wrapper = document.createElement("div");

    var list = document.createElement("ul");
    list.className = "list-inline social-buttons";

    var iconTxt = '<li><a href="#' + id + '-email" data-toggle="collapse"><i class="fa fa-envelope"></i></a></li>';
    for (var i = 0; i < social.length; i++) {
        iconTxt += '<li><a href="'+ social[i].link +'"><i class="fa '+ social[i].iconID +'"></i></a></li>'
    }
    list.innerHTML = iconTxt;
    wrapper.appendChild(list);

    var contactInfo = '<div id="' + id + '-email" class="collapse"><br>' + email + '</div>'
    wrapper.innerHTML += contactInfo;
    return wrapper;
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
