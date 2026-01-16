/**
 * Erlingo - Premium Sklep Elektrycznych Pojazdów
 * Główny plik JavaScript z funkcjonalnościami sklepu
 */

// =========================================
// GLOBALNE STAŁE I KONFIGURACJA
// =========================================
const CONFIG = {
    CART_STORAGE_KEY: 'erlingo_cart',
    PRODUCTS_PER_PAGE: 12
};

// =========================================
// DANE PRODUKTÓW
// =========================================
const products = [
    {
        id: 1,
        name: "Erlingo Pro X",
        category: "hulajnogi",
        price: 3499,
        oldPrice: 3999,
        image: "hulajnoga-pro",
        specs: {
            zasieg: "45 km",
            moc: "500W",
            predkosc: "35 km/h",
            czasLadowania: "4h"
        },
        badge: "bestseller",
        description: "Hulajnoga premium z systemem zawieszenia i ekranem LED"
    },
    {
        id: 2,
        name: "Erlingo Speedster",
        category: "hulajnogi",
        price: 2499,
        image: "hulajnoga-speed",
        specs: {
            zasieg: "30 km",
            moc: "350W",
            predkosc: "25 km/h",
            czasLadowania: "3h"
        },
        badge: null,
        description: "Lekka i zwrotna hulajnoga miejska"
    },
    {
        id: 3,
        name: "Erlingo Mountain",
        category: "deskorolki",
        price: 2899,
        oldPrice: 3299,
        image: "deskorolka-mountain",
        specs: {
            zasieg: "25 km",
            moc: "400W",
            predkosc: "30 km/h",
            teren: "wszystko"
        },
        badge: "promo",
        description: "Deskorolka terenowa z podwójnym napędem"
    },
    {
        id: 4,
        name: "Erlingo City Board",
        category: "deskorolki",
        price: 1999,
        image: "deskorolka-city",
        specs: {
            zasieg: "20 km",
            moc: "300W",
            predkosc: "25 km/h",
            waga: "6 kg"
        },
        badge: null,
        description: "Deskorolka kompaktowa do codziennego użytku"
    },
    {
        id: 5,
        name: "Erlingo Kart Pro",
        category: "gokarty",
        price: 8999,
        image: "gokart-pro",
        specs: {
            zasieg: "60 km",
            moc: "2000W",
            predkosc: "45 km/h",
            osoby: "1+1"
        },
        badge: "bestseller",
        description: "Gokart elektryczny z foteliem pasażera"
    },
    {
        id: 6,
        name: "Erlingo Junior Kart",
        category: "gokarty",
        price: 4999,
        image: "gokart-junior",
        specs: {
            zasieg: "40 km",
            moc: "1000W",
            predkosc: "25 km/h",
            wiek: "8-14 lat"
        },
        badge: null,
        description: "Gokart dla dzieci z zabezpieczeniami"
    },
    {
        id: 7,
        name: "Ładowarka Turbo",
        category: "akcesoria",
        price: 299,
        image: "ladowarka",
        specs: {
            moc: "200W",
            czas: "-50%",
            kompatybilnosc: "wszystkie"
        },
        badge: "promo",
        description: "Szybka ładowarka z technologią QuickCharge"
    },
    {
        id: 8,
        name: "Kask Erlingo Pro",
        category: "akcesoria",
        price: 399,
        image: "kask",
        specs: {
            standard: "ECE 22.06",
            waga: "450g",
            wentylacja: "tak"
        },
        badge: null,
        description: "Kask ochronny zintegrowany z technologią LED"
    },
    {
        id: 9,
        name: "Erlingo Ultra X",
        category: "hulajnogi",
        price: 4599,
        image: "hulajnoga-ultra",
        specs: {
            zasieg: "60 km",
            moc: "750W",
            predkosc: "40 km/h",
            czasLadowania: "5h"
        },
        badge: "bestseller",
        description: "Topowy model z systemem autopilota"
    },
    {
        id: 10,
        name: "Erlingo Longboard",
        category: "deskorolki",
        price: 2299,
        image: "longboard",
        specs: {
            zasieg: "35 km",
            moc: "500W",
            predkosc: "32 km/h",
            dlugosc: "100 cm"
        },
        badge: null,
        description: "Longboard elektryczny z regulacją twardości"
    },
    {
        id: 11,
        name: "Oświetlenie LED",
        category: "akcesoria",
        price: 149,
        image: "led",
        specs: {
            moc: "15W",
            kolory: "RGB",
            sterowanie: "app"
        },
        badge: null,
        description: "System oświetlenia podświetlającego pojazd"
    },
    {
        id: 12,
        name: "Pokrowiec Premium",
        category: "akcesoria",
        price: 199,
        image: "pokrowiec",
        specs: {
            material: "wodoodporny",
            rozmiar: "uniwersalny",
            kieszen: "tak"
        },
        badge: null,
        description: "Pokrowiec ochronny z włókna węglowego"
    }
];

