let FirstName = document.getElementById('firstname');
let FirstName_Error = document.getElementById('firstname_error')
let LastName = document.getElementById('lastname');
let LastName_Error = document.getElementById('lastname_error');
let Age = document.getElementById('age');
let Age_error = document.getElementById('age_error')
let Gender_Male = document.getElementById('gender_male');
let Gender_Female = document.getElementById('gender_female');
let gender_error = document.getElementById('gender_error')
let PhoneNumber = document.getElementById('phone_number');
let phoneNumber_error = document.getElementById('phone_number_error');
let School = document.getElementById('school');
let School_Error = document.getElementById('school_error');
let subjectDefault1 = document.getElementById('default1');
let subjectDefault2 = document.getElementById('default2');
let subjectsubject1 = document.getElementById('subjectSelect1')
let subjectsubject2 = document.getElementById('subjectSelect2')
let subjectsubject3 = document.getElementById('subjectSelect3')
let subjectsubject4 = document.getElementById('subjectSelect4')
let subjectsubject5 = document.getElementById('subjectSelect5')
let subjectsubject6 = document.getElementById('subjectSelect6')
let validateBtn = document.getElementById('submit');
let subject1 = document.getElementById("sub1")
let subject2 = document.getElementById("sub2")
let subject3 = document.getElementById("sub3")
let subject4 = document.getElementById("sub4")
let subject5 = document.getElementById("sub5")
let subject6 = document.getElementById("sub6")
let subject7 = document.getElementById("sub7")
let subject8 = document.getElementById("sub8")
let statement = document.getElementById("statement")
let specification;
let continents = document.getElementById('continents');
let countries = document.getElementById('countries');
let continentScore = 0;
let age_score = 0;
let answer = 0;
let studentScore = 0;
let average = 0;






Age.onchange = function(){
    let selectedDate = new Date(Age.value)
    let today = new Date()
    let t1 = selectedDate.getFullYear()
    let t2 = today.getFullYear()
    answer = t2 - t1
}
// continents 

// Arrays for African Countries
let africa = [
    'Nigeria', 'Ethiopia', 'Egypt', 'DR Congo', 'Tanzania', 'South Africa', 'Kenya', 'Uganda', 'Algeria', 'Sudan', 'Morocco', 'Angola', 'Mozambique', 'Ghana', 'Madagascar', 'Cameroon', 'Côte d Ivoire', 'Niger', 'Burkina Faso', 'Mali', 'Malawi', 'Zambia', 'Senegal', 'Chad', 'Somalia', 'Zimbabwe', 'Guinea', 'Rwanda', 'Benin', 'Burundi', 'Tunisia', 'South Sudan', 'Togo', 'Sierra Leone', 'Libya', 'Congo', 'Liberia', 'Central African Republic', 'Mauritania', 'Eritrea', 'Namibia', 'Gambia', 'Botswana', 'Gabon', 'Lesotho', 'Guinea-Bissau', 'Equatorial Guinea', 'Mauritius', 'Eswatini', 'Djibouti', 'Comoros', 'Cape Verde', 'SaoTome & Principe', 'Seychelles'
]

// Arrays for Asian countries
let asia = [
    "China", "India", "Indonesia", "Pakistan", "Bangladesh", "Japan", "Philippines", "Vietnam", "Turkey", "Iran", "Thailand", "Myanmar", "South Korea", "Iraq", "Afghanistan", "Saudi Arabia", "Uzbekistan", "Malaysia", "Yemen", "Nepal", "North Korea", "Sri Lanka", "Kazakhstan", "Syria", "Cambodia", "Jordan", "Azerbaijan", "United Arab Emirates", "Tajikistan", "Israel", "Laos", "Lebanon", "Kyrgyzstan", "Turkmenistan", "Singapore", "Oman", "State Palestine", "Kuwait", "Georgia", "Mongolia", "Armenia", "Qatar", "Bahrain", "Timor-Leste", "Cyprus", "Bhutan", "Maldives", "Brunei"
]

// Arrays for SouthAmerican countries
let southAmerica = [
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"
]

// Arrays for NorthAmerican countries
let northAmerica = [
    'Antigua and Barbuda', 'Bahamas', 'Barbados', 'Belize', 'Canada', 'Costa Rica', 'Cuba', 'Dominica', 'Dominican Republic', 'El Salvador', 'Grenada', 'Guatemala', 'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Nicaragua', 'Panama', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Trinidad and Tobago', 'United States America'
]

