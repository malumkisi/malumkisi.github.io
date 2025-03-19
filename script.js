// Başlangıç parası (100 milyar dolar, Türk Lirası olarak)
const INITIAL_MONEY = 10000000000000; // 10 trilyon TL
let currentMoney = INITIAL_MONEY;
let totalSpent = 0;
let purchasedItems = {};

// Para birimleri
const MILLION = 1000000;
const BILLION = 1000000000;
const TRILLION = 1000000000000;

// Satın alınabilecek ürünler (fiyata göre sıralanacak)
const items = [
    {
        id: 1,
        name: "Simit",
        price: 15,
        image: "D:/malumkisisitesiresim/simit.jpg"
    },
    {
        id: 2,
        name: "Çay",
        price: 30,
        image: "D:/malumkisisitesiresim/çay.jpg"
    },
    {
        id: 36,
        name: "Çakar",
        price: 400,
        image: "D:/malumkisisitesiresim/çakar.jpg"
    },
    {
        id: 3,
        name: "Akbil/İstanbulkart Bakiye",
        price: 200,
        image: "D:/malumkisisitesiresim/akbil.jpg"
    },
    {
        id: 4,
        name: "Market Alışverişi (Haftalık)",
        price: 2500,
        image: "D:/malumkisisitesiresim/Market Alışverişi (Haftalık).jpg"
    },
    {
        id: 7,
        name: "Asgari Ücret (Aylık)",
        price: 22105,
        image: "D:/malumkisisitesiresim/asgari.jpg"
    },
    {
        id: 5,
        name: "iPad",
        price: 25000,
        image: "D:/malumkisisitesiresim/ipad.jpg"
       
    },
    {
        id: 8,
        name: "Kiralık Ev (İstanbul, Aylık)",
        price: 25000,
        image: "D:/malumkisisitesiresim/daire.jpg"
    },
    {
        id: 6,
        name: "Memur Maaşı (Aylık)",
        price: 50000,
        image: "D:/malumkisisitesiresim/memur maaşı.jpg"
    },
    {
        id: 17,
        name: "Yerli ve Milli Togg",
        price: 1700000,
        image: "D:/malumkisisitesiresim/togg.jpg"
    },
    {
        id: 35,
        name: "Sarayın Aylık Personel Giderleri",
        price: 18000000,
        image: "D:/malumkisisitesiresim/çalışan.jpg"
    },
    {
        id: 9,
        name: "Sarayda Çalışanların Günlük Yemek Masrafı",
        price: 750000,
        image: "D:/malumkisisitesiresim/sarayyemek.jpg"
    },
    {
        id: 10,
        name: "Saray'da 1 Günlük Elektrik Faturası",
        price: 1250000,
        image: "D:/malumkisisitesiresim/elektrik.jpg"
    },
    {
        id: 13,
        name: "Bir Milletvekilinin Yıllık Maaşı",
        price: 2400000,
        image: "D:/malumkisisitesiresim/milletvekili.jpg"
    },
    {
        id: 11,
        name: "Bakanın Yurtdışı Gezisi",
        price: 2000000,
        image: "D:/malumkisisitesiresim/yurtdışı ziyareti.jpg"
    },
    {
        id: 16,
        name: "İstanbul'da 1+1 Daire",
        price: 3000000,
        image: "D:/malumkisisitesiresim/ev.jpg"
    },
    {
        id: 12,
        name: "Kıraathane",
        price: 5000000,
        image: "D:/malumkisisitesiresim/kıraathane.jpg"
    },
    {
        id: 14,
        name: "Kuran Kursu",
        price: 5000000,
        image: "D:/malumkisisitesiresim/kuran kursu.jpg"
    },
    {
        id: 15,
        name: "İmam Hatip Okulu",
        price: 15000000,
        image: "D:/malumkisisitesiresim/imam.jpg"
    },
    {
        id: 19,
        name: "Belediye Meydanı Heykeli",
        price: 15000000,
        image: "D:/malumkisisitesiresim/heykel.jpg"
    },
    {
        id: 21,
        name: "Bilim ve Araştırma Laboratuvarı",
        price: 50000000,
        image: "D:/malumkisisitesiresim/laboratuvar.jpg"
    },
    {
        id: 24,
        name: "Cumhurbaşkanlığı'nın Günlük Harcaması",
        price: 50000000,
        image: "D:/malumkisisitesiresim/moneyy.jpg"
    },
    {
        id: 20,
        name: "Yerli ve Milli Tank (Adet)",
        price: 80000000,
        image: "D:/malumkisisitesiresim/tank.jpg"
    },
    {
        id: 18,
        name: "Sosyal Medya Troll Ordusu (Yıllık)",
        price: 100000000,
        image: "D:/malumkisisitesiresim/trol.jpg"
    },
    {
        id: 22,
        name: "Bilim Müzesi",
        price: 120000000,
        image: "D:/malumkisisitesiresim/bilim.jpg"
    },
    {
        id: 23,
        name: "Cumhurbaşkanı İftar Programı (Aylık)",
        price: 180000000,
        image: "D:/malumkisisitesiresim/iftar.jpg"
    },
    {
        id: 38,
        name: "Hollywood Filmi",
        price: 250000000,
        image: "D:/malumkisisitesiresim/holywood.jpg"
    },
    {
        id: 25,
        name: "TRT'nin Yıllık Bütçesi",
        price: 5750000000,
        image: "D:/malumkisisitesiresim/trt.jpg"
    },
    {
        id: 26,
        name: "Bir Günlük Ekonomik Faiz",
        price: 8000000000,
        image: "D:/malumkisisitesiresim/faiz.jpg"
    },
    {
        id: 27,
        name: "Cumhurbaşkanlığı Uçağı",
        price: 15000000000,
        image: "D:/malumkisisitesiresim/uçak.jpg"
    },
    {
        id: 31,
        name: "Yeni Saray İnşaatı",
        price: 30000000000,
        image: "D:/malumkisisitesiresim/saray.jpg"
    },
    {
        id: 37,
        name: "F-35 Savaş Uçağı",
        price: 30000000000,
        image: "D:/malumkisisitesiresim/f35.jpg"
    },
    {
        id: 28,
        name: "CERN Üyeliği",
        price: 35000000000,
        image: "D:/malumkisisitesiresim/cern.jpg"
    },
    {
        id: 30,
        name: "Uzay Ajansı",
        price: 60000000000,
        image: "D:/malumkisisitesiresim/uzay.jpg"
    },
    {
        id: 34,
        name: "Türkiye'nin Yıllık Dış Borcu",
        price: 193000000000,
        image: "D:/malumkisisitesiresim/down.jpg"
    },
    {
        id: 32,
        name: "Nükleer Santral",
        price: 350000000000,
        image: "D:/malumkisisitesiresim/nükleer.jpeg"
    },
    {
        id: 39,
        name: "Lüks Cruise Gemisi",
        price: 500000000000,
        image: "D:/malumkisisitesiresim/cruise.jpg"
    },
    {
        id: 33,
        name: "Kanal İstanbul Projesi",
        price: 800000000000,
        image: "D:/malumkisisitesiresim/kanal istanbul.jpg"
    },
    {
        id: 29,
        name: "Diyanet'in Yıllık Bütçesi",
        price: 131000000000,
        image: "D:/malumkisisitesiresim/paracık.jpg"
    }
];

