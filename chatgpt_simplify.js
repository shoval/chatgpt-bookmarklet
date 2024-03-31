// Make the main DIV the only element in the body
document.body.innerHTML = document.querySelector('main>div>div>div>div>div>div.flex').innerHTML;
// Remove all stylesheets and all kinds of elements that make it harder to read
document.querySelectorAll('link[rel="stylesheet"],button,svg.icon-sm').forEach(el => el.remove());