// =========================================
// DANE OPINII
// =========================================
const reviews = [
    {
        id: 1,
        name: "Marek Kowalski",
        role: "Konsultant IT",
        rating: 5,
        text: "Hulajnoga Erlingo Pro X zmieniła moje codzienne dojazdy do pracy. Przejazd 10km zajmuje mi teraz 20 minut, a nie 40 jak autobusem. Jakość wykonania na najwyższym poziomie.",
        avatar: "MK"
    },
    {
        id: 2,
        name: "Anna Nowak",
        role: "Studentka",
        rating: 5,
        text: "Deskorolka City Board to najlepszy zakup ostatnich lat. Lekka, zwrotna, łatwa w transporcie. Naładowanie wystarcza na cały tydzień dojazdów na uczelnię.",
        avatar: "AN"
    },
    {
        id: 3,
        name: "Tomasz Wiśniewski",
        role: "Freelancer",
        rating: 4,
        text: "Gokart Junior dla mojego 10-letniego syna okazał się strzałem w dziesiątkę. Bezpieczny, z limitem prędkości, a jednocześnie dający mnóstwo frajdy. Obsługa klienta na 5+.",
        avatar: "TW"
    },
    {
        id: 4,
        name: "Karolina Lewandowska",
        role: "Marketing Manager",
        rating: 5,
        text: "Serwis w Erlingo to klasa sama w sobie. Szybka diagnoza, profesjonalna naprawa i miła obsługa. Czuję się zaopiekowana jako klientka.",
        avatar: "KL"
    }
];

// =========================================
// DANE FAQ
// =========================================
const faqItems = [
    {
        question: "Jaki jest rzeczywisty zasięg pojazdów?",
        answer: "Rzeczywisty zasięg zależy od wielu czynników: wagi użytkownika, terenu, temperatury i stylu jazdy. Podawane wartości są dla użytkownika o wadze 75kg na płaskim terenie w temperaturze 20°C. W warunkach miejskich można spodziewać się ok. 80-90% deklarowanego zasięgu."
    },
    {
        question: "Jak długo trwa ładowanie baterii?",
        answer: "Czas ładowania zależy od modelu i pojemności baterii. Standardowe ładowanie trwa 3-5 godzin. Dzięki opcjonalnej ładowarce Turbo czas można skrócić nawet o 50%. Zalecamy ładowanie pojazdu po każdym użyciu dla optymalnej żywotności baterii."
    },
    {
        question: "Czy pojazdy są objęte gwarancją?",
        answer: "Tak, wszystkie pojazdy marki Erlingo objęte są 36-miesięczną gwarancją producenta. Gwarancja obejmuje wady materiałowe i fabryczne. Baterie objęte są 24-miesięczną gwarancją. Szczegóły w regulaminie gwarancji."
    },
    {
        question: "Gdzie mogę skorzystać z serwisu?",
        answer: "Posiadamy autoryzowane punkty serwisowe w 15 miastach w Polsce. W Warszawie funkcjonuje również główny serwis, który przyjmuje pojazdy ze wszystkich regionów. Naprawy realizujemy zwykle w ciągu 3-5 dni roboczych."
    },
    {
        question: "Czy potrzebuję prawa jazdy do jazdy hulajnogą?",
        answer: "Do jazdy hulajnogą elektryczną o mocy do 500W nie jest wymagane prawo jazdy. Należy mieć ukończone 18 lat lub 10 lat z kartą rowerową. Pojazdy o mocy powyżej 500W wymagają prawa jazdy kategorii AM."
    },
    {
        question: "Jak wygląda proces zwrotu?",
        answer: "Masz 14 dni na zwrot nieużywanego produktu. Produkt musi być kompletny, w oryginalnym opakowaniu, bez śladów użytkowania. Zwrot realizujemy w ciągu 14 dni od otrzymania przesyłki. Koszt wysyłki zwrotnej pokrywa klient."
    }
];

