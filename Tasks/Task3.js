//get the json data by using Fetch API Method-latest one
fetch("Task3Data.json").then((response)=>{
	return response.json();
}).then((data)=>{
	console.log("fetch API");
	console.log(data);
	details(data.cardDetails);
});

//implement code for CARDVIEW PROJECT

var parent=document.getElementById("cardview"); //getElementById("parent")-here we r create main tag in body tag amd that parent is id of main tag
console.log(parent);

var cardviewName=document.createElement("h1");//we create h1 tag and give name to cardview project
console.log(cardviewName);
cardviewName.textContent="CardView"; //here write name in h1 tag
parent.appendChild(cardviewName);//here cardViewName is child1 of Parent

var cardSection=document.createElement("section");
cardSection.classList.add("card");

function details(cards){
	for(i in cards){
	var child23=document.createElement("section");
	child23.classList.add("cards12");

	var image=document.createElement("img");
	image.src="Jay.JPG";
	child23.appendChild(image);

	let personName=document.createElement("h2");
	personName.textContent=cards[i].name;
	child23.appendChild(personName);

	let phoneNo=document.createElement("h2")
	phoneNo.textContent=cards[i].phone;
	child23.appendChild(phoneNo);

	let emailId=document.createElement("h2");
	emailId.textContent=cards[i].email;
	child23.appendChild(emailId);

	let address=document.createElement("h2");
	address.textContent=cards[i].address;
	child23.appendChild(address);

	let btn=document.createElement("button");
	btn.textContent="click me";
	btn.onclick=function(){
		document.location.href="Task3Resume.html"
	}
	child23.appendChild(btn);

	cardSection.appendChild(child23);
    }
}
parent.appendChild(cardSection);

