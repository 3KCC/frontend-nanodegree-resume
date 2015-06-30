var formattedName = HTMLheaderName.replace("%data%", "Lam Thi Minh Trang");
var formattedRole = HTMLheaderRole.replace("%data%", "Data Analyst");
$("#header").prepend(formattedName, formattedRole);

var bio = {
	"name": "Lam Thi Minh Trang",
	"role": "Analyst",
	"message": "Hi, I'm Trang. Welcome to my page!",
	"contacts": {
		"mobile": "0065-8337-9702",
		"email": "minhtranglamthi@gmail.com",
		"gitHub": "KKKCC",
		"location": "Singapore"
	},
	"picture": "images/fun.jpg",
	"skills": ["mathematics", "web development", "excel-vba", "data analysis", "modelling"]
};

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.message);

$("#header").append(formattedBioPic, formattedWelcomeMessage);

var work = {
	"jobs": [
		{
			"employer": "EZFX Private Limited",
			"title": "Analyst",
			"location": "Singapore",
			"dates": "September 2014 to Present",
			"description": "Rate Analysis, Price Optimization, Demand Forecast",
			"url": "www.ezfx.com.sg"
		},
		{
			"employer": "Enerdata",
			"title": "Junior Analyst",
			"location": "Singapore",
			"dates": "January 2014 to March 2014",
			"description": "Energy Regression Analysis, Business Intelligence, Project Management",
			"url": "www.enerdata.net"	
		},
		{
			"employer": "PropertyGuru",
			"title": "Intern",
			"location": "Singapore",
			"dates": "May 2013 to July 2013",
			"description": "Booking System Development - VBA, NetSuite Database Cleaning",
			"url": "www.propertygur.com.sg"
		}
	]
};
var education = {
	"school": [
		{
			"name": "National University of Singapore",
			"location": "Singapore",
			"degree": "Bachelor of Science",
			"major": "Applied Mathematics",
			"dates": "2010-2014",
			"url": "www.nus.edu.sg"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Computer Science",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/course/cs101"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		}
	]

};
var projects = {
	"tasks": [
		{
			"title": "Trawler",
			"dates": "2014",
			"description": "A simple crawler and parser that helps to collect rates from different pre-defined sources.\
							The results are stored and used to compare, perform distribution analysis and present in form\
							of table and line graph.",
			"image": "images/197x148.gif"
		},
		{
			"title": "EZFX Responsive Website",
			"dates": "2014",
			"description": "Modified a non-responsive website to a respondive website and added JavaScript animations.",
			"image": "images/197x148.gif"
		},
		{
			"title": "Price Optimization Model",
			"dates": "2015",
			"description": "Build a Optimization Model to determine multi-currency spread based on historical and live rate\
							from in-house database and public API. The model algorithm was developed on Simplex Method while\
							the programming is used Node.js and Python.",
			"image": "images/197x148.gif"
		}
	]
};

projects.display = function(){
	var formattedProjectTittle;
	var formattedProejctDates;
	var formattedProjectDescription;
	var formattedProjectImage;

	for (i = 0; i < projects.tasks.length; i++){
		formattedProjectTittle = HTMLprojectTitle.replace("%data%", projects.tasks[i].title);
		formattedProjectDates = HTMLprojectDates.replace("%data%", projects.tasks[i].dates);
		formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.tasks[i].description);
		formattedProjectImage = HTMLprojectImage.replace("%data%", projects.tasks[i].image);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTittle,formattedProjectDates, formattedProjectDescription, formattedProjectImage);
	} 
};

projects.display();

var formattedskills = "";

if(bio.skills.length > 0){
	for(var i = 0; i < bio.skills.length; i++){
		formattedskills += HTMLskills.replace("%data%", bio.skills[i]);
	}
	$("#header").append(HTMLskillsStart);
	$("#skills").append(formattedskills);
}

var formattedWorkEmployer;
var formattedWorkTitle;
var formattedWorkDates;
var formattedWorkLocation;
var formattedWorkDescription;

if(work.jobs.length > 0){
	$("#workExperience").append(HTMLworkStart);
	for(var i = 0; i < work.jobs.length; i++){
		formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

function inName(strName){
	var nameArr = strName.trim().split(" ");
	nameArr[nameArr.length - 1] = nameArr[nameArr.length - 1].toUpperCase();
	for (i = 0; i < nameArr.length - 1; i++){
		nameArr[i] = nameArr[i][0].toUpperCase() + nameArr[i].slice(1).toLowerCase();
	}
	return nameArr.join(" ");
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);