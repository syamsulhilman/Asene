// Data initialization
let cart = [];
let orders = [];
let isMember = false;
let menuItems = [
    { id: 1, name: "Ayam bakar potong 1/4", price: 15000, available: true, image: "https://i.postimg.cc/W3TNHvJp/Ayam-bakar-potong.jpg", description: "" },
    { id: 2, name: "Bakakak 1 ekor", price: 60000, available: true, image: "https://i.postimg.cc/ryv8Bx4Y/Bakakak-1-ekor.jpg", description: "" },
    { id: 3, name: "Ayam goreng sereh bakakak", price: 60000, available: true, image: "https://i.postimg.cc/tJfHpQ7x/Ayam-goreng-sereh-bakakak.jpg", description: "" },
    { id: 4, name: "Ayam ungkeb sereh potong 1/4 (4 potong)", price: 60000, available: true, image: "https://i.postimg.cc/59kJwvp2/Ayam-ungkep-sereh.jpg", description: "" },
    { id: 5, name: "Sop manten", price: 6000, available: true, image: "https://i.postimg.cc/7L3FkWy7/Sop-manten.jpg", description: "" },
    { id: 6, name: "Sop manten", price: 10000, available: true, image: "https://i.postimg.cc/7L3FkWy7/Sop-manten.jpg", description: "" },
    { id: 7, name: "Rendang ayam", price: 16000, available: true, image: "https://i.postimg.cc/LX1hZpZm/Rendang-ayam.jpg", description: "" },
    { id: 8, name: "Lele bakar", price: 11000, available: true, image: "https://i.postimg.cc/TYnJg8X2/Lele-bakar.jpg", description: "" },
    { id: 9, name: "Pepes tahu jamur", price: 5000, available: true, image: "https://i.postimg.cc/y8LDMnHC/Pepes-tahu-jamur.jpg", description: "" },
    { id: 10, name: "Semur jengkol", price: 10000, available: true, image: "https://i.postimg.cc/gjRyCv3S/Semur-jengkol.jpg", description: "" },
    { id: 11, name: "Sambel jengkol", price: 8000, available: true, image: "https://i.postimg.cc/PxTwFB27/Sambel-jengkol.jpg", description: "" },
    { id: 12, name: "Oseng pare tempe teri", price: 6000, available: true, image: "https://i.postimg.cc/4xgvfWqK/Oseng-pare-tempe.jpg", description: "" },
    { id: 13, name: "Balado telor bulat", price: 4000, available: true, image: "https://i.postimg.cc/yx6FBt2s/Balado-telor.jpg", description: "" },
    { id: 14, name: "Oseng bunga paya", price: 10000, available: true, image: "https://i.postimg.cc/KjwpztL9/Oseng-bunga-paya.jpg", description: "" },
    { id: 15, name: "Gulai nangka", price: 6000, available: true, image: "https://i.postimg.cc/VvdMhM3F/Gulai-nangka.jpg", description: "" },
    { id: 16, name: "Bacem telor 3pcs", price: 10000, available: true, image: "https://i.postimg.cc/2SQgXBdv/Bacem-telor.jpg", description: "" },
    { id: 17, name: "Bakmi hajatan", price: 6000, available: true, image: "https://i.postimg.cc/mgSB1n50/Bakmi-hajatan.jpg", description: "" },
    { id: 18, name: "Bothok udang/teri", price: 5000, available: true, image: "https://i.postimg.cc/N079Mb6M/Botok-udang-teri.jpg", description: "" },
    { id: 19, name: "Gulai daun singkong", price: 6000, available: true, image: "https://i.postimg.cc/ZnMPYjrg/Gulai-daun-singkong.jpg", description: "" },
    { id: 20, name: "Sambel terong teri", price: 6000, available: true, image: "https://i.postimg.cc/MKSp0y3s/Sambel-terong-teri.jpg", description: "" },
    { id: 21, name: "Oseng daun paya", price: 6000, available: true, image: "https://i.postimg.cc/JhS9tVL3/Oseng-daun-paya.jpg", description: "" },
    { id: 22, name: "Gorengan bakwan 4pcs", price: 5000, available: true, image: "https://i.postimg.cc/pTK3Fh0q/Gorengan-bakwan.jpg", description: "" },
    { id: 23, name: "Gorengan tahu bakso 3pcs", price: 5000, available: true, image: "https://i.postimg.cc/Vk691rQF/Gor-tahu-bakso.jpg", description: "" },
    { id: 24, name: "Bacem tempe 4pcs", price: 5000, available: true, image: "https://i.postimg.cc/wvvPvfCc/Bacem-tempe.jpg", description: "" },
    { id: 25, name: "Bacem tahu 4pcs", price: 5000, available: true, image: "https://i.postimg.cc/VLbxnhdK/Bacem-tahu.jpg", description: "" },
    { id: 26, name: "Bacem mix (2 tempe+2tahu)", price: 5000, available: true, image: "https://i.postimg.cc/FKZ51J7m/Bacem-mix.jpg", description: "" },
    { id: 27, name: "Bubur mutiara kuah santan", price: 6000, available: true, image: "https://i.postimg.cc/8CK2Gg7m/Bubur-mutiara.jpg", description: "" },
    { id: 28, name: "Bubur ketan item kuah santan", price: 6000, available: true, image: "https://i.postimg.cc/JnRLr5xR/Bubur-ketan-item-kuah-santan-6-000.jpg", description: "" },
    { id: 29, name: "Cap Jae Boyolali", price: 6000, available: true, image: "https://i.postimg.cc/DyhnBFLS/Cap-Jae-Boyolali-6-000.jpg", description: "" },
    { id: 30, name: "Bakso kerikil 500gr", price: 37000, available: true, image: "https://i.postimg.cc/HswCFKdV/Bakso-kerikil-500gr-37-000.jpg", description: "" },
    { id: 31, name: "Rica-rica rongkong", price: 14000, available: true, image: "https://i.postimg.cc/VLQ8Qmj5/Rica-rica-rongkong.jpg", description: "" },
    { id: 32, name: "Oseng genjer", price: 6000, available: true, image: "https://i.postimg.cc/cHZBFXMy/Oseng-genjer.jpg", description: "" },
    { id: 33, name: "Urab sedeep", price: 8000, available: true, image: "https://i.postimg.cc/kDPrCFzB/Urab-sedeep.jpg", description: "" },
    { id: 34, name: "Sambel merah (trasi)", price: 5000, available: true, image: "https://i.postimg.cc/5NhjRhtm/Sambel-merah-trasi.jpg", description: "" },
    { id: 35, name: "Kepala bakar", price: 12000, available: true, image: "https://i.postimg.cc/Y9yLQ0hL/Kepala-bakar.jpg", description: "" },
    { id: 36, name: "Oseng japuh", price: 6000, available: true, image: "https://i.postimg.cc/Y0L0YwGp/Oseng-japuh.jpg", description: "" },
    { id: 37, name: "Oreg basah", price: 6000, available: true, image: "https://i.postimg.cc/3rmvbgfn/Oreg-basah.jpg", description: "" },
    { id: 38, name: "Tahu bakso frozen", price: 11000, available: true, image: "https://i.postimg.cc/9XGJNh1W/Tahu-bakso-frozen.jpg", description: "" },
    { id: 39, name: "Sayur tahu", price: 6000, available: true, image: "https://i.postimg.cc/jdFk0XVc/Sayur-tahu.jpg", description: "" },
    { id: 40, name: "Oseng kacang", price: 6000, available: true, image: "https://i.postimg.cc/wx1Q0yDB/Oseng-kacang.jpg", description: "" },
    { id: 41, name: "Bakso kuah Boyolali", price: 10000, available: true, image: "https://i.postimg.cc/05mgJ36c/Bakso-kuah-Boyolali.jpg", description: "" },
    { id: 42, name: "Oseng paya muda", price: 6000, available: true, image: "https://i.postimg.cc/Pq61MTxZ/Oseng-paya-muda.jpg", description: "" },
    { id: 43, name: "Tongseng ayam", price: 15000, available: true, image: "https://i.postimg.cc/HWRd3bZG/Tongseng-ayam.jpghttps://i.postimg.cc/HWRd3bZG/Tongseng-ayam.jpg", description: "" },
    { id: 44, name: "Semur sayap bumbu banyak", price: 9000, available: true, image: "https://i.postimg.cc/R0QkBHL0/Semur-paha-bumbu-banyak.jpg", description: "" },
    { id: 45, name: "Semur paha bumbu banyak", price: 11000, available: true, image: "https://i.postimg.cc/R0QkBHL0/Semur-paha-bumbu-banyak.jpg", description: "" },
    { id: 46, name: "Oseng soun jamur", price: 6000, available: true, image: "https://i.postimg.cc/sXv76qQL/Oseng-soun-jamur.jpg", description: "" },
    { id: 47, name: "Gorengan tempe 4pcs", price: 5000, available: true, image: "https://i.postimg.cc/0QCcvpXR/Gorengan-tempe.jpg", description: "" },
    { id: 48, name: "Bubur tumpang", price: 8000, available: true, image: "https://i.postimg.cc/hvWcFRY3/Bubur-tumpang.jpg", description: "" },
    { id: 49, name: "Sayur tumpang", price: 10000, available: true, image: "https://i.postimg.cc/dtyG3mk4/Sayur-tumpang.jpg", description: "" },
    { id: 50, name: "Opor ayam+tahu", price: 11000, available: true, image: "https://i.postimg.cc/NGH6vhF8/Opor-ayam-tahu.jpg", description: "" },
    { id: 51, name: "Opor telor tahu", price: 8000, available: true, image: "https://i.postimg.cc/xd8mshBz/Opor-telor-tahu.jpg", description: "" },
    { id: 52, name: "Opor tahu", price: 6000, available: true, image: "https://i.postimg.cc/g2NRHmtp/Opor-tahu.jpg", description: "" },
    { id: 53, name: "Kepala bakar ukuran besar 3pcs", price: 12000, available: true, image: "https://i.postimg.cc/zf7gX0Nj/Kepala-bakar-besar.jpg", description: "" },
    { id: 54, name: "Oreg tempe kering", price: 6000, available: true, image: "https://i.postimg.cc/s2MBPSZP/Oreg-tempe-kering.jpg", description: "" },
    { id: 55, name: "Sambel goreng kentang ati", price: 12000, available: true, image: "https://i.postimg.cc/5tFgVd5N/Sambel-goreng-kentang-ati.jpg", description: "" },
    { id: 56, name: "Ase cabe gendot", price: 12000, available: true, image: "https://i.postimg.cc/R0vLCWkc/Ase-cabe-gendot.jpg", description: "" },
    { id: 57, name: "Gorengan tahu isi 4pcs", price: 5000, available: true, image: "https://i.postimg.cc/FzDWyj0g/Gorengan-tahu-bakso.jpg", description: "" },
    { id: 58, name: "Balado telor ceplok", price: 4000, available: true, image: "https://i.postimg.cc/KYKphkBJ/Balado-telor-ceplok.jpg", description: "" },
    { id: 59, name: "Mie goreng cabe geprek", price: 25000, available: true, image: "https://i.postimg.cc/vmZrJcxD/Mie-goreng-cabe-geprek.jpg", description: "" },
    { id: 60, name: "Mie KuWah cabe geprek", price: 25000, available: true, image: "https://i.postimg.cc/HnXXwMRv/Mie-Ku-Wah-cabe-geprek.jpg", description: "" },
    { id: 61, name: "Ati ampela bakar", price: 22000, available: true, image: "https://i.postimg.cc/sxKvc26R/Ati-ampela-bakar.jpg", description: "" },
    { id: 62, name: "Gorengan bakwan daun singkong 4pcs", price: 5000, available: true, image: "https://i.postimg.cc/k5DzMh3N/Bakwan-singkong.jpg", description: "" },
    { id: 63, name: "Bubur candi ketan", price: 8000, available: true, image: "https://i.postimg.cc/VLf8Qg6g/Bubur-candi-ketan.jpg", description: "" },
    { id: 64, name: "Bubur mix", price: 12000, available: true, image: "https://i.postimg.cc/ht8ZDW57/Bubur-mix.jpg", description: "" },
    { id: 65, name: "Bubur sumsum pandan", price: 8000, available: true, image: "https://i.postimg.cc/tgc95xNb/Bubur-sumsum-pandan.jpg", description: "" },
    { id: 66, name: "Bubur sumsum original", price: 8000, available: true, image: "https://i.postimg.cc/7Lhx0V7X/Bubur-sumsum-original.jpg", description: "" }
];

