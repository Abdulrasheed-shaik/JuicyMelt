//access the images
let slideImages=document.querySelectorAll('img')
//accesss the next and prev
let next=document.querySelector('.next')
let prev=document.querySelector('.prev')
//access the indicators
let dot=document.querySelectorAll('.dots')

let count=0
//next button
next.addEventListener('click',slideNext)
function slideNext(){
slideImages[count].style.animation='next1 5s ease-in forwards'
if(count>=slideImages.length-1){
    count=0
}
else{
    count++
}
slideImages[count].style.animation='next2 5s ease-in forwards'
}
// prev button
prev.addEventListener('click',function slidePrev(){
slideImages[count].style.animation='prev1 5s ease-in forwards'
if(count==0){
    count=slideImages.length-1
}
else{
    count--
}
slideImages[count].style.animation='prev2 5s ease-in forwards'
})
//auto sliding
function autoSliding(){
    deletInterval = setInterval(()=>{
        slideNext()
    },5000)
}
autoSliding()
//stop auto sliding when mouse is over
const container=document.querySelector('.slide-container')
container.addEventListener('mouseover',function(){
    clearInterval(deletInterval)
})
//resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding)
//cards
const itemsPerPage = 6;

function renderPagination(container, totalItems, currentPage, onPageChange) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    container.innerHTML = '';

    const prevBtn = document.createElement('button');
    prevBtn.className="btn"
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => onPageChange(currentPage - 1));
    container.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.className="btn"
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => onPageChange(currentPage + 1));
    container.appendChild(nextBtn);
}

function renderCards(container, items, currentPage) {
    container.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

    paginatedItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        const imgElement = document.createElement('div');
        imgElement.className = 'imgs';
        imgElement.innerHTML = `<img src='${item.image}'/>`;

        const dataElement = document.createElement('div');
        dataElement.className = 'data';
        dataElement.innerHTML = `
            <h1>${item.name}</h1>
            <p>Rs.${item.price.perKg || item.price.perDozen || item.price.perLiter || item.price.per200g || item.price.perPiece}/-</p>
            <p>Size: ${Object.keys(item.price)}</p>`;

        const hoverContent = document.createElement('div');
        hoverContent.className = 'hover-content';
        hoverContent.style.display = 'none'; // Initially hidden
        hoverContent.style.width = '100%';
        hoverContent.style.height = '100%';
        hoverContent.style.backgroundImage = `url(${item.image})`;
        hoverContent.style.backgroundSize = 'cover'; // Fully occupy the div
        hoverContent.innerHTML = `
            <p class="text-3xl text-center">${item.description}</p>
            <button class="shop-now p-3 w-32 rounded-lg text-white font-bold mx-auto my-6">Shop Now</button>`;
        card.appendChild(imgElement);
        card.appendChild(dataElement);
        card.appendChild(hoverContent);
        container.appendChild(card);
        card.addEventListener('mouseover', () => {
            imgElement.style.display = 'none';
            dataElement.style.display = 'none';
            hoverContent.style.display = 'flex';
            hoverContent.style.flexDirection = 'column';
            hoverContent.style.justifyContent = 'center';
        });
        card.addEventListener('mouseout', () => {
            imgElement.style.display = 'block';
            dataElement.style.display = 'block';
            hoverContent.style.display = 'none';
        });
        const shopNowButton = hoverContent.querySelector('.shop-now');
        shopNowButton.addEventListener('click', () => {
            location.href = './shop.html';
        });
    });
}

function setupPagination(items, type, containerClass, paginationClass) {
    const container = document.querySelector('.available');
    const pagination = document.querySelector(paginationClass);

    let currentPage = 1;

    function updatePage(page) {
        currentPage = page;
        renderCards(container, items, currentPage);
        renderPagination(pagination, items.length, currentPage, updatePage);
    }

    updatePage(currentPage);
}

// Filter products by type
const fruits = products.filter(x => x.available === "true" && x.type === "fruit");
const juices = products.filter(x => x.available === "true" && x.type === "juice");
const icecreams = products.filter(x => x.available === "true" && x.type === "icecream");

// Setup pagination for each type
setupPagination(fruits, 'fruit', '.available', '.available-pagination');
setupPagination(juices, 'juice', '.available', '.available-pagination');
setupPagination(icecreams, 'icecream', '.available', '.available-pagination');

// Filter products by availability
const availableProducts = products.filter(x => x.available === "true");

// Setup pagination for available products
setupPagination(availableProducts, 'available', '.available', '.available-pagination');

