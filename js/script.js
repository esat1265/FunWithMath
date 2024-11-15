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
            img: "../img/grades/grade1.jpg"
        },
        {
            id: 2,
            title: "Grade 2",
            description: "Focus on number patterns, basic multiplication, and division.",
            img: "../img/grades/grade2.jpg" 
        },
        {
            id: 3,
            title: "Grade 3",
            description: "Exploring fractions, measurement, and the introduction of geometry.",
            img: "../img/grades/grade3.jpg" 
        },
        {
            id: 4,
            title: "Grade 4",
            description: "Advanced multiplication and division, as well as basic algebra concepts.",
            img: "../img/grades/grade4.jpg" 
        },
        {
            id: 5,
            title: "Grade 5",
            description: "Introduction to decimals, percentages, and more complex geometrical shapes.",
            img: "../img/grades/grade5.jpg" 
        },
        {
            id: 6,
            title: "Grade 6",
            description: "Exploring ratios, proportions, and it's basic statistics.",
            img: "../img/grades/grade6.jpg" 
        },
        {
            id: 7,
            title: "Grade 7",
            description: "Introduction to algebraic expressions, equations, and basic probability.",
            img: "../img/grades/grade7.jpg" 
        },
        {
            id: 8,
            title: "Grade 8",
            description: "Focus on functions, linear equations, and the Pythagorean theorem.",
            img: "../img/grades/grade8.jpg" 
        },
        {
            id: 9,
            title: "Grade 9",
            description: "Advanced algebra, including quadratic equations and the basics of trigonometry.",
            img: "../img/grades/grade9.jpg" 
        }
    ];

    const graderows = document.getElementById("graderows");

    let gradeText = "";
    classes.map((grade ,index) => {
        gradeText += `<div class="col-sm-12 col-md-6 col-lg-3 mb-1">
                    <div class="card">
                        <img src="${grade.img}" class="card-img-top" alt="..." style="height:176px">
                        <div class="card-body">
                            <h5 class="card-title">${grade.title}</h5>
                            <p class="card-text">${grade.description}</p>
                            <a href="curriculum.html" class="btn btn-primary">Go to class</a>
                        </div>
                    </div>
                </div>`;
        return gradeText;
    })
    graderows.insertAdjacentHTML("beforeend", gradeText); 
})