// Global data and configuration
// Only keeping data needed for dynamic/interactive features
const appData = {
  galleryItems: [
    {
      id: 1,
      image: "src/assets/library.jpg",
      title: "Modern Library",
      category: "Academic",
      description: "Well-equipped library with extensive collection of books and digital resources."
    },
    {
      id: 2,
      image: "src/assets/sports.jpg",
      title: "Sports Activities",
      category: "Sports",
      description: "Students engaged in various sports activities on our modern sports facilities."
    },
    {
      id: 3,
      image: "src/assets/science-lab.jpg",
      title: "Science Laboratory",
      category: "Academic",
      description: "State-of-the-art science lab where students conduct hands-on experiments."
    },
    {
      id: 4,
      image: "src/assets/students-learning.jpg",
      title: "Interactive Learning",
      category: "Academic",
      description: "Students actively participating in interactive classroom learning sessions."
    },
    {
      id: 5,
      image: "src/assets/cultural-event.jpg",
      title: "Cultural Performance",
      category: "Events",
      description: "Annual cultural event showcasing student talents in arts and performance."
    },
    {
      id: 6,
      image: "src/assets/hero-school.jpg",
      title: "School Campus",
      category: "Campus",
      description: "Beautiful view of our modern school campus and infrastructure."
    },
    {
      id: 7,
      image: "src/assets/sports.jpg",
      title: "Basketball Court",
      category: "Sports",
      description: "Indoor basketball court where students practice and compete."
    },
    {
      id: 8,
      image: "src/assets/library.jpg",
      title: "Reading Corner",
      category: "Academic",
      description: "Quiet reading spaces designed for focused study and research."
    },
    {
      id: 9,
      image: "src/assets/cultural-event.jpg",
      title: "Annual Day Celebration",
      category: "Events",
      description: "Students celebrating our annual day with performances and presentations."
    },
    {
      id: 10,
      image: "src/assets/hero-school.jpg",
      title: "Main Building",
      category: "Campus",
      description: "The main academic building housing classrooms and administrative offices."
    },
    {
      id: 11,
      image: "src/assets/science-lab.jpg",
      title: "Computer Lab",
      category: "Academic",
      description: "Modern computer laboratory with latest technology for digital learning."
    },
    {
      id: 12,
      image: "src/assets/sports.jpg",
      title: "Football Field",
      category: "Sports",
      description: "Spacious football field where students enjoy outdoor sports activities."
    }
  ],
  heroSlides: [
    {
      image: "src/assets/hero-school.jpg",
      title: "Welcome to Sunrise Academy",
      subtitle: "Nurturing Young Minds for a Brighter Tomorrow",
      description: "Quality education from Primary to 12th Standard with excellence in academics and character building.",
    },
    {
      image: "src/assets/students-learning.jpg",
      title: "Excellence in Learning",
      subtitle: "Innovative Teaching Methods",
      description: "Our experienced faculty uses modern teaching techniques to ensure every student reaches their full potential.",
    },
    {
      image: "src/assets/library.jpg",
      title: "World-Class Facilities",
      subtitle: "Modern Infrastructure for Better Learning",
      description: "State-of-the-art classrooms, library, laboratories, and sports facilities to support holistic development.",
    },
  ]
};

