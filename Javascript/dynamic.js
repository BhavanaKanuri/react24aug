//XMLHttpRequest(AJAX call)
// function getJson(file,callback) {//userdefined function-to get the data fronm .json fille
// 	var xhr=new XMLHttpRequest();//predefined
//     xhr.overrideMimeType("application/json");
//     xhr.open("GET",file,true);
//     xhr.onreadystatechange=function(){
//     	if(xhr.readystatechange ===4 && xhr.status ===200){
//     		callback(x.responseText);
//     	}
//     }
//     xhr.send();
// }
// //calling the function
// getJson("data.json",function(text){
// 	var d=JSON.parse(text);
// 	console.log(d);
// });

//get the json data by using Fetch API Method-latest one
fetch("data.json").then((response)=>{
	return response.json();
}).then((data)=>{
	console.log("fetch ApI");
	console.log(data);
	jayData(data.tdata);
	trainersDetails(data.trainers);
});

//implementing the code
var main=document.getElementById("main");
console.log(main);
//create h1 tag to display the name cardview
var cardviewName=document.createElement("h1");
console.log(cardviewName);
//write text in h1 tag
cardviewName.textContent="Card View";
//add child to the parent
main.appendChild(cardviewName);

//create card1 child2
var section=document.createElement("section");
//section.classList.add("card");
section.setAttribute("class","card");//to create class name for section i.e, card1

var image=document.createElement("img");
image.src="Jay.JPG";
image.alt="Profile Image";
//add child to the section(child2)
section.appendChild(image);

function jayData(jay){
let name=document.createElement("h2");
name.textContent=jay.name;
//add child to the section(child2)
section.appendChild(name);
//phone number
let phoneNo=document.createElement("h2");
phoneNo.textContent=jay.phone;
//add child to the section(child2)
section.appendChild(phoneNo);

//email
let emailId=document.createElement("h2");
emailId.textContent=jay.email;
//add child to the section(child2)
section.appendChild(emailId);

//button for redirect to resume
let btn=document.createElement("button");
btn.textContent="click me";
section.appendChild(btn);
}
//end function

//function for getting trainer array data
var section1=document.createElement("section");
section1.classList.add("profileCards");

function trainersDetails(trainer){
   for(i in trainer){
     let cardDiv=document.createElement("div");
     cardDiv.classList.add("trainerCard");

     var image=document.createElement("img");
     image.src="Jay.JPG";
     image.alt=trainer[i].name+"image";
     //add child to the section(child2)
     cardDiv.appendChild(image);

   	 let name=document.createElement("h2");
     name.textContent=trainer[i].name;
     //add child to the section(child2)
     cardDiv.appendChild(name);

     //phone number
     let phoneNo=document.createElement("h2");
     phoneNo.textContent=trainer[i].phone;
     //add child to the section(child2)
     cardDiv.appendChild(phoneNo);

    //email
    let emailId=document.createElement("h2");
    emailId.textContent=trainer[i].email//add child to the section(child2)
    cardDiv.appendChild(emailId);

    //anchor tag to refer another page
    let anch=document.createElement("a");
    anch.href="react24aug/Task1.html";
    cardDiv.appendChild(anch);
    //button for redirect to resume
    let btn=document.createElement("button");
    btn.textContent="click me";
    btn.onclick=function(){
        alert("hello");
        document.location.href="resume.html";
    }
    anch.appendChild(btn);

    section1.appendChild(cardDiv);

   }
}
main.appendChild(section);
main.appendChild(section1);