//Arrays of subject
    let subject =[
        "Further Mathematics","Physics","Chemistry","Biology","Geography","Economics","Government","Literature","Accounting","Commerce","Fine Arts"
    ]


// Function to validate the all inputed values to give Result
// Function to validate the input of firstname, lastname, & gender if it was inputed
function validate_details() {
    if (FirstName.value == "") {
        FirstName_Error.innerHTML = "Invalid Field Entered.... "
    } else {
        FirstName_Error.innerHTML = ""
    }

    if (LastName.value == "") {
        LastName_Error.innerHTML = "Invalid Field Entered...."
    } else {
        LastName_Error.innerHTML = ""
    }

    if (Gender_Male == "") {
        gender_error.innerHTML = "Invalid Field Entered...."
    } else {
        gender_error.innerHTML = ""
    }
    validate_age()
}
// Function to validate the selection of Age
function validate_age() {
    if (answer >= 18 && answer <= 24) {
        age_score = 100;
    } else if (answer >= 25 && answer <= 30) {
        age_score = 80;
    } else if (answer >= 31 && answer <= 35) {
        age_score = 50;
    } else if (answer >= 36 && answer <= 40) {
        age_score = 30;
    } else if (answer >= 41) {
        age_score = 10;
    } else if (answer < 18) {
        age_score = 0;
    } 

    if (Age == ""){
        Age_error.innerHTML = "Invalid Field Entered...."
    }
    else{
        Age_error.innerHTML = ""
    }

    if (Gender_Male.checked == true || Gender_Female.checked == true) {
        gender_error.innerHTML = ""
    } else {
        gender_error.innerHTML = "Invalid Field Entered...."
    }

}
// Function to validate the gender student
Gender_Male.onchange = function () {
    specification = "Mr"
}

Gender_Female.onchange = function () {
    specification = "Mrs"
}
// Function to validate the selection of Phone number
function valicate_phoneNumber() {
    if (PhoneNumber.value == "") {
        phoneNumber_error.innerHTML = "Invalid Field Entered...."
    } else {
        phoneNumber_error.innerHTML = ""
    }
}
// Function to validate the selection of school
function validate_school() {
    if (School.value == "") {
        School_Error.innerHTML = "Invalid Field Entered...."
    } else {
        School_Error.innerHTML = ""
    }
}


continents.onchange = function () {

    //loop for africa array
    if (continents.value == 'Africa') {
        let Options_Selection = ""
        for (let i = 0; i < africa.length; i++) {
            Options_Selection += `<option value=" ${africa[i]}">${africa[i]}</option>`
        }
        countries.innerHTML = `<option value="">Please Select Country</option>${Options_Selection}`;

    }

    // loop for asia array
    else if (continents.value == "Asia") {
        let Options_Selection = ""
        for (let i = 0; i < asia.length; i++) {
            Options_Selection += `<option valiue=" ${asia[i]}">${asia[i]}</option>`
        }
        countries.innerHTML = `<option value="">Please Select Country</option>${Options_Selection}`;
    }

      // loop for south america array
    else if (continents.value == "South") {
        let Options_Selection = ""
        for (let i = 0; i < southAmerica.length; i++) {
            Options_Selection += `<option valiue=" ${southAmerica[i]}">${southAmerica[i]}</option>`
        }
        countries.innerHTML = `<option value="">Please Select Country</option>${Options_Selection}`;

    }
    
    // loop for north america array
    else if (continents.value == "North") {
        let Options_Selection = ""
        for (let i = 0; i < northAmerica.length; i++) {
            Options_Selection += `<option valiue=" ${northAmerica[i]}">${northAmerica[i]}</option>`
        }
        countries.innerHTML = `<option value="">Please Select Country</option>${Options_Selection}`;

    }
}

validateCountinentScore = function () {
    if (continents.value == "Africa"){
        continentScore = 50
    }else  if (continents.value == "Asia"){
        continentScore = 40
    }else  if (continents.value == "South"){
        continentScore = 30
    }else if (continents.value == "North"){
        continentScore = 20
    }

}

 function action1() {
    let firstAction = ""
    for (let k = 0; k < subject.length; k++ ){
        firstAction += `<option valiue=" ${subject[k]}">${subject[k]}</option>` 
    }
    subjectsubject1.innerHTML = `<option value="">-- select subjects --</option>${firstAction}`
   
}
action1 ()

 function action2 (){
    let SecAction = ""
    for (let l = 0; l < subject.length; l++){
        SecAction += `<option value="${subject[l]}">${subject[l]}</option>`
    }
    subjectsubject2.innerHTML = `<option value="">-- select subjects --</option>${SecAction}`
}
action2 ()