// Fiyata göre ürünleri sırala
items.sort((a, b) => a.price - b.price);

// ID'leri yeniden atama (sıralama sonrası)
items.forEach((item, index) => {
    item.id = index + 1;
});

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', () => {
    // Para göstergesini güncelle
    updateMoneyDisplay();
    
    // Ana sayfadaki servet göstergesini birimli olarak ayarla
    const moneyWithUnit = document.getElementById('money-with-unit');
    moneyWithUnit.innerHTML = "10 Trilyon";
    
    // Ürünleri ekle
    const itemsContainer = document.getElementById('items-container');
    
    items.forEach((item, index) => {
        const itemElement = createItemElement(item);
        itemsContainer.appendChild(itemElement);
    });

    // Scroll eventi
    window.addEventListener('scroll', () => {
        const stickyMoney = document.querySelector('.sticky-money');
        if (window.scrollY > 200) {
            stickyMoney.classList.add('visible');
        } else {
            stickyMoney.classList.remove('visible');
        }
    });
    
    // Karanlık tema
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon i');
    
    // Sayfa yüklendiğinde kullanıcının tercihini kontrol et
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Tema değiştiricisi
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });
    
    // Input değerlerini noktalı formatta gösterme
    document.querySelectorAll('.quantity').forEach(input => {
        input.addEventListener('change', function() {
            formatInputValue(this);
        });
        
        // Mobil cihazlarda dokunmatik klavyeyi optimize et
        input.addEventListener('focus', function() {
            if (window.innerWidth <= 768) {
                this.setAttribute('inputmode', 'numeric');
            }
        });
    });
    
    // Pencere boyutu değiştiğinde stil ayarlarını güncelle
    window.addEventListener('resize', function() {
        document.querySelectorAll('.quantity').forEach(input => {
            adjustFontSize(input, input.value);
        });
    });
});

