import './style.css';

import { makeHomePage } from "./home-page";
import { makeContactPage } from "./contact-page";
import { makeAboutPage } from "./about-page";

const content = document.getElementById("content");

const homeBtn = document.createElement("div");
homeBtn.classList.add("btn");

const aboutBtn = document.createElement("div");
aboutBtn.classList.add("btn");

const contactBtn = document.createElement("div");
contactBtn.classList.add("btn");

const navTab = document.createElement("div");
navTab.classList.add("nav-bar");

const navItemOne = document.createElement("a");
navItemOne.classList.add("nav-item");
navItemOne.classList.add("one");
navItemOne.href = "#";
navItemOne.textContent = "About";

const navItemTwo = document.createElement("a");
navItemTwo.classList.add("nav-item");
navItemTwo.classList.add("two");
navItemTwo.href = "#";
navItemTwo.textContent = "Home";

const navItemThree = document.createElement("a");
navItemThree.classList.add("nav-item");
navItemThree.classList.add("three");
navItemThree.href = "#";
navItemThree.textContent = "Contact";


navItemOne.addEventListener("click", () => {
    let children = [];
    content.childNodes.forEach(child => {children.push(child)});
    children.forEach(child => {
        if(child.classList != undefined){
            if(!child.classList.contains("") && !child.classList.contains("nav-bar")) content.removeChild(child);
        }
    });
    makeAboutPage();
});


navItemTwo.addEventListener("click", () => {
    let children = [];
    content.childNodes.forEach(child => {children.push(child)});
    children.forEach(child => {
        if(child.classList != undefined){
            if(!child.classList.contains("") && !child.classList.contains("nav-bar")) content.removeChild(child);
        }
    });
    makeHomePage();
});

navItemThree.addEventListener("click",() => {
    let children = [];
    content.childNodes.forEach(child => {children.push(child)});
    children.forEach(child => {
        if(child.classList != undefined){
            if(!child.classList.contains("") && !child.classList.contains("nav-bar")) content.removeChild(child);
        }
    });
    makeContactPage();
});


navTab.appendChild(navItemOne);
navTab.appendChild(navItemTwo);
navTab.appendChild(navItemThree);

content.appendChild(navTab);

// makeHomePage();
