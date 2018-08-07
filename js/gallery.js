$(function() {
    var select = document.getElementById("selectNumber");
    var options = ["COSI Rhythm and Speech Perception Lab", "Demonstrating Therabeat at ShowOHI/O", "Shimadzu, Japan", "New FMRI Protocol", "Arlington Court Nursing Home Seminar", "fNIRS Demo Experiment", "Rock Climbing", "Summer 2018"];
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        el.setAttribute('id', i+1);
        select.appendChild(el);
    }

    loadnew();
});

function loadnew() {
    $('.tz-header').remove();
    $('.tz-gallery').remove();

    var cosi = 0, therabeat = 0, shimadzu = 0, protocol = 0, arlington = 0, fnirs = 0, rockcl = 0, su18 = 0;
    if (document.getElementById("0").selected == true){
        cosi = therabeat = shimadzu = protocol = arlington = fnirs = rockcl = su18 = 1;
    } else if (document.getElementById("1").selected == true){
        cosi = 1;
    } else if (document.getElementById("2").selected == true){
        therabeat = 1;
    } else if (document.getElementById("3").selected == true){
        shimadzu = 1;
    } else if (document.getElementById("4").selected == true){
        protocol = 1;
    } else if (document.getElementById("5").selected == true){
        arlington = 1;
    } else if (document.getElementById("6").selected == true){
        fnirs = 1;
    } else if (document.getElementById("7").selected == true){
        rockcl = 1;
    } else {
        su18 = 1;
    }

    /* Begin defining gallery images here */

    var shimadzuLinks = ['img/gallery/shimadzu-japan/IMG_0807.jpg', 'img/gallery/shimadzu-japan/IMG_0814.jpg', 'img/gallery/shimadzu-japan/IMG_0817.jpg', 'img/gallery/shimadzu-japan/IMG_0819.jpg', 'img/gallery/shimadzu-japan/IMG_0828.jpg', 'img/gallery/shimadzu-japan/IMG_0836.jpg'];
    var th_shimadzuLinks = ['img/gallery/shimadzu-japan/thumb/IMG_0807.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0814.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0817.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0819.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0828.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0836.jpg'];

    var therabeatLinks = ['img/gallery/therabeat-showohio/1.jpg', 'img/gallery/therabeat-showohio/2.jpg', 'img/gallery/therabeat-showohio/3.jpg', 'img/gallery/therabeat-showohio/4.jpg'];
    var th_therabeatLinks = ['img/gallery/therabeat-showohio/thumb/1.jpg', 'img/gallery/therabeat-showohio/thumb/2.jpg', 'img/gallery/therabeat-showohio/thumb/3.jpg', 'img/gallery/therabeat-showohio/thumb/4.jpg'];

    var cosiLinks = ['img/gallery/cosi/1.jpg', 'img/gallery/cosi/2.jpg', 'img/gallery/cosi/3.jpg', 'img/gallery/cosi/4.jpg', 'img/gallery/cosi/5.jpg', 'img/gallery/cosi/6.jpg', 'img/gallery/cosi/7.jpg'];
    var th_cosiLinks = ['img/gallery/cosi/thumb/1.jpg', 'img/gallery/cosi/thumb/2.jpg', 'img/gallery/cosi/thumb/3.jpg', 'img/gallery/cosi/thumb/4.jpg', 'img/gallery/cosi/thumb/5.jpg', 'img/gallery/cosi/thumb/6.jpg', 'img/gallery/cosi/thumb/7.jpg'];

    var firstFMRILinks = ['img/gallery/first-fmri-new-protocol/IMG_1156.jpg', 'img/gallery/first-fmri-new-protocol/IMG_1158.jpg'];
    var th_firstFMRILinks = ['img/gallery/first-fmri-new-protocol/thumb/IMG_1156.jpg', 'img/gallery/first-fmri-new-protocol/thumb/IMG_1158.jpg'];

    var arlingtonCourtLinks = ['img/gallery/arlington-nursing-home/1.jpg', 'img/gallery/arlington-nursing-home/2.jpg', 'img/gallery/arlington-nursing-home/3.jpg'];
    var th_arlingtonCourtLinks = ['img/gallery/arlington-nursing-home/thumb/1.jpg', 'img/gallery/arlington-nursing-home/thumb/2.jpg', 'img/gallery/arlington-nursing-home/thumb/3.jpg'];

    var fnirsDemoLinks = ['img/gallery/fnirs-demo/1.jpg', 'img/gallery/fnirs-demo/2.jpg'];
    var th_fnirsDemoLinks = ['img/gallery/fnirs-demo/thumb/1.jpg', 'img/gallery/fnirs-demo/thumb/2.jpg'];

    var rockclLinks = ["img/gallery/rock-climbing/20180423_144050.jpg", "img/gallery/rock-climbing/20180423_144339.jpg", "img/gallery/rock-climbing/20180423_144433.jpg", "img/gallery/rock-climbing/20180423_144504.jpg", "img/gallery/rock-climbing/20180423_144642.jpg", "img/gallery/rock-climbing/20180423_144739.jpg", "img/gallery/rock-climbing/20180423_150346_HDR.jpg", "img/gallery/rock-climbing/20180423_150403.jpg",
     "img/gallery/rock-climbing/20180423_151134_HDR.jpg", "img/gallery/rock-climbing/20180423_151153_HDR.jpg", "img/gallery/rock-climbing/20180423_151824.jpg", "img/gallery/rock-climbing/20180423_151855_HDR.jpg", "img/gallery/rock-climbing/20180423_152018.jpg", "img/gallery/rock-climbing/20180423_152035.jpg", "img/gallery/rock-climbing/20180423_152249_HDR.jpg", "img/gallery/rock-climbing/20180423_152428_HDR.jpg", "img/gallery/rock-climbing/20180423_152656.jpg", "img/gallery/rock-climbing/20180423_152815.jpg", "img/gallery/rock-climbing/20180423_153616_HDR.jpg", "img/gallery/rock-climbing/20180423_153932.jpg"];
    var th_rockclLinks = ["img/gallery/rock-climbing/thumb/20180423_144050.jpg", "img/gallery/rock-climbing/thumb/20180423_144339.jpg", "img/gallery/rock-climbing/thumb/20180423_144433.jpg", "img/gallery/rock-climbing/thumb/20180423_144504.jpg", "img/gallery/rock-climbing/thumb/20180423_144642.jpg", "img/gallery/rock-climbing/thumb/20180423_144739.jpg", "img/gallery/rock-climbing/thumb/20180423_150346_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_150403.jpg", "img/gallery/rock-climbing/thumb/20180423_151134_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_151153_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_151824.jpg", "img/gallery/rock-climbing/thumb/20180423_151855_HDR.jpg",
     "img/gallery/rock-climbing/thumb/20180423_152018.jpg", "img/gallery/rock-climbing/thumb/20180423_152035.jpg", "img/gallery/rock-climbing/thumb/20180423_152249_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_152428_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_152656.jpg", "img/gallery/rock-climbing/thumb/20180423_152815.jpg", "img/gallery/rock-climbing/thumb/20180423_153616_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_153932.jpg"];

     var su18Links = ['img/gallery/summer-2018/1.jpg', 'img/gallery/summer-2018/2.jpg', 'img/gallery/summer-2018/3.png'];
     var th_su18Links = ['img/gallery/summer-2018/thumb/1.jpg', 'img/gallery/summer-2018/thumb/2.jpg', 'img/gallery/summer-2018/thumb/3.png'];
    /* End defining gallery images */

    var base = document.getElementById('gallery').children;

    if (su18) {
        addHeader('Summer 2018', 'May - August 2018', base[0]);
        setupGallery('su18', base[0]);

        for (var i = 0; i < su18Links.length; i++) {
            insertThumbnail(su18Links[i], th_su18Links[i], 'su18');
        }
    }

    if (rockcl) {
        addHeader('Rock Climbing', 'April 23, 2018', base[0]);
        setupGallery('rockcl', base[0]);

        for (var i = 0; i < rockclLinks.length; i++) {
            insertThumbnail(rockclLinks[i], th_rockclLinks[i], 'rockcl');
        }
    }

    if (fnirs) {
        addHeader('fNIRS Demo Experiment', 'October 13, 2017', base[0]);
        setupGallery('fnirs', base[0]);

        for (var i = 0; i < fnirsDemoLinks.length; i++) {
            insertThumbnail(fnirsDemoLinks[i], th_fnirsDemoLinks[i], 'fnirs');
        }
    }

    if (arlington) {
        addHeader('Arlington Court Nursing Home Seminar', 'July 21, 2017', base[0]);
        setupGallery('arlington', base[0]);

        for (var i = 0; i < arlingtonCourtLinks.length; i++) {
            insertThumbnail(arlingtonCourtLinks[i], th_arlingtonCourtLinks[i], 'arlington');
        }
    }

    if (protocol) {
        addHeader('New FMRI Protocol', 'July 19, 2017', base[0]);
        setupGallery('protocol', base[0]);

        for (var i = 0; i < firstFMRILinks.length; i++) {
            insertThumbnail(firstFMRILinks[i], th_firstFMRILinks[i], 'protocol');
        }
    }

    if (shimadzu) {
        addHeader('Shimadzu, Japan', 'June 6, 2017', base[0]);
        setupGallery('shimadzu', base[0]);

        for (var i = 0; i < shimadzuLinks.length; i++) {
            insertThumbnail(shimadzuLinks[i], th_shimadzuLinks[i],'shimadzu');
        }
    }

    if (therabeat) {
        addHeader('Demonstrating Therabeat at ShowOHI/O', 'April 8, 2017', base[0]);
        setupGallery('therabeat', base[0]);

        for (var i = 0; i < therabeatLinks.length; i++) {
            insertThumbnail(therabeatLinks[i], th_therabeatLinks[i], 'therabeat');
        }
    }

    if (cosi) {
        addHeader('COSI Rhythm and Speech Perception Lab', 'January 2017', base[0]);
        setupGallery('cosi', base[0]);

        for (var i = 0; i < cosiLinks.length; i++) {
            insertThumbnail(cosiLinks[i], th_cosiLinks[i], 'cosi');
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