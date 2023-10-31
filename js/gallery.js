var gallery = [];
var Album = makeStruct("title links thumbLinks thumbLabel time id type");

/**
 * Begin defining gallery albums
 * If you are adding a new album, define everything after this comment. Most Recent entries at the top.
 */
// Create 'DSO_PBS_Episode' album
var DSO_PBS_Episode_Links = ['img/gallery/PBS/1.jpg', 'img/gallery/PBS/2.jpg', 'img/gallery/PBS/3.jpg', 'img/gallery/PBS/4.jpg', 'img/gallery/PBS/5.jpg', 'img/gallery/PBS/6.jpg', 'img/gallery/PBS/7.jpg', 'img/gallery/PBS/8.jpg', 'img/gallery/PBS/9.jpg', 'img/gallery/PBS/10.jpg'];
var th_DSO_PBS_Episode_Links = ['img/gallery/PBS/1.jpg', 'img/gallery/PBS/2.jpg', 'img/gallery/PBS/3.jpg', 'img/gallery/PBS/4.jpg', 'img/gallery/PBS/5.jpg', 'img/gallery/PBS/6.jpg', 'img/gallery/PBS/7.jpg', 'img/gallery/PBS/8.jpg', 'img/gallery/PBS/9.jpg', 'img/gallery/PBS/10.jpg'];
gallery.push(new Album('DSO PBS Episode', DSO_PBS_Episode_Links, th_DSO_PBS_Episode_Links, Array(th_DSO_PBS_Episode_Links.length).fill(''), 'October 2023', 'th_DSO_PBS_Episode_Links', 'other'));

// Create 'DSO_Summer_Camp' album
var DSO_Summer_Camp_Links = ['img/gallery/DSO_Summer_Camp/1.jpg', 'img/gallery/DSO_Summer_Camp/2.jpg', 'img/gallery/DSO_Summer_Camp/3.jpg', 'img/gallery/DSO_Summer_Camp/4.jpg'];
var th_DSO_Summer_Camp_Links = ['img/gallery/DSO_Summer_Camp/1.jpg', 'img/gallery/DSO_Summer_Camp/2.jpg', 'img/gallery/DSO_Summer_Camp/3.jpg', 'img/gallery/DSO_Summer_Camp/4.jpg'];
gallery.push(new Album('DSO Summer Camp', DSO_Summer_Camp_Links, th_DSO_Summer_Camp_Links, Array(th_DSO_Summer_Camp_Links.length).fill(''), 'July 2023', 'th_DSO_Summer_Camp_Links', 'other'));

// Create 'Portable_EEG_System_Workshop' album
var EEG_Workshop_Links = ['img/gallery/EEG_Workshop/1.jpg', 'img/gallery/EEG_Workshop/2.jpg', 'img/gallery/EEG_Workshop/3.jpg'];
var th_EEG_Workshop_Links = ['img/gallery/EEG_Workshop/1.jpg', 'img/gallery/EEG_Workshop/2.jpg', 'img/gallery/EEG_Workshop/3.jpg'];
gallery.push(new Album('Portable EEG System Workshop', EEG_Workshop_Links, th_EEG_Workshop_Links, Array(th_EEG_Workshop_Links.length).fill(''), 'July 2023', 'th_EEG_Workshop_Links', 'other'));

// Create 'Feb_2023_Lab_Dinner' album
var Feb_2023_Lab_Dinner_Links = ['img/gallery/Feb_2023_Lab_Dinner/1.jpg'];
var th_Feb_2023_Lab_Dinner_Links = ['img/gallery/Feb_2023_Lab_Dinner/1.jpg'];
gallery.push(new Album('February 2023 Lab Dinner', Feb_2023_Lab_Dinner_Links, th_Feb_2023_Lab_Dinner_Links, Array(th_Feb_2023_Lab_Dinner_Links.length).fill(''), 'February 2023', 'th_Feb_2023_Lab_Dinner_Links', 'other'));

// Create 'Dec_2022_Lab_Dinner' album
var Dec_2022_Lab_Dinner_Links = ['img/gallery/Dec_2022_Lab_Dinner/1.png'];
var th_Dec_2022_Lab_Dinner_Links = ['img/gallery/Dec_2022_Lab_Dinner/1.png'];
gallery.push(new Album('December 2022 Lab Holiday Dinner', Dec_2022_Lab_Dinner_Links, th_Dec_2022_Lab_Dinner_Links, Array(th_Dec_2022_Lab_Dinner_Links.length).fill(''), 'December 2022', 'th_Dec_2022_Lab_Dinner_Links', 'other'));


