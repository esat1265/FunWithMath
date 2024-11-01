document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');

            // Show target section
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    // Add hover effect to topic cards
    const topicCards = document.querySelectorAll('.topic-card, .topic-item');
    topicCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
    // Data for Classes
    const classes = [
        {
            id: 1,
            title: "Grade 1",
            description: "Introduction to basic math concepts including addition and subtraction.",
            img: "https://example.com/grade1.jpg" // Replace with an actual image link
        },
        {
            id: 2,
            title: "Grade 2",
            description: "Focus on number patterns, basic multiplication, and division.",
            img: "https://example.com/grade2.jpg" // Replace with an actual image link
        },
        {
            id: 3,
            title: "Grade 3",
            description: "Exploring fractions, measurement, and the introduction of geometry.",
            img: "https://example.com/grade3.jpg" // Replace with an actual image link
        },
        {
            id: 4,
            title: "Grade 4",
            description: "Advanced multiplication and division, as well as basic algebra concepts.",
            img: "https://example.com/grade4.jpg" // Replace with an actual image link
        },
        {
            id: 5,
            title: "Grade 5",
            description: "Introduction to decimals, percentages, and more complex geometrical shapes.",
            img: "https://example.com/grade5.jpg" // Replace with an actual image link
        },
        {
            id: 6,
            title: "Grade 6",
            description: "Exploring ratios, proportions, and basic statistics.",
            img: "https://example.com/grade6.jpg" // Replace with an actual image link
        },
        {
            id: 7,
            title: "Grade 7",
            description: "Introduction to algebraic expressions, equations, and basic probability.",
            img: "https://example.com/grade7.jpg" // Replace with an actual image link
        },
        {
            id: 8,
            title: "Grade 8",
            description: "Focus on functions, linear equations, and the Pythagorean theorem.",
            img: "https://example.com/grade8.jpg" // Replace with an actual image link
        },
        {
            id: 9,
            title: "Grade 9",
            description: "Advanced algebra, including quadratic equations and the basics of trigonometry.",
            img: "https://example.com/grade9.jpg" // Replace with an actual image link
        }
    ];

    const graderows = document.getElementById("graderows");

    let html = "";
    classes.map((grade) => {
        html += `<div class="col-sm-12 col-md-6 col-lg-3 mb-1">
                    <div class="card">
                        <img src="../img/demoMath.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${grade.title}</h5>
                            <p class="card-text">${grade.description}</p>
                            <a href="#" class="btn btn-primary">Go to class</a>
                        </div>
                    </div>
                </div>`;
        console.log(html);
        return html;
    })
    graderows.insertAdjacentHTML("beforeend", html); 
})