const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navItems = document.querySelectorAll("a");
navItems[0].textContent = "services";
navItems[1].textContent = "product";
navItems[2].textContent = "vision";
navItems[3].textContent = "features";
navItems[4].textContent = "about";
navItems[5].textContent = "contact";

// console.log(navItems);

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", "img/header-img.png");

const fontIsAwesome = document.querySelector(".cta-text h1");
console.log(fontIsAwesome);

fontIsAwesome.innerHTML = "DOM <br> Is <br>Awesome";

const clickButton = document.querySelector("button");
console.log(clickButton);

clickButton.textContent = "Get Started";

// main-content (top-content)

const featureh4 = document.querySelector(".top-content .text-content h4");
featureh4.textContent = siteContent["main-content"]["features-h4"];
const featuresP = document.querySelector(".top-content .text-content p");
featuresP.textContent = siteContent["main-content"]["features-content"];

// main-content ABOUT \\

const about = document.querySelector(
  ".top-content .text-content:nth-child(2) h4"
);
about.textContent = siteContent["main-content"]["about-h4"];
// console.log(about);

const aboutP = document.querySelector(
  ".top-content .text-content:nth-child(2) p"
);
aboutP.textContent = siteContent["main-content"]["about-content"];

// img section

const middleImg = document.getElementById("middle-img");

middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//services // Product // Vision

const services = document.querySelector(".bottom-content .text-content h4");
services.textContent = siteContent["main-content"]["services-h4"];

const servicesP = document.querySelector('.bottom-content .text-content p')
servicesP.textContent = siteContent['main-content']['services-content']

//product
const product = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
product.textContent = siteContent["main-content"]["product-h4"];

const productP = document.querySelector('.bottom-content .text-content:nth-child(2) p')

productP.textContent = siteContent['main-content']['product-content']


// Vision

const vision = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
vision.textContent = siteContent["main-content"]["vision-h4"];

const visionP = document.querySelector('.bottom-content .text-content:nth-child(3) p')
visionP.textContent = siteContent['main-content']['vision-content']