// Store hours and status
let storeHours = {
    open: "08:00",
    close: "18:00",
    isOpen: true,
    manualOverride: false
};

// Theme settings
let darkMode = false;

// Admin mode state
let isAdminMode = false;

// DOM elements
const cartItems = document.getElementById('cartItems');
const subtotalEl = document.getElementById('subtotal');
const discountRow = document.getElementById('discountRow');
const discountAmountEl = document.getElementById('discountAmount');
const totalEl = document.getElementById('total');
const checkoutBtn = document.getElementById('checkoutBtn');
const memberBtn = document.getElementById('memberBtn');
const notification = document.getElementById('notification');
const adminToggle = document.getElementById('adminToggle');
const adminAccessButton = document.getElementById('adminAccessButton');
const adminPanel = document.getElementById('adminPanel');
const closeAdmin = document.getElementById('closeAdmin');
const mainContent = document.getElementById('mainContent');
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const cancelLogin = document.getElementById('cancelLogin');
const adminTabs = document.querySelectorAll('.admin-tab');
const orderList = document.getElementById('orderList');
const menuList = document.getElementById('menuList');
const menuTableBody = document.getElementById('menuTableBody');
const addMenuBtn = document.getElementById('addMenuBtn');
const newMenuName = document.getElementById('newMenuName');
const newMenuImage = document.getElementById('newMenuImage');
const newMenuPrice = document.getElementById('newMenuPrice');
const customerName = document.getElementById('customerName');
const customerPhone = document.getElementById('customerPhone');
const openTime = document.getElementById('openTime');
const closeTime = document.getElementById('closeTime');
const saveHoursBtn = document.getElementById('saveHoursBtn');
const closeNowBtn = document.getElementById('closeNowBtn');
const openNowBtn = document.getElementById('openNowBtn');
const currentStatus = document.getElementById('currentStatus');
const statusBadge = document.getElementById('statusBadge');
const closedOverlay = document.getElementById('closedOverlay');
const hoursDisplay = document.getElementById('hoursDisplay');
const footerHours = document.getElementById('footerHours');
const reportStartDate = document.getElementById('reportStartDate');
const reportEndDate = document.getElementById('reportEndDate');
const generateReportBtn = document.getElementById('generateReportBtn');
const totalRevenue = document.getElementById('totalRevenue');
const totalOrders = document.getElementById('totalOrders');
const averageOrder = document.getElementById('averageOrder');
const reportOrderList = document.getElementById('reportOrderList');
const themeToggle = document.getElementById('themeToggle');
const orderSuccessModal = document.getElementById('orderSuccessModal');
const successCustomerName = document.getElementById('successCustomerName');
const successTotal = document.getElementById('successTotal');
const closeSuccessModal = document.getElementById('closeSuccessModal');
const toggleMenuForm = document.getElementById('toggleMenuForm');
const addMenuForm = document.getElementById('addMenuForm');

