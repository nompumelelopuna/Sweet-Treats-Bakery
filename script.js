
"use strict";

const $ = s => document.querySelector(s);

// Mobile navigation
const menu = $("#menu-toggle");

if (menu) {
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", String(!open));
    $("#nav").classList.toggle("open", !open);
  });
}

// Product information and image filenames
const products = [
  {name:"Chocolate celebration cake",category:"Cakes",price:350,emoji:"🎂",image:"chocolate-celebration-cake.jpg"},
  {name:"Vanilla birthday cake",category:"Cakes",price:320,emoji:"🍰",image:"vanilla-strawberry-cake.jpg"},
  {name:"Cupcakes (box of 6)",category:"Cakes",price:120,emoji:"🧁",image:"pink-frosted-cupcakes.jpg"},
  {name:"Classic bread loaf",category:"Breads",price:35,emoji:"🍞",image:"fresh-bread-loaf.jpg"},
  {name:"Soft bread rolls (6)",category:"Breads",price:48,emoji:"🥖",image:"soft-bread-rolls.jpg"},
  {name:"Butter croissants (4)",category:"Pastries",price:95,emoji:"🥐",image:"butter-croissants.jpg"},
  {name:"Fruit pastry selection",category:"Pastries",price:110,emoji:"🥧",image:"fruit-pastries.jpg"},
  {name:"Cinnamon swirls (4)",category:"Pastries",price:85,emoji:"🍥",image:"cinnamon-swirl-rolls.jpg"}
];

const grid = $("#product-grid");
const lightbox = $("#lightbox");

// Display products
function renderProducts() {
  if (!grid) return;

  const q = $("#search").value.toLowerCase().trim();
  const cat = $("#category").value;
  const sort = $("#sort").value;

  const list = products.filter(x =>
    (cat === "all" || x.category === cat) &&
    x.name.toLowerCase().includes(q)
  );

  list.sort((a, b) =>
    sort === "price-asc" ? a.price - b.price :
    sort === "price-desc" ? b.price - a.price :
    a.name.localeCompare(b.name)
  );

  grid.replaceChildren();

  list.forEach(x => {
    const article = document.createElement("article");
    article.className = "product";

    const photo = document.createElement("button");
    photo.className = "product-photo";
    photo.type = "button";
    photo.setAttribute("aria-label", "Enlarge image of " + x.name);

    const image = document.createElement("img");
    image.src = "images/" + x.image;
    image.alt = x.name + " from Sweet Treats Bakery";
    image.loading = "lazy";
    image.decoding = "async";
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.objectFit = "cover";
    image.style.display = "block";

    image.onerror = () => {
      image.alt = x.name + " image unavailable";
      image.style.display = "none";
      photo.textContent = x.emoji;
    };

    photo.append(image);
    photo.addEventListener("click", () => openLightbox(x));

    const detail = document.createElement("div");
    detail.className = "product-detail";

    const catEl = document.createElement("p");
    catEl.className = "eyebrow";
    catEl.textContent = x.category;

    const h = document.createElement("h3");
    h.textContent = x.name;

    const price = document.createElement("p");
    price.textContent = "From R" + x.price + " · sample price";

    detail.append(catEl, h, price);
    article.append(photo, detail);
    grid.append(article);
  });

  $("#product-count").textContent =
    list.length + " treat" + (list.length === 1 ? "" : "s") + " found";
}

if (grid) {
  ["#search", "#category", "#sort"].forEach(s =>
    $(s).addEventListener("input", renderProducts)
  );
  renderProducts();
}

// Product image lightbox
let lastFocus = null;

function openLightbox(x) {
  lastFocus = document.activeElement;

  const im = $("#lightbox-image");
  im.src = "images/" + x.image;
  im.alt = x.name + " from Sweet Treats Bakery";

  $("#lightbox-caption").textContent = x.name;
  lightbox.hidden = false;
  $("#lightbox-close").focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  if (lastFocus) lastFocus.focus();
}

if (lightbox) {
  $("#lightbox-close").addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }

    if (e.key === "Tab" && !lightbox.hidden) {
      e.preventDefault();
      $("#lightbox-close").focus();
    }
  });
}

// Enquiry date minimum
const today = new Date();
today.setDate(today.getDate() + 2);

const date = $("#order-date");

if (date) {
  date.min =
    `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
}

// Enquiry cost calculator
const prices = {
  cake:350,
  cupcakes:120,
  bread:35,
  pastry:95
};

function estimate() {
  if (!$("#estimate")) return;

  const key = $("#order-product").value;
  const n = Number($("#quantity").value);

  $("#estimate").textContent =
    prices[key] && n >= 1 && n <= 50
      ? `Illustrative estimate: R${prices[key]*n} (excluding customisation and delivery). Subject to confirmation.`
      : "Select a product and valid quantity to view an estimated cost.";
}

if ($("#estimate")) {
  ["#order-product", "#quantity"].forEach(s =>
    $(s).addEventListener("input", estimate)
  );
  estimate();
}

// Enquiry and contact email forms
function emailForm(id, subject, fields, errorId) {
  const form = $(id);
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const error = $(errorId);
    error.textContent = "";

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    for (const [key, val] of data) {
      if (typeof val === "string" && !val.trim()) {
        error.textContent = "Please complete all required fields.";
        return;
      }
    }

    if (
      id === "#enquiry-form" &&
      new Date(data.get("date") + "T00:00:00") <
      new Date(date.min + "T00:00:00")
    ) {
      error.textContent = "Please choose a date at least two days ahead.";
      return;
    }

    const lines = fields.map(([label, key]) =>
      label + ": " + data.get(key)
    );

    if (id === "#enquiry-form") {
      lines.push($("#estimate").textContent);
    }

    const url =
      "mailto:info@sweettreatsbakery.co.za?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(lines.join("\n"));

    window.location.href = url;
  });
}

emailForm(
  "#enquiry-form",
  "Sweet Treats Bakery custom order enquiry",
  [
    ["Name","name"],
    ["Email","email"],
    ["Phone","phone"],
    ["Preferred date","date"],
    ["Product","product"],
    ["Quantity","quantity"],
    ["Details","details"]
  ],
  "#enquiry-error"
);

emailForm(
  "#contact-form",
  "Sweet Treats Bakery contact message",
  [
    ["Name","name"],
    ["Email","email"],
    ["Type","type"],
    ["Message","message"]
  ],
  "#contact-error"
);
// Interactive map on the Contact page
window.addEventListener("load", () => {
  const mapElement = document.querySelector("#map");

  if (!mapElement || !window.L) return;

  const map = L.map("map").setView([-26.2678, 27.8585], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([-26.2678, 27.8585])
    .addTo(map)
    .bindPopup("Soweto, Johannesburg");
});
