window.addEventListener('scroll', function(){
    // const header = document.getElementById('header-container');
    // header.classList.add('border');
    // header.classList.add('rounded-2xl');
    // header.classList.add('bg-white/90');
    // const nav = document.getElementById('nav-container');
    // nav.classList.remove('bg-[#F9F7F3]');
});

//blog button
document.getElementById('blog').addEventListener('click', function(){
    window.location.href = './blog.html';
});

// Donation button
document.getElementById('donation-btn').addEventListener('click', function(){
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
document.getElementById('history-btn').addEventListener('click', function(){
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
// document.getElementById('noakhali-donate-btn').addEventListener
getElement('noakhali-donate-btn').addEventListener('click', function(){
    const noakhaliInputvalue = getValueById('noakhali-input');
    const totalDonateNoakhali = getInnerTextById('total-donate-noakhali');
    const totalDonateNoakhaliNumber = parseFloat(totalDonateNoakhali);
    let balance = parseFloat(getInnerTextById('balance'));
    if(noakhaliInputvalue < 0 || isNaN(noakhaliInputvalue)){
        alert('Invalid Donation Amount');
        return;
    }
    if(balance < noakhaliInputvalue){
        alert('Insufficient Balance');
        return;
    }
    const total= totalDonateNoakhaliNumber + noakhaliInputvalue;
    getElement('total-donate-noakhali').innerText = total;
    balance = balance - noakhaliInputvalue;
    getElement('balance').innerText = balance;

    
})
