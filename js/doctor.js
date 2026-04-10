
const doctors = [
 {name:"Dr. Sara Al-Rashidi", specialty:"Cardiology", rating:4.9, exp:14, days:"Mon-Fri"},
 {name:"Dr. Omar Khalil", specialty:"General", rating:4, exp:8, days:"Sun-Thu"},
 {name:"Dr. Layla Mansour", specialty:"Dermatology", rating:4.7, exp:10, days:"Mon-Wed"},
  {name:"Dr. Khalid Al-Farsi", specialty:"Pediatrics", rating:3, exp:5, days:"Daily"},
  {name:"Dr. Nadia Hassan", specialty:"Orthopedics", rating:4.8, exp:16, days:"Tuesday-Thursday"},
  {name:"Dr. Yousef Al-Balushi", specialty:"Dentistry", rating:4.8, exp:16, days:"Tuesday-Thursday"},



];

let filtered = [...doctors];

function getInitials(name){
  return name.split(" ").map(n=>n[0]).join("");
}

function render(){
  let list=document.getElementById("list");
  list.innerHTML="";

  filtered.forEach(doc=>{
    let stars="";
    for(let i=0;i<doc.rating;i++) stars+="⭐";

    list.innerHTML+=`
    <div class="col-md-4 mb-3">
      <div class="card p-3">
        <div class="d-flex align-items-center">
          <div class="avatar bg-primary me-3">${getInitials(doc.name)}</div>
          <div>
            <h5>${doc.name}</h5>
            <span class="badge bg-info">${doc.specialty}</span>
          </div>
        </div>
        <p>${stars}</p>
        <p>${doc.exp} years experience</p>
        <p>${doc.days}</p>
        <button class="btn btn-success" onclick="book('${doc.name}')">Book Appointment</button>
      </div>
    </div>`;
  });
}

function filter(){
  let search=document.getElementById("search").value.toLowerCase();
  let spec=document.getElementById("specialty").value;

  filtered = doctors.filter(d =>
    (d.name.toLowerCase().includes(search) || d.specialty.toLowerCase().includes(search)) &&
    (spec==="All" || d.specialty===spec)
  );

  sort();
}

function sort(){
  let type=document.getElementById("sort").value;

  if(type==="rating") filtered.sort((a,b)=>b.rating-a.rating);
  if(type==="exp") filtered.sort((a,b)=>b.exp-a.exp);

  render();
}

function book(name){
  localStorage.setItem("selectedDoctor", name);
  let toast = new bootstrap.Toast(document.getElementById('toast'));
  toast.show();
}

document.getElementById("search").addEventListener("keyup", filter);
document.getElementById("specialty").addEventListener("change", filter);
document.getElementById("sort").addEventListener("change", sort);

render();
