import './main.scss';
import './fonts/fonts.scss';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.registerPlugin(Flip);

let news1 = document.querySelector('.news1')
let news2 = document.querySelector('.news2')
let newsHeader = document.querySelector('.newsblock-header')

const newsblocks = gsap.utils.toArray(".news");

function doFlip() {
  // Get the initial state
  const state = Flip.getState(newsblocks);
  
  // Make DOM or styling changes (swap the squares in our case)
  swap(newsblocks);
  
  // Animate from the initial state to the end state
  Flip.from(state, {duration: 2, ease: "power1.inOut"});
}

// Given an Array of two siblings, append the one that's first so it's last (swap)
function swap([a, b]) {
  a.parentNode.children[0] === a ? a.parentNode.appendChild(a) : a.parentNode.appendChild(b);
}

// click anywhere to flip
news1.addEventListener("click", doFlip);
news2.addEventListener("click", doFlip);

