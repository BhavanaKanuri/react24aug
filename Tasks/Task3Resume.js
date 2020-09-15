//to fetch the data from json file by using fetchAPI method.
fetch("Task3Resume.json").then((response)=>{
	return response.json();
}).then((data)=>{
	console.log("fetchAPI");
	console.log(data);
	jayData(data.cardData);
	jayresume(data.resumeData);
});

//implement the code

var main=document.getElementById("mainPage");
console.log(main);

var mainName=document.createElement("h1");
mainName.textContent="Resume";
main.appendChild(mainName);

var details=document.createElement("section");
details.classList.add("cards");
var card=document.createElement("section");
card.classList.add("cardData");
function jayData(jay) {
		var image=document.createElement("img");
	    image.src="Jay.JPG";
	    card.appendChild(image);

	    let name=document.createElement("h2");
	    name.textContent=jay.name;
	    card.appendChild(name);

	    let phoneNo=document.createElement("h2");
	    phoneNo.textContent=jay.phone;
	    card.appendChild(phoneNo);

	    let emailId=document.createElement("h2");
	    emailId.textContent=jay.email;
	    card.appendChild(emailId);

	    let address=document.createElement("h2");
	    address.textContent=jay.address;
	    card.appendChild(address);

	    var btn=document.createElement("button");
	    btn.textContent="click me";
	    btn.onclick=function(){
	    	document.location.href="Task3.html";
	    }
	    card.appendChild(btn);

	    details.appendChild(card);
}
var resume=document.createElement("section");
resume.classList.add("resumeData");

function jayresume(jay){
	var cobj=document.createElement("h2");
	cobj.textContent="Career Objective";
	resume.appendChild(cobj);
	var codata=document.createElement("p");
    codata.textContent=jay.co; 
    resume.appendChild(codata);

    var ed=document.createElement("h2");
    ed.textContent="Education Details";
    resume.appendChild(ed);
    //list creation
    var edList=document.createElement("ul");
    var edLi=document.createElement("li");
    edLi.textContent=jay.ed[0];
    edList.appendChild(edLi);
    var edLi1=document.createElement("li");
    edLi1.textContent=jay.ed[1];
    edList.appendChild(edLi1);
    var edLi2=document.createElement("li");
    edLi2.textContent=jay.ed[2];
    edList.appendChild(edLi2);
    resume.appendChild(edList);

    var ts=document.createElement("h2");
    ts.textContent="Technical Skills";
    resume.appendChild(ts);
    //list
    var tsList=document.createElement("ul");
    var tsLi=document.createElement("li");
    tsLi.textContent=jay.ts[0];
    tsList.appendChild(tsLi);
    var tsLi1=document.createElement("li");
    tsLi1.textContent=jay.ts[1];
    tsList.appendChild(tsLi1);
    var tsLi2=document.createElement("li");
    tsLi2.textContent=jay.ts[2];
    tsList.appendChild(tsLi2);
    resume.appendChild(tsList);

    var pd=document.createElement("h2");
    pd.textContent="Project Details";
    resume.appendChild(pd);
    var pdName=document.createElement("h4");
    pdName.textContent="Helping Hands"
    resume.appendChild(pdName);
    //list
    var pdList=document.createElement("ul");
    var pdLi=document.createElement("li");
    pdLi.textContent="Duration:"+jay.pd[0];
    pdList.appendChild(pdLi);
    var pdLi1=document.createElement("li");
    pdLi1.textContent=jay.pd[1];
    pdList.appendChild(pdLi1);
    var pdLi2=document.createElement("li");
    pdLi2.textContent=jay.pd[2];
    pdList.appendChild(pdLi2);
    var pdLi3=document.createElement("li");
    pdLi3.textContent=jay.pd[3];
    pdList.appendChild(pdLi3);
    var pdLi4=document.createElement("li");
    pdLi4.textContent=jay.pd[4];
    pdList.appendChild(pdLi4);
    resume.appendChild(pdList);
    
    var ct=document.createElement("h2");
    ct.textContent="Certification";
    resume.appendChild(ct);
    var ctList=document.createElement("ul");
    var ctLi=document.createElement("li");
    ctLi.textContent=jay.ct[0];
    ctList.appendChild(ctLi);
    var ctLi1=document.createElement("li");
    ctLi1.textContent=jay.ct[1];
    ctList.appendChild(ctLi1);
    resume.appendChild(ctList);

    var achm=document.createElement("h2");
    achm.textContent="Achievements";
    resume.appendChild(achm);
    var achmList=document.createElement("ul");
    var achmLi=document.createElement("li");
    achmLi.textContent=jay.achm[0];
    achmList.appendChild(achmLi);
    var achmLi1=document.createElement("li");
    achmLi1.textContent=jay.achm[1];
    achmList.appendChild(achmLi1);
    resume.appendChild(achmList);

    details.appendChild(resume);
}
main.appendChild(details);
main.appendChild(card);
main.appendChild(resume);
