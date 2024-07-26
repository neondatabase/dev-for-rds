import { hashId } from '../state';

export const scrollToElement = () => {
  const element = document.getElementById(hashId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
