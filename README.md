# Omar's Islamic Center Dashboard

A dynamic, responsive web app that displays current prayer times, jumua'ah times, as well as community announcements for a theoretical Islamic center. The dashboard provides an intuitive interface that allows mosque-goers to stay in touch with their community, and prayer times

Preview Link:  https://habeelom.github.io/PrayerTimesWeb/

## How It's Made

**Tech used:** HTML, CSS, JavaScript

This project was built as a dashboard for a theoretical Islamic Center. The application leverages modern web technologies to create an informative experience:

- Used vanilla JavaScript to create a carousel-style looping interface
- Used the Al-Adhan API (https://aladhan.com/prayer-times-api) to fetch real-time prayer times
- Implemented dynamic time conversion from 24-hour to 12-hour format 
- Created responsive design with flexible layouts
- Added dynamic Hijri date using `Intl.DateTimeFormat`

The dashboard consists of three main slides:
1. Prayer Times Slide: Displays daily prayer times
2. Jumua'ah/ date Slide: Shows Friday prayer schedules, as well as the date in the Hijri calendar  
3. Announcements Slide: Community updates and donation QR code

## Optimizations

- Implemented efficient slide transition using a custom Carousel class
- Used async/await for smooth API data fetching
- Minimized API calls by fetching prayer times once per page load
- Responsive design that works no matter the size of the device

## Lessons Learned

- Gained deeper understanding of API integration
- Improved skills in working with date and time manipulation in JavaScript
- Enhanced CSS skills for creating complex, responsive layouts
- Explored JavaScript class-based design for managing carousel functionality

## How to Use

1. Clone the repository  
2. Open `index.html` in a web browser
3. Prayer times can be updated with new longitude and latitude.

## NOTE: The included link is a hosted statically, lacking api integration 
