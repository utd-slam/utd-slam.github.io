var canvas = document.getElementById('can'),
    context = canvas.getContext('2d');
var img = document.createElement('img');
var canvas_link = document.getElementById('canvas-link');
var timer = 0;

/*function changeImage()
{
        var url = 'url(' + imgs[i] + ')';
        if(imgs[i] !== undefined){
            $("#home-header").css("background-image", url);
        }
        i++;

        if(i >= imgs.length){
            i = 0;
        }
        setTimeout("changeImage()", 5000);
}*/

function changeText() {
    var url = 'url(' + imgs[j] + ')';
    if (imgs[j] !== undefined) {
        $("#home-header").css("background-image", url);
    }
    //addRibbon();
    updateDots();
    if (header[j] !== undefined && text[j] !== undefined) {
        document.getElementById("slide-title").innerHTML = header[j];
        document.getElementById("slide-text").innerHTML = text[j];
    }
    j++;

    if (j >= header.length) {
        j = 0;
    }
    timer = setTimeout("changeText()", 12000);
}

/*
function addRibbon()
{
    if(j < ribbons.length){
        img.onload = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(this,0,0, 150, 150);
        };
        if(ribbons[j] == '')
            context.clearRect(0, 0, canvas.width, canvas.height);
        else {
            img.src = ribbons[j];
            canvas_link.href = ribbonLinks[j];
        }
    }
}
*/


function updateDots() {
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[j].className += " active";
}

function currentSlide(num) {
    if (timer) {
        clearTimeout(timer);
        timer = 0;
    }
    var n = parseInt(num);
    if (n >= 0 && n < header.length) {
        j = n;
        changeText();
    }
}

//TODO: Create header image for the move
var imgs = ['img/header/group_photo_04_2022.jpg',
    'img/header/Jenna_Hyun_Binaural_Beats_Publication_Slider.jpg',
    'img/header/Hyun_Katie_SNL_Conference_slider.jpg',
    'img/header/Congrats_Carole.jpg'
];
//var ribbonLinks = ['', 'index.html#recent-events', '',''];
//var ribbons = ['', 'img/ribbons/recent_news.png','', ''];
var header = ["Welcome to SLAM Lab!",
    "New Publication",
    "SNL Conference",
    "Friends of BrainHealth Grant",];
var text = ['We are the auditory neuroscience lab at The University of Texas at Dallas Department of Speech, Language, &amp;        Hearing in the School of Behavioral and Brain Sciences. We study the connection between speech, language, and music in the brain.',
    'The lab’s latest publication studying the effects of binaural beats on language processing ability in young adults has been accepted for publication in Psychological Research.  Find the preprint on our <a href="https://utd-slam.github.io/publications.html">Publications</a> page.',
    'Slammers Hyun-Woong Kim and Katie Ginter gave their poster presentations at this year\'s Society for the Neurobiology of Language (SNL) Conference.',
    'Slammer Carole Leung, in partnership with Dallas Independent School District and the Dallas Symphony Orchestra, receives Friends of BrainHealth Grant to investigate the neurodevelopmental effects of rigorous music engagement in socioeconomically underserved children.',
];

var j = 0;

timer = setTimeout("changeText()", 100);