//home
let home=document.querySelector(".home")
let navHome=document.querySelector(".nav-home")
home.addEventListener("click",()=>{
    location.href="./index.html"
})
navHome.addEventListener("click",()=>{
    location.href="./index.html"
})
//product
let productPage=document.querySelector(".product")
let navProduct=document.querySelector(".nav-product")
productPage.addEventListener("click",()=>{
    location.href="#available"
})
navProduct.addEventListener("click",()=>{
    location.href="#available"
})
//about
let about=document.querySelector(".menu-about")
let navAbout=document.querySelector(".nav-about")
about.addEventListener("click",()=>{
    location.href="#about"
})
navAbout.addEventListener("click",()=>{
    location.href="#about"
})
//services
let service=document.querySelector(".services")
let navService=document.querySelector(".nav-services")
service.addEventListener("click",()=>{
    location.href="#services"
})
navService.addEventListener("click",()=>{
    location.href="#services"
})
//cart
const loginStatus = localStorage.getItem('loginStatus');
    let cart=document.querySelector(".cart")
    cart.addEventListener("click",()=>{
        if(loginStatus=="true"){
        location.href="./cart.html"
        }
        else{
            alert("Please login to view cart")
        }
    })
const navCart = document.querySelector('.nav-cart');
navCart.addEventListener('click', () => {
    if (loginStatus === 'true') {
        location.href = './cart.html';
    } else {
        alert('Please login to view cart');
    }
});  
//sidebar
let sidebar=document.querySelector(".nav-slide")

let menuIcon=document.querySelector(".fa-bars")
let closeIcon=document.querySelector(".fa-x")
    sidebar.style.display = "none";

menuIcon.addEventListener("click", () => {
    sidebar.style.display = "flex"; // Ensure the sidebar is displayed
    sidebar.classList.add("show");
    sidebar.classList.remove("hide");
    menuIcon.style.visibility = "hidden";
});

closeIcon.addEventListener("click", () => {
    sidebar.classList.add("hide");
    sidebar.classList.remove("show");
    setTimeout(() => {
        sidebar.style.display = "none";
        menuIcon.style.visibility = "visible";
    }, 500);
});

//signup
let signup=document.querySelector(".signup")
signup.addEventListener("click",()=>{
  location.href="./signup.html"
})
let navSignup=document.querySelector(".nav-signup-btn")
navSignup.addEventListener("click",()=>{
    location.href="./signup.html"
})
const searchInput = document.querySelector('#searchInput');
const searchResultsContainer = document.querySelector('#searchResults');
searchInput.addEventListener("focusin",()=>{
    document.querySelector(".fa-magnifying-glass").style.display="none"
})
searchInput.addEventListener("focusout",()=>{
    document.querySelector(".fa-magnifying-glass").style.display="inline"
})
function searchProducts(query) {
    const searchResults = products.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
    );

    // Clear the search results container
    searchResultsContainer.innerHTML = '';

    if (query.trim() === '') {
        searchResultsContainer.innerHTML = `<p class="text-center mt-4 text-gray-500">Type to search products...</p>`
        return;
    }

    if (searchResults.length > 0) {
        // Render search results
        renderCards(searchResultsContainer, searchResults, 1); // Always show the first page of results
    } else {
        searchResultsContainer.innerHTML = `<p class="text-center mt-4 text-gray-500 absolute top-40 text-4xl">No results found for "<span class='text-red-400'>${query}</span>".</p>
        <img src="./assets/notfound.png" class='notfound'/>`;
    }
}

// Trigger search on input event
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    searchProducts(query);
});

// Update cart count in the header and nav-slide
const cartCountElement = document.getElementById('cart-count');
const navCartCountElement = document.getElementById('nav-cart-count');
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
cartCountElement.textContent = cartItems.length;
navCartCountElement.textContent = cartItems.length;

//welcome message
const authContainer = document.getElementById('auth-container');
        const profileContainer = document.getElementById('profile-container');
        const profileName = document.getElementById('profile-name');
        const welcomeMessage = document.getElementById('welcome-message');
        const guestBtn=document.querySelector('.guest-signup-btn')

        function checkLoginStatus() {
            const loginStatus = localStorage.getItem('loginStatus');
            if (loginStatus === 'true') {
                const storedUserData = JSON.parse(localStorage.getItem('userData'));
                if (storedUserData) {
                    console.log(storedUserData);
                    welcomeMessage.textContent = ` Welcome, ${storedUserData.username}`;
                }
                authContainer.style.display = 'none';
                guestBtn.style.display='none'
                profileContainer.style.display = 'flex';
                profileContainer.style.alignItems = 'center';
            } else {
                welcomeMessage.textContent = '';
            }
        }

        function signOut() {
            localStorage.setItem('loginStatus', 'false');
            alert('User signed out!');
            location.href = './index.html';
        
            // Clear browser history to prevent back navigation
            history.pushState(null, null, location.href);
            window.addEventListener('popstate', function () {
                history.pushState(null, null, location.href);
            });

            // Show signup and guest signup buttons in nav-slide
            const profileContainer = document.getElementById('profile-container');
            const navAuthContainer = document.getElementById('nav-auth-container');
            const navGuestSignupBtn = document.querySelector('.nav-guest-signup-btn');

            if (navAuthContainer && navGuestSignupBtn) {
                profileContainer.style.display = 'none'; // Hide profile container
                navAuthContainer.style.display = 'block'; // Show nav signup button
                navGuestSignupBtn.style.display = 'block'; // Show nav guest signup button
            }
        }
        

        checkLoginStatus();

