document.addEventListener("DOMContentLoaded", function() {
    const storedFavicon = localStorage.getItem('tabName');
    const storedTitle = localStorage.getItem('tabIcon');
  
    if (storedFavicon && storedTitle) {
        document.querySelector('link[rel="icon"]').href = storedFavicon;
        document.title = storedTitle;
    }
  });
  