// Initialize Header
function initializeHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const currentPath = window.location.pathname;
  const navItems = [
    { name: "Home", path: "index.html" },
    { name: "About Us", path: "about.html" },
    { name: "Gallery", path: "gallery.html" },
    { name: "Contact Us", path: "contact.html" },
  ];

  const isActive = (path) => {
    const current = currentPath.split('/').pop() || 'index.html';
    return current === path;
  };

  header.innerHTML = `
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <a href="index.html" class="flex items-center -my-4">
          <img 
            src="src/assets/school-logo.png" 
            alt="Sunrise Academy Logo" 
            class="w-20 h-20 rounded-full object-cover shadow-lg ring-4 ring-background"
          />
        </a>

        <nav id="desktop-nav" class="hidden md:flex items-center space-x-8">
          ${navItems.map(item => `
            <a
              href="${item.path}"
              class="font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? "text-school-blue border-b-2 border-school-blue active-nav-link"
                  : "text-school-gray hover:text-school-blue nav-link"
              }"
              style="color: ${isActive(item.path) ? 'hsl(217, 91%, 60%)' : 'hsl(220, 13%, 18%)'};"
            >
              ${item.name}
            </a>
          `).join('')}
          <a href="contact.html" class="btn btn-primary" style="text-decoration: none;">Admission Open</a>
        </nav>

        <button
          id="mobile-menu-btn"
          class="md:hidden btn btn-ghost text-school-gray"
          aria-label="Toggle menu"
        >
          <svg id="menu-icon" class="w-6 h-6 text-school-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg id="close-icon" class="w-6 h-6 hidden text-school-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div id="mobile-menu" class="hidden md:hidden py-4 border-t">
        <nav class="flex flex-col space-y-3">
          ${navItems.map(item => `
            <a
              href="${item.path}"
              class="font-medium py-2 px-3 rounded transition-colors duration-200 ${
                isActive(item.path)
                  ? "text-school-blue bg-school-blue/10"
                  : "text-school-gray hover:text-school-blue hover:bg-school-blue/5"
              }"
              onclick="document.getElementById('mobile-menu').classList.add('hidden'); document.getElementById('menu-icon').classList.remove('hidden'); document.getElementById('close-icon').classList.add('hidden');"
            >
              ${item.name}
            </a>
          `).join('')}
          <a href="contact.html" class="btn btn-primary mt-4">Admission Open</a>
        </nav>
      </div>
    </div>
  `;

  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuBtn && mobileMenu && menuIcon && closeIcon) {
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.classList.contains('hidden') &&
          !mobileMenu.contains(e.target) &&
          !menuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  }
}


// Initialize Hero Slider
function initializeHeroSlider() {
  const slider = document.getElementById('hero-slider');
  if (!slider) return;

  let currentSlide = 0;
  const slides = appData.heroSlides;
  let autoSlideInterval = null;
  let isTransitioning = false;

  function renderSlides() {
    // Get all slides
    const slideElements = slider.querySelectorAll('.hero-slide');
    const prevBtn = slider.querySelector('#prev-slide');
    const nextBtn = slider.querySelector('#next-slide');
    const indicators = slider.querySelectorAll('.indicator');

    // Update slide visibility with smooth transition
    slideElements.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add('active');
        slide.style.opacity = '1';
        slide.style.zIndex = '2';
      } else {
        slide.classList.remove('active');
        slide.style.opacity = '0';
        slide.style.zIndex = '1';
      }
    });

    // Update indicators
    if (indicators.length > 0) {
      indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
  }

  function goToSlide(index, direction = 'auto') {
    if (isTransitioning || index === currentSlide) return;
    
    isTransitioning = true;
    currentSlide = index;
    
    // Reset transition flag after animation
    setTimeout(() => {
      isTransitioning = false;
    }, 600);
    
    renderSlides();
  }

  function nextSlide() {
    if (isTransitioning) return;
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next, 'next');
  }

  function prevSlide() {
    if (isTransitioning) return;
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev, 'prev');
  }

  // Initial render
  slider.innerHTML = `
    ${slides.map((slide, index) => `
      <div class="hero-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
        <img src="${slide.image}" alt="${slide.title}" />
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="text-center text-white max-w-4xl px-4">
            <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight">${slide.title}</h1>
            <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-school-orange-light">${slide.subtitle}</h2>
            <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">${slide.description}</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="contact.html" class="btn btn-primary btn-lg">Explore Admissions</a>
              <a href="about.html" class="btn btn-outline-white btn-lg">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    `).join('')}
    <button id="prev-slide" class="hero-nav-btn hero-nav-btn-left" aria-label="Previous slide">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button id="next-slide" class="hero-nav-btn hero-nav-btn-right" aria-label="Next slide">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
      ${slides.map((_, index) => `
        <button
          class="hero-indicator ${index === 0 ? 'active' : ''}"
          data-index="${index}"
          aria-label="Go to slide ${index + 1}"
        ></button>
      `).join('')}
    </div>
  `;

  // Attach event listeners
  const prevBtn = slider.querySelector('#prev-slide');
  const nextBtn = slider.querySelector('#next-slide');
  const indicators = slider.querySelectorAll('.hero-indicator');

  if (prevBtn) prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    prevSlide();
    resetAutoSlide();
  });

  if (nextBtn) nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    nextSlide();
    resetAutoSlide();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (index !== currentSlide) {
        goToSlide(index);
        resetAutoSlide();
      }
    });
  });

  // Auto-advance slides
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);
  }

  function resetAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
    startAutoSlide();
  }

  startAutoSlide();

  // Pause auto-slide on hover
  slider.addEventListener('mouseenter', () => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
  });

  slider.addEventListener('mouseleave', () => {
    startAutoSlide();
  });

  // Initial render
  renderSlides();
}

