const IMAGES = [
  'https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=1600', // Sea
  '/IMG_2.png', // Worship
  '/IMG_3.png', // Prayer
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1600', // Celebration
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600', // Futuristic
];

const scrollContainer = document.getElementById('scroll-container')!;
const imageSequence = document.getElementById('image-sequence')!;
const images: HTMLDivElement[] = [];

// Preload and Inject Images
function initImages() {
  IMAGES.forEach((src, index) => {
    const div = document.createElement('div');
    div.className = 'scroll-image';
    div.style.backgroundImage = `url(${src})`;
    // Fallback colors to see something if images fail
    div.style.backgroundColor = index % 2 === 0 ? '#f0f0f0' : '#e0e0e0';
    
    imageSequence.appendChild(div);
    images.push(div);
    
    // Explicitly try to load the image to check for errors
    const img = new Image();
    img.src = src;
    img.onload = () => console.log(`Image ${index} loaded`);
    img.onerror = () => {
      console.error(`Image ${index} failed to load from: ${src}`);
      div.innerText = '이미지 로드 실패 (터널링 확인 필요)';
      div.style.display = 'flex';
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';
      div.style.color = '#ff0000';
    };
  });
}

function handleScroll() {
  const rect = scrollContainer.getBoundingClientRect();
  const containerHeight = rect.height;
  const viewportHeight = window.innerHeight;
  
  // Progress: 0 (start of container at bottom) to 1 (end of container at top)
  // Adjusted for sticky: progress should be 0 when top of container hits top of viewport
  // and 1 when bottom of container hits bottom of viewport.
  
  const scrollTotal = containerHeight - viewportHeight;
  const currentScroll = -rect.top;
  
  let progress = currentScroll / scrollTotal;
  progress = Math.max(0, Math.min(1, progress));

  images.forEach((img, index) => {
    const total = images.length;
    const start = index / total;
    const end = (index + 1) / total;
    
    let opacity = 0;

    if (index === 0) {
      // First image: visible at start, fades out
      if (progress <= end) {
        opacity = 1 - (progress / end); // Simple fade out
        // Stay visible a bit longer
        if (progress < end - 0.1) opacity = 1;
        else opacity = (end - progress) / 0.1;
      }
    } else if (index === total - 1) {
      // Last image: fades in, stays visible
      if (progress >= start) {
        if (progress > start + 0.1) opacity = 1;
        else opacity = (progress - start) / 0.1;
      }
    } else {
      // Middle images: fade in then fade out
      if (progress >= start && progress <= end) {
        if (progress < start + 0.1) {
          opacity = (progress - start) / 0.1;
        } else if (progress > end - 0.1) {
          opacity = (end - progress) / 0.1;
        } else {
          opacity = 1;
        }
      }
    }

    img.style.opacity = opacity.toString();
    
    // Zoom effect
    const scale = 1.1 - (0.1 * (progress - start) / (end - start));
    if (progress >= start && progress <= end) {
       img.style.transform = `scale(${Math.max(1, scale)})`;
    } else if (progress < start) {
       img.style.transform = `scale(1.1)`;
    } else {
       img.style.transform = `scale(1)`;
    }
  });
}

// Optimization
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});

// Init
initImages();
handleScroll(); // Initial state
console.log('Dokdo Vanilla App Initialized');
