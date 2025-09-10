// Data initialization
let cart = [];
let orders = [];
let isMember = false;
let menuItems = [
    { id: 1, name: "Ayam Bakar Potong", price: 15000, available: true, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Ayam bakar dengan bumbu spesial dipotong sesuai porsi" },
    { id: 2, name: "Ayam Bakar Bakakak", price: 60000, available: true, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Ayam bakar utuh dengan bumbu khas tradisional" },
    { id: 3, name: "Ayam Goreng", price: 22000, available: true, image: "https://images.unsplash.com/photo-1626645735466-3c6d9f6c8e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Ayam goreng dengan bumbu rempah pilihan" },
    { id: 4, name: "Lele Goreng", price: 15000, available: true, image: "https://images.unsplash.com/photo-1599484295427-2fe84c651a72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Lele goreng renyah dengan sambal terasi" },
    { id: 5, name: "Tumis Pare", price: 12000, available: true, image: "https://images.unsplash.com/photo-1591798450997-9a0d8f1c5c78?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Tumis pare dengan campuran udang dan bumbu balado" },
    { id: 6, name: "Tumis Jengkol", price: 18000, available: true, image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Tumis jengkol dengan balado cabai merah" },
    { id: 7, name: "Tumis Daun Paya", price: 10000, available: true, image: "https://images.unsplash.com/photo-1547516505-4d3d4c0f9c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Tumis daun paya dengan ikan teri dan cabai" },
    { id: 8, name: "Tumis Labu", price: 10000, available: true, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Tumis labu siam dengan ebi dan cabai" },
    { id: 9, name: "Terong Balado", price: 12000, available: true, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Terong ungu balado dengan cabai merah giling" },
    { id: 10, name: "Soun", price: 15000, available: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Soun goreng dengan sayuran dan daging ayam" },
    { id: 11, name: "Semur Jengkol", price: 20000, available: true, image: "https://images.unsplash.com/photo-1589302168068-964664b929eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Semur jengkol dengan bumbu kecap manis" },
    { id: 12, name: "Teri", price: 12000, available: true, image: "https://images.unsplash.com/photo-1617895155210-706098fcda4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Ikan teri goreng kering dengan kacang tanah" },
    { id: 13, name: "Sop Manten", price: 18000, available: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Sop ayam dengan sayuran dan soun" },
    { id: 14, name: "Opor Tahu", price: 12000, available: true, image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Opor tahu dengan kuah santan dan bumbu kuning" },
    { id: 15, name: "Opor Telor", price: 15000, available: true, image: "https://images.unsplash.com/photo-1605522867157-380f6e1eeda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Opor telur dengan kuah santan dan bumbu kuning" },
    { id: 16, name: "Opor Ayam", price: 25000, available: true, image: "https://images.unsplash.com/photo-1562967916-eb82223dfb14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Opor ayam dengan kuah santan dan bumbu kuning" },
    { id: 17, name: "Gorengan Tempe", price: 5000, available: true, image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Tempe goreng tepung crispy" },
    { id: 18, name: "Gorengan Bakwan", price: 5000, available: true, image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Bakwan sayur renyah" },
    { id: 19, name: "Gorengan Tahu Bakso", price: 7000, available: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Tahu isi bakso goreng" },
    { id: 20, name: "Sambal", price: 3000, available: true, image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Sambal terasi pedas" },
    { id: 21, name: "Nasi", price: 5000, available: true, image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Nasi putih hangat" }
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
