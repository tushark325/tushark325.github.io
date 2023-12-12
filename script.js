// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
// navigation done


let currentPage = 1; // Current page number
const maxPages = 10; // Maximum number of pages
const jobListings = document.querySelector(".article-container"); // Select the job listings container

function navigate(direction) {
  if (direction === -1 && currentPage > 1) {
    currentPage--;
  } else if (direction === 1 && currentPage < maxPages) {
    currentPage++;
  }
  updatePageContent();
}

function updatePageContent() {
  // Simulated content update based on the currentPage value
  // Replace this logic with your code to fetch or display new job listings
  document.querySelector(".current-page").textContent = `Page ${currentPage}`;
  fetchJobListings();
}

function fetchJobListings() {
  // Simulated job listings for each page
  const jobData = {
    1: [
      { title: "Job Title 1 lorem Infosys mega hiring", description: "Description for Job 1 infosis mega hiring for the fresher we have lots of opening currently grab this apportunity as early as posszible." },
      { title: "Job Title 2", description: "Description for Job 2" },
      { title: "Job Title 2", description: "Description for Job 2" },
      { title: "Job Title 2", description: "Description for Job 2" },
      { title: "Job Title 2", description: "Description for Job 2" },
      { title: "Job Title 2", description: "Description for Job 2" },
      { title: "Job Title 2", description: "Description for Job 2" },
      

      // Add more job listings for page 1...
    ],
    2: [
      { title: "Job Title 3", description: "Description for Job 3" },
      { title: "Job Title 4", description: "Description for Job 4" },
      { title: "Job Title 4", description: "Description for Job 4" },
      { title: "Job Title 4", description: "Description for Job 4" },
      { title: "Job Title 4", description: "Description for Job 4" },

      // Add more job listings for page 2...
    ],
    3: [
        { title: "Job Title 3", description: "Description for Job 3" },
        { title: "Job Title 4", description: "Description for Job 4" },
        { title: "Job Title 4", description: "Description for Job 4" },
        { title: "Job Title 4", description: "Description for Job 4" },
        { title: "Job Title 4", description: "Description for Job 4" },
  
        // Add more job listings for page 2...
      ],
    // Add data for other pages as needed...
  };

  const currentJobs = jobData[currentPage]; // Get job listings for the current page
  jobListings.innerHTML = ""; // Clear existing job listings

  currentJobs.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="https://via.placeholder.com/150" alt="Placeholder Image">
      <div class="card-content">
        <h2>${job.title}</h2>
        <p>${job.description}</p>
        <a href="#" class="read-more">Read More</a>
      </div>
    `;
    jobListings.appendChild(card);
  });

  updateReadMoreLinks();
}

function updateReadMoreLinks() {
  const readMoreLinks = document.querySelectorAll(".read-more");
  readMoreLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const jobTitle = this.parentNode.querySelector("h2").textContent;
      const jobDescription = this.parentNode.querySelector("p").textContent;
      localStorage.setItem("jobTitle", jobTitle);
      localStorage.setItem("jobDescription", jobDescription);
      window.location.href = "job.html";
    });
  });
}

updatePageContent(); // Initial content load