// =========================================
// STAN APLIKACJI
// =========================================
let state = {
    cart: [],
    filteredProducts: [...products],
    currentReviewIndex: 0,
    promoEndTime: Date.now() + (12 * 60 * 60 * 1000) + (45 * 60 * 1000) + (30 * 1000) // 12h 45min 30s
};

// =========================================
// INITIALIZATION
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    loadCart();
    renderProducts();
    renderBestsellers();
    renderReviews();
    renderFAQ();
    setupEventListeners();
    startPromoTimer();
    setupIntersectionObserver();
}

// =========================================
// RENDER FUNCTIONS
// =========================================

function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    state.filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function renderBestsellers() {
    const bestsellersGrid = document.getElementById('bestsellers-grid');
    if (!bestsellersGrid) return;
    
    // Filtruj bestsellery
    const bestsellers = products.filter(p => p.badge === 'bestseller');
    
    bestsellersGrid.innerHTML = '';
    
    bestsellers.forEach(product => {
        const productCard = createProductCard(product, true);
        bestsellersGrid.appendChild(productCard);
    });
}

function createProductCard(product, isLight = false) {
    const card = document.createElement('div');
    card.className = `product-card ${isLight ? 'light' : ''} slide-up`;
    card.dataset.id = product.id;
    card.dataset.category = product.category;
    
    const badge = product.badge ? 
        `<div class="product-badge ${product.badge}">${product.badge === 'bestseller' ? 'Bestseller' : 'Promocja'}</div>` : '';
    
    const oldPrice = product.oldPrice ? 
        `<span class="product-price old">${product.oldPrice} zł</span>` : '';
    
    // Dynamiczne specyfikacje w zależności od kategorii
    let specsHTML = '';
    if (product.category === 'hulajnogi' || product.category === 'deskorolki') {
        specsHTML = `
            <div class="product-spec">
                <span class="product-spec-label">Zasięg</span>
                <span class="product-spec-value">${product.specs.zasieg}</span>
            </div>
            <div class="product-spec">
                <span class="product-spec-label">Moc</span>
                <span class="product-spec-value">${product.specs.moc}</span>
            </div>
            <div class="product-spec">
                <span class="product-spec-label">Prędkość</span>
                <span class="product-spec-value">${product.specs.predkosc}</span>
            </div>
        `;
    } else if (product.category === 'gokarty') {
        specsHTML = `
            <div class="product-spec">
                <span class="product-spec-label">Zasięg</span>
                <span class="product-spec-value">${product.specs.zasieg}</span>
            </div>
            <div class="product-spec">
                <span class="product-spec-label">Moc</span>
                <span class="product-spec-value">${product.specs.moc}</span>
            </div>
            <div class="product-spec">
                <span class="product-spec-label">Max prędkość</span>
                <span class="product-spec-value">${product.specs.predkosc}</span>
            </div>
        `;
    } else {
        // Dla akcesoriów
        const specKeys = Object.keys(product.specs);
        specsHTML = specKeys.map(key => `
            <div class="product-spec">
                <span class="product-spec-label">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <span class="product-spec-value">${product.specs[key]}</span>
            </div>
        `).join('');
    }
    
    card.innerHTML = `
        ${badge}
        <div class="product-image">
            <!-- W realnym projekcie tu byłby <img src="..."> -->
            <div style="width: 80%; height: 80%; background: linear-gradient(135deg, #334155 0%, #1E293B 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #64748B; font-weight: 600;">
                ${product.image.replace('-', ' ').toUpperCase()}
            </div>
        </div>
        <div class="product-info">
            <span class="product-category">${getCategoryLabel(product.category)}</span>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">
                ${oldPrice}
                <span>${product.price} zł</span>
            </div>
            <div class="product-specs">
                ${specsHTML}
            </div>
            <div class="product-actions">
                <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Dodaj do koszyka
                </button>
                <button class="btn btn-outline view-details" data-id="${product.id}">
                    Szczegóły
                </button>
            </div>
        </div>
    `;
    
    // Dodaj event listeners do przycisków
    const addToCartBtn = card.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => addToCart(product.id));
    
    const viewDetailsBtn = card.querySelector('.view-details');
    viewDetailsBtn.addEventListener('click', () => showProductDetails(product.id));
    
    return card;
}

