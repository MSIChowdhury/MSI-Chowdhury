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
window.onload = typeWriter;