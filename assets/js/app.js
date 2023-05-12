console.log("hello world");

const cl = console.log;
let stdArray = [];

const stdContainer =document.getElementById("stdContainer");
const stdForm =document.getElementById("stdForm");
const fName =document.getElementById("fName");
const lName =document.getElementById("lName");
const contact =document.getElementById("contact");
const email =document.getElementById("email");
const Education = document.getElementById("Education");

cl(fName.name)
const onStdCreate = (eve) => {
    // cl("from submitted !!!");

    eve.preventDefault();
    let obj ={
        fName : fName.value,
        lName : lName.value,
        contact : contact.value,
        email : email.value,
        Education :Education.value
    }
    stdArray.push(obj);
    let result = "";
    stdArray.forEach((std,i)=>{
        result += `
        <tr>
            <td>${i+1}</td>
            <td>${std.fName}</td>
            <td>${std.lName}</td>
            <td>${std.contact}</td>
            <td>${std.email}</td>
            <td>${std.Education}</td>
        </tr>
        `
    })
    stdContainer.innerHTML = result;
    // cl(stdArray);
    eve.target.reset();
}


stdForm.addEventListener("submit", onStdCreate);


let infoArray = [];
const employInfo = document.getElementById("employInfo");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const contAct = document.getElementById("contAct");
const emAil = document.getElementById("emAil");
const education = document.getElementById("education");
const infoContainer = document.getElementById("infoContainer");
cl(fname.name);


const onEmpCreate = (eve) =>{
    eve.preventDefault();
    let obj ={
        fname : fname.value,
        lname : lname.value,
        contAct : contAct.value,
        emAil : emAil.value,
        education : education.value
    }
    infoArray.push(obj);
    let result1 = "";
    infoArray.forEach((info,i)=>{
        result1 +=`
            <tr>
                <td>${i+1}</td>
                <td>${info.fname}</td>
                <td>${info.lname}</td>
                <td>${info.contAct}</td>
                <td>${info.emAil}</td>
                <td>${info.education}</td>
            </tr>
                    `
    })
    infoContainer.innerHTML = result1;
    eve.target.reset();
}

employInfo.addEventListener("submit", onEmpCreate);

let empArray = [];
const empContainer = document.getElementById("empContainer");
const empData = document.getElementById("empData");
const empFname = document.getElementById("empFname");
const empLname = document.getElementById("empLname");
const empEmail = document.getElementById("empEmail");
const empContact = document.getElementById("empContact");
const empDesg = document.getElementById("empDesg");
const empId = document.getElementById("empId");


const onEmpDataHandler=(eve)=>{
    eve.preventDefault();
    // cl('form submitted !!!')
    let obj ={
        fname : empFname.value,
        lname : empLname.value,
        email : empEmail.value,
        contact : empContact.value,
        designation : empDesg.value,
        id : empId.value
    }
    empArray.push(obj);
    let result ="";
    empArray.forEach((emp,i)=>{
        result += `
            <tr>
            <td>${i + 1}</td>
            <td>${emp.fname}</td>
            <td>${emp.lname}</td> 
            <td>${emp.email}</td>
            <td>${emp.contact}</td>
            <td>${emp.designation}</td>
            <td>${emp.id}</td>
    </tr>
        `
    })
    empContainer.innerHTML = result;   Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'your data has saved in succesful',
        showConfirmButton: false,
        timer: 3000
    })
    eve.target.reset();
}

empData.addEventListener("submit",onEmpDataHandler);
