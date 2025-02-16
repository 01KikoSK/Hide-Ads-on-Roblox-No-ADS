// ==UserScript==
// @name         Hide Ads on Roblox
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide ads on Roblox website
// @author       Your Name
// @match        https://www.roblox.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to hide ads on Roblox
    function hideAds() {
        // CSS selectors for common ad elements
        const adSelectors = [
            '.ad-container',         // General ad container
            '.ad-banner',            // Banner ads
            '.ad-sidebar',           // Sidebar ads
            '.ad-footer',            // Footer ads
            '.sponsored-section',    // Sponsored content
            'iframe[src*="ads"]'     // Ad iframes
        ];

        // Hide each ad element
        adSelectors.forEach(selector => {
            const ads = document.querySelectorAll(selector);
            ads.forEach(ad => {
                ad.style.display = 'none';
            });
        });

        console.log('Ads hidden successfully.');
    }

    // Run the function to hide ads when the page loads
    window.addEventListener('load', hideAds);

    // Run the function to hide ads when the content changes (e.g., infinite scrolling)
    const observer = new MutationObserver(hideAds);
    observer.observe(document.body, { childList: true, subtree: true });
})();