function action3(){
    let TrdAction = ""
    for (let l = 0; l < subject.length; l++){
        TrdAction += `<option value="${subject[l]}">${subject[l]}</option>`
    }
    subjectsubject3.innerHTML = `<option value="">-- select subjects --</option>${TrdAction}`
}
action3()
function action4(){
    let FrtAction = ""
    for (let l = 0; l < subject.length; l++){
        FrtAction += `<option value="${subject[l]}">${subject[l]}</option>`
    }
    subjectsubject4.innerHTML = `<option value="">-- select subjects --</option>${FrtAction}`
}
action4()
function action5(){
    let FthAction = ""
    for (let l = 0; l < subject.length; l++){
        FthAction += `<option value="${subject[l]}">${subject[l]}</option>`
    }
    subjectsubject5.innerHTML = `<option value="">-- select subjects --</option>${FthAction}`
}
action5()
function action6(){
    let SthAction = ""
    for (let l = 0; l < subject.length; l++){
        SthAction += `<option value="${subject[l]}">${subject[l]}</option>`
    }
    subjectsubject6.innerHTML = `<option value="">-- select subjects --</option>${SthAction}`
}
action6()


subjectsubject1.onchange = function () {
    let subjectSelected = subjectsubject1.value
    subject.splice(subjectSelected, 1)
    action2()
    action3()
    action4()
    action5()
    action6()
}
subjectsubject2.onchange = function () {
    let subjectSelected = subjectsubject2.value
    subject.splice(subjectSelected, 1)
    action3()
    action4()
    action5()
    action6()
}
subjectsubject3.onchange = function () {
    let subjectSelected = subjectsubject3.value
    subject.splice(subjectSelected, 1)
    action4()
    action5()
    action6()
}
subjectsubject4.onchange = function () {
    let subjectSelected = subjectsubject4.value
    subject.splice(subjectSelected, 1)
    action5()
    action6()
}
subjectsubject5.onchange = function () {
    let subjectSelected = subjectsubject4.value
    subject.splice(subjectSelected, 1)
    action6()
}
subjectsubject6.onchange = function () {
    let subjectSelected = subjectsubject4.value
    subject.splice(subjectSelected, 1)
}

validateBtn.onclick = function () {
    validate_details()
    valicate_phoneNumber()
    validate_school()

     let AVG = parseInt(subject1.value) + parseInt(subject2.value) + parseInt(subject3.value) + parseInt(subject4.value) + parseInt(subject5.value) + parseInt(subject6.value) + parseInt(subject7.value) +  parseInt(subject8.value)

     average = AVG /8

     subjectSum1 ()
     validate_age()
     validateCountinentScore ()
     
    let total = studentScore + age_score + continentScore ;

    if (total > 180){
        statement.innerHTML = `Congratulation <b>${specification}</b>  <b>${FirstName.value}</b>  <b>${LastName.value}</b>   form ${School.value} with Phone Numer :<b>${PhoneNumber.value}</b>  
        You scored the total point of <b>${total}</b> and you are Qualified for this scholarship programme Thanks`
    }else{
        statement.innerHTML =
            `Sorry <b>${specification}</b> <b>${FirstName.value}</b>   <b>${LastName.value}</b>   from <b>${School.value}</b>.
            You scored the total point of <b>${total}</b> and you are not Qualified for this scholarship programme try again Next Year thanks`
        }
}

function subjectSum1 (){
    if (average >= 90 && average <=100){
        studentScore = 150 
    }else if (average >= 85 && average <=89){
        studentScore = 140 
    }else if (average >= 75 && average <=84){
        studentScore = 120
    }else if (average >= 65 && average <=74){
        studentScore = 100
    }else if (average >= 60 && average <=64){
        studentScore =80
    }else if (average >= 50 && average <=59){
        studentScore = 50
    }else if (average >= 40 && average <=49){
        studentScore = 20
    }else {
        studentScore = 0
    }
}

