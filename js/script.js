const destinations = [
  {
      name: 'Amazon Rainforest',
      duration: '7 days',
      price: '$2,500',
      rating: 5,
      image: './imgs/amazon-forest.jpg',
      coordinates: { lat: -3.4653, lng: -62.2159 },
      description: 'Explore the world\'s largest rainforest ecosystem'
  },
  {
      name: 'Costa Rica',
      duration: '5 days',
      price: '$1,500',
      rating: 4,
      image: './imgs/costa-rica.jpg',
      coordinates: { lat: 9.7489, lng: -84.1091 },
      description: 'Discover tropical beaches and rich biodiversity'
  },
  {
      name: 'Iceland Wilderness',
      duration: '10 days',
      price: '$3,000',
      rating: 5,
      image: './imgs/iceland-wilderness.jpg',
      coordinates: { lat: 64.9631, lng: -19.0208 },
      description: 'Experience the land of fire and ice'
  },
  {
      name: 'Thailand Eco-Tour',
      duration: '7 days',
      price: '$2,200',
      rating: 4,
      image: './imgs/thailand.jpeg',
      coordinates: { lat: 15.8700, lng: 100.9925 },
      description: 'Explore ancient temples and pristine beaches'
  },
  {
      name: 'Galapagos Adventure',
      duration: '8 days',
      price: '$3,500',
      rating: 5,
      image: './imgs/galapagos-adventure.png',
      coordinates: { lat: -0.9538, lng: -90.9656 },
      description: 'Witness unique wildlife in their natural habitat'
  }
];

let displayWelcomeMes = () => {
  const currTime = new Date().getHours();
  let message = "";

  if (currTime >= 4 && currTime < 12) {
    message = "Good Morning! Ready for an eco-adventure?";
  } else if (currTime >= 12 && currTime < 18) {
    message = "Good Afternoon! Plan your next green getaway!";
  } else {
    message = "Good Evening! Explore our sustainable travel options!";
  }

  const welcomeElement = document.createElement("p");
  welcomeElement.textContent = message;
  welcomeElement.className = "welcome-message text-end ";

  const headerElement = document.querySelector("#header");
  const headerContainer = headerElement.querySelector('.container');
  headerContainer.parentNode.appendChild(welcomeElement);
};

document.addEventListener("DOMContentLoaded", displayWelcomeMes);


const highlightBtn = document.getElementById('btn');
console.log(highlightBtn);
highlightBtn.addEventListener('click', function() {
    const rows = document.querySelectorAll('table tbody tr');
    console.log(rows);
    rows.forEach(row => {
        row.classList.toggle('table-info');
    })
})

function createCards() {
  const cardsContainer = document.getElementById('cards-container');
  destinations.forEach(dest => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
          <img src="${dest.image}" alt="${dest.name}" class="card-image">
          <div class="card-content">
              <h3 class="card-title">${dest.name}</h3>
              <p>${dest.description}</p>
              <div class="card-info">
                  <span>${dest.duration}</span>
                  <span class="price">${dest.price}</span>
              </div>
              <div class="stars">${'★'.repeat(dest.rating)}</div>
          </div>
      `;
      card.addEventListener('click', () => selectDestination(dest));
      cardsContainer.appendChild(card);
  });
}

createCards();

function selectDestination(destination) {
 
  const mapFrame = document.getElementById('map');
  mapFrame.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6000000!2d${destination.coordinates.lng}!3d${destination.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s!5e0!3m2!1sen!2s!4v1697636459356!5m2!1sen!2s`;


  document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('active');
      if (card.querySelector('.card-title').textContent === destination.name) {
          card.classList.add('active');
      }
  });


  document.querySelectorAll('table tbody tr').forEach(row => {
      row.classList.remove('table-primary');
      if (row.cells[0].textContent === destination.name) {
          row.classList.add('table-primary');
      }
  });
  document.getElementById('dest-info').scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}

function showContent(contentId) {

  const contents = document.getElementsByClassName('content');
  for (let content of contents) {
      content.style.display = 'none';
  }
  
  document.getElementById(contentId).style.display = 'block';

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link=>{
    link.classList.add('link-dark');
    if(link.getAttribute('href') === '#' + contentId){
      link.classList.remove('link-dark');
      link.classList.add('link-secondary');
    }
  })
}

