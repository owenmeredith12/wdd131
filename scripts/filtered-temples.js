
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    const toggleButton = document.createElement("button");
    toggleButton.classList.add("nav-toggle");
    toggleButton.setAttribute("aria-label", "Toggle menu");
    toggleButton.innerHTML = "☰";
    navbar.insertBefore(toggleButton, navbar.firstChild);

    const navMenu = navbar.querySelector(".nav-menu");


    toggleButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });


    function updateMenuDisplay() {
        if (window.innerWidth < 768) {
            toggleButton.style.display = "block";
            navMenu.classList.remove("show");
        } else {
            toggleButton.style.display = "none";
            navMenu.classList.remove("show");
        }
    }

    window.addEventListener("resize", updateMenuDisplay);
    updateMenuDisplay();
});


document.addEventListener("DOMContentLoaded", () => {
    const modified = document.getElementById("lastModified");
    if (modified) {
        modified.textContent = "Last modified: " + document.lastModified;
    }
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Copenhagen, Denmark",
        dedicated: "2004, May, 23",
        area: 25000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/copenhagen-denmark/400x250/copenhagen-denmark-temple-lds-278232-wallpaper.jpg"
    },
    {
        templeName: "Mount Timpanogos",
        location: "American Fork, Utah",
        dedicated: "1996, October, 13",
        area: 107240,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mount-timpanogos-utah/400x250/mount-timpanogos-temple-lds-885511-wallpaper.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple03.jpg"
    },

];


function displayTemples(templesToDisplay) {
    const grid = document.querySelector('.grid');
    grid.innerHTML = "";

    templesToDisplay.forEach(temple => {
        let templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

        let image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;

        let name = document.createElement('h1');
        name.innerHTML = `<strong>Temple</strong> ${temple.templeName}`;

        let location = document.createElement('p');
        location.innerHTML = `<strong>Location</strong> ${temple.location}`;

        let dedicated = document.createElement('p');
        dedicated.innerHTML = `<strong>Dedication Date</strong> ${temple.dedicated}`;

        let size = document.createElement('p');
        size.innerHTML = `<strong>Sq. Ft</strong> ${temple.area}`;

        templeCard.append(image, name, location, dedicated, size);
        grid.appendChild(templeCard);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    displayTemples(temples);

    document.querySelector(".nav-menu").addEventListener("click", function (e) {
        if (!e.target.dataset.filter) return;

        let filter = e.target.dataset.filter;
        let filteredTemples;

        switch (filter) {
            case "old":
                filteredTemples = temples.filter(t => {
                    const year = parseInt(t.dedicated.match(/\d{4}/));
                    return year < 1900;
                });
                break;
            case "new":
                filteredTemples = temples.filter(t => {
                    const year = parseInt(t.dedicated.match(/\d{4}/));
                    return year > 2000;
                });
                break;
            case "large":
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case "small":
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
            case "home":
            default:
                filteredTemples = temples;
        }

        displayTemples(filteredTemples);
    });
});





