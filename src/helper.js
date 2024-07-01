// formatting date
export const formatDateToLocalString = (epoch) =>
  new Date(epoch).toLocaleDateString();

// format currency
export const formatCurrency = (amt) => {
  return Math.round(amt);
};