// Para formatı ile birlikte birim ekle (milyon, milyar, trilyon)
function formatMoneyWithUnit(amount) {
    if (amount >= TRILLION) {
        return `${(amount / TRILLION).toFixed(2)} <span class="unit-label">Trilyon</span>`;
    } else if (amount >= BILLION) {
        return `${(amount / BILLION).toFixed(2)} <span class="unit-label">Milyar</span>`;
    } else if (amount >= MILLION) {
        return `${(amount / MILLION).toFixed(2)} <span class="unit-label">Milyon</span>`;
    } else {
        return formatMoney(amount);
    }
}

// Servet için biçimleme (birim etiketi olmadan)
function formatMoneySimple(amount) {
    return formatMoney(amount);
}

// Input değerini noktalı formata çevirme
function formatInputValue(input) {
    // Önceki değeri kaydet
    const originalValue = input.value;
    
    // Sadece sayıları koru
    let value = input.value.replace(/[^\d.KMkm]/g, '');
    
    // Özel birimleri kontrol et (K, M)
    if (originalValue.endsWith('K') || originalValue.endsWith('k')) {
        // K input işleme gerek yok, öylece bırak
        return;
    }
    if (originalValue.endsWith('M') || originalValue.endsWith('m')) {
        // M input işleme gerek yok, öylece bırak
        return;
    }
    
    // Boş ise 0 olarak ayarla
    if (value === '') {
        input.value = '0';
        return;
    }
    
    // Sayıyı parse et
    let numValue = parseInt(value);
    
    // Sayı çok büyükse kısaltma yap
    if (numValue >= 1000000) {
        // Milyonlarda M kullanarak kısalt
        let millions = numValue / 1000000;
        input.value = millions.toFixed(1) + 'M';
    } else if (numValue >= 1000) {
        // Binlerde K kullanarak kısalt
        let thousands = numValue / 1000;
        input.value = thousands.toFixed(1) + 'K';
    } else {
        // Normal formatta göster
        input.value = numValue.toLocaleString('tr-TR');
    }
    
    // Font boyutunu ayarla
    adjustFontSize(input, input.value);
}

// Sayı uzunluğuna göre font boyutunu ayarla
function adjustFontSize(input, value) {
    // Default font size
    let fontSize = 1.3;
    
    // Mobil kontrolü
    if (window.innerWidth <= 768) {
        fontSize = 1.1;
    }
    
    // Uzunluğa göre font boyutunu küçült
    if (value.length > 5) {
        fontSize *= 0.9;
    }
    if (value.length > 7) {
        fontSize *= 0.8;
    }
    if (value.length > 9) {
        fontSize *= 0.7;
    }
    
    input.style.fontSize = `${fontSize}rem`;
}

// Input değerini sayı olarak al
function getInputValueAsNumber(input) {
    let value = input.value;
    
    // M ile biten değer (milyon)
    if (value.endsWith('M')) {
        return parseFloat(value.replace('M', '')) * 1000000;
    }
    
    // K ile biten değer (bin)
    if (value.endsWith('K')) {
        return parseFloat(value.replace('K', '')) * 1000;
    }
    
    // Normal sayı
    return parseInt(value.replace(/\D/g, '')) || 0;
}

