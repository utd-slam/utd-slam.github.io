var allProjects = [];
var pastProjects = [];
var Project = makeStruct("title img modalID");

/**
 * Add projects
 * Newest projects at the TOP
*/


allProjects.push(new Project('Efficacy of a Novel Sound Therapy on Language Functioning in Patients with Alzheimer\'s Disease: A Clinical Trial', 'img/flyers/TheraBeat_Alzheimers_Disease_CR _flyer.png', '#studyModal1'));

allProjects.push(new Project('Efficacy of a Novel Sound Therapy on Language Functioning in Patients with Mild Cognitive Impairment: A Clinical Trial', 'img/flyers/MCI.jpg', '#studyModal2'));

allProjects.push(new Project('Home-based Intervention for Chronic Aphasia', 'img/flyers/aphasia_flyer_short_v17.jpg', '#studyModal3'));

allProjects.push(new Project('Neurostimulation and Behavior Study', 'img/flyers/SLAM_Neurostim_flyer_v2.png', '#studyModal4'));

allProjects.push(new Project('Neurostimulation and Language Study', 'img/flyers/Neurostimulation_Language.jpg', '#studyModal5'));

allProjects.push(new Project('Speech, Language and Music Study', 'img/flyers/Behavioral.png', '#studyModal6'));
/*  ***THESE ARE GENERAL PROJECTS THAT DO NOT DESCRIBE SPECIFIC STUDIES***
allProjects.push(new Project('Video Game Therapy for Chronic Aphasia', 'img/portfolio/aphasia.jpg', '#portfolioModal5'));

allProjects.push(new Project('Neural Mechanisms of Rhythm-Based Language Improvement', 'img/portfolio/rhythmpriming.jpg', '#portfolioModal6')); 

allProjects.push(new Project('Shared Brain Networks of Music and Language', 'img/portfolio/temporalprocessing.jpg', '#portfolioModal1'));

allProjects.push(new Project('Genetic Mediators of Music and Language Connection', 'img/portfolio/DNA_Genotype.jpg', '#portfolioModal7'));

allProjects.push(new Project('Using TACS to Change Language and Music Behaviors', 'img/portfolio/Record_Player.jpg', '#portfolioModal8'));

allProjects.push(new Project('Neuromodulation through Auditory Stimulation', 'img/portfolio/Neuromodulation.jpg', '#portfolioModal9'));

/* 
allProjects.push(new Project('Music-Based Intervention Program for School-Age Children', 'img/portfolio/kids-girl-pencil-drawing-159823.jpg', '#portfolioModal4'));
*/

/**allProjects.push(new Project('Changes in Neural Activity Following Cochlear Implant (CI)', 'img/portfolio/Synapse_in_brain.jpg', '#portfolioModal2'));
*/

/*
pastProjects.push(new Project('Drum Dance Rehabilitation for Parkinson\'s Disease', 'img/portfolio/emotional-50309_640.jpg', '#portfolioModal3'));
*/

/* End of add projects */


/**
 * NOTE: script only populates thumbnails on the projects page, NOT the popup modals
 * HTML for modals are defined towards the bottom of projects.html
 */
$(function () {
    var base = document.getElementById('projects').children;
    var newRow;

    for (var i = 0; i < allProjects.length; i++) {
        if (i % 3 == 0) {
            newRow = document.createElement("div");
            newRow.className += 'row';
            newRow.setAttribute('id', i / 3);
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

/*  ***DONT NEED THIS FOR NOW***
$(function () {
    var base = document.getElementById('pastprojects').children;
    var newRow;

    for (var i = 0; i < pastProjects.length; i++) {
        if (i % 3 == 0) {
            newRow = document.createElement("div");
            newRow.className += 'row';
            newRow.setAttribute('id', i / 3);
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

*/

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