export const shuffleLetters = (el: HTMLElement, duration: number = 700, fps: number = 30) => {
  const text = el.textContent;
  if (!text) return;

  const originalText = text.split('');
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789@!*&#(@$^%*';
  const totalFrames = duration / (1000 / fps); // Calculate total frames based on fps
  const framesPerChar = Math.max(1, totalFrames / originalText.length); // Ensure at least 1 frame per character
  let currentCharIndex = 0;
  let currentFrame = 0;

  const getRandomCharacter = (): string => {
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const update = () => {
    el.textContent = '';

    originalText.forEach((char, index) => {
      const span = document.createElement('span');
      if (index < currentCharIndex) {
        span.textContent = char;
      } else if (index === currentCharIndex) {
        span.textContent = getRandomCharacter();
      } else {
        span.textContent = ' ';
      }
      el.appendChild(span);
    });

    currentFrame++;
    if (currentFrame >= framesPerChar) {
      currentFrame = 0;
      currentCharIndex++;
    }

    setTimeout(() => {

    if (currentCharIndex < originalText.length) {
     
      requestAnimationFrame(update);
      
    } else {
      el.textContent = originalText.join('');
    }
  }, 1000 / fps);
  };

  el.textContent = '';
  update();
}