// Initialize the app
function init() {
    loadFromLocalStorage();
    renderMenu();
    updateCart();
    renderAdminMenu();
    updateCheckoutButton();
    updateStoreStatus();
    setDefaultReportDates();
    applyTheme();
    
    // Check if we were in admin mode
    if (isAdminMode) {
        mainContent.style.display = 'none';
        adminPanel.style.display = 'block';
        closedOverlay.style.display = 'none';
        renderOrders();
    }
    
    // Event listeners for customer inputs
    customerName.addEventListener('input', updateCheckoutButton);
    customerPhone.addEventListener('input', updateCheckoutButton);

    // Check store status every minute
    setInterval(updateStoreStatus, 60000);
}

// Set default report dates (today)
function setDefaultReportDates() {
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);
    
    reportStartDate.value = formatDate(sevenDaysAgo);
    reportEndDate.value = formatDate(today);
}

// Format date as YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Load data from localStorage
function loadFromLocalStorage() {
    const savedMenu = localStorage.getItem('arsenesMenu');
    const savedOrders = localStorage.getItem('arsenesOrders');
    const savedStoreHours = localStorage.getItem('arsenesStoreHours');
    const savedTheme = localStorage.getItem('arsenesTheme');
    const savedAdminMode = localStorage.getItem('arsenesAdminMode');
    const savedCart = localStorage.getItem('arsenesCart');
    
    if (savedMenu) {
        menuItems = JSON.parse(savedMenu);
    }
    
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
    
    if (savedStoreHours) {
        storeHours = JSON.parse(savedStoreHours);
        openTime.value = storeHours.open;
        closeTime.value = storeHours.close;
    }

    if (savedTheme) {
        darkMode = JSON.parse(savedTheme);
    }
    
    if (savedAdminMode) {
        isAdminMode = JSON.parse(savedAdminMode);
    }
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save data to localStorage
function saveToLocalStorage() {
    localStorage.setItem('arsenesMenu', JSON.stringify(menuItems));
    localStorage.setItem('arsenesOrders', JSON.stringify(orders));
    localStorage.setItem('arsenesStoreHours', JSON.stringify(storeHours));
    localStorage.setItem('arsenesTheme', JSON.stringify(darkMode));
    localStorage.setItem('arsenesAdminMode', JSON.stringify(isAdminMode));
    localStorage.setItem('arsenesCart', JSON.stringify(cart));
}

// Toggle dark/light mode
function toggleTheme() {
    darkMode = !darkMode;
    applyTheme();
    saveToLocalStorage();
}

// Apply theme based on darkMode setting
function applyTheme() {
    if (darkMode) {
        document.body.classList.add('dark-mode');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Mode Terang';
        }
    } else {
        document.body.classList.remove('dark-mode');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Mode Gelap';
        }
    }
}

