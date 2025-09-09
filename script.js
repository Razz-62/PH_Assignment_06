
const displayPlants = (plants) => {
    const container = document.getElementById("plants-container");
    container.innerHTML = "";

    if (!plants || plants.length === 0) {
        container.innerHTML = `
      <div class="text-center col-span-full py-10">
        <p class="text-lg text-gray-400">🌱 No plants available.</p>
      </div>`;
        return;
    }
    plants.forEach(plant => {
        const card = document.createElement("div");
        card.className = "p-4 bg-white shadow-md product-card rounded-xl";
        card.innerHTML = `
    <div class="product-image h-60 w-full bg-gray-200 rounded-lg mb-2">
      <img src="${plant.image}" alt="${plant.name}" class="w-full h-full object-cover rounded-lg" />
    </div>
    <h4 onclick="loadPlantDetails(${plant.id})" 
        class="text-lg font-bold cursor-pointer text-green-700 ">
      ${plant.name}
    </h4>
    <p class="text-sm text-gray-600">${plant.description.slice(0, 80)}...</p>
    
    <div class="flex items-center justify-between mt-2">
      <span class="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
        ${plant.category}
      </span>
      <p class="font-bold">৳${plant.price}</p>
    </div>

    <button onclick="addToCart('${plant.name}', ${plant.price})"
      class="btn btn-success btn-sm mt-2 w-full bg-green-700 text-white rounded-lg py-1">
      Add to Cart
    </button>
  `;
        container.appendChild(card);
    });

};


const loadingAllPlants = async (categories) => {
    manageSpinner(true);
    allPlants = [];
    for (const cat of categories) {
        const resC = await fetch(`https://openapi.programming-hero.com/api/category/${cat.id}`);
        const dataC = await resC.json();
        allPlants = allPlants.concat(dataC.plants);
    }
    displayPlants(allPlants.slice(0, 6));
    manageSpinner(false);
};
const showAllPlants = () => {
    removeActive();
    document.getElementById("cat-btn-all").classList.add("bg-green-700", "text-white");
    displayPlants(allPlants);
};


const categoryButtons = (categories) => {
    const allButton = `
    <li>
      <button id="cat-btn-all" onclick="showAllPlants()" 
        class="category-btn w-full text-left px-3 py-2 rounded hover:bg-green-100 bg-green-700 text-white">
        All Trees
      </button>
    </li>`;

    const categoryButton = categories.map(
        (cat) => `
      <li>
        <button id="cat-btn-${cat.id}" onclick="loadPlantsByCategory(${cat.id})" 
          class="category-btn w-full text-left px-3 py-2 rounded hover:bg-green-100">
          ${cat.category_name}
        </button>
      </li>`
    ).join("");

    return allButton + categoryButton;
};

const displayCategory = (categories) => {
    const container = document.getElementById("categories");
    container.innerHTML = `<ul>${categoryButtons(categories)}</ul>`;
};


const loadingCategory = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();
    const categories = data.categories;
    displayCategory(categories);
    
    await loadingAllPlants(categories);
};

loadingCategory();
