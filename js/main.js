// EliteRoof Experts - Main JavaScript File

// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      const isOpen = mobileMenu.classList.contains('active');
      menuBtn.innerHTML = isOpen 
        ? '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'
        : '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
    });
  }
}

// Sticky Header on Scroll
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

// Quote Modal Functions
function openQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initQuoteModal() {
  // Get all quote buttons
  const quoteButtons = document.querySelectorAll('[data-action="open-quote-modal"]');
  quoteButtons.forEach(btn => {
    btn.addEventListener('click', openQuoteModal);
  });
  
  // Close modal on overlay click
  const modalOverlay = document.getElementById('quote-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeQuoteModal();
      }
    });
  }
  
  // Close modal on close button click
  const closeBtn = document.getElementById('close-quote-modal');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeQuoteModal);
  }
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuoteModal();
    }
  });
}

// Quote Form Submission
function initQuoteForm() {
  const form = document.getElementById('quote-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      console.log('Quote form submitted:', data);
      alert('Thank you! We\'ll contact you within 24 hours with your free quote.');
      
      form.reset();
      closeQuoteModal();
    });
  }
}

// Contact Form Submission
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      console.log('Contact form submitted:', data);
      alert('Thank you! We\'ll contact you within 24 hours.');
      
      form.reset();
    });
  }
}

// Cookie Banner
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');
  
  // Check if user has already made a choice
  if (!localStorage.getItem('cookiesAccepted')) {
    if (banner) {
      banner.classList.add('active');
    }
  }
  
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.classList.remove('active');
    });
  }
  
  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'false');
      banner.classList.remove('active');
    });
  }
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-question');
  
  faqItems.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });
}

// Close mobile menu when clicking on a link
function initMobileMenuLinks() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = document.querySelectorAll('#mobile-menu a');
  
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        const menuBtn = document.getElementById('mobile-menu-btn');
        if (menuBtn) {
          menuBtn.innerHTML = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
        }
      }
    });
  });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStickyHeader();
  initQuoteModal();
  initQuoteForm();
  initContactForm();
  initCookieBanner();
  initFAQ();
  initMobileMenuLinks();
});
