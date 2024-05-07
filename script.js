const dataJenis = {
  makanan: [
    {
      img: "/img/gudeg.png",
      nama: "Gudeg",
      deskripsi: "sebuah makanan khas jogja",
      rating: 5,
    },
    {
      img: "/img/kipo.png",
      nama: "Kue kipo",
      deskripsi: "sebuah makanan khas jogja",
      rating: 5,
    },
    {
      img: "/img/klatak.png",
      nama: "Sate Klatak",
      deskripsi: "sebuah makanan khas jogja",
      rating: 5,
    },
    {
      img: "/img/brongkos.png",
      nama: "Brongkos",
      deskripsi: "sebuah makanan khas jogja",
      rating: 5,
    },
  ],

  minuman: [
    {
      img: "/img/wedang uwuh.png",
      nama: "Wedang Uwuh",
      deskripsi: "sebuah minuman khas jogja",
      rating: 5,
    },
    {
      img: "/img/essemlo.png",
      nama: "Es Semlo",
      deskripsi: "sebuah minuman khas jogja",
      rating: 5,
    },
    {
      img: "/img/kopijoss.png",
      nama: "Kopi Joss",
      deskripsi: "sebuah minuman khas jogja",
      rating: 5,
    },
    {
      img: "/img/wedang ronde 5.png",
      nama: "Wedang Ronde",
      deskripsi: "sebuah minuman khas jogja",
      rating: 4,
    },
  ],
  jajanan: [
    {
      img: "/img/kukustugu.png",
      nama: "Kukus Tugu",
      deskripsi: "sebuah jajanan khas jogja",
      rating: 5,
    },
    {
      img: "/img/tiwul.png",
      nama: "Tiwul",
      deskripsi: "sebuah jajanan khas jogja",
      rating: 5,
    },
    {
      img: "/img/grawol.png",
      nama: "Grawol",
      deskripsi: "sebuah jajanan khas jogja",
      rating: 4,
    },
    {
      img: "/img/geplak.png",
      nama: "Geplak",
      deskripsi: "sebuah jajanan khas jogja",
      rating: 5,
    },
  ],
  "buah-buahan": [
    {
      img: "/img/bowling fruit.png",
      nama: "Bowling fruit",
      deskripsi: "sebuah buah buahan khas jogja",
      rating: 5,
    },
    {
      img: "/img/rujak lotis.png",
      nama: "Rujak lotis",
      deskripsi: "sebuah buah buahan khas jogja",
      rating: 5,
    },
    {
      img: "/img/asinanbuah.png",
      nama: "Asinan buah",
      deskripsi: "sebuah buah buahan khas jogja",
      rating: 4,
    },
    {
      img: "/img/mangostiky.png",
      nama: "Mango sticky",
      deskripsi: "sebuah buah buahan khas jogja",
      rating: 5,
    },
  ],
};

const cardJenisOlehOleh = document.querySelector(".card-jenis-oleh-oleh");

const jenisOlehOleh = document.querySelector(".jenis-oleh-oleh");
jenisOlehOleh.addEventListener("click", function (e) {
  const jenis = e.target.dataset["jenis"];
  if (jenis) {
    for (let i = 0; i < jenisOlehOleh.children.length; i++) {
      if (jenisOlehOleh.children[i].dataset["jenis"] === jenis) {
        jenisOlehOleh.children[i].classList.add("before:bg-myButtonColor");
        jenisOlehOleh.children[i].classList.add("text-myButtonColor");
      } else {
        jenisOlehOleh.children[i].classList.remove("text-myButtonColor");
        jenisOlehOleh.children[i].classList.remove("before:bg-myButtonColor");
      }
    }

    const listCard = cardJenisOlehOleh.children;
    for (let i = 0; i < listCard.length; i++) {
      listCard[i]
        .querySelector("img")
        .setAttribute("src", dataJenis[jenis][i].img);

      listCard[i].querySelector(".nama").textContent = dataJenis[jenis][i].nama;
      listCard[i].querySelector(".deskripsi").textContent =
        dataJenis[jenis][i].deskripsi;

      const listRating = listCard[i].querySelector(".rating");

      listRating.innerHTML = "";

      const num = dataJenis[jenis][i].rating;
      for (let i = 0; i < num; i++) {
        const img = document.createElement("img");
        img.setAttribute("src", "/img/Star.png");
        listRating.appendChild(img);
      }
    }
  }
});

// navbar
const listMenu = document.querySelectorAll(".menu");
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("menu")) {
    for (let i = 0; i < listMenu.length; i++) {
      if (listMenu[i].textContent === e.target.textContent) {
        listMenu[i].classList.add("before:bg-myBorderColor");
      } else {
        listMenu[i].classList.remove("before:bg-myBorderColor");
      }
    }
  }
});

const menuContent = document.querySelectorAll(".menu-content");
window.addEventListener("scroll", function () {
  menuContent.forEach((m) => {
    let top = window.scrollY + this.document.querySelector("nav").offsetHeight;
    let offset = m.offsetTop;
    let height = m.offsetHeight;
    let id = "#" + m.getAttribute("id");
    let idValid = id === "#null" ? "#beranda" : id;

    if (top >= offset && top < offset + height) {
      for (let i = 0; i < listMenu.length; i++) {
        if (listMenu[i].getAttribute("href") === idValid) {
          listMenu[i].classList.add("before:bg-myBorderColor");
        } else {
          listMenu[i].classList.remove("before:bg-myBorderColor");
        }
      }
    }
  });
});
