const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");
const tickerWrapper = document.querySelector(".ticker-wrap");
const annonsTexts = document.querySelectorAll(".annons");
const leftAdOne = document.querySelector(".left-ad-one");
const leftAdTwo = document.querySelector(".left-ad-two");
const rightAdOne = document.querySelector(".right-ad-one");
const rightAdTwo = document.querySelector(".right-ad-two");

//TODO: should maybe recalculate when site size changes, but needs to calculate when header is not minimized
const minimizeHeaderAtHeight =
  header.offsetHeight - navbar.offsetHeight - tickerWrapper.offsetHeight;

if (window.pageYOffset > window.innerHeight) {
  leftAdOne.style.opacity = "0";
  rightAdOne.style.opacity = "0";
} else {
  leftAdTwo.style.opacity = "0";
  rightAdTwo.style.opacity = "0";
}

window.addEventListener("scroll", () => {
  const viewportHeight = window.innerHeight; // Get the viewport height for a full page scroll

  if (window.pageYOffset < minimizeHeaderAtHeight) {
    //Positioning
    navbar.style.position = "unset";
    tickerWrapper.style.position = "unset";
    annonsTexts.forEach((annons) => (annons.style.position = "unset"));
    return; //No code executes after this
  }

  //Positioning
  navbar.style.position = "fixed";
  navbar.style.top = 0;
  tickerWrapper.style.position = "fixed";
  tickerWrapper.style.top = `${navbar.offsetHeight}px`;

  annonsTexts.forEach((annons) => {
    annons.style.position = "fixed";
    annons.style.top = `${minimizeHeaderAtHeight}px`;
  });

  [leftAdOne, leftAdTwo].forEach(
    (ad) =>
      (ad.style.top = `${
        minimizeHeaderAtHeight + annonsTexts[0].offsetHeight
      }px`)
  );
  [rightAdOne, rightAdTwo].forEach(
    (ad) =>
      (ad.style.top = `${
        minimizeHeaderAtHeight + annonsTexts[1].offsetHeight
      }px`)
  );

  //TODO: reimplement movement in transition
  //Visibility
  if (window.pageYOffset > viewportHeight) {
    [leftAdOne, rightAdOne].forEach((ad) => {
      ad.classList.add("transition-effect");
      ad.style.opacity = "0"; // Fade out
    });

    [leftAdTwo, rightAdTwo].forEach((ad) => {
      ad.classList.add("transition-effect");
      ad.style.opacity = "1"; // Fade in
    });
  } else {
    [leftAdTwo, rightAdTwo].forEach((ad) => {
      ad.classList.add("transition-effect");
      ad.style.opacity = "0"; // Fade out
    });

    [leftAdOne, rightAdOne].forEach((ad) => {
      ad.classList.add("transition-effect");
      ad.style.opacity = "1"; // Fade in
    });
  }
});