// Update store status based on time and manual settings
function updateStoreStatus() {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    // If manual override is set, use that
    if (storeHours.manualOverride) {
        updateStoreUI(storeHours.isOpen);
        return;
    }
    
    // Otherwise check based on time
    const isOpen = currentTime >= storeHours.open && currentTime <= storeHours.close;
    storeHours.isOpen = isOpen;
    updateStoreUI(isOpen);
    saveToLocalStorage();
}

// Update UI based on store status
function updateStoreUI(isOpen) {
    if (isOpen) {
        statusBadge.textContent = "BUKA";
        statusBadge.className = "status-badge status-open";
        closedOverlay.style.display = "none";
        currentStatus.textContent = "Buka";
        currentStatus.style.color = "var(--success)";
    } else {
        statusBadge.textContent = "TUTUP";
        statusBadge.className = "status-badge status-closed";
        
        // Only show closed overlay if admin panel is not active
        if (!isAdminMode) {
            closedOverlay.style.display = "flex";
        }
        
        currentStatus.textContent = "Tutup";
        currentStatus.style.color = "var(--danger)";
    }
    
    // Update hours display
    hoursDisplay.textContent = `${storeHours.open} - ${storeHours.close}`;
    footerHours.textContent = `Senin - Minggu: ${storeHours.open} - ${storeHours.close}`;
    
    // Render ulang menu untuk update status tombol
    renderMenu();
    updateCheckoutButton();
}

