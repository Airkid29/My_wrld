/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["a Developer","a SOC Analyst","a CM"],
    loop : true,
    typeSpeed : 70, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

/* ----- ENHANCED FILTERING SYSTEM ----- */

// Project Filtering and Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    // Enhanced filter system for projects
    function initializeProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectItems = document.querySelectorAll('.project-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Remove active class from all buttons in the same container
                const container = button.closest('.filter-buttons');
                container.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Filter projects with smooth animation
                filterProjects(filter, projectItems);
            });
        });
        
        function filterProjects(category, items) {
            items.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'flex';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        if (item.style.opacity === '0') {
                            item.style.display = 'none';
                        }
                    }, 300);
                }
            });
        }
        
        // Initialize with 'all' filter
        filterProjects('all', projectItems);
    }
    
    // Testimonials filter system
    function initializeTestimonialFilters() {
        const testimonialFilterButtons = document.querySelectorAll('.testimonial-filter-btn');
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        
        testimonialFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-testimonial-filter');
                
                // Remove active class from all testimonial filter buttons
                testimonialFilterButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Filter testimonials with smooth animation
                filterTestimonials(filter, testimonialCards);
            });
        });
        
        function filterTestimonials(category, items) {
            items.forEach(item => {
                const itemCategory = item.getAttribute('data-testimonial-category');
                
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        if (item.style.opacity === '0') {
                            item.style.display = 'none';
                        }
                    }, 300);
                }
            });
        }
        
        // Initialize testimonials with 'all' filter
        filterTestimonials('all', testimonialCards);
    }
    
    // Modal functionality
    function initializeModal() {
        const modal = document.getElementById('allProjectsModal');
        const viewAllBtn = document.getElementById('viewAllProjectsBtn');
        const closeBtn = document.querySelector('.close-button');
        const modalGallery = document.getElementById('modal-projects-gallery');
        const mainGallery = document.getElementById('main-projects-gallery');
        
        if (viewAllBtn && modal) {
            viewAllBtn.addEventListener('click', () => {
                // Clone all projects to modal
                modalGallery.innerHTML = mainGallery.innerHTML;
                modal.style.display = 'block';
                
                // Re-initialize filters for modal
                initializeModalFilters();
            });
        }
        
        if (closeBtn && modal) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
        
        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    function initializeModalFilters() {
        const modalFilterButtons = document.querySelectorAll('.modal-filter-buttons .filter-btn');
        const modalProjectItems = document.querySelectorAll('#modal-projects-gallery .project-item');
        
        modalFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Remove active class from all modal buttons
                modalFilterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Filter modal projects
                filterProjects(filter, modalProjectItems);
            });
        });
    }
    
    // Initialize everything
    initializeProjectFilters();
    initializeTestimonialFilters();
    initializeModal();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Retire la classe active de todos los botones
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.getAttribute('data-filter');
    document.querySelectorAll('.project-item').forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});