// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation items on scroll
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(section => {
        if (scrollPosition >= section.offsetTop - 60 && scrollPosition < section.offsetTop + section.offsetHeight - 60) {
            const currentId = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    });
});

function removeAllActiveClasses() {
    document.querySelectorAll("nav a").forEach((el) => {
        el.classList.remove("active");
    });
}

function addActiveClass(id) {
    const selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
}

// Typing effect for tagline
const tagline = document.querySelector('.tagline');
const text = tagline.textContent;
tagline.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start the typing effect when the page loads
window.addEventListener('load', typeWriter);

// Intersection Observer for fade-in effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = themeToggle.querySelector('.fa-moon');
const sunIcon = themeToggle.querySelector('.fa-sun');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        moonIcon.style.transform = 'translateX(-40px)';
        moonIcon.style.opacity = '0';
        sunIcon.style.transform = 'translateX(0)';
        sunIcon.style.opacity = '1';
    } else {
        moonIcon.style.transform = 'translateX(0)';
        moonIcon.style.opacity = '1';
        sunIcon.style.transform = 'translateX(40px)';
        sunIcon.style.opacity = '0';
    }
});

// Set initial state based on user's preferred color scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.add('light-mode');
    moonIcon.style.transform = 'translateX(-40px)';
    moonIcon.style.opacity = '0';
    sunIcon.style.transform = 'translateX(0)';
    sunIcon.style.opacity = '1';
}

// Skill proficiency visualization
const skills = document.querySelectorAll('.skill-category li');
skills.forEach(skill => {
    const proficiency = Math.floor(Math.random() * 5) + 1; // Random proficiency for demonstration
    const proficiencyBar = document.createElement('div');
    proficiencyBar.classList.add('proficiency-bar');
    proficiencyBar.style.width = `${proficiency * 20}%`;
    skill.appendChild(proficiencyBar);
});

// Project image modal
const projectImages = document.querySelectorAll('.project-image');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

projectImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Lazy loading for project images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove('lazy');
                imageObserver.unobserve(image);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
} else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('img.lazy').forEach(img => {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
    });
}

// Publications expand/collapse
const publicationItems = document.querySelectorAll('.publication-item');
publicationItems.forEach(item => {
    const description = item.querySelector('.publication-description');
    const link = item.querySelector('.publication-link');
    
    if (description && link) {
        description.style.display = 'none';
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (description.style.display === 'none') {
                description.style.display = 'block';
                link.textContent = 'Read Less';
            } else {
                description.style.display = 'none';
                link.textContent = 'Read More';
            }
        });
    }
});

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '&uarr;';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize AOS (Animate on Scroll) for awards section
AOS.init({
    duration: 1000,
    once: true,
    offset: 200
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});