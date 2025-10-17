// /components/navigation.js
class MobileNav extends HTMLElement {
  connectedCallback() {
    fetch('components/mobile-navigation.html')
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

customElements.define('mobile-nav', MobileNav);