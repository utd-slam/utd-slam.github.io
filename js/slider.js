function changeImage()
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
}

var imgs = ['img/header/cosi.jpg', 'img/header/japan.jpg', 'img/header/showohio.jpg', 'img/header/brain.jpg'];
var i = 0;

setTimeout("changeImage()", 100);