// Create 'Katie_G_and_Katherine_W_Graduation' album
var Katie_G_and_Katherine_W_Graduation_Links = ['img/gallery/Katie_G_and_Katherine_W_Graduation/1.png', 'img/gallery/Katie_G_and_Katherine_W_Graduation/2.png'];
var th_Katie_G_and_Katherine_W_Graduation_Links = ['img/gallery/Katie_G_and_Katherine_W_Graduation/1.png', 'img/gallery/Katie_G_and_Katherine_W_Graduation/2.png'];
gallery.push(new Album('Katie Ginter and Katherine Wood Graduation', Katie_G_and_Katherine_W_Graduation_Links, th_Katie_G_and_Katherine_W_Graduation_Links, Array(th_Katie_G_and_Katherine_W_Graduation_Links.length).fill(''), 'December 2022', 'Katie_G_and_Katherine_W_Graduation_Links', 'other'));

// Cretae 'Matthew_H_Dissertation_Proposal_Defense' album
var Matthew_H_Dissertation_Proposal_Defense_Links = ['img/gallery/Matthew_H_Dissertation_Proposal_Defense/1.png'];
var th_Matthew_H_Dissertation_Proposal_Defense_Links = ['img/gallery/Matthew_H_Dissertation_Proposal_Defense/1.png'];
gallery.push(new Album('Matthew Heard Disseration Proposal Defense', Matthew_H_Dissertation_Proposal_Defense_Links, th_Matthew_H_Dissertation_Proposal_Defense_Links, Array(th_Matthew_H_Dissertation_Proposal_Defense_Links.length).fill(''), 'December 2022', 'Matthew_H_Dissertation_Proposal_Defense_Links', 'other'));


// Create 'AWARE_Dallas_Event_2022' album
var AWARE_Dallas_Event_2022_Links = ['img/gallery/2022_AWARE_Dallas_Event/1.jpg', 'img/gallery/2022_AWARE_Dallas_Event/2.jpg', 'img/gallery/2022_AWARE_Dallas_Event/3.jpg', 'img/gallery/2022_AWARE_Dallas_Event/4.jpg', 'img/gallery/2022_AWARE_Dallas_Event/5.jpg', 'img/gallery/2022_AWARE_Dallas_Event/6.jpg'];
var th_AWARE_Dallas_Event_2022_Links = ['img/gallery/2022_AWARE_Dallas_Event/1.jpg', 'img/gallery/2022_AWARE_Dallas_Event/2.jpg', 'img/gallery/2022_AWARE_Dallas_Event/3.jpg', 'img/gallery/2022_AWARE_Dallas_Event/4.jpg', 'img/gallery/2022_AWARE_Dallas_Event/5.jpg', 'img/gallery/2022_AWARE_Dallas_Event/6.jpg'];
gallery.push(new Album('2022 AWARE Dallas Event', AWARE_Dallas_Event_2022_Links, th_AWARE_Dallas_Event_2022_Links, Array(th_AWARE_Dallas_Event_2022_Links.length).fill(''), 'August 2022', 'AWARE_Dallas_Event_2022_Links', 'other'));

// Create 'Dallas_Museum_2022' album
var Dallas_Museum_2022_Links = ['img/gallery/Dallas_Museum_2022/1.jpg', 'img/gallery/Dallas_Museum_2022/2.jpg', 'img/gallery/Dallas_Museum_2022/3.jpg', 'img/gallery/Dallas_Museum_2022/4.jpg', 'img/gallery/Dallas_Museum_2022/5.jpg', 'img/gallery/Dallas_Museum_2022/6.jpg', 'img/gallery/Dallas_Museum_2022/7.jpg', 'img/gallery/Dallas_Museum_2022/8.jpg', 'img/gallery/Dallas_Museum_2022/9.jpg', 'img/gallery/Dallas_Museum_2022/10.jpg', 'img/gallery/Dallas_Museum_2022/11.jpg', 'img/gallery/Dallas_Museum_2022/12.jpg', 'img/gallery/Dallas_Museum_2022/13.jpg', 'img/gallery/Dallas_Museum_2022/14.jpg', 'img/gallery/Dallas_Museum_2022/15jpg'];
var th_Dallas_Museum_2022_Links = ['img/gallery/Dallas_Museum_2022/1.jpg', 'img/gallery/Dallas_Museum_2022/2.jpg', 'img/gallery/Dallas_Museum_2022/3.jpg', 'img/gallery/Dallas_Museum_2022/4.jpg', 'img/gallery/Dallas_Museum_2022/5.jpg', 'img/gallery/Dallas_Museum_2022/6.jpg', 'img/gallery/Dallas_Museum_2022/7.jpg', 'img/gallery/Dallas_Museum_2022/8.jpg', 'img/gallery/Dallas_Museum_2022/9.jpg', 'img/gallery/Dallas_Museum_2022/10.jpg', 'img/gallery/Dallas_Museum_2022/11.jpg', 'img/gallery/Dallas_Museum_2022/12.jpg', 'img/gallery/Dallas_Museum_2022/13.jpg', 'img/gallery/Dallas_Museum_2022/14.jpg', 'img/gallery/Dallas_Museum_2022/15jpg'];
gallery.push(new Album('SLAM Lab Summer Activity 2022', Dallas_Museum_2022_Links, th_Dallas_Museum_2022_Links, Array(th_Dallas_Museum_2022_Links.length).fill(''), 'July 2022', 'Dallas_Museum_2022_Links', 'other'));

