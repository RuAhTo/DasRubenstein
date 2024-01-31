window.addEventListener('scroll', function() {
  let navbar = document.querySelector('.navbar');
  let ticker = document.querySelector('.ticker-wrap');
  let rightAd = document.querySelector('.right-ad');
  let rightAd2 = document.querySelector('.right-ad2');
  let leftAd = document.querySelector('.left-ad');
  let leftAd2 = document.querySelector('.left-ad2');
  let leftAd3 = document.querySelector('.left-ad3');
  let annons = document.querySelector('.annons');  
  let annons2 = document.querySelector('.annons2');  
  let header = document.querySelector('header');
  let viewportHeight = window.innerHeight; // Get the viewport height for a full page scroll

  if (window.pageYOffset > 127) {
    header.classList.add('hide-after');
    ticker.style.position = 'fixed';
    ticker.style.top = '47px';
    navbar.style.position = 'fixed';
    navbar.style.top = '60px';
    leftAd2.style.position = 'fixed';
    leftAd2.style.top = '-170px';
    leftAd.style.position = 'fixed';
    leftAd.style.top = '-170px';
    leftAd3.style.position = 'fixed';
    leftAd3.style.top = '-170px';
    leftAd3.style.opacity = '0';
    rightAd.style.position = 'fixed';
    rightAd.style.top = '-170px';
    rightAd2.style.position = 'fixed';
    rightAd2.style.top = '-170px';
    rightAd2.style.opacity = '0';
    annons.style.position = 'fixed';
    annons2.style.position = 'fixed';
    annons.style.top ='-170px';
    annons2.style.top ='-170px';


    if (window.pageYOffset > viewportHeight) {
      // Apply transition effect when scrolling down past viewport height
      [leftAd2, rightAd].forEach(ad => {
        ad.classList.add('transition-effect');
        ad.style.opacity = '0'; // Fade out
      });

      // Ensure leftAd3 moves up smoothly
      rightAd2.classList.add('transition-effect');
      rightAd2.style.opacity = '1'; // New top position
      rightAd2.style.top = '-675px'; // New top position

      leftAd3.classList.add('transition-effect');
      leftAd3.style.top = '-455px'; // New top position
      leftAd3.style.opacity = '1'; // New top position

    } else {
      rightAd2.style.opacity = '0';

      // Reapply transition effect when scrolling back up
      [leftAd2, rightAd, rightAd2, leftAd3].forEach(ad => {
        ad.classList.add('transition-effect');
                rightAd2.style.opacity = '0';
      });

      setTimeout(() => {
        // Reset properties for reverse transition
        leftAd2.style.opacity = '1';
        rightAd.style.opacity = '1';
        rightAd2.style.opacity = '0';
        leftAd3.style.top = '-170px'; // Reset top position for leftAd3
      }, 20); // Short timeout ensures class addition is rendered before property changes
    }

  } else {
    header.classList.remove('hide-after');
    ticker.style.position = 'relative';
    ticker.style.top = '45px';
    navbar.style.position = 'relative';
    navbar.style.top = '35px';
    rightAd2.style.opacity = '0';
    annons.style.position = 'absolute'
    annons2.style.position = 'absolute'
  annons.style.top ='-43px';
    annons2.style.top ='-43px';


    [leftAd, leftAd2, leftAd3, rightAd, rightAd2].forEach(ad => {
      ad.style.position = 'absolute';
      ad.style.top = '-40px'; // Reset to original top position
      ad.style.opacity = '1'; // Reset opacity
      leftAd3.style.opacity = '0'; // Reset top position for leftAd3
      rightAd2.style.opacity = '0';
      annons.style.position = 'absolute'
      annons2.style.position = 'absolute'
      ad.classList.remove('transition-effect'); // Remove transition effect class
    });
  }
});