// Render menu items
function renderMenu() {
    menuList.innerHTML = '';
    
    menuItems.forEach(item => {
        const menuItemEl = document.createElement('div');
        menuItemEl.className = `menu-item ${item.available ? '' : 'out-of-stock'}`;
        menuItemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-img">
            <div class="menu-item-info">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
            </div>
            <button class="add-to-cart" data-id="${item.id}" ${!item.available ? 'disabled' : ''}>
                ${item.available ? '+' : 'Habis'}
            </button>
        `;
        menuList.appendChild(menuItemEl);
    });
    
    // Add event listeners to add-to-cart buttons - FIXED: Hanya pasang event listener sekali
    if (!menuList.hasEventListener) {
        menuList.addEventListener('click', function(e) {
            if (e.target.classList.contains('add-to-cart')) {
                const id = parseInt(e.target.dataset.id);
                const item = menuItems.find(item => item.id === id);
                
                if (item && item.available && (storeHours.isOpen || isAdminMode)) {
                    addToCart(item);
                } else if (!storeHours.isOpen && !isAdminMode) {
                    showNotification('Toko sedang tutup. Tidak dapat menambah item ke keranjang.');
                }
            }
        });
        menuList.hasEventListener = true; // Flag untuk menghindari duplikasi
    }
}

// Add item to cart
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${item.name} ditambahkan ke keranjang`);
}

// Update cart display
function updateCart() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Keranjang belanja Anda kosong</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item';
            cartItemEl.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            `;
            cartItems.appendChild(cartItemEl);
        });
        
        // Add event listeners to quantity buttons - FIXED: Hanya pasang event listener sekali
        if (!cartItems.hasEventListener) {
            cartItems.addEventListener('click', function(e) {
                const target = e.target;
                const isMinus = target.classList.contains('minus') || (target.parentElement && target.parentElement.classList.contains('minus'));
                const isPlus = target.classList.contains('plus') || (target.parentElement && target.parentElement.classList.contains('plus'));
                const isRemove = target.classList.contains('remove-item') || (target.parentElement && target.parentElement.classList.contains('remove-item'));
                
                if (isMinus || isPlus || isRemove) {
                    const id = parseInt(target.dataset.id || (target.parentElement && target.parentElement.dataset.id));
                    
                    if (isMinus) {
                        const item = cart.find(item => item.id === id);
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            cart = cart.filter(item => item.id !== id);
                        }
                    } else if (isPlus) {
                        const item = cart.find(item => item.id === id);
                        item.quantity++;
                    } else if (isRemove) {
                        cart = cart.filter(item => item.id !== id);
                    }
                    
                    updateCart();
                }
            });
            cartItems.hasEventListener = true; // Flag untuk menghindari duplikasi
        }
    }
    
    // Update total
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    subtotalEl.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
    
    // Calculate discount if member and subtotal >= 12000
    let discount = 0;
    if (isMember && subtotal >= 12000) {
        discount = subtotal * 0.05;
        discountRow.style.display = 'flex';
        discountAmountEl.textContent = `-Rp ${Math.round(discount).toLocaleString('id-ID')}`;
    } else {
        discountRow.style.display = 'none';
        isMember = false;
        memberBtn.classList.remove('active');
    }
    
    const total = subtotal - discount;
    totalEl.textContent = `Rp ${Math.round(total).toLocaleString('id-ID')}`;
    
    updateCheckoutButton();
    saveToLocalStorage();
}

// Toggle member status
function toggleMember() {
    isMember = !isMember;
    
    if (isMember) {
        memberBtn.classList.add('active');
        showNotification('Diskon member 5% diterapkan (min. pembelian Rp 12.000)');
    } else {
        memberBtn.classList.remove('active');
        showNotification('Status member dinonaktifkan');
    }
    
    updateCart();
}

// Update checkout button state
function updateCheckoutButton() {
    const name = customerName.value.trim();
    const phone = customerPhone.value.trim();
    checkoutBtn.disabled = cart.length === 0 || name === '' || phone === '' || (!isAdminMode && !storeHours.isOpen);
}

// Show notification
function showNotification(message) {
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Show order success modal
function showOrderSuccess(name, total) {
    successCustomerName.textContent = name;
    successTotal.textContent = `Rp ${Math.round(total).toLocaleString('id-ID')}`;
    orderSuccessModal.style.display = 'flex';
}

// Checkout function
function checkout() {
    const name = customerName.value.trim();
    const phone = customerPhone.value.trim();
    
    if (cart.length === 0 || name === '' || phone === '') {
        showNotification('Harap isi nama dan nomor telepon serta tambahkan item ke keranjang');
        return;
    }
    
    if (!isAdminMode && !storeHours.isOpen) {
        showNotification('Maaf, toko sedang tutup. Tidak dapat menerima pesanan.');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = (isMember && subtotal >= 12000) ? subtotal * 0.05 : 0;
    const total = subtotal - discount;
    
    const order = {
        id: Date.now(),
        customer: name,
        phone: phone,
        items: [...cart],
        subtotal: subtotal,
        discount: discount,
        total: total,
        status: 'pending',
        timestamp: new Date().toISOString(),
        isMember: isMember
    };
    
    orders.push(order);
    cart = [];
    customerName.value = '';
    customerPhone.value = '';
    isMember = false;
    memberBtn.classList.remove('active');
    
    updateCart();
    saveToLocalStorage();
    
    if (isAdminMode) {
        renderOrders();
    }
    
    showOrderSuccess(name, total);
}

// Render orders in admin panel
function renderOrders() {
    orderList.innerHTML = '';
    
    if (orders.length === 0) {
        orderList.innerHTML = '<p class="empty-cart">Belum ada pesanan</p>';
        return;
    }
    
    // Show latest orders first
    const sortedOrders = [...orders].reverse();
    
    sortedOrders.forEach(order => {
        const orderEl = document.createElement('div');
        orderEl.className = 'order-item';
        orderEl.innerHTML = `
            <div class="order-header">
                <div>
                    <div class="order-customer">${order.customer} - ${order.phone}</div>
                    <div>Order #${order.id} - ${new Date(order.timestamp).toLocaleString('id-ID')}</div>
                    ${order.isMember ? '<div style="color: var(--member); font-weight: bold;">Member (5% discount applied)</div>' : ''}
                </div>
                <span class="order-status status-${order.status}">${order.status === 'pending' ? 'Menunggu' : 'Selesai'}</span>
            </div>
            <div>
                ${order.items.map(item => `
                    <p>${item.name} x${item.quantity} = Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</p>
                `).join('')}
            </div>
            ${order.discount > 0 ? `<p>Diskon: -Rp ${Math.round(order.discount).toLocaleString('id-ID')}</p>` : ''}
            <p><strong>Total: Rp ${Math.round(order.total).toLocaleString('id-ID')}</strong></p>
            <div class="order-actions">
                ${order.status === 'pending' ? `
                    <button class="btn btn-primary complete-order" data-id="${order.id}">Selesai</button>
                    <button class="btn btn-danger cancel-order" data-id="${order.id}">Batal</button>
                ` : `
                    <button class="btn btn-danger delete-order" data-id="${order.id}">Hapus</button>
                `}
            </div>
        `;
        orderList.appendChild(orderEl);
    });
    
    // Add event listeners to order action buttons - FIXED: Hanya pasang event listener sekali
    if (!orderList.hasEventListener) {
        orderList.addEventListener('click', function(e) {
            const target = e.target;
            const isComplete = target.classList.contains('complete-order') || (target.parentElement && target.parentElement.classList.contains('complete-order'));
            const isCancel = target.classList.contains('cancel-order') || (target.parentElement && target.parentElement.classList.contains('cancel-order'));
            const isDelete = target.classList.contains('delete-order') || (target.parentElement && target.parentElement.classList.contains('delete-order'));
            
            if (isComplete || isCancel || isDelete) {
                const id = parseInt(target.dataset.id || (target.parentElement && target.parentElement.dataset.id));
                
                if (isComplete) {
                    const order = orders.find(order => order.id === id);
                    if (order) {
                        order.status = 'completed';
                        saveToLocalStorage();
                        renderOrders();
                    }
                } else if (isCancel) {
                    orders = orders.filter(order => order.id !== id);
                    saveToLocalStorage();
                    renderOrders();
                } else if (isDelete) {
                    if (confirm('Apakah Anda yakin ingin menghapus pesanan ini?')) {
                        orders = orders.filter(order => order.id !== id);
                        saveToLocalStorage();
                        renderOrders();
                        showNotification('Pesanan berhasil dihapus');
                    }
                }
            }
        });
        orderList.hasEventListener = true; // Flag untuk menghindari duplikasi
    }
}

// Render menu in admin panel
function renderAdminMenu() {
    menuTableBody.innerHTML = '';
    
    menuItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" class="availability-checkbox" data-id="${item.id}" ${item.available ? 'checked' : ''}></td>
            <td><input type="text" value="${item.name}" data-id="${item.id}" class="menu-name-input"></td>
            <td><input type="text" value="${item.image}" data-id="${item.id}" class="menu-image-input"></td>
            <td><input type="number" value="${item.price}" data-id="${item.id}" class="menu-price-input"></td>
            <td>
                <button class="edit-menu-btn save-menu" data-id="${item.id}">Simpan</button>
                <button class="edit-menu-btn delete-menu" data-id="${item.id}">Hapus</button>
            </td>
        `;
        menuTableBody.appendChild(row);
    });
    
    // Add event listeners to admin menu controls - FIXED: Hanya pasang event listener sekali
    if (!menuTableBody.hasChangeListener) {
        menuTableBody.addEventListener('change', function(e) {
            if (e.target.classList.contains('availability-checkbox')) {
                const id = parseInt(e.target.dataset.id);
                const item = menuItems.find(item => item.id === id);
                if (item) {
                    item.available = e.target.checked;
                    saveToLocalStorage();
                    renderMenu();
                }
            }
        });
        menuTableBody.hasChangeListener = true;
    }
    
    if (!menuTableBody.hasClickListener) {
        menuTableBody.addEventListener('click', function(e) {
            const target = e.target;
            const isSave = target.classList.contains('save-menu') || (target.parentElement && target.parentElement.classList.contains('save-menu'));
            const isDelete = target.classList.contains('delete-menu') || (target.parentElement && target.parentElement.classList.contains('delete-menu'));
            
            if (isSave || isDelete) {
                const id = parseInt(target.dataset.id || (target.parentElement && target.parentElement.dataset.id));
                
                if (isSave) {
                    const item = menuItems.find(item => item.id === id);
                    if (item) {
                        const nameInput = document.querySelector(`.menu-name-input[data-id="${id}"]`);
                        const imageInput = document.querySelector(`.menu-image-input[data-id="${id}"]`);
                        const priceInput = document.querySelector(`.menu-price-input[data-id="${id}"]`);
                        
                        if (nameInput.value.trim() !== '') {
                            item.name = nameInput.value.trim();
                        }
                        
                        if (imageInput.value.trim() !== '') {
                            item.image = imageInput.value.trim();
                        }
                        
                        item.price = parseInt(priceInput.value) || item.price;
                        
                        saveToLocalStorage();
                        renderMenu();
                        showNotification('Menu berhasil disimpan');
                    }
                } else if (isDelete) {
                    if (confirm('Apakah Anda yakin ingin menghapus menu ini?')) {
                        menuItems = menuItems.filter(item => item.id !== id);
                        saveToLocalStorage();
                        renderMenu();
                        renderAdminMenu();
                    }
                }
            }
        });
        menuTableBody.hasClickListener = true;
    }
}

