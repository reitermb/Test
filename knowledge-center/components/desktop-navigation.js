// /components/navigation.js
class SiteNav extends HTMLElement {
  connectedCallback() {
    fetch('components/desktop-navigation.html')
      .then(res => res.text())
      .then(html => {
        this.innerHTML = html;
      })
      .catch(err => {
        this.innerHTML = '<p>Error loading navigation.</p>';
        console.error('Nav load error:', err);
      });
  }
}

customElements.define('site-nav', SiteNav);