function getCategoryLabel(category) {
    const labels = {
        'hulajnogi': 'Hulajnoga elektryczna',
        'deskorolki': 'Deskorolka elektryczna',
        'gokarty': 'Gokart elektryczny',
        'akcesoria': 'Akcesoria'
    };
    return labels[category] || category;
}

function renderReviews() {
    const sliderContainer = document.getElementById('reviews-slider');
    const dotsContainer = document.getElementById('slider-dots');
    
    if (!sliderContainer || !dotsContainer) return;
    
    sliderContainer.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    reviews.forEach((review, index) => {
        // Tworzenie slajdu
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.dataset.index = index;
        
        // Gwiazdki dla oceny
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < review.rating ? 
                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>' :
                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
        }
        
        slide.innerHTML = `
            <div class="review-rating">
                ${stars}
            </div>
            <p class="review-text">"${review.text}"</p>
            <div class="review-author">
                <div class="author-avatar">${review.avatar}</div>
                <div class="author-info">
                    <div class="author-name">${review.name}</div>
                    <div class="author-role">${review.role}</div>
                </div>
            </div>
        `;
        
        sliderContainer.appendChild(slide);
        
        // Tworzenie kropek
        const dot = document.createElement('button');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dot.setAttribute('aria-label', `Przejdź do opinii ${index + 1}`);
        dot.addEventListener('click', () => goToReview(index));
        dotsContainer.appendChild(dot);
    });
}

function renderFAQ() {
    const faqContainer = document.getElementById('faq-accordion');
    if (!faqContainer) return;
    
    faqContainer.innerHTML = '';
    
    faqItems.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.dataset.index = index;
        
        faqItem.innerHTML = `
            <div class="faq-question">
                <span>${item.question}</span>
                <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        `;
        
        const questionEl = faqItem.querySelector('.faq-question');
        questionEl.addEventListener('click', () => toggleFAQ(index));
        
        faqContainer.appendChild(faqItem);
    });
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartCount = document.querySelector('.cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (!cartItemsContainer) return;
    
    // Aktualizuj licznik koszyka
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // Sprawdź czy koszyk jest pusty
    if (state.cart.length === 0) {
        if (cartEmpty) cartEmpty.style.display = 'block';
        if (checkoutBtn) checkoutBtn.style.display = 'none';
        if (cartTotalPrice) cartTotalPrice.textContent = '0,00 zł';
        return;
    }
    
    // Ukryj komunikat o pustym koszyku
    if (cartEmpty) cartEmpty.style.display = 'none';
    if (checkoutBtn) checkoutBtn.style.display = 'flex';
    
    // Wyczyść i wypełnij koszyk
    cartItemsContainer.innerHTML = '';
    
    let totalPrice = 0;
    
    state.cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        if (!product) return;
        
        const itemTotal = product.price * item.quantity;
        totalPrice += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.id = product.id;
        
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #334155 0%, #1E293B 100%); border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #64748B; font-size: 12px; font-weight: 600;">
                    ${product.image.replace('-', ' ').toUpperCase()}
                </div>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${product.name}</div>
                <div class="cart-item-price">${product.price} zł</div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn decrease" data-id="${product.id}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${product.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${product.id}">Usuń</button>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Aktualizuj całkowitą cenę
    if (cartTotalPrice) {
        cartTotalPrice.textContent = `${totalPrice.toFixed(2)} zł`;
    }
    
    // Dodaj event listeners do przycisków w koszyku
    cartItemsContainer.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            updateCartQuantity(id, -1);
        });
    });
    
    cartItemsContainer.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            updateCartQuantity(id, 1);
        });
    });
    
    cartItemsContainer.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            removeFromCart(id);
        });
    });
}