// Create 'SMPC_2022' album
var SMPC_2022_Links = ['img/gallery/SMPC_2022/1.jpg', 'img/gallery/SMPC_2022/2.jpg', 'img/gallery/SMPC_2022/3.jpg', 'img/gallery/SMPC_2022/4.jpg', 'img/gallery/SMPC_2022/5.jpg', 'img/gallery/SMPC_2022/6.jpg', 'img/gallery/SMPC_2022/7.jpg'];
var th_SMPC_2022_Links = ['img/gallery/SMPC_2022/1.jpg', 'img/gallery/SMPC_2022/2.jpg', 'img/gallery/SMPC_2022/3.jpg', 'img/gallery/SMPC_2022/4.jpg', 'img/gallery/SMPC_2022/5.jpg', 'img/gallery/SMPC_2022/6.jpg', 'img/gallery/SMPC_2022/7.jpg'];
gallery.push(new Album('Society for Music Perception and Cognition 2022 Conference', SMPC_2022_Links, th_SMPC_2022_Links, Array(th_SMPC_2022_Links.length).fill(''), 'August 2022', 'SMPC_2022_Links', 'other'));


// Create 'cbh-lecture-and-dinner-3_4_22' album
var cbh_lecture_and_dinner_3_4_22_Links = ['img/gallery/cbh-lecture-and-dinner-3_4_22/1.jpg', 'img/gallery/cbh-lecture-and-dinner-3_4_22/2.jpg', 'img/gallery/cbh-lecture-and-dinner-3_4_22/3.jpg', 'img/gallery/cbh-lecture-and-dinner-3_4_22/4.jpg', 'img/gallery/cbh-lecture-and-dinner-3_4_22/5.jpg', 'img/gallery/cbh-lecture-and-dinner-3_4_22/6.jpg', 'img/gallery/cbh-lecture-and-dinner-3_4_22/7.jpg'];
var th_cbh_lecture_and_dinner_3_4_22_Links = ['img/gallery/cbh-lecture-and-dinner-3_4_22/1.jpg', 'img/gallery/cbh-lecture-and-dinner-3_4_22/2.jpg', 'img/gallery/cbh-lecture-and-dinner-3_4_22/3.jpg', 'img/gallery/cbh-lecture-and-dinner-3_4_22/4.jpg', 'img/gallery/cbh-lecture-and-dinner-3_4_22/5.jpg', 'img/gallery/cbh-lecture-and-dinner-3_4_22/6.jpg', 'img/gallery/cbh-lecture-and-dinner-3_4_22/7.jpg'];
gallery.push(new Album('Center for BrainHealth Lecture and Lab Dinner', cbh_lecture_and_dinner_3_4_22_Links, th_cbh_lecture_and_dinner_3_4_22_Links, Array(th_cbh_lecture_and_dinner_3_4_22_Links.length).fill(''), 'March 2022', 'cbhLecture&dinner_3_4_22', 'other'));


// Create 'friendsOfBrainHealthLuncheon' album
var friendsOfBrainHealthLuncheon_oneLinks = ['img/gallery/friendsOfBrainHealthLuncheon/1.jpg', 'img/gallery/friendsOfBrainHealthLuncheon/2.jpg', 'img/gallery/friendsOfBrainHealthLuncheon/3.jpg', 'img/gallery/friendsOfBrainHealthLuncheon/4.jpg', 'img/gallery/friendsOfBrainHealthLuncheon/5.jpg'];
var th_friendsOfBrainHealthLuncheon_oneLinks = ['img/gallery/friendsOfBrainHealthLuncheon/1.jpg', 'img/gallery/friendsOfBrainHealthLuncheon/2.jpg', 'img/gallery/friendsOfBrainHealthLuncheon/3.jpg', 'img/gallery/friendsOfBrainHealthLuncheon/4.jpg', 'img/gallery/friendsOfBrainHealthLuncheon/5.jpg'];
gallery.push(new Album('Friends of BrainHealth Luncheon', friendsOfBrainHealthLuncheon_oneLinks, th_friendsOfBrainHealthLuncheon_oneLinks, Array(th_friendsOfBrainHealthLuncheon_oneLinks.length).fill(''), 'September 2021', 'friendsOfBrainHealthLuncheon', 'other'));