// Toggle add menu form
function toggleAddMenuForm() {
    if (addMenuForm.style.display === 'block') {
        addMenuForm.style.display = 'none';
        toggleMenuForm.textContent = 'Tampilkan Form Tambah Menu';
    } else {
        addMenuForm.style.display = 'block';
        toggleMenuForm.textContent = 'Sembunyikan Form Tambah Menu';
    }
}

// Add new menu item
function addNewMenu() {
    const name = newMenuName.value.trim();
    const image = newMenuImage.value.trim();
    const price = parseInt(newMenuPrice.value);
    
    if (name === '' || isNaN(price) || price <= 0) {
        showNotification('Harap isi nama dan harga dengan benar');
        return;
    }
    
    const newId = menuItems.length > 0 ? Math.max(...menuItems.map(item => item.id)) + 1 : 1;
    
    menuItems.push({
        id: newId,
        name: name,
        price: price,
        available: true,
        image: image || "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Menu baru"
    });
    
    newMenuName.value = '';
    newMenuImage.value = '';
    newMenuPrice.value = '';
    
    saveToLocalStorage();
    renderMenu();
    renderAdminMenu();
    
    showNotification('Menu berhasil ditambahkan');
}

// Save store hours
function saveStoreHours() {
    storeHours.open = openTime.value;
    storeHours.close = closeTime.value;
    storeHours.manualOverride = false; // Reset manual override when changing hours
    
    saveToLocalStorage();
    updateStoreStatus();
    showNotification('Jam operasional berhasil disimpan');
}

