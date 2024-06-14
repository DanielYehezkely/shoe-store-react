export const truncateText = (text, maxWords) => {
  if (!text) return '';
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};