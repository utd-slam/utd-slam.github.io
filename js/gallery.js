var gallery = [];
var Album = makeStruct("title links thumbLinks time id");

/**
 * Begin defining gallery albums
 * If you are adding a new album, define everything below. Most Recent at the top.
 */

// Create 'Summer 2018' album
var su18Links = ['img/gallery/summer-2018/1.jpg', 'img/gallery/summer-2018/2.jpg', 'img/gallery/summer-2018/3.png'];
var th_su18Links = ['img/gallery/summer-2018/thumb/1.jpg', 'img/gallery/summer-2018/thumb/2.jpg', 'img/gallery/summer-2018/thumb/3.png'];
gallery.push(new Album('Summer 2018', su18Links, th_su18Links, 'May - August 2018', 'su18'));

// Create 'HumCog Summer Institute' album
var humcog18Links = ['img/gallery/humcog-2018/IMG_3154.JPG', 'img/gallery/humcog-2018/Slide5.JPG', 'img/gallery/humcog-2018/Slide20.JPG', 'img/gallery/humcog-2018/Slide27.JPG', 'img/gallery/humcog-2018/Slide53.JPG', 'img/gallery/humcog-2018/Slide89.JPG', 'img/gallery/humcog-2018/Slide91.JPG', 'img/gallery/humcog-2018/Slide109.JPG', 'img/gallery/humcog-2018/Slide111.JPG', 'img/gallery/humcog-2018/Slide112.JPG', 'img/gallery/humcog-2018/Slide114.JPG', 'img/gallery/humcog-2018/Slide116.JPG', 'img/gallery/humcog-2018/Slide187.JPG'];
var th_humcog18Links = ['img/gallery/humcog-2018/thumb/IMG_3154.JPG', 'img/gallery/humcog-2018/thumb/Slide5.JPG', 'img/gallery/humcog-2018/thumb/Slide20.JPG', 'img/gallery/humcog-2018/thumb/Slide27.JPG', 'img/gallery/humcog-2018/thumb/Slide53.JPG', 'img/gallery/humcog-2018/thumb/Slide89.JPG', 'img/gallery/humcog-2018/thumb/Slide91.JPG', 'img/gallery/humcog-2018/thumb/Slide109.JPG', 'img/gallery/humcog-2018/thumb/Slide111.JPG', 'img/gallery/humcog-2018/thumb/Slide112.JPG', 'img/gallery/humcog-2018/thumb/Slide114.JPG', 'img/gallery/humcog-2018/thumb/Slide116.JPG', 'img/gallery/humcog-2018/thumb/Slide187.JPG'];
gallery.push(new Album('HumCog Summer Institute', humcog18Links, th_humcog18Links, 'August 8, 2018', 'humcog18'));

// Create 'Rock Climbing' album
var rockclLinks = ["img/gallery/rock-climbing/20180423_144050.jpg", "img/gallery/rock-climbing/20180423_144339.jpg", "img/gallery/rock-climbing/20180423_144433.jpg", "img/gallery/rock-climbing/20180423_144504.jpg", "img/gallery/rock-climbing/20180423_144642.jpg", "img/gallery/rock-climbing/20180423_144739.jpg", "img/gallery/rock-climbing/20180423_150346_HDR.jpg", "img/gallery/rock-climbing/20180423_150403.jpg",
"img/gallery/rock-climbing/20180423_151134_HDR.jpg", "img/gallery/rock-climbing/20180423_151153_HDR.jpg", "img/gallery/rock-climbing/20180423_151824.jpg", "img/gallery/rock-climbing/20180423_151855_HDR.jpg", "img/gallery/rock-climbing/20180423_152018.jpg", "img/gallery/rock-climbing/20180423_152035.jpg", "img/gallery/rock-climbing/20180423_152249_HDR.jpg", "img/gallery/rock-climbing/20180423_152428_HDR.jpg", "img/gallery/rock-climbing/20180423_152656.jpg", "img/gallery/rock-climbing/20180423_152815.jpg", "img/gallery/rock-climbing/20180423_153616_HDR.jpg", "img/gallery/rock-climbing/20180423_153932.jpg"];
var th_rockclLinks = ["img/gallery/rock-climbing/thumb/20180423_144050.jpg", "img/gallery/rock-climbing/thumb/20180423_144339.jpg", "img/gallery/rock-climbing/thumb/20180423_144433.jpg", "img/gallery/rock-climbing/thumb/20180423_144504.jpg", "img/gallery/rock-climbing/thumb/20180423_144642.jpg", "img/gallery/rock-climbing/thumb/20180423_144739.jpg", "img/gallery/rock-climbing/thumb/20180423_150346_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_150403.jpg", "img/gallery/rock-climbing/thumb/20180423_151134_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_151153_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_151824.jpg", "img/gallery/rock-climbing/thumb/20180423_151855_HDR.jpg",
"img/gallery/rock-climbing/thumb/20180423_152018.jpg", "img/gallery/rock-climbing/thumb/20180423_152035.jpg", "img/gallery/rock-climbing/thumb/20180423_152249_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_152428_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_152656.jpg", "img/gallery/rock-climbing/thumb/20180423_152815.jpg", "img/gallery/rock-climbing/thumb/20180423_153616_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_153932.jpg"];
gallery.push(new Album('Rock Climbing', rockclLinks, th_rockclLinks, 'April 23, 2018', 'rockcl'));

