window.addEventListener('scroll', function () {
    // const header = document.getElementById('header-container');
    // header.classList.add('border');
    // header.classList.add('rounded-2xl');
    // header.classList.add('bg-white/90');
    // const nav = document.getElementById('nav-container');
    // nav.classList.remove('bg-[#F9F7F3]');
});

//blog button
document.getElementById('blog').addEventListener('click', function () {
    window.location.href = './blog.html';
});

// Donation button
document.getElementById('donation-btn').addEventListener('click', function () {
    const historyButton = getElement('history-btn');
    historyButton.classList.remove('bg-primary-btn');
    const historyContainer = getElement('history-container');
    historyContainer.classList.add('hidden');
    const infoContainer = getElement('info-container');
    infoContainer.classList.remove('hidden');
    const donationButton = getElement('donation-btn');
    donationButton.classList.add('bg-primary-btn');

});

// History button
document.getElementById('history-btn').addEventListener('click', function () {
    const historyButton = getElement('history-btn');
    historyButton.classList.add('bg-primary-btn');
    const historyContainer = getElement('history-container');
    historyContainer.classList.remove('hidden');
    const infoContainer = getElement('info-container');
    infoContainer.classList.add('hidden');
    const donationButton = getElement('donation-btn');
    donationButton.classList.remove('bg-primary-btn');
});


// Donate for Flood at Noakhali, Bangladesh
getElement('noakhali-donate-btn').addEventListener('click', function () {
    const noakhaliInputvalue = getValueById('noakhali-input');
    const totalDonateNoakhali = getInnerTextById('total-donate-noakhali');
    const totalDonateNoakhaliNumber = parseFloat(totalDonateNoakhali);
    let balance = parseFloat(getInnerTextById('balance'));
    if (noakhaliInputvalue < 0 || isNaN(noakhaliInputvalue)) {
        alert('Invalid Donation Amount');
        return;
    }
    if (balance < noakhaliInputvalue) {
        alert('Insufficient Balance');
        return;
    }
    const total = totalDonateNoakhaliNumber + noakhaliInputvalue;
    getElement('total-donate-noakhali').innerText = total;
    balance = balance - noakhaliInputvalue;
    getElement('balance').innerText = balance;
    getElement('successful-modal').classList.remove('hidden');
    getElement('successful-modal-close').addEventListener('click', function () {
        getElement('successful-modal').classList.add('hidden');
    });
    const historyRow = `
    <div class="border rounded-2xl p-8 space-y-4">
                <h3 class="text-xl font-bold">${noakhaliInputvalue} Taka is Donated for Flood at Noakhali, Bangladesh</h3>
                <p class="font-light text-base text-primary-text">Date : ${new Date()}</p>
            </div>
            
    `
    getElement('history-container').innerHTML += historyRow;
});

// Donate for Flood Relief in Feni,Bangladesh
getElement('feni-btn').addEventListener('click', function () {
    const feniInputvalue = getValueById('feni-input');
    const totalDonateFeni = getInnerTextById('total-donate-feni');
    const totalDonateFeniNumber = parseFloat(totalDonateFeni);
    let balance = parseFloat(getInnerTextById('balance'));
    if (feniInputvalue < 0 || isNaN(feniInputvalue)) {
        alert('Invalid Donation Amount');
        return;
    }
    if (balance < feniInputvalue) {
        alert('Insufficient Balance');
        return;
    }
    const total = totalDonateFeniNumber + feniInputvalue;
    getElement('total-donate-feni').innerText = total;
    balance = balance - feniInputvalue;
    getElement('balance').innerText = balance;
    getElement('successful-modal').classList.remove('hidden');
    getElement('successful-modal-close').addEventListener('click', function () {
        getElement('successful-modal').classList.add('hidden');
    });
    const historyRow = `
    <div class="border rounded-2xl p-8 space-y-4">
                <h3 class="text-xl font-bold">${feniInputvalue} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
                <p class="font-light text-base text-primary-text">Date : ${new Date()}</p>
            </div>
            
    `
    getElement('history-container').innerHTML += historyRow;
});


// Donate for Quota fighter of,Bangladesh
getElement('quota-btn').addEventListener('click', function () {
    const quotaInputvalue = getValueById('quota-input');
    const totalDonateQuota = getInnerTextById('total-donate-quota');
    const totalDonateQuotaNumber = parseFloat(totalDonateQuota);
    let balance = parseFloat(getInnerTextById('balance'));
    if (quotaInputvalue < 0 || isNaN(quotaInputvalue)) {
        alert('Invalid Donation Amount');
        return;
    }
    if (balance < quotaInputvalue) {
        alert('Insufficient Balance');
        return;
    }
    const total = totalDonateQuotaNumber + quotaInputvalue;
    getElement('total-donate-quota').innerText = total;
    balance = balance - quotaInputvalue;
    getElement('balance').innerText = balance;
    getElement('successful-modal').classList.remove('hidden');
    getElement('successful-modal-close').addEventListener('click', function () {
        getElement('successful-modal').classList.add('hidden');
    });
    const historyRow = `
    <div class="border rounded-2xl p-8 space-y-4">
                <h3 class="text-xl font-bold">${quotaInputvalue} Taka is Donated for Quota fighter of,Bangladesh</h3>
                <p class="font-light text-base text-primary-text">Date : ${new Date()}</p>
            </div>
            
    `
    getElement('history-container').innerHTML += historyRow;
});