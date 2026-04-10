

//Appointment Booking Form

const doctor = JSON.parse(localStorage.getItem("selecteddoctor")) || {
  name:"Dr. Sara Al-Rashidi",
  specialty:"-",
  days:"-",
  fee:"-"
};

document.getElementById("doctorInfo").innerHTML = `
  <p><strong>${doctor.name}</strong></p>
  <p>${doctor.specialty}</p>
  <p>Available: ${doctor.days}</p>
  <p>Fee: $${doctor.fee}</p>
`;

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
document.getElementById("date").min = tomorrow.toISOString().split("T")[0];

function validate(){
  let valid = true;

  function setError(id,msg){
    document.getElementById(id).innerText = msg;
    if(msg) valid = false;
  }

  let name = nameEl.value.trim();
  let email = emailEl.value.trim();
  let phone = phoneEl.value.trim();
  let age = ageEl.value;
  let gender = document.querySelector("input[name='gender']:checked");
  let concern = concernEl.value.trim();
  let date = dateEl.value;
  let time = timeEl.value;
  let insurance = insuranceEl.value;

  setError("err-name", name ? "" : "Required");

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setError("err-email", emailRegex.test(email) ? "" : "Invalid email");

  setError("err-phone", phone ? "" : "Required");

  setError("err-age", (age>=1 && age<=120) ? "" : "Age 1-120");

  setError("err-gender", gender ? "" : "Select gender");

  setError("err-concern", concern ? "" : "Required");

  let selectedDate = new Date(date);
  setError("err-date", selectedDate >= tomorrow ? "" : "Must be future");

  setError("err-time", time ? "" : "Select time");
  setError("err-insurance", insurance ? "" : "Select insurance");

  return valid;
}

const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const ageEl = document.getElementById("age");
const concernEl = document.getElementById("concern");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const insuranceEl = document.getElementById("insurance");

document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  if(!validate()) return;

  let ref = Math.floor(10000000 + Math.random()*90000000);

  const appointment = {
    ref,
    doctor: doctor.name,
    patient: nameEl.value,
    date: dateEl.value,
    time: timeEl.value
  };

  let list = JSON.parse(localStorage.getItem("appointments")) || [];
  list.push(appointment);
  localStorage.setItem("appointments", JSON.stringify(list));

  document.getElementById("confirmation").innerHTML = `
    <div class="card p-3">
      <h5>Appointment Confirmed</h5>
      <p>Ref: ${ref}</p>
      <p>${doctor.name}</p>
      <p>${dateEl.value} at ${timeEl.value}</p>
      <p>Patient: ${nameEl.value}</p>
      <button onclick="goToList()" class="btn btn-success">View My Appointments</button>
    </div>
  `;
});

function goToList(){
  window.location = "index.html";
}



//End Appointment Booking Form
