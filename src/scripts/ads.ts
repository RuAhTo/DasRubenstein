/**
 * This script handles the positioning and visibility of ads on the page based on scroll behavior.
 * It calculates the height at which the header should be minimized and adjusts the position of the ads accordingly.
 * The ads fade in and out based on the scroll position.
 */
const header: HTMLElement | null = document.querySelector("header");
const navbar: HTMLElement | null = document.querySelector(".navbar");
const tickerWrapper: HTMLElement | null = document.querySelector(".ticker-wrap");
const annonsTexts: HTMLElement[] | null = Array.from(document.querySelectorAll(".annons")) as HTMLElement[];
const leftAdOne: HTMLElement | null = document.querySelector(".left-ad-one");
const leftAdTwo: HTMLElement | null = document.querySelector(".left-ad-two");
const rightAdOne: HTMLElement | null = document.querySelector(".right-ad-one");
const rightAdTwo: HTMLElement | null = document.querySelector(".right-ad-two");

// TODO: should maybe recalculate when site size changes, but needs to calculate when header is not minimized
const minimizeHeaderAtHeight: number =
    (header?.offsetHeight ?? 0) - (navbar?.offsetHeight ?? 0) - (tickerWrapper?.offsetHeight ?? 0);

if (window.scrollY > window.innerHeight) {
    if (leftAdOne) {
        leftAdOne.style.opacity = "0";
    }
    if (rightAdOne) {
        rightAdOne.style.opacity = "0";
    }
} else {
    if (leftAdTwo) {
        leftAdTwo.style.opacity = "0";
    }
    if (rightAdTwo) {
        rightAdTwo.style.opacity = "0";
    }
}

window.addEventListener("scroll", () => {
    const viewportHeight: number = window.innerHeight; // Get the viewport height for a full page scroll

    if (window.scrollY < minimizeHeaderAtHeight) {
        // Positioning
        if (navbar) {
            navbar.style.position = "unset";
        }
        if (tickerWrapper) {
            tickerWrapper.style.position = "unset";
        }
        annonsTexts.forEach((annons) => (annons.style.position = "unset"));
        return; // No code executes after this
    }

    // Positioning
    if (navbar) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
    }
    if (tickerWrapper) {
        tickerWrapper.style.position = "fixed";
        tickerWrapper.style.top = `${navbar?.offsetHeight}px`;
    }

    annonsTexts.forEach((annons) => {
        annons.style.position = "fixed";
        annons.style.top = `${minimizeHeaderAtHeight}px`;
    });

    [leftAdOne, leftAdTwo].forEach(
        (ad) =>
            ad && (ad.style.top = `${
                minimizeHeaderAtHeight + (annonsTexts[0]?.offsetHeight ?? 0)
            }px`)
    );
    [rightAdOne, rightAdTwo].forEach(
        (ad) => {
            ad && (ad.style.top = `${
                minimizeHeaderAtHeight + (annonsTexts[1]?.offsetHeight ?? 0)
            }px`)
            ad?.classList.add("transition-effect");
            ad && (ad.style.opacity = "0") // Fade out
        }
    );

    // TODO: reimplement movement in transition
    // Visibility
    if (window.scrollY > viewportHeight) {
        [leftAdOne, rightAdOne].forEach((ad) => {
            ad?.classList.add("transition-effect");
            ad && (ad.style.opacity = "0") // Fade out
        });

        [leftAdTwo, rightAdTwo].forEach((ad) => {
            ad?.classList.add("transition-effect");
            ad && (ad.style.opacity = "1"); // Fade in
        });
    } else {
        [leftAdTwo, rightAdTwo].forEach((ad) => {
            ad?.classList.add("transition-effect");
            ad && (ad.style.opacity = "0"); // Fade out
        });

        [leftAdOne, rightAdOne].forEach((ad) => {
            ad?.classList.add("transition-effect");
            ad && (ad.style.opacity = "1"); // Fade in
        });
    }
});