// =========================================
// CART FUNCTIONS
// =========================================

function loadCart() {
    const savedCart = localStorage.getItem(CONFIG.CART_STORAGE_KEY);
    if (savedCart) {
        try {
            state.cart = JSON.parse(savedCart);
        } catch (e) {
            state.cart = [];
            console.error('Błąd wczytywania koszyka:', e);
        }
    }
    renderCart();
}

function saveCart() {
    localStorage.setItem(CONFIG.CART_STORAGE_KEY, JSON.stringify(state.cart));
    renderCart();
}

function addToCart(productId) {
    const existingItem = state.cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({
            productId: productId,
            quantity: 1
        });
    }
    
    saveCart();
    
    // Animacja przycisku
    const addButton = document.querySelector(`.add-to-cart[data-id="${productId}"]`);
    if (addButton) {
        addButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Dodano!
        `;
        addButton.classList.add('btn-secondary');
        addButton.classList.remove('btn-primary');
        
        setTimeout(() => {
            addButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Dodaj do koszyka
            `;
            addButton.classList.remove('btn-secondary');
            addButton.classList.add('btn-primary');
        }, 2000);
    }
}

function updateCartQuantity(productId, change) {
    const itemIndex = state.cart.findIndex(item => item.productId === productId);
    
    if (itemIndex !== -1) {
        state.cart[itemIndex].quantity += change;
        
        if (state.cart[itemIndex].quantity <= 0) {
            state.cart.splice(itemIndex, 1);
        }
        
        saveCart();
    }
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.productId !== productId);
    saveCart();
}

function clearCart() {
    state.cart = [];
    saveCart();
}

// =========================================
// FILTER FUNCTIONS
// =========================================

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const rangeFilter = document.getElementById('range-filter').value;
    const sortFilter = document.getElementById('sort-filter').value;
    
    let filtered = [...products];
    
    // Filtruj po kategorii
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(p => p.category === categoryFilter);
    }
    
    // Filtruj po cenie
    if (priceFilter !== 'all') {
        if (priceFilter === '0-2000') {
            filtered = filtered.filter(p => p.price <= 2000);
        } else if (priceFilter === '2000-5000') {
            filtered = filtered.filter(p => p.price >= 2000 && p.price <= 5000);
        } else if (priceFilter === '5000+') {
            filtered = filtered.filter(p => p.price > 5000);
        }
    }
    
    // Filtruj po zasięgu (dla pojazdów)
    if (rangeFilter !== 'all') {
        filtered = filtered.filter(p => {
            if (!p.specs.zasieg) return true; // Akcesoria nie mają zasięgu
            
            const range = parseInt(p.specs.zasieg);
            if (rangeFilter === '20+') return range >= 20;
            if (rangeFilter === '40+') return range >= 40;
            if (rangeFilter === '60+') return range >= 60;
            return true;
        });
    }
    
    // Sortuj
    if (sortFilter !== 'default') {
        if (sortFilter === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortFilter === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortFilter === 'name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }
    }
    
    state.filteredProducts = filtered;
    renderProducts();
}

// =========================================
// SLIDER FUNCTIONS
// =========================================

function goToReview(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    state.currentReviewIndex = index;
}

function nextReview() {
    const nextIndex = (state.currentReviewIndex + 1) % reviews.length;
    goToReview(nextIndex);
}

