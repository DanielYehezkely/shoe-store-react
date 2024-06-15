export const validateImageUrl = (url) => {
  const regex = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/i;
  return regex.test(url);
};

