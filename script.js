/* =========================================================
   MOBILE MENU TOGGLE
========================================================= */
const mobileToggle = document.querySelector(".mobile-menu-toggle");
const mainNav = document.querySelector(".main-nav");

mobileToggle?.addEventListener("click", () => {
  const isOpen = mainNav.style.display === "block";
  mainNav.style.display = isOpen ? "none" : "block";
  mobileToggle.setAttribute("aria-expanded", !isOpen);
});

/* =========================================================
   SMOOTH NAVIGATION SCROLL
========================================================= */
document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

/* =========================================================
   LOGIN POPUP SYSTEM
========================================================= */
const loginBtn = document.querySelector(".login-btn");

// Create popup dynamically
const loginModal = document.createElement("div");
loginModal.className = "login-modal";
loginModal.innerHTML = `
  <div class="login-box">
    <h2>Login / Sign Up</h2>

    <input type="email" id="login-email" placeholder="Enter your email">
    <input type="password" id="login-pass" placeholder="Enter your password">

    <button id="login-submit" class="btn-primary">Login</button>
    <button id="close-login" class="btn-secondary">Close</button>
  </div>
`;

document.body.appendChild(loginModal);

// Open popup
loginBtn?.addEventListener("click", () => {
  loginModal.classList.add("show");
});

// Close popup
document.getElementById("close-login").addEventListener("click", () => {
  loginModal.classList.remove("show");
});

// Submit login
document.getElementById("login-submit").addEventListener("click", () => {
  const email = document.getElementById("login-email").value.trim();
  const pass = document.getElementById("login-pass").value.trim();

  if (!email || !pass) {
    alert("Please fill all fields.");
    return;
  }

  alert("Login successful!");
  loginModal.classList.remove("show");
});

/* =========================================================
   PRODUCT CARD FADE-IN ANIMATION
========================================================= */
const productCards = document.querySelectorAll(".product-card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

productCards.forEach(card => observer.observe(card));

/* =========================================================
   VIEW ALL PRODUCTS BUTTON
========================================================= */
const viewAllBtn = document.querySelector(".view-all .btn-outline");

viewAllBtn?.addEventListener("click", e => {
  if (viewAllBtn.getAttribute("href") === "shop.html") {
    // allow page to open naturally
    return;
  }
});

/* =========================================================
   SCENT QUIZ BUTTON
========================================================= */
document.getElementById("start-quiz")?.addEventListener("click", () => {
  alert("Quiz feature coming soon!");
});

/* =========================================================
   FOOTER YEAR UPDATE
========================================================= */
document.getElementById("year").textContent = new Date().getFullYear();

// ================================
// CART STORE
// ================================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================================
// ADD TO CART FUNCTION
// ================================
function addToCartFromHTML(button) {
    const productInfo = button.closest(".product-info");

    const title = productInfo.querySelector(".product-title").innerText.trim();
    const priceText = productInfo.querySelector(".price").innerText.trim();
    const price = parseInt(priceText.replace("₹", "").replace(",", ""));

    const product = {
        name: title,
        price: price,
        quantity: 1
    };

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${title} added to cart!`);
}

// ================================
// ATTACH EVENTS TO ALL BUTTONS
// ================================
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-primary.small");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => addToCartFromHTML(btn));
    });
});


// ===== Show More Products =====
document.getElementById("viewProductsBtn").addEventListener("click", function() {

  const hiddenBox = document.getElementById("moreProducts");

  hiddenBox.style.display = "grid"; // reveal the hidden products  
  this.style.display = "none"; // hide the button
});

// ===== Add to Cart Buttons =====
function activateAddToCart() {
  document.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.textContent = "✓ Added";
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = "Add to Cart";
        btn.disabled = false;
      }, 1200);
    });
  });
}

activateAddToCart();

/* orderd sample button */
document.addEventListener("DOMContentLoaded", () => {
  const orderBtn = document.getElementById("order-sample-btn");

  if (!orderBtn) return; // button not found

  orderBtn.addEventListener("click", (e) => {
    e.preventDefault(); // stop link navigation

    const previousTitle = document.title;

    // Change title
    document.title = "Ordered ✔";

    // Change button text temporarily
    orderBtn.textContent = "Ordered";
    orderBtn.disabled = true;

    // Restore after 3 seconds
    setTimeout(() => {
      document.title = previousTitle;
      orderBtn.textContent = "Order Free Mini Samples";
      orderBtn.disabled = false;
    }, 3000);
  });
});


/* Subscribe button */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const subscribeBtn = document.getElementById("subscribe-btn");
  const emailInput = document.getElementById("email-input");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // stop page refresh

      const previousText = subscribeBtn.textContent;

      // Change button
      subscribeBtn.textContent = "Subscribed ✔";
      subscribeBtn.disabled = true;

      // Clear email
      emailInput.value = "";

      // Reset after 3 seconds
      setTimeout(() => {
        subscribeBtn.textContent = previousText;
        subscribeBtn.disabled = false;
      }, 3000);
    });
  }
});

const flipCard = document.querySelector(".flip-card");

if (flipCard) {
  flipCard.addEventListener("click", () => {
    flipCard.classList.toggle("active");
  });
}


