// console.log("a1 programming!")

//Part 1:Create a data structure that describes a "hospital". It has a name and contains 3 "patient" records. Each "patient" has an id, fullName, dateOfBirth, and multiple "symptoms". Each symptom in a String. 
let hospital = {
    "name":"Shenyang Ophthalmic hospital",
    "patient":[
        {
            "id":25091011,
            "fullName":"Jack Ma",
            "dateOfBirth":"1986-11-02",
            "symptoms":["Floaters","Dryness","Tearing"]
        },
        {
            "id":25091012,
            "fullName":"Loius Liu",
            "dateOfBirth":"1973-10-26",
            "symptoms":["Redness","Dryness","Diplopia"]
        },
        {
            "id":25091013,
            "fullName":"Coco Wu",
            "dateOfBirth":"1963-11-18",
            "symptoms":["Tearing","Photophbia","Blurred"]
        }
    ]
} 

function showPatients(hospital){
    let hospitalData = document.createElement("div")

    //<h1>Hospital Name</h1>
    let h1 = document.createElement("h1");
    h1.textContent = hospital.name;
    hospitalData.appendChild(h1);


    //<h2>Patient full name, date of birth </h2>
    //muiltipal,array,loop
    for (let i=0; i< hospital.patient.length; i++){
        let patientData = hospital.patient[i];
        //<h2>patient fullname, data of birth</h2>
        let h2 = document.createElement("h2");
        h2.textContent = `${patientData.fullName},${patientData.dateOfBirth}`;
        hospitalData.appendChild(h2);

        //<ul>
        //  <li>symptom</li>
        //  <li>symptom</li>
        //  <li>symptom</li>
        //</ul>
        let ul = document.createElement("ul");

        //Repeat the h2, ul, and li for each patient.
        for (let k=0; k < patientData.symptoms.length; k++){
            let li = document.createElement("li");
            li.textContent = patientData.symptoms[k];
            ul.appendChild(li);
    }

    hospitalData.appendChild(ul);
  }

  return hospitalData;
}

//Execute that function with the data structure created in Part 1 then console.log the return value to the document.

let patientData = showPatients(hospital);
console.log(patientData);
document.body.appendChild(patientData);


//Part 3:Create another function named "getPatient" that accepts an array of patient records and returns a random patient id.
function getPatient(patients){
         let randomIndex = Math.floor(Math.random() * patients.length);
         return patients[randomIndex].id;
}
//Execute that function then console.log() the return value.
let randomPatientID = getPatient(hospital.patient);
console.log("Random patient ID:", randomPatientID);