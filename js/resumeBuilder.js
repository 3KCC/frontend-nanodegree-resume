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
			"dates": 0.8,
			"decription": "Rate Analysis, Price Optimization and Demand Forecast",
			"url": "www.ezfx.com.sg"
		},
		{
			"employer": "Enerdata",
			"title": "Junior Analyst",
			"location": "Singapore",
			"dates": 0.5,
			"decription": "Energy Regression Analysis, Business Intelligence, Project Management",
			"url": "www.enerdata.net"	
		},
		{
			"employer": "PropertyGuru",
			"title": "Intern",
			"location": "Singapore",
			"dates": 0.25,
			"decription": "Booking System Development - VBA",
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
	"project": [
		{
			"title": "Trawler",
			"dates": "2014",
			"description": "A simple crawler and parser that helps to collect rates from different pre-defined sources.\
							The results are stored and used to compare, perform distribution analysis and present in form\
							of table and line graph."
		},
		{
			"title": "EZFX Responsive Website",
			"dates": "2014",
			"description": "Modified a non-responsive website to a respondive website and added JavaScript animations."
		},
		{
			"title": "Price Optimization Model",
			"date": "2015",
			"description": "Build a Optimization Model to determine multi-currency spread based on historical and live rate\
							from in-house database and public API. The model algorithm was developed on Simplex Method while\
							the programming is used Node.js and Python."
		}
	]
};

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

if(work.jobs.length > 0){
	$("#workExperience").append(HTMLworkStart);
	for(var i = 0; i < work.jobs.length; i++){
		formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$(".work-entry:last").append(formattedWorkEmployer, formattedWorkTitle);
	}
}