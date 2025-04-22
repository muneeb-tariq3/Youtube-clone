// Sample Video Data
const videos = [
  {
    title: 'Never Gonna Give You Up',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: '1.3B views',
    uploader: 'Rick Astley'
  },
  {
    title: 'Adele - Hello',
    url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    views: '3.2B views',
    uploader: 'AdeleVEVO'
  },
  {
    title: 'Despacito',
    url: 'https://www.youtube.com/embed/kJQP7kiw5Fk',
    views: '8.3B views',
    uploader: 'Luis Fonsi'
  },
  {
    title: 'PSY - Gangnam Style',
    url: 'https://www.youtube.com/embed/9bZkp7q19f0',
    views: '4.8B views',
    uploader: 'officialpsy'
  },
  {
    title: 'Shape of You',
    url: 'https://www.youtube.com/embed/WchzYT9zN2Q',
    views: '5.5B views',
    uploader: 'Ed Sheeran'
  },
  {
    title: 'Uptown Funk',
    url: 'https://www.youtube.com/embed/Lrle0xD2bqI',
    views: '4.2B views',
    uploader: 'Mark Ronson ft. Bruno Mars'
  },
  {
    title: 'Perfect',
    url: 'https://www.youtube.com/embed/2Vv-BfVoq4g',
    views: '3.6B views',
    uploader: 'Ed Sheeran'
  },
  {
    title: 'Blinding Lights',
    url: 'https://www.youtube.com/embed/KJH3fVd2k1s',
    views: '2.8B views',
    uploader: 'The Weeknd'
  },
  {
    title: 'Old Town Road',
    url: 'https://www.youtube.com/embed/PIh2xe4jnpk',
    views: '1.7B views',
    uploader: 'Lil Nas X'
  },
  {
    title: 'Take Me to Church',
    url: 'https://www.youtube.com/embed/xKJ45b2jXZ8',
    views: '1.3B views',
    uploader: 'Hozier'
  }
];

// DOM Ready
window.addEventListener('DOMContentLoaded', () => {
  const videoGrid = document.getElementById('videoGrid');
  const themeSelector = document.getElementById('themeSelector');
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const sidebar = document.querySelector('.sidebar');
  const header = document.querySelector('.header');

  // Function to display videos
  function displayVideos(videosToDisplay) {
    videoGrid.innerHTML = ''; // Clear previous videos

    videosToDisplay.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.classList.add('video-card');

      videoCard.innerHTML = `
        <iframe src="${video.url}" title="${video.title}" allowfullscreen></iframe>
        <div class="video-info">
          <h3>${video.title}</h3>
          <p>${video.uploader} • ${video.views}</p>
        </div>
      `;

      videoGrid.appendChild(videoCard);
    });
  }

  // Initial video display
  displayVideos(videos);

  // Theme change handler
  themeSelector.addEventListener('change', function () {
    const theme = this.value;

    document.body.className = theme;
    header.className = `header ${theme}`;
    sidebar.className = `sidebar ${theme}`;
  });

  // Search handler
  searchBtn.addEventListener('click', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredVideos = videos.filter(video =>
      video.title.toLowerCase().includes(searchText)
    );
    displayVideos(filteredVideos);
  });

  // Sidebar toggle
  window.toggleSidebar = function () {
    sidebar.classList.toggle('active');
  };
});
