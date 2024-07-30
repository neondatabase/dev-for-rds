export const scrollToTop = () => {
  const element = document.getElementById('header');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
