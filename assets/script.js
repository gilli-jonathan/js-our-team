const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

//porto il card-daddy qua su Js

let daddyEl = document.getElementById("card-daddy");
let card_code = "";

function card_create(array) {
  for (let i = 0; i < array.length; i++) {
    const thisMember = array[i];
    //il mio ciclo for scorre nell'array in modo funzionale

    //ho creato il posto in cui verranno messe le info della carda

    const { name, role, email, img } = thisMember;

    card_code += `
                <div class="col">
                    <div class="card h-100 text-white bg-dark">
                        <div class="row g-0">
                            <div class="col-4">
                                <img src="./assets/${img}" class="img-fluid h-100 object-fit-cover" alt="">
                            </div>
                            <div class="col-8 d-flex flex-column justify-content-center p-3">
                                <h5 class="fw-bold mb-1">${name}</h5>
                                <p class="mb-1">${role}</p>
                                <a href="" class="text-info small">${email}</a>
                            </div>
                        </div>
                    </div>
                </div>`;
  }
  return card_code;
}

card_create(teamMembers);
daddyEl.innerHTML = card_code;