// Function to display reviews
const displayReviews = (reviews) => {
    const reviewsContainer = document.querySelector('.reviews-container');
    reviewsContainer.innerHTML = ''; // Clear existing reviews

    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card p-5 border-2 border-solid border-gray-300 rounded-lg shadow-lg w-80';

        const stars = Array(5).fill(0).map((_, i) => {
            return `<i class="fa-star ${i < review.rating ? 'fas' : 'far'}"></i>`;
        }).join('');
        
        reviewCard.innerHTML = `
            <h2 class="text-2xl text-center font-bold mb-2">${review.name}</h2>
            <img src="${review.image}" alt="${review.name}" class="review-img w-full h-40 object-contain mb-2">
            <p class="text-xl mb-2 text-justify">${review.review}</p>
            <div class="text-lg font-semibold">${stars}</div>
        `;
        reviewsContainer.appendChild(reviewCard);
    });
};

// Display reviews on page load
displayReviews(reviews);

// ...existing code...
document.querySelector('.guest-signup-btn').addEventListener('click', function() {
    // Update localStorage with guest user info
    localStorage.setItem('loginStatus', 'true');
    localStorage.setItem('userData', JSON.stringify({ username: 'Guest' }));

    // Hide login form, show profile, and update the welcome message
    const authContainer = document.getElementById('auth-container');
    const profileContainer = document.getElementById('profile-container');
    const welcomeMessage = document.getElementById('welcome-message');
    const guestSignupBtn = document.querySelector('.guest-signup-btn');
    const navAuthContainer = document.getElementById('nav-auth-container');
    const navGuestSignupBtn = document.querySelector('.nav-guest-signup-btn');
    const navSignupBtn = document.querySelector('.nav-signup-btn');

    if (authContainer && profileContainer && welcomeMessage && guestSignupBtn && navAuthContainer && navGuestSignupBtn && navSignupBtn) {
        authContainer.style.display = 'none'; // Hide login form
        profileContainer.style.display = 'flex'; // Show profile
        profileContainer.style.alignItems = 'center'; // Ensure alignment
        welcomeMessage.textContent = 'Welcome, Guest!'; // Show the welcome message
        guestSignupBtn.style.display = 'none'; // Hide guest signup button
        navAuthContainer.style.display = 'none'; // Hide nav signup button
        navGuestSignupBtn.style.display = 'none'; // Hide nav guest signup button
        navSignupBtn.style.display = 'none'; // Hide nav signup button
    }

    // Redirect to home page after guest signup
    location.href = './index.html'; // Ensure redirect happens after UI updates
});

// ...existing code...
document.querySelector('.nav-guest-signup-btn').addEventListener('click', function() {
    // Update localStorage with guest user info
    localStorage.setItem('loginStatus', 'true');
    localStorage.setItem('userData', JSON.stringify({ username: 'Guest' }));

    // Hide login form, show profile, and update the welcome message
    const authContainer = document.getElementById('auth-container');
    const profileContainer = document.getElementById('profile-container');
    const welcomeMessage = document.getElementById('welcome-message');
    const guestSignupBtn = document.querySelector('.guest-signup-btn');
    const navGuestSignupBtn = document.querySelector('.nav-guest-signup-btn');
    const navSignupBtn = document.querySelector('.nav-signup-btn');

    if (authContainer && profileContainer && welcomeMessage && guestSignupBtn && navGuestSignupBtn && navSignupBtn) {
        authContainer.style.display = 'none'; // Hide login form
        profileContainer.style.display = 'flex'; // Show profile
        profileContainer.style.alignItems = 'center'; // Ensure alignment
        welcomeMessage.textContent = 'Welcome, Guest!'; // Show the welcome message
        guestSignupBtn.style.display = 'none'; // Hide guest signup button
        navGuestSignupBtn.style.display = 'none'; // Hide nav guest signup button
        navSignupBtn.style.display = 'none'; // Hide nav signup button
    }

    // Redirect to home page after guest signup
    location.href = './index.html'; // Ensure redirect happens after UI updates
});

// ...existing code...

