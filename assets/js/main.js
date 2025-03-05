"use strict";

/* ======= Header animation ======= */
const header = document.getElementById("header");

window.onload = function () {
  headerAnimation();
};

window.onresize = function () {
  headerAnimation();
};

window.onscroll = function () {
  headerAnimation();
};

function headerAnimation() {
  var scrollTop = window.scrollY;

  if (scrollTop > 100) {
    header.classList.add("header-shrink");
  } else {
    header.classList.remove("header-shrink");
  }
}

/* ===== Smooth scrolling ====== */
/*  Note: Include smoothscroll.min.js for better browser compatibility */

let scrollLinks = document.querySelectorAll(".scrollto");
const pageNavWrapper = document.getElementById("navigation");

scrollLinks.forEach((scrollLink) => {
  scrollLink.addEventListener("click", (e) => {
    // Check if the link is external (http/https) and allow it to open normally
    if (scrollLink.href.startsWith("http")) {
      return;
    }

    e.preventDefault(); // Prevent default only for internal links

    let element = document.querySelector(scrollLink.getAttribute("href"));
    if (!element) return; // Prevent errors if element doesn't exist

    const yOffset = 69; // Header height offset
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // Collapse mobile menu after clicking
    if (pageNavWrapper.classList.contains("show")) {
      pageNavWrapper.classList.remove("show");
    }
  });
});

/* ===== Gumshoe ScrollSpy ===== */
var spy = new Gumshoe("#navigation a", {
  offset: 69, // Header height offset
});

/* ======= Countdown Timer ======= */
// Set the countdown target date
var target_date = new Date("Mar 11, 2025").getTime();

// Get countdown container
var countdown = document.getElementById("countdown-box");

// Create and append time unit spans
var days_span = document.createElement("SPAN");
days_span.className = "days";
countdown.appendChild(days_span);

var hours_span = document.createElement("SPAN");
hours_span.className = "hours";
countdown.appendChild(hours_span);

var minutes_span = document.createElement("SPAN");
minutes_span.className = "minutes";
countdown.appendChild(minutes_span);

var secs_span = document.createElement("SPAN");
secs_span.className = "secs";
countdown.appendChild(secs_span);

// Update countdown every second
setInterval(function () {
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  var days = parseInt(seconds_left / 86400);
  seconds_left = seconds_left % 86400;

  var hours = parseInt(seconds_left / 3600);
  seconds_left = seconds_left % 3600;

  var minutes = parseInt(seconds_left / 60);
  var seconds = parseInt(seconds_left % 60);

  // Update countdown display
  days_span.innerHTML =
    '<span class="number">' + days + '</span><span class="unit">Days</span>';
  hours_span.innerHTML =
    '<span class="number">' + hours + '</span><span class="unit">Hrs</span>';
  minutes_span.innerHTML =
    '<span class="number">' + minutes + '</span><span class="unit">Mins</span>';
  secs_span.innerHTML =
    '<span class="number">' + seconds + '</span><span class="unit">Secs</span>';
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
  // Show popup on page load
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
