var allPublications = [];
var Publication = makeStruct("title credit img link");

/**
 * Add publications
 * Newest publications at the TOP
 */

allPublications.push(new Publication('Rhythm and Syntax Processing in School-Age Children', 'Yune S. Lee, Sanghoon Ahn, Rachael Frush Holt, E. Glenn Schellenberg, In Press. Developmental Psychology', 'img/publications/rhythm_syntax_children.jpg', 'doc/rhythm_and_syntax_processing_children.pdf')); //TODO: Add final version!

allPublications.push(new Publication('Shared neural resources of rhythm and syntax: An ALE Meta-Analysis', 'Matthew Heard, Yune S. Lee, 2019. Neuropsychologia, 107284.', 'img/publications/close-up-photo-of-drum-set-995301.jpg', 'doc/Heard_Lee_ALE_2019.pdf'));
 
allPublications.push(new Publication('Music, the Brain, and Health: Speech and Language', 'YS Lee, C. Thaut, C. Santoni, 2019. Oxford Handbook on Music and the Brain, Chapter 29. Oxford University Press.', 'img/publications/BrainMusicHealth.jpg', 'doc/Lee_neurologic_music_therapy2019.pdf'));

allPublications.push(new Publication('Impact of Subtle Hearing Loss on the Cognition of Young Adults', 'Yune S. Lee, 2018. The Hearing Journal, 71(10), 30.', 'img/publications/young-adults.jpg', 'doc/Impact_of_Subtle_Hearing_Loss_on_the_Cognition_of.pdf'));

allPublications.push(new Publication('How does human motor cortex regulate vocal pitch in singers?', 'M. Belyk, Yune S. Lee, S. Brown, 2018. Royal Society Open Science, 5:172208.', 'img/publications/singer.jpg', 'http://rsos.royalsocietypublishing.org/content/5/8/172208'));

allPublications.push(new Publication('Differences in Hearing Acuity among “Normal-Hearing” Young Adults', 'Yune S. Lee, Arthur Wingfield, Nam-Eun Min, Ethan Kotloff, Murray Grossman and Jonathan E. Peelle, 2018. eNeuro.', 'img/publications/hearing-acuity.jpg', 'http://www.eneuro.org/content/early/2018/05/21/ENEURO.0263-17.2018'));

allPublications.push(new Publication('Neural bases of action abstraction', 'Lorna C. Quandt, Yune-Sang Lee, Anjan Chatterjee, 2017. Biological Psychology, 129, 314–323.', 'img/publications/golf.png', 'doc/2017_Quandt.pdf'));

allPublications.push(new Publication('Patterns of neural activity predict picture-naming performance of a patient with chronic aphasia', 'Yune-Sang Lee, Jihad T. Zreik, Roy H. Hamilton, 2017. Neuropsychologia, 94, 52–60.', 'img/publications/question-mark.jpg', 'doc/Lee-et-al-2017.pdf'));

allPublications.push(new Publication('Acoustic richness modulates the neural networks supporting intelligible speech processing', 'Yune-Sang Lee, Nam Eun Min, Arthur Wingfield, Murray Grossman, Jonathan E. Peelle, 2016. Hearing Research, 333, 108-117.', 'img/publications/headphones.jpg', 'doc/Lee-et-al-2016.pdf'));

allPublications.push(new Publication('Melody recognition revisited: influence of melodic Gestalt on the encoding of relational pitch information', 'Yune-Sang Lee, Petr Janata, Carlton Frost, Zachary Martinez, Richard Granger, 2015. Psych. Bull. Rev., 22, 163–169.', 'img/publications/music-sheet.jpg', 'doc/Lee_melodic_gestalt2015.pdf'));

allPublications.push(new Publication('Multivariate sensitivity to voice during auditory categorization', 'Yune Sang Lee, Jonathan E. Peelle, David Kraemer, Samuel Lloyd, Richard Granger, 2015. Journal of Neurophysiology, 114, 1819–1826.', 'img/publications/man-with-a-megaphone.jpg', 'doc/Lee_voice_sound2015.pdf'));

allPublications.push(new Publication('Individual differences in the morphometry and activation of time perception networks are influenced by dopamine genotype', 'Martin Wiener, Yune-Sang Lee, FalkW. Lohoff, H. Branch Coslett, 2014. NeuroImage, 89, 10–22.', 'img/publications/time.jpg', 'doc/Wiener-et-al-2014.pdf'));

allPublications.push(new Publication('Smoothness without Smoothing: Why Gaussian Naive Bayes Is Not Naive for Multi-Subject Searchlight Studies', 'Rajeev D. S. Raizada, Yune-Sang Lee, 2013. PLoS ONE, 8, e69566.', 'img/publications/blur.jpg', 'doc/Raizada-and-Lee-2013.pdf'));

allPublications.push(new Publication('Categorical Speech Processing in Broca’s Area: An fMRI Study Using Multivariate Pattern-Based Analysis', 'Yune-Sang Lee, Peter Turkeltaub, Richard Granger, and Rajeev D. S. Raizada, 2012. The Journal of Neuroscience, 32, 3942–3948.', 'img/publications/hear.jpg', 'doc/Lee_categorical_speech2012.pdf'));

allPublications.push(new Publication('Investigation of melodic contour processing in the brain using multivariate pattern-based fMRI', 'Yune-Sang Lee, Petr Janata, Carlton Frost, Michael Hanke, Richard Granger, 2011. NeuroImage, 57, 293–300.', 'img/publications/organ.jpg', 'doc/Lee_music_contour2011.pdf'));

allPublications.push(new Publication('Neural and behavioral correlates of auditory categorization', 'Brian E. Russ, Yune-Sang Lee, Yale E. Cohen, 2007. Hearing Research, 229, 204–212.', 'img/publications/monkey.jpg', 'doc/Russ-et-al-2007.pdf'));

/* End of add publications */

$(function() {
    var base = document.getElementById('publication').children;
    var newRow;

    for (var i = 0; i < allPublications.length; i++) {
        if (i % 3 == 0) {
            newRow = document.createElement("div");
            newRow.className += 'row';
            base[0].appendChild(newRow);
        }
        var newCol = document.createElement("div");
        newCol.className += 'col-md-4 col-sm-6 portfolio-item';

            var publicationLink = document.createElement("a");
            publicationLink.href = allPublications[i].link;
            newCol.appendChild(publicationLink);

            var image = document.createElement('img');
            image.setAttribute('src', allPublications[i].img);
            image.className += 'img-responsive';
            publicationLink.appendChild(image);

            var newText = document.createElement("div");
            newText.className += 'portfolio-caption';

                var newTitle = document.createElement("h4");
                newTitle.textContent = allPublications[i].title;
                newText.appendChild(newTitle);

                var newSubheading = document.createElement("h3");
                newSubheading.className += 'text-muted section-subheading';
                newSubheading.setAttribute('style', 'margin-bottom:0;');

                var text = allPublications[i].credit + ' ';
                newSubheading.textContent = text;

                    var link = document.createElement("a");
                    link.setAttribute('href', allPublications[i].link);
                    var download = document.createElement("i");
                    download.className += 'fa fa-download';
                    link.appendChild(download);
                    newSubheading.appendChild(link);

                newText.appendChild(newSubheading);

            newCol.appendChild(newText);

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