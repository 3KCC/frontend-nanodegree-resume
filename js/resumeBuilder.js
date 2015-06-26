var formattedName = HTMLheaderName.replace("%data%", "Lam Thi Minh Trang");
var formattedRole = HTMLheaderRole.replace("%data%", "Data Analyst");
$("#header").append(formattedName, formattedRole);

var bio = {
	"name": "Trang",
	"age": 24,
	"contact": 83379702,
	"picture": "C:\\Users\\MinhTrang-EZFX\\Desktop\\Minh Trang\\Background\\fun.jpg",
	"message": "Welcome to my world!",
	"skill": ["math", "web development", "excel"]
	};
$("#head").preppend(bio);