// Create 'eegDataCollection-one' album
var eegDataCollection_oneLinks = ['img/gallery/eegDataCollection_one/1.jpg', 'img/gallery/eegDataCollection_one/2.jpg'];
var th_eegDataCollection_oneLinks = ['img/gallery/eegDataCollection_one/1.jpg', 'img/gallery/eegDataCollection_one/2.jpg'];
gallery.push(new Album('First EEG Data Collection by Jay and Hyun', eegDataCollection_oneLinks, th_eegDataCollection_oneLinks, Array(th_eegDataCollection_oneLinks.length).fill(''), 'August 2021', 'eegDataCollection_one', 'other'));


// Create 'ARTMeeting' album
var artMeetingLinks = ['img/gallery/artMeeting/1.jpg'];
var th_artMeetingLinks = ['img/gallery/artMeeting/1.jpg'];
gallery.push(new Album('Aphasia Rhythm Therapy (ART) Team Meeting', artMeetingLinks, th_artMeetingLinks, Array(th_artMeetingLinks.length).fill(''), 'June 2021', 'artMeeting', 'other'));

// Create 'SHALunch'
var shaLunchLinks = ['img/gallery/shaLunch/1.jpg'];
var th_shaLunchLinks = ['img/gallery/shaLunch/1.jpg'];
gallery.push(new Album('Lunch after Speech Hero App Brainstorming Session', shaLunchLinks, th_shaLunchLinks, Array(th_shaLunchLinks.length).fill(''), 'May 2021', 'shaLunch', 'other'));

// Create 'CBHVisit' album
var cbhVisitLinks = ['img/gallery/cbhVisit/1.jpg', 'img/gallery/cbhVisit/2.jpg', 'img/gallery/cbhVisit/3.jpg', 'img/gallery/cbhVisit/4.jpg', 'img/gallery/cbhVisit/5.jpg'];
var th_cbhVisitLinks = ['img/gallery/cbhVisit/1.jpg', 'img/gallery/cbhVisit/2.jpg', 'img/gallery/cbhVisit/3.jpg', 'img/gallery/cbhVisit/4.jpg', 'img/gallery/cbhVisit/5.jpg'];
gallery.push(new Album('First Visit to Center for BrainHealth', cbhVisitLinks, th_cbhVisitLinks, Array(th_cbhVisitLinks.length).fill(''), 'September 18, 2020', 'cbhVisit', 'other'));

// Create 'CallierVisit' album
var callierVisitLinks = ['img/gallery/callierVisit/1.jpg', 'img/gallery/callierVisit/2.jpg', 'img/gallery/callierVisit/3.jpg', 'img/gallery/callierVisit/4.jpg'];
var th_callierVisitLinks = ['img/gallery/callierVisit/1.jpg', 'img/gallery/callierVisit/2.jpg', 'img/gallery/callierVisit/3.jpg', 'img/gallery/callierVisit/4.jpg'];
gallery.push(new Album('First Visit to Callier Center Richardson', callierVisitLinks, th_callierVisitLinks, Array(th_callierVisitLinks.length).fill(''), 'August 21, 2020', 'callierVisit', 'other'));

// Create 'MoritzSMPC' album
var moritzSMPCLinks = ['img/gallery/moritzSMPC/1.jpg'];
var th_moritzSMPCLinks = ['img/gallery/moritzSMPC/1.jpg'];
gallery.push(new Album('SMPC 2019 in New York, New York', moritzSMPCLinks, th_moritzSMPCLinks, Array(th_moritzSMPCLinks.length).fill(''), 'August 7, 2019', 'moritzSMPC', 'research'));

// Create 'HeardOHBM' album
var heardOHBMLinks = ['img/gallery/heardOHBM/1.jpg', 'img/gallery/heardOHBM/2.jpg'];
var th_heardOHBMLinks = ['img/gallery/heardOHBM/1.jpg', 'img/gallery/heardOHBM/2.jpg'];
gallery.push(new Album('OHBM 2019 in Rome, Italy', heardOHBMLinks, th_heardOHBMLinks, Array(th_heardOHBMLinks.length).fill(''), 'June 10, 2019', 'heardOHBM', 'research'));

