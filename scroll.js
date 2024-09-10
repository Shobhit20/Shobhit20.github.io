// Function to update styles and highlight the active button
function updateNavStyles(activeSectionId) {
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        const sectionId = button.closest('a').getAttribute('href').substring(1);

        // Determine which buttons should have white-active or blue-active classes
        if (activeSectionId === 'home' || activeSectionId === 'experience' || activeSectionId === 'projects') {
            button.classList.remove('blue-active');
            button.classList.add('white-active');
        } else {
            button.classList.remove('white-active');
            button.classList.add('blue-active');
        }

        // Highlight the active button
        if (sectionId === activeSectionId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// IntersectionObserver callback
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            updateNavStyles(sectionId);
        }
    });
}

// Create an IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.9 // Trigger when 50% of the section is in view
});

// Observe each section
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add click event listeners to buttons
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.closest('a').getAttribute('href').substring(1);

        // Scroll to the section
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

        // Update the styles based on the clicked button
        updateNavStyles(sectionId);
    });
});


var modalInfo = {
    1: {
      title: "Project 1",
      info: "...",
      link: "#",
      github: "#"
    },
    2: {
      title: "Project 2",
      info: "...",
      link: "#",
      github: "#"
    },
    3: {
      title: "Project 3",
      info: "...",
      link: "#",
      github: "#"
    },
    4: {
      title: "Project 4",
      info: "....",
      link: "#",
      github: "#"
    },
    5: {
      title: "Project 5",
      info: "...",
      link: "#",
      github: "#"
    },
    6: {
      title: "Project 6",
      info: "...",
      link: "#",
      github: "#"
    }
  };
  
  // Get the modal
  var modal = document.getElementById('preview');
  
  // button that opens the modal
  var btn = document.getElementsByClassName("button");
  
  // <span> that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // open modal 
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      var project = btn[i].parentElement;
      openModal(project);
    })
  };
  
  function openModal(project){
    var id = project.id;
    var img = project.getElementsByTagName("img")[0].src;
    fillOut(id, img);
    modal.style.display = "block";
    document.getElementsByClassName("modal-content")[0].classList.add("scale");
  }
  
  function fillOut(id, img){
    document.getElementById("title").innerHTML = modalInfo[id].title;
    document.getElementById("info").innerHTML = modalInfo[id].info;
    document.getElementById("img").src = img;
    document.getElementById("live").onclick = function(){
      window.open(modalInfo[id].link,'_blank');
    }
    document.getElementById("github").onclick = function(){
      window.open(modalInfo[id].github,'_blank');
    }
  }
  
  // close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }