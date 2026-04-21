interface Theme {
  image: string;
  text: string;
}

const THEMES: Theme[] = [
  {
    image: './IMG_2.png',
    text: '열방을 향한 뜨거운 선교의 마음'
  },
  {
    image: './IMG_3.png',
    text: '우리 땅 독도, 기도로 지키는 파수꾼'
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600',
    text: '땅 끝까지 전해질 생명의 복음'
  },
  {
    image: './file_0.jpg',
    text: '비전과 헌신으로 일구는 미래'
  },
  {
    image: './file_1.jpg',
    text: '세상을 변화시키는 작은 발걸음'
  }
];

const scrollContainer = document.getElementById('scroll-container')!;
const imageSequence = document.getElementById('image-sequence')!;
const dynamicText = document.getElementById('dynamic-text')!;
const images: HTMLDivElement[] = [];

// Preload and Inject Images
function init() {
  THEMES.forEach((theme, index) => {
    const div = document.createElement('div');
    div.className = 'scroll-image';
    div.style.backgroundImage = `url(${theme.image})`;
    div.style.backgroundColor = '#000';
    
    imageSequence.appendChild(div);
    images.push(div);
    
    // Preload check
    const img = new Image();
    img.src = theme.image;
    img.onload = () => console.log(`Theme ${index} loaded`);
    img.onerror = () => console.error(`Theme ${index} failed: ${theme.image}`);
  });
}

function handleScroll() {
  const rect = scrollContainer.getBoundingClientRect();
  const containerHeight = rect.height;
  const viewportHeight = window.innerHeight;
  
  const scrollTotal = containerHeight - viewportHeight;
  const currentScroll = -rect.top;
  
  let progress = currentScroll / scrollTotal;
  progress = Math.max(0, Math.min(1, progress));

  const total = images.length;
  
  images.forEach((img, index) => {
    const start = index / total;
    const end = (index + 1) / total;
    
    let opacity = 0;
    let scale = 1.1;

    // Transition logic
    if (progress >= start && progress <= end) {
      // Current image
      const innerProgress = (progress - start) / (1 / total);
      
      // Fade in/out
      if (innerProgress < 0.2) {
        opacity = innerProgress / 0.2;
      } else if (innerProgress > 0.8) {
        opacity = (1 - innerProgress) / 0.2;
      } else {
        opacity = 1;
      }
      
      // Zoom
      scale = 1.1 - (0.1 * innerProgress);
      
      // Update Text
      if (dynamicText.innerText !== THEMES[index].text) {
        dynamicText.style.opacity = '0';
        dynamicText.style.transform = 'translateY(20px)';
        setTimeout(() => {
          dynamicText.innerText = THEMES[index].text;
          dynamicText.style.opacity = '1';
          dynamicText.style.transform = 'translateY(0)';
        }, 300);
      }
    } else {
      opacity = 0;
      scale = 1.1;
    }

    img.style.opacity = opacity.toString();
    img.style.transform = `scale(${scale})`;
    img.style.zIndex = (progress >= start && progress <= end) ? '5' : '1';
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
init();
handleScroll();
console.log('Mission-Dokdo-World App Initialized');
