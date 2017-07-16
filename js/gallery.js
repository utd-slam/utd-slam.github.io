$(function() {
    var select = document.getElementById("selectNumber");
    var options = ["COSI Rhythm and Speech Perception Lab", "Demonstrating Therabeat at ShowOHI/O", "Shimadzu, Japan"];
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

    var cosi = 0, therabeat = 0, shimadzu = 0;
    if (document.getElementById("0").selected == true){
        cosi = therabeat = shimadzu = 1;
    } else if (document.getElementById("1").selected == true){
        cosi = 1;
    } else if (document.getElementById("2").selected == true){
        therabeat = 1;
    } else {
        shimadzu = 1;
    }

    /* Begin defining gallery images here */

    var shimadzuLinks = ['img/gallery/shimadzu-japan/IMG_0807.jpg', 'img/gallery/shimadzu-japan/IMG_0814.jpg', 'img/gallery/shimadzu-japan/IMG_0817.jpg', 'img/gallery/shimadzu-japan/IMG_0819.jpg', 'img/gallery/shimadzu-japan/IMG_0828.jpg', 'img/gallery/shimadzu-japan/IMG_0836.jpg'];
    var th_shimadzuLinks = ['img/gallery/shimadzu-japan/thumb/IMG_0807.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0814.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0817.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0819.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0828.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0836.jpg'];

    var therabeatLinks = ['img/gallery/therabeat-showohio/1.jpg', 'img/gallery/therabeat-showohio/2.jpg', 'img/gallery/therabeat-showohio/3.jpg', 'img/gallery/therabeat-showohio/4.jpg'];
    var th_therabeatLinks = ['img/gallery/therabeat-showohio/thumb/1.jpg', 'img/gallery/therabeat-showohio/thumb/2.jpg', 'img/gallery/therabeat-showohio/thumb/3.jpg', 'img/gallery/therabeat-showohio/thumb/4.jpg'];

    var cosiLinks = ['img/gallery/cosi/1.jpg', 'img/gallery/cosi/2.jpg', 'img/gallery/cosi/3.jpg', 'img/gallery/cosi/4.jpg', 'img/gallery/cosi/5.jpg', 'img/gallery/cosi/6.jpg', 'img/gallery/cosi/7.jpg'];
    var th_cosiLinks = ['img/gallery/cosi/thumb/1.jpg', 'img/gallery/cosi/thumb/2.jpg', 'img/gallery/cosi/thumb/3.jpg', 'img/gallery/cosi/thumb/4.jpg', 'img/gallery/cosi/thumb/5.jpg', 'img/gallery/cosi/thumb/6.jpg', 'img/gallery/cosi/thumb/7.jpg'];

    /* End defining gallery images */

    var base = document.getElementById('gallery').children;

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
        addHeader('COSI Rhythm and Speech Perception Lab', 'January 2017 - Present', base[0]);
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