// Ürün elementi oluşturma fonksiyonu
function createItemElement(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.dataset.id = item.id;
    
    const formattedPrice = formatMoney(item.price);
    const formattedPriceWithUnit = formatMoneyWithUnit(item.price);
    
    // Satın alınmamışsa sat butonu devre dışı olacak
    const sellButtonDisabled = !purchasedItems[item.id] || purchasedItems[item.id] <= 0;
    
    itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p class="price">₺${formattedPriceWithUnit}</p>
        <div class="controls">
            <button class="sell" onclick="decreaseItem(${item.id})" ${sellButtonDisabled ? 'disabled' : ''}>Sat</button>
            <input type="number" min="0" value="0" class="quantity" onchange="updateItemQuantity(${item.id}, this.value)">
            <button class="buy" onclick="increaseItem(${item.id})">Al</button>
        </div>
    `;
    
    return itemDiv;
}

// Para formatı
function formatMoney(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Para göstergesini güncelleme
function updateMoneyDisplay() {
    // Para miktarını animasyonla değiştir
    const moneyElement = document.getElementById('money');
    const moneyWithUnit = document.getElementById('money-with-unit');
    const stickyMoneyValue = document.getElementById('sticky-money-value');
    
    animateValue(moneyElement, parseInt(moneyElement.textContent.replace(/,/g, '')), currentMoney, 500);
    
    // Üstteki servet göstergesini güncelle
    moneyWithUnit.innerHTML = formatMoneySimple(currentMoney);
    
    // Kalan servet göstergesini güncelle
    stickyMoneyValue.innerHTML = formatMoney(currentMoney);
    
    // Pulse efekti ekle
    moneyWithUnit.classList.add('pulse');
    setTimeout(() => {
        moneyWithUnit.classList.remove('pulse');
    }, 500);
}

// Değer animasyonu fonksiyonu
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = formatMoney(value);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Butonları güncelleme
function updateButtons() {
    items.forEach(item => {
        const itemElement = document.querySelector(`.item[data-id="${item.id}"]`);
        if (itemElement) {
            const sellButton = itemElement.querySelector('.sell');
            const hasItem = purchasedItems[item.id] && purchasedItems[item.id] > 0;
            
            if (hasItem) {
                sellButton.removeAttribute('disabled');
            } else {
                sellButton.setAttribute('disabled', 'disabled');
            }
        }
    });
}

// Makbuzu güncelleme
function updateReceipt() {
    const receiptItems = document.getElementById('receipt-items');
    const receiptEmpty = document.getElementById('receipt-empty');
    const receiptTotal = document.getElementById('receipt-total-amount');
    
    // Makbuzu temizle
    receiptItems.innerHTML = '';
    
    // Satın alınan ürünleri kontrol et
    const hasPurchases = Object.keys(purchasedItems).length > 0;
    
    // Boş makbuz mesajını göster/gizle
    receiptEmpty.style.display = hasPurchases ? 'none' : 'block';
    
    // Satın alınan ürünleri ekle
    if (hasPurchases) {
        Object.keys(purchasedItems).forEach(itemId => {
            const item = items.find(i => i.id === parseInt(itemId));
            const quantity = purchasedItems[itemId];
            
            if (quantity > 0) {
                const totalPrice = item.price * quantity;
                const formattedTotalWithUnit = formatMoneyWithUnit(totalPrice);
                
                const receiptItem = document.createElement('div');
                receiptItem.className = 'receipt-item';
                receiptItem.innerHTML = `
                    <div class="receipt-item-name">${item.name} <span class="receipt-item-quantity">x${quantity.toLocaleString('tr-TR')}</span></div>
                    <div class="receipt-item-price">₺${formattedTotalWithUnit}</div>
                `;
                
                receiptItems.appendChild(receiptItem);
            }
        });
    }
    
    // Toplam tutarı güncelle
    receiptTotal.innerHTML = formatMoneyWithUnit(totalSpent);
}

// Bildirim gösterme fonksiyonu
function showNotification(message, icon = 'fa-exclamation-circle') {
    // Önceki bildirimi kaldır
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Yeni bildirim oluştur
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    
    // Bildirim ekle
    document.body.appendChild(notification);
    
    // Otomatik silme
    setTimeout(() => {
        notification.remove();
    }, 3500);
}

// Ürün miktarını artırma
function increaseItem(itemId) {
    const item = items.find(item => item.id === itemId);
    const itemElement = document.querySelector(`.item[data-id="${itemId}"]`);
    const quantityInput = itemElement.querySelector('.quantity');
    const currentQuantity = getInputValueAsNumber(quantityInput);
    
    // Her tıklamada sadece 1 adet ekle
    const increaseBy = 1;
    const totalCost = item.price * increaseBy;
    
    if (currentMoney >= totalCost) {
        currentMoney -= totalCost;
        totalSpent += totalCost;
        
        // Satın alınan ürünleri güncelle
        if (!purchasedItems[itemId]) {
            purchasedItems[itemId] = 0;
        }
        purchasedItems[itemId] += increaseBy;
        
        updateMoneyDisplay();
        updateReceipt();
        updateButtons();
        
        // Input değerini alınan ürün sayısına güncelle
        updateQuantityDisplay(itemId);
        
        // Animasyon ekle
        itemElement.classList.add('pulse');
        setTimeout(() => {
            itemElement.classList.remove('pulse');
        }, 500);
        
        // Bildirim göster
        showNotification(`${increaseBy} adet ${item.name} satın alındı`, 'fa-check-circle');
    } else {
        // Bildirim göster
        showNotification('Yeterli paranız yok!', 'fa-times-circle');
    }
}

// Ürün miktarını azaltma
function decreaseItem(itemId) {
    const item = items.find(item => item.id === itemId);
    const itemElement = document.querySelector(`.item[data-id="${itemId}"]`);
    const quantityInput = itemElement.querySelector('.quantity');
    const currentQuantity = getInputValueAsNumber(quantityInput);
    
    // Satın alınan ürünü kontrol et
    if (purchasedItems[itemId] && purchasedItems[itemId] > 0) {
        // Azaltma miktarını belirle - eğer bir değer girilmişse o kadar, yoksa 1 adet
        const decreaseBy = currentQuantity > 0 ? 
                          Math.min(currentQuantity, purchasedItems[itemId]) : 1;
        
        const refund = item.price * decreaseBy;
        currentMoney += refund;
        totalSpent -= refund;
        
        // Satın alınan ürünleri güncelle
        purchasedItems[itemId] -= decreaseBy;
        if (purchasedItems[itemId] <= 0) {
            delete purchasedItems[itemId];
        }
        
        updateMoneyDisplay();
        updateReceipt();
        updateButtons();
        
        // Input değerini kalan ürün sayısına güncelle
        updateQuantityDisplay(itemId);
        
        // Animasyon ekle
        itemElement.classList.add('pulse');
        setTimeout(() => {
            itemElement.classList.remove('pulse');
        }, 500);
        
        // Bildirim göster
        showNotification(`${decreaseBy} adet ${item.name} satıldı`, 'fa-check-circle');
    } else {
        // Bildirim göster
        showNotification('Satılacak ürün kalmadı!', 'fa-exclamation-circle');
    }
}

// Ürün miktarını gösteren alanı güncelleme
function updateQuantityDisplay(itemId) {
    const itemElement = document.querySelector(`.item[data-id="${itemId}"]`);
    const quantityInput = itemElement.querySelector('.quantity');
    const amount = purchasedItems[itemId] || 0;
    
    // Sayı formatlama
    if (amount >= 1000000) {
        // Milyonlarda M kullanarak kısalt
        let millions = amount / 1000000;
        quantityInput.value = millions.toFixed(1) + 'M';
    } else if (amount >= 1000) {
        // Binlerde K kullanarak kısalt
        let thousands = amount / 1000;
        quantityInput.value = thousands.toFixed(1) + 'K';
    } else {
        // Normal formatta göster
        quantityInput.value = amount.toLocaleString('tr-TR');
    }
    
    // Font boyutunu ayarla
    adjustFontSize(quantityInput, quantityInput.value);
}

// Ürün miktarını manuel güncelleme
function updateItemQuantity(itemId, newQuantity) {
    const itemElement = document.querySelector(`.item[data-id="${itemId}"]`);
    const quantityInput = itemElement.querySelector('.quantity');
    
    // Yeni değeri temizle
    if (newQuantity.toString().endsWith('K') || newQuantity.toString().endsWith('k')) {
        // K birimiyle gelen değeri koru
        let value = parseFloat(newQuantity.toString().replace(/[^0-9.]/g, ''));
        if (!isNaN(value)) {
            quantityInput.value = value.toFixed(1) + 'K';
        } else {
            quantityInput.value = '0';
        }
    } else if (newQuantity.toString().endsWith('M') || newQuantity.toString().endsWith('m')) {
        // M birimiyle gelen değeri koru
        let value = parseFloat(newQuantity.toString().replace(/[^0-9.]/g, ''));
        if (!isNaN(value)) {
            quantityInput.value = value.toFixed(1) + 'M';
        } else {
            quantityInput.value = '0';
        }
    } else {
        // Normal sayılar
        let numValue = parseInt(newQuantity.toString().replace(/\D/g, ''));
        if (isNaN(numValue) || numValue < 0) {
            numValue = 0;
        }
        
        // Sayı çok büyükse kısaltma yap
        if (numValue >= 1000000) {
            // Milyonlarda M kullanarak kısalt
            let millions = numValue / 1000000;
            quantityInput.value = millions.toFixed(1) + 'M';
        } else if (numValue >= 1000) {
            // Binlerde K kullanarak kısalt
            let thousands = numValue / 1000;
            quantityInput.value = thousands.toFixed(1) + 'K';
        } else {
            // Normal formatta göster
            quantityInput.value = numValue.toLocaleString('tr-TR');
        }
    }
    
    // Font boyutunu ayarla
    adjustFontSize(quantityInput, quantityInput.value);
} 