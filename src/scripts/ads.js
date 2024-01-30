
//Scrollnings-skit så banners o navbar följer med när man scrollar neråt
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    let ticker = document.querySelector('.ticker-wrap');
    let rightAd = document.querySelector('.right-ad');
    let leftAd = document.querySelector('.left-ad2');
    let header = document.querySelector('header');

    
    if (window.pageYOffset > 160) { // Adjust this value based on your navbar height
        header.classList.add('hide-after');

        ticker.style.position = 'fixed';
        ticker.style.top = '47px';
        ticker.style.height = '35px'; // Reset top position

  
      navbar.style.position = 'fixed';
      navbar.style.top = '0px';
      leftAd.style.position = 'fixed';
      leftAd.style.top = '-170px';
      rightAd.style.position = 'fixed';
      rightAd.style.top = '-170px';
    } else {
        header.classList.remove('hide-after');

        ticker.style.position = 'relative'; // Reset to original position
        ticker.style.top = '44px'; // Reset top position
        ticker.style.height = '53px'; // Reset top position

    
        navbar.style.position = 'relative'; // Reset to original position
        navbar.style.top = '20px'; // Clear top style
    
        leftAd.style.position = 'absolute'; // Reset to original position
        leftAd.style.top = '0px'; // Reset to original top value
    
        rightAd.style.position = 'absolute'; // Reset to original position
        rightAd.style.top = '0px'; // Reset to original top value
    
    }
  });