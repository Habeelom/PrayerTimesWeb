function convertTo12Hour(time) {
    const [hour, minute] = time.split(':');
    const period = +hour < 12 ? 'AM' : 'PM';
    const adjustedHour = +hour % 12 || 12;
    return `${adjustedHour}:${minute} ${period}`;
}

const fetchPrayerTimes = async () => {
    const date = new Date().toLocaleDateString('en-GB').split('/').reverse().join('-');
    const latitude = 42.2808;
    const longitude = -83.7430;
    const method = 4;

    const url = `http://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}&method=${method}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching prayer times:', error);
    }
};

async function displayPrayerTimes() {
    const prayerTimes = await fetchPrayerTimes();

    if (prayerTimes) {
        document.getElementById('fajr-time').innerText = convertTo12Hour(prayerTimes.data.timings.Fajr);
        document.getElementById('dhuhr-time').innerText = convertTo12Hour(prayerTimes.data.timings.Dhuhr);
        document.getElementById('asr-time').innerText = convertTo12Hour(prayerTimes.data.timings.Asr);
        document.getElementById('maghrib-time').innerText = convertTo12Hour(prayerTimes.data.timings.Maghrib);
        document.getElementById('isha-time').innerText = convertTo12Hour(prayerTimes.data.timings.Isha);
    }
}

displayPrayerTimes();
console.log(displayPrayerTimes())

class Carousel {

    constructor(selector) {
        this.carouselElement = document.querySelector(selector);
        this.slides = this.carouselElement.querySelectorAll('.slide');
        this.currentSlideIndex = 0;
        this.init();
    }

    init() {
        this.slides[0].classList.add('active');
        setInterval(() => this.showNextSlide(), 10000);
    }

    showNextSlide() {
        this.slides[this.currentSlideIndex].classList.remove('active');
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        this.slides[this.currentSlideIndex].classList.add('active');
    }
}
    const hijriDate = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        weekday: 'long',
        year: 'numeric'
    }).format(Date.now());

    document.getElementById('hijri-date').innerText = hijriDate;


new Carousel('.carousel');

