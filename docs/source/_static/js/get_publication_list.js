document.addEventListener("DOMContentLoaded", async () => { 

    const pub_div = document.getElementById('zotero-publication-list');

    // Use "format=json" and "include=bib" instead of "format=bib", because the latter doesn't allow sorting by date.
    // https://www.zotero.org/support/dev/web_api/v3/basics
    const url = "https://api.zotero.org/groups/5819486/items?format=json&include=bib&linkwrap=1&style=apa&sort=date&direction=desc&v=3";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        pub_div.classList.remove('lookit-center-text', 'lookit-error-message-text');
        let item_bib_info = "";
        json.forEach((obj, i) => {
            item_bib_info += obj.bib;
        });
        pub_div.innerHTML = item_bib_info;
    } catch (error) {
        console.error(error.message);
        pub_div.innerHTML = `<p class="lookit-error-message-text">Something went wrong retrieving the publications. Please try again later.</p>`;
    }

});