// Create 'KathyStory' album
var kathyStoryLinks = ['img/gallery/kathyStory/1.jpeg', 'img/gallery/kathyStory/2.jpeg', 'img/gallery/kathyStory/3.jpeg'];
var th_kathyStoryLinks = ['img/gallery/kathyStory/thumb/1.jpg', 'img/gallery/kathyStory/thumb/2.jpg', 'img/gallery/kathyStory/thumb/3.jpg'];
gallery.push(new Album('Kathy Story Filmed at Chromedge Studios', kathyStoryLinks, th_kathyStoryLinks, Array(th_kathyStoryLinks.length).fill(''), 'March 11, 2019', 'kathyStory', 'other'));

// Create 'CogFest' album
var cogfestLinks = ['img/gallery/cogfest/1.jpg'];
var th_cogfestLinks = ['img/gallery/cogfest/thumb/1.jpg'];
gallery.push(new Album('CogFest', cogfestLinks, th_cogfestLinks, Array(th_cogfestLinks.length).fill(''), 'March 25, 2019', 'cogfest', 'research'));

// Create 'TBI Summit Evening Reception' album
var tbiSummitLinks = ['img/gallery/tbi-summit-evening/1.jpg', 'img/gallery/tbi-summit-evening/2.jpg', 'img/gallery/tbi-summit-evening/3.jpg'];
var th_tbiSummitLinks = ['img/gallery/tbi-summit-evening/thumb/1.jpg', 'img/gallery/tbi-summit-evening/thumb/2.jpg', 'img/gallery/tbi-summit-evening/thumb/3.jpg'];
gallery.push(new Album('TBI Summit Evening Reception', tbiSummitLinks, th_tbiSummitLinks, Array(th_tbiSummitLinks.length).fill(''), 'March 13, 2019', 'tbi', 'research'));

/*
 // Videos
 var videoLinks = ['https://www.youtube.com/watch?v=NKB4aVbtS9I&feature=youtu.be', 'https://youtu.be/JrsQw5tLWk4', 'https://www.youtube.com/watch?v=gId3gLocel4&feature=youtu.be', 'https://www.youtube.com/watch?v=g8FNi57MqgI'];
 var th_videoLinks = ['img/gallery/videos/thumb/aphasia_rhythm.JPG', 'img/gallery/videos/thumb/ddr_therapy.JPG', 'img/gallery/videos/thumb/mattm_talk.JPG', 'img/gallery/videos/thumb/kevieb_talk.JPG'];
 var th_videoLabels = ['Aphasia Rhythm Therapy', 'Drum Dance Rehab (DDR)', 'Human Perception of Rhythm Similarity', 'The Basic Aptitude of Music (BAM) Test'];
 gallery.push(new Album('Lab Videos', videoLinks, th_videoLinks, th_videoLabels, '2018-2019', 'video', 'research'));
*/

// Create 'SLAM Lab Party at Kevie's Part 2' album
var party2Links = ['img/gallery/slam-lab-party2/20181020_185605.jpg', 'img/gallery/slam-lab-party2/20181020_192936.jpg', 'img/gallery/slam-lab-party2/20181020_194309.jpg', 'img/gallery/slam-lab-party2/20181020_211731.jpg', 'img/gallery/slam-lab-party2/20181020_211736.jpg', 'img/gallery/slam-lab-party2/20181020_211745.jpg', 'img/gallery/slam-lab-party2/20181020_215546.jpg'];
var th_party2Links = ['img/gallery/slam-lab-party2/thumb/20181020_185605.jpg', 'img/gallery/slam-lab-party2/thumb/20181020_192936.jpg', 'img/gallery/slam-lab-party2/thumb/20181020_194309.jpg', 'img/gallery/slam-lab-party2/thumb/20181020_211731.jpg', 'img/gallery/slam-lab-party2/thumb/20181020_211736.jpg', 'img/gallery/slam-lab-party2/thumb/20181020_211745.jpg', 'img/gallery/slam-lab-party2/thumb/20181020_215546.jpg',];
gallery.push(new Album('SLAM Lab Party at Kevie\'s Part 2', party2Links, th_party2Links, Array(th_party2Links.length).fill(''), 'October 20, 2018', 'party2', 'other'));

