///// sections
var bio = {
  "name" : "Khawlah" ,
  "role" : "Web Developer" ,
  "contacts" :{
      "mobile":"966-552-3222-35",
      "email":"khawlahsb@gmail.com",
      "github":"KhawlahSB",
      "location":"Riyadh,KSA"
             },
  "welcomeMessage": "Welcome to my resume",
  "skills":["HTML","CSS","PHP","javaScript","java"],
  "bioPic": "images/ana.jpg",
}


var education =  {
    "schools":[
        {
    "name" : "Princess Nora bint Abdulrahman University",
    "location" : "Riyadh, Saudi Arabia",
    "degree" : "bachelor",
    "majors" : "Computer Information System",
    "date" : "may - 2013",
    "url": "http://www.pnu.edu.sa/" 
        },
             {
    "name" : "The British University in Dubai",
    "location" : "Dubai, United Arab Emirates",
    "degree" : "Master",
    "majors" : "Project Management",
    "date" : "nov - 2016",
    "url": "http://www.buid.ac.ae/" 
        }
         ],

    "onlineCourses" :[{
        "title" : "Fron end web", 
        "school" : "udacity", 
        "date" : "feb 2017 - may 2017", 
        "url" : "https://www.udacity.com/"
    },
    {   "title" : "Programing with java language", 
        "school" : "rwaq.", 
        "date" : "jan 2016 - march 2016", 
        "url" : "https://www.rwaq.org/"  
}]
};

var work = {
  "jobs" : [
      {
        "employer" : "Civil Affair",
        "title" : "Summer intern" ,
        "location" : "Riyadh, Saudi Arabia",
        "date" : "june 2015 - sep 2015", 
        "description" : "Summer intern at Information Technology Department of ministerial agency of civil affairs. Work accomplished: (Technical support system) for IT department, applied using HTML, JavaScript, php and CSS." 
      },
      {
        "employer" : "Riyadh Bank",
        "title" : "Website manager" ,
        "location" : "Riyadh, Saudi Arabia",
        "date" : "april 2016 - nov 2016", 
        "description" : "Manage the website of the bank and also social network accounts."  
      },
  ]  
};

var projects ={
  "projects" :  [
      {
        "title" : "Riyadh Metro Application",
        "dates" : "jan 2016 - may 2016",
        "description" : "Riyadh Metro Application using java programing language and MySQL (Senior Project): application for android operating system that serve Riyadh metro passengerto book a ticket and provide all services the metro provided, applied in android studio.",
        "images": "images/RMP1.jpg"  
      
      },
      
      { "title" : "World Autism Day Event",
        "dates" : "march 2014 - april 2014",
        "description" : "“World Autism Day Event” website: website to registration in the event, applied using HTML, JavaScript, php, HTTP and CSS.",
       "images": "images/W.jpg" 
        
      },
        { "title" : "Restaurant guide website",
        "dates" : "feb 2015 - april 2015",
        "description" : "website that provide a lot of Riyadh's Restaurants with information, pictures, location and visitors rating, applied using HTML, JavaScript, php and CSS.",
         "images": "images/Res.jpg" 
      },
  ]
};
///// returen function /////////////

    bio.display = function(){
         var formattedRole =  HTMLheaderRole.replace('%data%', bio.role);
         $("#header").prepend(formattedRole);
      
        var formattedName =  HTMLheaderName.replace('%data%', bio.name);
         $("#header").prepend(formattedName);
        
         var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $('#topContacts:last').append(formattedMobile);
    $('#footerContacts').append(formattedMobile)

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $('#topContacts:last').append(formattedEmail);
    $('#footerContacts').append(formattedEmail)

    
    var formattedgit = HTMLgithub.replace("%data%", bio.contacts.github);
    $('#topContacts:last').append(formattedgit);
    $('#footerContacts').append(formattedgit)

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $('#topContacts:last').append(formattedLocation);
    $('#footerContacts').append(formattedLocation)

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    $('#header').append(formattedBiopic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $('#header').append(formattedMessage);


    $('#header').append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $('#skills').append(formattedSkills);
    }
}();

work.display = function() {
    $('#workExperience').append(HTMLworkStart);
    for (var job = 0; job < work.jobs.length; job++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
        $(".work-entry:last").append(formattedDate);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }

   
}();
projects.display = function() {
    for (project in projects.projects) {
        $('#projects').append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $('.project-entry:last').append(formattedProjectTitle);

        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $('.project-entry:last').append(formattedProjectDate);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $('.project-entry:last').append(formattedProjectDescription);

        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $('.project-entry:last').append(formattedImage);
    }
}();

education.display = function() {
    for (school in education.schools) {
        $('#education').append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolNameDegree = formattedSchoolName + " " + formattedSchoolDegree;
        formattedSchoolNameDegree = formattedSchoolNameDegree.replace("#", education.schools[school].url);
        $('.education-entry:last').append(formattedSchoolNameDegree);

        var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
        $('.education-entry:last').append(formattedSchoolDate);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $('.education-entry:last').append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $('.education-entry:last').append(formattedSchoolMajor);
    }
    $('.education-entry:last').append(HTMLonlineClasses);
    for (onlineCourses in education.onlineCourses) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourses].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourses].school);
        var formattedSchoolTitle = formattedOnlineTitle + " " + formattedOnlineSchool;
        formattedSchoolTitle = formattedSchoolTitle.replace("#", education.onlineCourses[onlineCourses].url);
        $('.education-entry:last').append(formattedSchoolTitle);

        var formattedOnlineSchoolDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourses].date);
        $('.education-entry:last').append(formattedOnlineSchoolDate);

        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourses].url);
        formattedUrl = formattedUrl.replace("%#%", education.onlineCourses[onlineCourses].url);
        $('.education-entry:last').append(formattedUrl)

    }
}();

$("#mapDiv").append(googleMap);