// Check Login Status on Page Load
function checkLoginStatus() { 
    const loginStatus = localStorage.getItem('loginStatus');
    const storedUserData = JSON.parse(localStorage.getItem('userData')) || { username: '' };

    const authContainer = document.getElementById('auth-container');
    const profileContainer = document.getElementById('profile-container');
    const navProfileContainer = document.getElementById('nav-profile-container');
    const welcomeMessage = document.getElementById('welcome-message');
    const guestSignupBtn = document.querySelector('.guest-signup-btn');
    const navSignoutBtn = document.querySelector('.nav-signout');
    const navAuthContainer = document.getElementById('nav-auth-container');
    const navGuestSignupBtn = document.querySelector('.nav-guest-signup-btn');
    const navSignupBtn = document.querySelector('.nav-signup-btn');

    // Check if elements exist before accessing their properties
    if (
        authContainer && profileContainer && navProfileContainer && 
        welcomeMessage && guestSignupBtn && navSignoutBtn && 
        navAuthContainer && navGuestSignupBtn && navSignupBtn
    ) {
        // Check login status and update UI accordingly
        if (loginStatus === 'true' && storedUserData.username) {
            // If user is logged in, show profile and welcome message
            welcomeMessage.textContent = `Welcome, ${storedUserData.username}!`;
            authContainer.style.display = 'none'; // Hide login form
            profileContainer.style.display = 'flex'; // Show profile container
            profileContainer.style.alignItems = 'center';
            navProfileContainer.style.display = 'flex'; // Show nav profile container
            guestSignupBtn.style.display = 'none'; // Hide guest signup button
            navSignoutBtn.style.display = 'block'; // Show nav signout button
            navAuthContainer.style.display = 'none'; // Hide nav signup container
            navGuestSignupBtn.style.display = 'none'; // Hide nav guest signup button
            navSignupBtn.style.display = 'none'; // Hide nav signup button
        } else {
            // If not logged in, show login form
            welcomeMessage.textContent = ''; // Clear welcome message
            profileContainer.style.display = 'none'; // Hide profile
            navProfileContainer.style.display = 'none'; // Hide nav profile container
            authContainer.style.display = 'block'; // Show login form
            navSignoutBtn.style.display = 'none'; // Hide nav signout button
            navAuthContainer.style.display = 'block'; // Show nav signup container
            navGuestSignupBtn.style.display = 'block'; // Show nav guest signup button
            navSignupBtn.style.display = 'block'; // Show nav signup button
        }
    }
}


// ...existing code...

function signOut() {
    localStorage.setItem('loginStatus', 'false');
    alert('User signed out!');
    location.href = './index.html';

    // Clear browser history to prevent back navigation
    history.pushState(null, null, location.href);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, location.href);
    });

    // Show signup and guest signup buttons in nav-slide
    const profileContainer = document.getElementById('profile-container');
    const navAuthContainer = document.getElementById('nav-auth-container');
    const navGuestSignupBtn = document.querySelector('.nav-guest-signup-btn');

    if (profileContainer && navAuthContainer && navGuestSignupBtn) {
        profileContainer.style.display = 'none'; // Hide profile container
        navAuthContainer.style.display = 'block'; // Show nav signup button
        navGuestSignupBtn.style.display = 'block'; // Show nav guest signup button
    }
}

document.addEventListener("DOMContentLoaded", function () {
    checkLoginStatus();
    // Restrict access to signup.html if logged in as guest
    if (localStorage.getItem('loginStatus') === 'true' && JSON.parse(localStorage.getItem('userData')).username === 'Guest') {
        if (window.location.pathname.includes('signup.html')) {
            window.location.href = './index.html';
        }
    }
});

checkLoginStatus();
// ...existing code...

// Function to create buttons based on product types
function createTypeButtons(products) {
    const availableDiv = document.querySelector('.available');
    const filterButtonsDiv = document.querySelector('.filter-buttons');

    // Add a button to show all available products
    const allButton = document.createElement('button');
    allButton.className = 'type-button';
    allButton.textContent = 'All';
    allButton.addEventListener('click', () => {
        renderCards(availableDiv, products.filter(product => product.available === "true"), 1);
        setActiveButton(allButton);
    });
    filterButtonsDiv.appendChild(allButton);

    const types = [...new Set(products.map(product => product.type))];

    types.forEach(type => {
        const button = document.createElement('button');
        button.className = 'type-button';
        button.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        button.addEventListener('click', () => {
            const filteredProducts = products.filter(product => product.type === type && product.available === "true");
            renderCards(availableDiv, filteredProducts, 1);
            setActiveButton(button);
        });
        filterButtonsDiv.appendChild(button);
    });

    // Set the "All" button as active by default
    setActiveButton(allButton);
}

// Function to set the active button
function setActiveButton(activeButton) {
    const buttons = document.querySelectorAll('.type-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

// Call the function to create buttons
createTypeButtons(products);

// ...existing code...

document.querySelector('.nav-signout').addEventListener('click', function() {
    signOut();
});

// ...existing code...



