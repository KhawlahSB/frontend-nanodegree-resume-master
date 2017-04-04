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
  "biopic": "images/ana.jpg",
    "display": function() {
		var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);

		var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

		var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

		var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);

		var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);

		var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

		var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);

		var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		/*Header*/
		$("#header").prepend(formattedHTMLheaderRole);

		$("#header").prepend(formattedHTMLheaderName);

		$("#header").append(formattedHTMLbioPic);

		$("#header").append(formattedHTMLwelcomeMsg);

		/*Top Contacts & Footer Contacts*/
		$("#topContacts, #footerContacts").append(formattedHTMLmobile);

		$("#topContacts, #footerContacts").append(formattedHTMLemail);

		$("#topContacts, #footerContacts").append(formattedHTMLgithub);

		$("#topContacts, #footerContacts").append(formattedHTMLlocation);


		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (i = 0; i < bio.skills.length; i++) {
				var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedHTMLskills);
        }
    }
   
     }
};


var education =  {
    "schools":[
        {
    "name" : "Princess Nora bint Abdulrahman University",
    "location" : "Riyadh, Saudi Arabia",
    "degree" : "bachelor",
    "majors" :[ "IS", "CS"],
    "dates" : "may - 2013",
    "url": "http://www.pnu.edu.sa/" 
        },
             {
    "name" : "The British University in Dubai",
    "location" : "Dubai, United Arab Emirates",
    "degree" : "Master",
    "majors" :[ "Project Management","BS"],
    "dates" : "nov - 2016",
    "url": "http://www.buid.ac.ae/" 
        }
         ],

    "onlineCourses" :[{
        "title" : "Fron end web", 
        "school" : "udacity", 
        "dates" : "feb 2017 - may 2017", 
        "url" : "https://www.udacity.com/"
    },
    {   "title" : "Programing with java language", 
        "school" : "rwaq.", 
        "dates" : "jan 2016 - march 2016", 
        "url" : "https://www.rwaq.org/"  
}],
   "display": function() {
		if (education.schools.length > 0) {
			education.schools.forEach(function(school) {
				$("#education").append(HTMLschoolStart);

				var formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.name);

				var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

				var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates);

				var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", school.location);

				$(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree);

				$(".education-entry:last").append(formattedHTMLschoolDates);

				$(".education-entry:last").append(formattedHTMLschoolLocation);

				for (i=0; i<school.majors.length ;i++) {
					var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", school.majors[i]);
					$(".education-entry:last").append(formattedHTMLschoolMajor);
				}
			});
		}

		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			education.onlineCourses.forEach(function(onlineCourse) {
				$("#education").append(HTMLschoolStart);

				var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);

				var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);

				var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);

				var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);

				$(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);

				$(".education-entry:last").append(formattedHTMLonlineDates);

				$(".education-entry:last").append(formattedHTMLonlineURL);

            });
        }
}
};

var work = {
  "jobs" : [
      {
        "employer" : "Civil Affair",
        "title" : "Summer intern" ,
        "location" : "Riyadh, Saudi Arabia",
        "dates" : "june 2015 - sep 2015", 
        "description" : "Summer intern at Information Technology Department of ministerial agency of civil affairs. Work accomplished: (Technical support system) for IT department, applied using HTML, JavaScript, php and CSS." 
      },
      {
        "employer" : "Riyadh Bank",
        "title" : "Website manager" ,
        "location" : "Riyadh, Saudi Arabia",
        "dates" : "april 2016 - nov 2016", 
        "description" : "Manage the website of the bank and also social network accounts."  
      },
  ],
    "display": function() {
		if (work.jobs.length > 0) {
			work.jobs.forEach(function(job) {
				$("#workExperience").append(HTMLworkStart);

				var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);

				var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title);

				var formattedHTMLworkDates = HTMLworkDates.replace("%data%", job.dates);

				var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);

				var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description);


				$(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle);

				$(".work-entry:last").append(formattedHTMLworkDates);

				$(".work-entry:last").append(formattedHTMLworkLocation);

				$(".work-entry:last").append(formattedHTMLworkDescription);
   
            });
        }
    }
};

var projects ={
  "projects" :  [
      {
        "title" : "Riyadh Metro Application",
        "dates" : "jan 2016 - may 2016",
        "description" : "Riyadh Metro Application using java programing language and MySQL (Senior Project): application for android operating system that serve Riyadh metro passengerto book a ticket and provide all services the metro provided, applied in android studio.",
        "images": [ "images/RMP1.png" , "images/RMP2.png"],
      
      },
      
      { "title" : "World Autism Day Event",
        "dates" : "march 2014 - april 2014",
        "description" : "“World Autism Day Event” website: website to registration in the event, applied using HTML, JavaScript, php, HTTP and CSS.",
       "images":[ "images/W.jpg" ],
        
      },
        { "title" : "Restaurant guide website",
        "dates" : "feb 2015 - april 2015",
        "description" : "website that provide a lot of Riyadh's Restaurants with information, pictures, location and visitors rating, applied using HTML, JavaScript, php and CSS.",
         "images":[ "images/Res.jpg" ],
      }],
    "display": function() {
		if (projects.projects.length > 0) {
			projects.projects.forEach(function(project) {
				$("#projects").append(HTMLprojectStart);

				var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title);

				var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates);

				var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
				
				$(".project-entry:last").append(formattedHTMLprojectTitle);
				$(".project-entry:last").append(formattedHTMLprojectDates);
				$(".project-entry:last").append(formattedHTMLprojectDescription);
				
				for(i=0; i<project.images.length; i++){
					var formattedHTMLprojectImage = 		HTMLprojectImage.replace("%data%", project.images[i]);
					$(".project-entry:last").append(formattedHTMLprojectImage);
                       }

            });
        }
   
}
};
///// returen function /////////////

bio.display();
work.display();
projects.display();
education.display();
    
    $("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);