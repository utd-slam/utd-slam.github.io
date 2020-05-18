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

function changeText()
{
    var url = 'url(' + imgs[j] + ')';
    if(imgs[j] !== undefined){
        $("#home-header").css("background-image", url);
    }
        addRibbon();
        updateDots();
        if(header[j] !== undefined && text[j] !== undefined){
            document.getElementById("slide-title").innerHTML = header[j];
            document.getElementById("slide-text").innerHTML = text[j];
        }
        j++;

        if(j >= header.length){
            j = 0;
        }
        timer = setTimeout("changeText()", 5000);
}

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

function updateDots(){
    var dots = document.getElementsByClassName("dot");
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     dots[j].className += " active";
}

function currentSlide(num){
    if(timer){
        clearTimeout(timer);
        timer = 0;
    }
    var n = parseInt(num);
    if(n >= 0 && n < header.length){
        j = n;
        changeText();
    }
}

//'img/header/japan.jpg',
var imgs = ['img/header/fmri.jpg', 'img/header/sbir_shaded_v2.jpg', 'img/header/rhythm_syntax_children_shaded_v2.jpg', 'img/header/lee_talk_shaded.jpg']; 
var ribbonLinks = ['', 'index.html#recent-events', '',''];
var ribbons = ['', 'img/ribbons/recent_news.png','', ''];
var header = ["Welcome to SLAM Lab!", "NIH SBIR Funding", "Newest Publication", "Colloquium Talk"];
var text = ['We are the auditory neuroscience lab at the Ohio State University\'s Department of Speech & Hearing Science. We study the connection between speech, language, and music in the brain.',
		'Our Aphasia Therapy project continues to be awarded NIH funding.',
    'Dr. Lee\'s newest publication has been accepted by the Journal of Developmental Psychology.',
    'Dr. Lee presented at the University of Toronto Music and Health Science Research Collaboratory.'];

var j = 0;

timer = setTimeout("changeText()", 100);