// Close store now
function closeStoreNow() {
    storeHours.isOpen = false;
    storeHours.manualOverride = true;
    
    saveToLocalStorage();
    updateStoreStatus();
    showNotification('Toko ditutup manual');
}

// Open store now
function openStoreNow() {
    storeHours.isOpen = true;
    storeHours.manualOverride = true;
    
    saveToLocalStorage();
    updateStoreStatus();
    showNotification('Toko dibuka manual');
}

// Generate revenue report
function generateReport() {
    const startDate = new Date(reportStartDate.value);
    const endDate = new Date(reportEndDate.value);
    endDate.setHours(23, 59, 59); // Include entire end date
    
    // Filter orders by date range
    const filteredOrders = orders.filter(order => {
        const orderDate = new Date(order.timestamp);
        return orderDate >= startDate && orderDate <= endDate && order.status === 'completed';
    });
    
    // Calculate report values
    const revenue = filteredOrders.reduce((sum, order) => sum + order.total, 0);
    const orderCount = filteredOrders.length;
    const average = orderCount > 0 ? revenue / orderCount : 0;
    
    // Update report summary
    totalRevenue.textContent = `Rp ${Math.round(revenue).toLocaleString('id-ID')}`;
    totalOrders.textContent = orderCount;
    averageOrder.textContent = `Rp ${Math.round(average).toLocaleString('id-ID')}`;
    
    // Display orders in report
    renderReportOrders(filteredOrders);
}

