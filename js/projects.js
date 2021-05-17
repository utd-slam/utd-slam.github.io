var allProjects = [];
var pastProjects = [];
var Project = makeStruct("title img modalID");

/**
 * Add projects
 * Newest projects at the TOP
 */

allProjects.push(new Project('Video Game Therapy for Chronic Aphasia', 'img/portfolio/aphasia.jpg', '#portfolioModal5'));

allProjects.push(new Project('Rhythm Priming and Neuromodulation', 'img/portfolio/rhythmpriming.jpg', '#portfolioModal6')); /**TODO: ADD PICTURE*/

allProjects.push(new Project('Music and Language: Shared Temporal Processing', 'img/portfolio/temporalprocessing.jpg', '#portfolioModal1'));

allProjects.push(new Project('Music-Based Intervention Program for School-Age Children', 'img/portfolio/kids-girl-pencil-drawing-159823.jpg', '#portfolioModal4'));


/**allProjects.push(new Project('Changes in Neural Activity Following Cochlear Implant (CI)', 'img/portfolio/Synapse_in_brain.jpg', '#portfolioModal2'));
 */

pastProjects.push(new Project('Drum Dance Rehabilitation for Parkinson\'s Disease', 'img/portfolio/emotional-50309_640.jpg', '#portfolioModal3'));

/* End of add projects */


/**
 * NOTE: script only populates thumbnails on the projects page, NOT the popup modals
 * HTML for modals are defined towards the bottom of projects.html
 */
$(function() {
    var base = document.getElementById('projects').children;
    var newRow;

    for (var i = 0; i < allProjects.length; i++) {
        if (i % 3 == 0) {
            newRow = document.createElement("div");
            newRow.className += 'row';
            newRow.setAttribute('id', i/3);
            newRow.setAttribute('style', 'padding-top: 100px; margin-top: -100px;');
            base[0].appendChild(newRow);
        }

        var newCol = document.createElement("div");
        newCol.className += 'col-md-4 col-sm-6 portfolio-item';

            var link = document.createElement("a");
            link.setAttribute('href', allProjects[i].modalID);
            link.setAttribute('data-toggle', 'modal');
            link.className += 'portfolio-link';

                var portfolioWrap = document.createElement("div");
                portfolioWrap.className += 'portfolio-hover';

                    var contentWrap = document.createElement("div");
                    contentWrap.className += 'portfolio-hover-content';

                        var icon = document.createElement("i");
                        icon.className += 'fa fa-plus fa-3x';
                        contentWrap.appendChild(icon);

                    portfolioWrap.appendChild(contentWrap);

                link.appendChild(portfolioWrap);

                var image = document.createElement('img');
                image.setAttribute('src', allProjects[i].img);
                image.className += 'img-responsive';
                link.appendChild(image);

            newCol.appendChild(link);

                var caption = document.createElement("div");
                caption.className += 'portfolio-caption';

                var newTitle = document.createElement("h4");
                newTitle.textContent = allProjects[i].title;
                caption.appendChild(newTitle);

            newCol.appendChild(caption);

        newRow.appendChild(newCol);
    }
});

$(function() {
    var base = document.getElementById('pastprojects').children;
    var newRow;

    for (var i = 0; i < pastProjects.length; i++) {
        if (i % 3 == 0) {
            newRow = document.createElement("div");
            newRow.className += 'row';
            newRow.setAttribute('id', i/3);
            newRow.setAttribute('style', 'padding-top: 100px; margin-top: -100px;');
            base[0].appendChild(newRow);
        }

        var newCol = document.createElement("div");
        newCol.className += 'col-md-4 col-sm-6 portfolio-item';

            var link = document.createElement("a");
            link.setAttribute('href', pastProjects[i].modalID);
            link.setAttribute('data-toggle', 'modal');
            link.className += 'portfolio-link';

                var portfolioWrap = document.createElement("div");
                portfolioWrap.className += 'portfolio-hover';

                    var contentWrap = document.createElement("div");
                    contentWrap.className += 'portfolio-hover-content';

                        var icon = document.createElement("i");
                        icon.className += 'fa fa-plus fa-3x';
                        contentWrap.appendChild(icon);

                    portfolioWrap.appendChild(contentWrap);

                link.appendChild(portfolioWrap);

                var image = document.createElement('img');
                image.setAttribute('src', pastProjects[i].img);
                image.className += 'img-responsive';
                link.appendChild(image);

            newCol.appendChild(link);

                var caption = document.createElement("div");
                caption.className += 'portfolio-caption';

                var newTitle = document.createElement("h4");
                newTitle.textContent = pastProjects[i].title;
                caption.appendChild(newTitle);

            newCol.appendChild(caption);

        newRow.appendChild(newCol);
    }
});

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
