import { getBrands, getSneakers } from "../apis/services/sneaker.service";
import { getUserInfo } from "../apis/services/user.service";
import { createAnyBrands } from "../components/brands";
import { createPages } from "../components/page";
import { chooseSneaker, createAnySneakerCard } from "../components/sneakers.card";
import { errorHandler } from "../libs/error-handler";
import { removeSessionToken } from "../libs/session-manager";
import { toast } from "../libs/toast";
// import debounce from "debounce";

const userName = document.getElementById("userName");
const timeW = document.getElementById("timeW");
const brands = document.getElementById("brands");
const allSneakers = document.getElementById("allSneakers");
const pages = document.getElementById("pages");
const searchInput = document.getElementById("search");
const logout = document.getElementById("logout");
let Brand;

// ======================== get User Name and show brands and time welcome ====================
async function init() {
  try {
    const response = await getUserInfo();
    userName.innerText = response.username;
    timeWelcome();
    showBrands();
    setSneakers();
  } catch (error) {
    errorHandler(error);
  }
}

// ======================== set time for welcome in header ====================
function timeWelcome() {
  let hour = new Date().getHours();
  console.log(hour);
  
  if (hour < 12 && 3 < hour ) {
    timeW.innerText = "Good Morning";
  } else if (hour < 18 && hour > 12) {
    timeW.innerText = "Good Evening";
  } else timeW.innerText = "Good Night";
}

// ======================== show brands ====================
async function showBrands(choose = "All") {
  let allBrands = await getBrands();
  allBrands.splice(0, 0, "All");
  brands.innerHTML = allBrands
    .map((item) => {
      if (item === choose) {
        return createAnyBrands(item, "text-white bg-[#343A40]");
      } else return createAnyBrands(item);
    })
    .join("");
}

// ======================== Show SneakerCards and Pagination ====================
function render({ data, totalPages, page }) {
  let html = "";
  data.map((item) => {
    html += createAnySneakerCard(item);
  });
  allSneakers.innerHTML = html;
  html = "";
  for (let i = 1; i <= totalPages; i++) {
    if (i === page) {
      html += createPages(i, "!bg-gray-600 text-white");
    } else html += createPages(i);
  }
  chooseSneaker();
  pages.innerHTML = html;
}

// ======================== get and show Sneakers(set) ====================
async function setSneakers(page = 1, cb, brand) {
  try {
    let sneakers;
    if (cb) {
      await cb();
    }
    if (brand) {
      Brand = brand;
      if (brand === "All") brand = "";
      sneakers = await getSneakers({ page: page, limit: 10, brands: brand });
    } else sneakers = await getSneakers({ page: page, limit: 10 });
    render(sneakers);
  } catch (error) {
    errorHandler(error);
  }
}

// ======================= find Sneakers by Id =======================
function find(event) {
  let parent = event.target;
  while (!parent.dataset.id) {
    parent = parent.parentElement;
  }
  window.location.href = `/sneaker?id=${parent.dataset.id}`;
}
// ===================== logOut button ====================
logout.addEventListener("click", ()=>{
  removeSessionToken();
  toast("Logged out","success")
  setTimeout(() => {
    window.location.href = "/login";
  }, 2000);
})

// ======================== Search input ================
searchInput.addEventListener("input", (event) => {
  const query = event.target.value;
  if (query.length > 1) {
    window.location.href = `/search?search=${query}`;
  }
});

// ++======================= click button =======================++

//================== filter by Brands ================
brands.addEventListener("click", (event) => {
  setSneakers(1, null, event.target.innerText);
  showBrands(event.target.innerText);
});

//============== filter by pages=================
pages.addEventListener("click", (event) => {
  setSneakers(event.target.innerText,null,Brand);
});

//========== find sneaker by id ===========
allSneakers.addEventListener("click",find);

// ============================ call user and sneakers ================================
init();