// Render orders in report
function renderReportOrders(ordersList) {
    reportOrderList.innerHTML = '';
    
    if (ordersList.length === 0) {
        reportOrderList.innerHTML = '<p class="empty-cart">Tidak ada pesanan pada periode ini</p>';
        return;
    }
    
    // Show latest orders first
    const sortedOrders = [...ordersList].reverse();
    
    sortedOrders.forEach(order => {
        const orderEl = document.createElement('div');
        orderEl.className = 'order-item';
        orderEl.innerHTML = `
            <div class="order-header">
                <div>
                    <div class="order-customer">${order.customer} - ${order.phone}</div>
                    <div>Order #${order.id} - ${new Date(order.timestamp).toLocaleString('id-ID')}</div>
                    ${order.isMember ? '<div style="color: var(--member); font-weight: bold;">Member (5% discount applied)</div>' : ''}
                </div>
            </div>
            <div>
                ${order.items.map(item => `
                    <p>${item.name} x${item.quantity} = Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</p>
                `).join('')}
            </div>
            ${order.discount > 0 ? `<p>Diskon: -Rp ${Math.round(order.discount).toLocaleString('id-ID')}</p>` : ''}
            <p><strong>Total: Rp ${Math.round(order.total).toLocaleString('id-ID')}</strong></p>
        `;
        reportOrderList.appendChild(orderEl);
    });
}

// Admin login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'maiyosa' && password === '170845') {
        loginModal.style.display = 'none';
        mainContent.style.display = 'none';
        adminPanel.style.display = 'block';
        closedOverlay.style.display = 'none'; // Hide closed overlay when admin logs in
        isAdminMode = true;
        saveToLocalStorage();
        renderOrders();
        
        // Admin can always access regardless of store hours
        renderMenu();
        updateCheckoutButton();
        
    } else {
        showNotification('Username atau password salah');
    }
}

// Close admin panel
function closeAdminPanel() {
    adminPanel.style.display = 'none';
    mainContent.style.display = 'block';
    isAdminMode = false;
    saveToLocalStorage();
    updateStoreStatus(); // Kembali ke status normal
}

// Event listeners
adminToggle.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.style.display = 'flex';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

adminAccessButton.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.style.display = 'flex';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

closeAdmin.addEventListener('click', closeAdminPanel);

loginBtn.addEventListener('click', login);

cancelLogin.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

checkoutBtn.addEventListener('click', checkout);

memberBtn.addEventListener('click', toggleMember);

addMenuBtn.addEventListener('click', addNewMenu);

saveHoursBtn.addEventListener('click', saveStoreHours);

closeNowBtn.addEventListener('click', closeStoreNow);

openNowBtn.addEventListener('click', openStoreNow);

generateReportBtn.addEventListener('click', generateReport);

themeToggle.addEventListener('click', toggleTheme);

closeSuccessModal.addEventListener('click', function() {
    orderSuccessModal.style.display = 'none';
});

toggleMenuForm.addEventListener('click', toggleAddMenuForm);

// Admin tabs
adminTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        adminTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        document.querySelectorAll('.admin-content').forEach(content => {
            content.classList.remove('active');
        });
        
        document.getElementById(tabId + 'Content').classList.add('active');
        
        // Generate report when switching to reports tab
        if (tabId === 'reports') {
            generateReport();
        }
    });
});

// Allow Enter key to submit login form
document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        login();
    }
});

// Allow Enter key to add new menu
newMenuPrice.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addNewMenu();
    }
});

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    init();
});