// Create 'SLAM Lab Party at Kevie's' album
var partyLinks = ['img/gallery/slam-lab-party/2.jpg', 'img/gallery/slam-lab-party/3.jpg', 'img/gallery/slam-lab-party/4.jpg', 'img/gallery/slam-lab-party/5.jpg', 'img/gallery/slam-lab-party/6.jpg', 'img/gallery/slam-lab-party/7.jpg', 'img/gallery/slam-lab-party/8.jpg', 'img/gallery/slam-lab-party/9.jpg', 'img/gallery/slam-lab-party/10.jpg', 'img/gallery/slam-lab-party/11.jpg', 'img/gallery/slam-lab-party/12.jpg'];
var th_partyLinks = ['img/gallery/slam-lab-party/thumb/2.jpg', 'img/gallery/slam-lab-party/thumb/3.jpg', 'img/gallery/slam-lab-party/thumb/4.jpg', 'img/gallery/slam-lab-party/thumb/5.jpg', 'img/gallery/slam-lab-party/thumb/6.jpg', 'img/gallery/slam-lab-party/thumb/7.jpg', 'img/gallery/slam-lab-party/thumb/8.jpg', 'img/gallery/slam-lab-party/thumb/9.jpg', 'img/gallery/slam-lab-party/thumb/10.jpg', 'img/gallery/slam-lab-party/thumb/11.jpg', 'img/gallery/slam-lab-party/thumb/12.jpg'];
gallery.push(new Album('SLAM Lab Party at Kevie\'s', partyLinks, th_partyLinks, Array(th_partyLinks.length).fill(''), 'August 25, 2018', 'party', 'other'));

// Create 'Summer 2018' album
var su18Links = ['img/gallery/summer-2018/1.jpg', 'img/gallery/summer-2018/2.jpg', 'img/gallery/summer-2018/3.png', 'img/gallery/summer-2018/4.jpg', 'img/gallery/summer-2018/Slide116.JPG'];
var th_su18Links = ['img/gallery/summer-2018/thumb/1.jpg', 'img/gallery/summer-2018/thumb/2.jpg', 'img/gallery/summer-2018/thumb/3.png', 'img/gallery/summer-2018/thumb/4.jpg', 'img/gallery/summer-2018/thumb/Slide116.jpg'];
var th_su18Labels = ['ICMPC Rhythm Symposium', 'Aphasia Team with Debbie', 'fNIRS Installation in SLAM Lab North', 'SLAM Lab\'s Last Day with Amanda', 'Dr. Lee and Kevie at HumCog'];
gallery.push(new Album('Summer 2018', su18Links, th_su18Links, th_su18Labels, 'May - August 2018', 'su18', 'research'));

/*
// Create 'HumCog Summer Institute' album
var humcog18Links = ['img/gallery/humcog-2018/IMG_3154.JPG', 'img/gallery/humcog-2018/Slide5.JPG', 'img/gallery/humcog-2018/Slide20.JPG', 'img/gallery/humcog-2018/Slide27.JPG', 'img/gallery/humcog-2018/Slide53.JPG', 'img/gallery/humcog-2018/Slide89.JPG', 'img/gallery/humcog-2018/Slide91.JPG', 'img/gallery/humcog-2018/Slide109.JPG', 'img/gallery/humcog-2018/Slide111.JPG', 'img/gallery/humcog-2018/Slide112.JPG', 'img/gallery/humcog-2018/Slide114.JPG', 'img/gallery/humcog-2018/Slide116.JPG', 'img/gallery/humcog-2018/Slide187.JPG'];
var th_humcog18Links = ['img/gallery/humcog-2018/thumb/IMG_3154.jpg', 'img/gallery/humcog-2018/thumb/Slide5.jpg', 'img/gallery/humcog-2018/thumb/Slide20.jpg', 'img/gallery/humcog-2018/thumb/Slide27.jpg', 'img/gallery/humcog-2018/thumb/Slide53.jpg', 'img/gallery/humcog-2018/thumb/Slide89.jpg', 'img/gallery/humcog-2018/thumb/Slide91.jpg', 'img/gallery/humcog-2018/thumb/Slide109.jpg', 'img/gallery/humcog-2018/thumb/Slide111.jpg', 'img/gallery/humcog-2018/thumb/Slide112.jpg', 'img/gallery/humcog-2018/thumb/Slide114.jpg', 'img/gallery/humcog-2018/thumb/Slide116.jpg', 'img/gallery/humcog-2018/thumb/Slide187.jpg'];
gallery.push(new Album('HumCog Summer Institute', humcog18Links, th_humcog18Links, 'August 8, 2018', 'humcog18'));
*/
// Create 'Rock Climbing' album
var rockclLinks = ["img/gallery/rock-climbing/20180423_144050.jpg", "img/gallery/rock-climbing/20180423_144339.jpg", "img/gallery/rock-climbing/20180423_144433.jpg", "img/gallery/rock-climbing/20180423_144504.jpg", "img/gallery/rock-climbing/20180423_144642.jpg", "img/gallery/rock-climbing/20180423_144739.jpg", "img/gallery/rock-climbing/20180423_150346_HDR.jpg", "img/gallery/rock-climbing/20180423_150403.jpg",
    "img/gallery/rock-climbing/20180423_151134_HDR.jpg", "img/gallery/rock-climbing/20180423_151153_HDR.jpg", "img/gallery/rock-climbing/20180423_151824.jpg", "img/gallery/rock-climbing/20180423_151855_HDR.jpg", "img/gallery/rock-climbing/20180423_152018.jpg", "img/gallery/rock-climbing/20180423_152035.jpg", "img/gallery/rock-climbing/20180423_152249_HDR.jpg", "img/gallery/rock-climbing/20180423_152428_HDR.jpg", "img/gallery/rock-climbing/20180423_152656.jpg", "img/gallery/rock-climbing/20180423_152815.jpg", "img/gallery/rock-climbing/20180423_153616_HDR.jpg", "img/gallery/rock-climbing/20180423_153932.jpg"];