// Create 'fNIRS Demo Experiment' album
var fnirsDemoLinks = ['img/gallery/fnirs-demo/1.jpg', 'img/gallery/fnirs-demo/2.jpg'];
var th_fnirsDemoLinks = ['img/gallery/fnirs-demo/thumb/1.jpg', 'img/gallery/fnirs-demo/thumb/2.jpg'];
gallery.push(new Album('fNIRS Demo Experiment', fnirsDemoLinks, th_fnirsDemoLinks, 'October 13, 2017', 'fnirs'));

// Create 'Arlington Court Nursing Home Seminar' album
var arlingtonCourtLinks = ['img/gallery/arlington-nursing-home/1.jpg', 'img/gallery/arlington-nursing-home/2.jpg', 'img/gallery/arlington-nursing-home/3.jpg'];
var th_arlingtonCourtLinks = ['img/gallery/arlington-nursing-home/thumb/1.jpg', 'img/gallery/arlington-nursing-home/thumb/2.jpg', 'img/gallery/arlington-nursing-home/thumb/3.jpg'];
gallery.push(new Album('Arlington Court Nursing Home Seminar', arlingtonCourtLinks, th_arlingtonCourtLinks, 'July 21, 2017', 'arlington'));

// Create 'New FMRI Protocol' album
var firstFMRILinks = ['img/gallery/first-fmri-new-protocol/IMG_1156.jpg', 'img/gallery/first-fmri-new-protocol/IMG_1158.jpg'];
var th_firstFMRILinks = ['img/gallery/first-fmri-new-protocol/thumb/IMG_1156.jpg', 'img/gallery/first-fmri-new-protocol/thumb/IMG_1158.jpg'];
gallery.push(new Album('New FMRI Protocol', firstFMRILinks, th_firstFMRILinks, 'July 19, 2017', 'protocol'));

// Create 'Shimadzu, Japan' album
var shimadzuLinks = ['img/gallery/shimadzu-japan/IMG_0807.jpg', 'img/gallery/shimadzu-japan/IMG_0814.jpg', 'img/gallery/shimadzu-japan/IMG_0817.jpg', 'img/gallery/shimadzu-japan/IMG_0819.jpg', 'img/gallery/shimadzu-japan/IMG_0828.jpg', 'img/gallery/shimadzu-japan/IMG_0836.jpg'];
var th_shimadzuLinks = ['img/gallery/shimadzu-japan/thumb/IMG_0807.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0814.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0817.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0819.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0828.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0836.jpg'];
gallery.push(new Album('Shimadzu, Japan', shimadzuLinks, th_shimadzuLinks, 'June 6, 2017', 'shimadzu'));

