import experience from './experience.json' assert {type: 'json'};

window.onscroll = function() {myFunction();};
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}



function displayExperience() {
  console.log('Does this get called?')
  let experience_list = document.getElementById("experience-timeline");
  experience_list.innerHTML = `
      ${
        experience.map((item, index) => {
          let className = index % 2 === 0 ? "container left" : "container right";
          return `
            <div class="${className}">
              <div class="content">
                <h3>${item.dates}</h3>
                <p>${item.company_education}</p>
                <p>${item.role}</p>
              </div>
            </div>
          `   
       })
     }
  `
}

displayExperience();