var th_rockclLinks = ["img/gallery/rock-climbing/thumb/20180423_144050.jpg", "img/gallery/rock-climbing/thumb/20180423_144339.jpg", "img/gallery/rock-climbing/thumb/20180423_144433.jpg", "img/gallery/rock-climbing/thumb/20180423_144504.jpg", "img/gallery/rock-climbing/thumb/20180423_144642.jpg", "img/gallery/rock-climbing/thumb/20180423_144739.jpg", "img/gallery/rock-climbing/thumb/20180423_150346_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_150403.jpg", "img/gallery/rock-climbing/thumb/20180423_151134_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_151153_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_151824.jpg", "img/gallery/rock-climbing/thumb/20180423_151855_HDR.jpg",
    "img/gallery/rock-climbing/thumb/20180423_152018.jpg", "img/gallery/rock-climbing/thumb/20180423_152035.jpg", "img/gallery/rock-climbing/thumb/20180423_152249_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_152428_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_152656.jpg", "img/gallery/rock-climbing/thumb/20180423_152815.jpg", "img/gallery/rock-climbing/thumb/20180423_153616_HDR.jpg", "img/gallery/rock-climbing/thumb/20180423_153932.jpg"];
gallery.push(new Album('Rock Climbing', rockclLinks, th_rockclLinks, Array(th_rockclLinks.length).fill(''), 'April 23, 2018', 'rockcl', 'other'));

// Create 'fNIRS Demo Experiment' album
var fnirsDemoLinks = ['img/gallery/fnirs-demo/1.jpg', 'img/gallery/fnirs-demo/2.jpg'];
var th_fnirsDemoLinks = ['img/gallery/fnirs-demo/thumb/1.jpg', 'img/gallery/fnirs-demo/thumb/2.jpg'];
gallery.push(new Album('fNIRS Demo Experiment', fnirsDemoLinks, th_fnirsDemoLinks, Array(th_fnirsDemoLinks.length).fill(''), 'October 13, 2017', 'fnirs', 'research'));

// Create 'Arlington Court Nursing Home Seminar' album
var arlingtonCourtLinks = ['img/gallery/arlington-nursing-home/1.jpg', 'img/gallery/arlington-nursing-home/2.jpg', 'img/gallery/arlington-nursing-home/3.jpg'];
var th_arlingtonCourtLinks = ['img/gallery/arlington-nursing-home/thumb/1.jpg', 'img/gallery/arlington-nursing-home/thumb/2.jpg', 'img/gallery/arlington-nursing-home/thumb/3.jpg'];
gallery.push(new Album('Arlington Court Nursing Home Seminar', arlingtonCourtLinks, th_arlingtonCourtLinks, Array(th_arlingtonCourtLinks.length).fill(''), 'July 21, 2017', 'arlington', 'research'));

// Create 'New FMRI Protocol' album
var firstFMRILinks = ['img/gallery/first-fmri-new-protocol/IMG_1156.jpg', 'img/gallery/first-fmri-new-protocol/IMG_1158.jpg'];
var th_firstFMRILinks = ['img/gallery/first-fmri-new-protocol/thumb/IMG_1156.jpg', 'img/gallery/first-fmri-new-protocol/thumb/IMG_1158.jpg'];
gallery.push(new Album('New FMRI Protocol', firstFMRILinks, th_firstFMRILinks, Array(th_firstFMRILinks.length).fill(''), 'July 19, 2017', 'protocol', 'research'));

// Create 'Shimadzu, Japan' album
var shimadzuLinks = ['img/gallery/shimadzu-japan/IMG_0807.jpg', 'img/gallery/shimadzu-japan/IMG_0814.jpg', 'img/gallery/shimadzu-japan/IMG_0817.jpg', 'img/gallery/shimadzu-japan/IMG_0819.jpg', 'img/gallery/shimadzu-japan/IMG_0828.jpg', 'img/gallery/shimadzu-japan/IMG_0836.jpg'];
var th_shimadzuLinks = ['img/gallery/shimadzu-japan/thumb/IMG_0807.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0814.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0817.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0819.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0828.jpg', 'img/gallery/shimadzu-japan/thumb/IMG_0836.jpg'];
gallery.push(new Album('Shimadzu, Japan', shimadzuLinks, th_shimadzuLinks, Array(th_shimadzuLinks.length).fill(''), 'June 6, 2017', 'shimadzu', 'research'));