function prevReview() {
    const prevIndex = (state.currentReviewIndex - 1 + reviews.length) % reviews.length;
    goToReview(prevIndex);
}

// =========================================
// FAQ FUNCTIONS
// =========================================

function toggleFAQ(index) {
    const faqItem = document.querySelector(`.faq-item[data-index="${index}"]`);
    
    if (faqItem.classList.contains('active')) {
        faqItem.classList.remove('active');
    } else {
        // Zamknij wszystkie inne
        document.querySelectorAll('.faq-item.active').forEach(item => {
            if (item.dataset.index !== index.toString()) {
                item.classList.remove('active');
            }
        });
        
        // Otwórz wybrany
        faqItem.classList.add('active');
    }
}

// =========================================
// PROMO TIMER
// =========================================

function startPromoTimer() {
    updatePromoTimer();
    setInterval(updatePromoTimer, 1000);
}

function updatePromoTimer() {
    const now = Date.now();
    const timeLeft = Math.max(0, state.promoEndTime - now);
    
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    const hoursEl = document.getElementById('timer-hours');
    const minutesEl = document.getElementById('timer-minutes');
    const secondsEl = document.getElementById('timer-seconds');
    
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    
    // Jeśli czas się skończył, zresetuj
    if (timeLeft === 0) {
        state.promoEndTime = Date.now() + (12 * 60 * 60 * 1000) + (45 * 60 * 1000) + (30 * 1000);
    }
}

// =========================================
// MODAL FUNCTIONS
// =========================================

function showCartModal() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function hideCartModal() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // W pełnej aplikacji tutaj byłby modal lub strona produktu
    alert(`Szczegóły produktu: ${product.name}\n\nOpis: ${product.description}\n\nCena: ${product.price} zł\n\nSpecyfikacja: ${JSON.stringify(product.specs, null, 2)}`);
}

// =========================================
// ANIMACJE OBSERWACJI
// =========================================

function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Obserwuj elementy do animacji
    document.querySelectorAll('.product-card, .feature-card, .step').forEach(el => {
        observer.observe(el);
    });
}

// =========================================
// EVENT LISTENERS
// =========================================

function setupEventListeners() {
    // Menu mobile toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });
    }
    
    // Filtry
    document.querySelectorAll('.filter-select').forEach(select => {
        select.addEventListener('change', filterProducts);
    });
    
    // Koszyk
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            showCartModal();
        });
    }
    
    // Zamknięcie modala koszyka
    const cartClose = document.querySelector('.cart-close');
    if (cartClose) {
        cartClose.addEventListener('click', hideCartModal);
    }
    
    // Kliknięcie poza modalem
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                hideCartModal();
            }
        });
    }
    
    // Kontrolki slidera opinii
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    if (prevBtn) prevBtn.addEventListener('click', prevReview);
    if (nextBtn) nextBtn.addEventListener('click', nextReview);
    
    // Auto-slider opinii
    setInterval(nextReview, 5000);
    
    // Przycisk przejścia do kasy
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (state.cart.length > 0) {
                alert('Dziękujemy za zakupy! W prawdziwym sklepie teraz przekierowalibyśmy Cię do procesu płatności.');
                clearCart();
                hideCartModal();
            }
        });
    }
    
    // Smooth scroll dla linków
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Zamknij menu mobile jeśli otwarte
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    });
}

// =========================================
// DODATKOWE FUNKCJONALNOŚCI
// =========================================

// Obsługa formularza (placeholder - w pełnej aplikacji tutaj byłaby walidacja)
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Prosta walidacja
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#EF4444';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Tutaj wysyłanie formularza
                alert('Formularz został wysłany! Dziękujemy za kontakt.');
                form.reset();
            } else {
                alert('Proszę wypełnić wszystkie wymagane pola.');
            }
        });
    });
}

// Eksport dla modułów (jeśli potrzebne)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        reviews,
        faqItems,
        state,
        filterProducts,
        addToCart,
        removeFromCart
    };
}
