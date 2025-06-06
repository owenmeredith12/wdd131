const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: "fc-1888", name: "flux capacitor" },
        { id: "fc-2050", name: "power laces" },
        { id: "fs-1987", name: "time circuits" },
        { id: "ac-2000", name: "low voltage reactor" },
        { id: "jj-1969", name: "warp equalizer" }
    ];

    const selectEl = document.getElementById("product-select");
    if (!selectEl) {
        console.error("❌ No <select> found with id 'product-select'");
        return;
    }

    products.forEach(prod => {
        const opt = document.createElement("option");
        opt.value = prod.id;
        opt.textContent = prod.name;
        selectEl.appendChild(opt);
    });

    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;

    reviewCount += 1;

    localStorage.setItem('reviewCount', reviewCount);
    const counterDisplay = document.createElement('p');
    counterDisplay.textContent = `You have submitted${reviewCount} reviews`;
    document.body.appendChild(counterDisplay);
});