// Create 'Demonstrating Therabeat at ShowOHI/O' album
var therabeatLinks = ['img/gallery/therabeat-showohio/1.jpg', 'img/gallery/therabeat-showohio/2.jpg', 'img/gallery/therabeat-showohio/3.jpg', 'img/gallery/therabeat-showohio/4.jpg'];
var th_therabeatLinks = ['img/gallery/therabeat-showohio/thumb/1.jpg', 'img/gallery/therabeat-showohio/thumb/2.jpg', 'img/gallery/therabeat-showohio/thumb/3.jpg', 'img/gallery/therabeat-showohio/thumb/4.jpg'];
gallery.push(new Album('Demonstrating Therabeat at ShowOHI/O', therabeatLinks, th_therabeatLinks, 'April 8, 2017', 'therabeat'));

// Create 'COSI Rhythm and Speech Perception Lab' album
var cosiLinks = ['img/gallery/cosi/1.jpg', 'img/gallery/cosi/2.jpg', 'img/gallery/cosi/3.jpg', 'img/gallery/cosi/4.jpg', 'img/gallery/cosi/5.jpg', 'img/gallery/cosi/6.jpg', 'img/gallery/cosi/7.jpg'];
var th_cosiLinks = ['img/gallery/cosi/thumb/1.jpg', 'img/gallery/cosi/thumb/2.jpg', 'img/gallery/cosi/thumb/3.jpg', 'img/gallery/cosi/thumb/4.jpg', 'img/gallery/cosi/thumb/5.jpg', 'img/gallery/cosi/thumb/6.jpg', 'img/gallery/cosi/thumb/7.jpg'];
gallery.push(new Album('COSI Rhythm and Speech Perception Lab', cosiLinks, th_cosiLinks, 'January 2017', 'cosi'));

/**
 * End defining gallery albums
 */

$(function() {
    var select = document.getElementById("selectNumber");

    // Add dropdown options
    for (var i = 0; i < gallery.length; i++) {
        var album = gallery[i];
        var el = document.createElement("option");
        el.textContent = album.title;
        el.value = album.title;
        el.setAttribute('id', i+1);
        select.appendChild(el);
    }

    loadGallery();
});

function loadGallery() {
    $('.tz-header').remove();
    $('.tz-gallery').remove();

    var base = document.getElementById('gallery').children;
    for (var i = 0; i < gallery.length; i++){
        if(document.getElementById(0).selected == true || document.getElementById(i+1).selected == true){
            var album = gallery[i];
            addHeader(album.title, album.time, base[0]);
            setupGallery(album.id, base[0]);

            for (var j = 0; j < album.links.length; j++) {
                insertThumbnail(album.links[j], album.thumbLinks[j], album.id);
            }
        }
    }

    baguetteBox.run('.tz-gallery');
}

function addHeader(header, subheader, parent) {
    var newDiv = document.createElement("div");
    newDiv.className += 'row tz-header';

        var headerText = document.createElement("h2");
        headerText.textContent = header;
        newDiv.appendChild(headerText);

        if(subheader.length > 0){
            var subheaderText = document.createElement("h4");
            subheaderText.textContent = subheader;
            newDiv.appendChild(subheaderText);
        }

    parent.appendChild(newDiv);
}

function setupGallery(id, parent) {
    var gallery = document.createElement("div");
    gallery.className += 'tz-gallery';
    gallery.setAttribute('id', id);
    gallery.setAttribute('style', 'padding-top: 240px; margin-top: -200px;');

        var row = document.createElement("div");
        row.className += 'row';
        gallery.appendChild(row);

    parent.appendChild(gallery);
}

function insertThumbnail(link, thumbnailLink, galleryID) {
    var newCol = document.createElement("div");
    newCol.className += 'col-sm-6 col-md-4';

        var thumbnail = document.createElement("div");
        thumbnail.className += 'thumbnail';

            var newLink = document.createElement("a");
            newLink.className += 'lightbox';
            newLink.setAttribute('href', link);

                var newImg = document.createElement("img");
                newImg.setAttribute('src', thumbnailLink);
                newLink.appendChild(newImg);

            thumbnail.appendChild(newLink);

        newCol.appendChild(thumbnail);

    var parent = document.getElementById(galleryID).children;
    parent[0].appendChild(newCol);
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