export const inViewport = (el: HTMLElement, callback: () => void) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(el);
}