// Initialize Home Page (empty - content is now in HTML)
function initializeHomePage() {
  // All static content (features, testimonials, gallery preview) is now in HTML
  // This function is kept for compatibility but no longer needs to do anything
}

// Initialize About Page (empty - content is now in HTML)
function initializeAboutPage() {
  // All static content (values, faculty) is now in HTML
  // This function is kept for compatibility but no longer needs to do anything
}

// Initialize Contact Page
function initializeContactPage() {
  // All static content (contact info, departments) is now in HTML
  // Only handle form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
}

// Initialize Gallery Page
function initializeGalleryPage() {
  let activeFilter = 'All';
  let filteredItems = appData.galleryItems;
  let currentModalIndex = 0;

  const filters = ['All', 'Academic', 'Sports', 'Events', 'Campus'];

  // Filter Buttons
  const filterButtons = document.getElementById('filter-buttons');
  if (filterButtons) {
    filterButtons.innerHTML = filters.map(filter => `
      <button
        class="filter-btn ${activeFilter === filter ? 'active' : ''}"
        data-filter="${filter}"
      >
        ${filter}
      </button>
    `).join('');

    filterButtons.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        activeFilter = e.target.dataset.filter;
        filterButtons.querySelectorAll('.filter-btn').forEach(btn => {
          btn.classList.remove('active');
        });
        e.target.classList.add('active');
        
        filteredItems = activeFilter === 'All' 
          ? appData.galleryItems 
          : appData.galleryItems.filter(item => item.category === activeFilter);
        
        renderGallery();
      }
    });
  }

  // Render Gallery
  function renderGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const noResults = document.getElementById('no-results');

    if (filteredItems.length === 0) {
      if (galleryGrid) galleryGrid.style.display = 'none';
      if (noResults) noResults.classList.remove('hidden');
      return;
    }

    if (galleryGrid) galleryGrid.style.display = 'grid';
    if (noResults) noResults.classList.add('hidden');

    if (galleryGrid) {
      galleryGrid.innerHTML = filteredItems.map((item, index) => `
        <div
          class="gallery-item"
          data-index="${index}"
        >
          <div class="aspect-square overflow-hidden">
            <img
              src="${item.image}"
              alt="${item.title}"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      `).join('');

      // Attach click handlers
      galleryGrid.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.addEventListener('click', () => {
          currentModalIndex = index;
          openModal();
        });
      });
    }
  }

  // Image Modal
  function openModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
      modal.classList.remove('hidden');
      updateModalImage();
    }
  }

  function closeModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  function updateModalImage() {
    const modalImage = document.getElementById('modal-image');
    const modalCounter = document.getElementById('modal-counter');
    
    if (filteredItems[currentModalIndex]) {
      const item = filteredItems[currentModalIndex];
      if (modalImage) {
        modalImage.src = item.image;
        modalImage.alt = item.title;
      }
      if (modalCounter) {
        modalCounter.textContent = `${currentModalIndex + 1} / ${filteredItems.length}`;
      }
    }
  }

  function nextImage() {
    currentModalIndex = (currentModalIndex + 1) % filteredItems.length;
    updateModalImage();
  }

  function prevImage() {
    currentModalIndex = (currentModalIndex - 1 + filteredItems.length) % filteredItems.length;
    updateModalImage();
  }

  // Modal event listeners
  const modalClose = document.getElementById('modal-close');
  const modalPrev = document.getElementById('modal-prev');
  const modalNext = document.getElementById('modal-next');
  const imageModal = document.getElementById('image-modal');

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalPrev) modalPrev.addEventListener('click', prevImage);
  if (modalNext) modalNext.addEventListener('click', nextImage);

  if (imageModal) {
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) {
        closeModal();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('image-modal');
    if (modal && !modal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    }
  });

  // Initial render
  renderGallery();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeHeader();
  
  // Initialize page-specific content if functions exist
  if (window.location.pathname.includes('gallery.html') || window.location.pathname === '/gallery.html') {
    initializeGalleryPage();
  } else if (window.location.pathname.includes('about.html') || window.location.pathname === '/about.html') {
    initializeAboutPage();
  } else if (window.location.pathname.includes('contact.html') || window.location.pathname === '/contact.html') {
    initializeContactPage();
  } else {
    // Home page
    initializeHeroSlider();
    initializeHomePage();
  }
});

