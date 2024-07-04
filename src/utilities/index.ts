export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("ru", {
    maximumSignificantDigits: 3,
  });
  return formatter.format(price * 1000);
};