// Create 'Demonstrating Therabeat at ShowOHI/O' album
var therabeatLinks = ['img/gallery/therabeat-showohio/1.jpg', 'img/gallery/therabeat-showohio/2.jpg', 'img/gallery/therabeat-showohio/3.jpg', 'img/gallery/therabeat-showohio/4.jpg'];
var th_therabeatLinks = ['img/gallery/therabeat-showohio/thumb/1.jpg', 'img/gallery/therabeat-showohio/thumb/2.jpg', 'img/gallery/therabeat-showohio/thumb/3.jpg', 'img/gallery/therabeat-showohio/thumb/4.jpg'];
gallery.push(new Album('Demonstrating Therabeat at ShowOHI/O', therabeatLinks, th_therabeatLinks, Array(th_therabeatLinks.length).fill(''), 'April 8, 2017', 'therabeat', 'research'));

// Create 'COSI Rhythm and Speech Perception Lab' album
var cosiLinks = ['img/gallery/cosi/1.jpg', 'img/gallery/cosi/2.jpg', 'img/gallery/cosi/3.jpg', 'img/gallery/cosi/4.jpg', 'img/gallery/cosi/5.jpg', 'img/gallery/cosi/6.jpg', 'img/gallery/cosi/7.jpg'];
var th_cosiLinks = ['img/gallery/cosi/thumb/1.jpg', 'img/gallery/cosi/thumb/2.jpg', 'img/gallery/cosi/thumb/3.jpg', 'img/gallery/cosi/thumb/4.jpg', 'img/gallery/cosi/thumb/5.jpg', 'img/gallery/cosi/thumb/6.jpg', 'img/gallery/cosi/thumb/7.jpg'];
gallery.push(new Album('COSI Rhythm and Speech Perception Lab', cosiLinks, th_cosiLinks, Array(th_cosiLinks.length).fill(''), 'January 2017', 'cosi', 'research'));

/**
 * End defining gallery albums
 */

$(function () {
    updateDropdowns();
});

var researchActivities = false; // Load research activities
var otherActivities = false;    // Load other lab activities

function updateDropdowns() {
    // Check which types of albums to load
    if (document.getElementById('all').selected == true) {
        researchActivities = true;
        otherActivities = true;
    } else if (document.getElementById('research').selected == true) {
        researchActivities = true;
        otherActivities = false;
    } else if (document.getElementById('other').selected == true) {
        researchActivities = false;
        otherActivities = true;
    } else {
        researchActivities = false;
        otherActivities = false;
    }

    var select = document.getElementById("selectAlbum");

    // Clear dropdown options
    $('#selectAlbum').empty();

    // Add an 'all' option
    var el = document.createElement("option");
    el.textContent = "All";
    el.value = "All";
    el.setAttribute('id', 0);
    select.appendChild(el);

    // Add dropdown options
    for (var i = 0; i < gallery.length; i++) {
        var album = gallery[i];
        if ((researchActivities && album.type == 'research') || (otherActivities && album.type == 'other')) {
            var el = document.createElement("option");
            el.textContent = album.title;
            el.value = album.title;
            el.setAttribute('id', i + 1);
            select.appendChild(el);
        }
    }

    loadGallery();
}

function loadGallery() {
    $('.tz-header').remove();
    $('.tz-gallery').remove();

    var base = document.getElementById('gallery').children;
    for (var i = 0; i < gallery.length; i++) {
        var album = gallery[i];
        var allSelected = document.getElementById(0) && document.getElementById(0).selected == true;
        var displayCondition = allSelected && ((researchActivities && album.type == 'research') || (otherActivities && album.type == 'other'));

        if (displayCondition || (document.getElementById(i + 1) && document.getElementById(i + 1).selected == true)) {
            addHeader(album.title, album.time, base[0]);
            setupGallery(album.id, base[0]);

            for (var j = 0; j < album.links.length; j++) {
                insertThumbnail(album.links[j], album.thumbLinks[j], album.thumbLabel[j], album.id);
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

    if (subheader.length > 0) {
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

function insertThumbnail(link, thumbnailLink, thumbnailText, galleryID) {
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

    if (thumbnailText.length > 0) {
        var thumbLabel = document.createElement("h4");
        thumbLabel.textContent = thumbnailText;
        thumbLabel.setAttribute('style', 'padding: 25px; text-transform: none; text-align: center; height: 100px;');

        thumbnail.appendChild(thumbLabel);
    }

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
