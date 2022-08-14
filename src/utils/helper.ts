export const thousandSeparator = (x: number | string): string | number => {
  if (Number.isNaN(x)) {
    return x;
  }

  if (x.toString().includes('.')) {
    const parts = x?.toString().split('.');
    return parts[0]
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      .concat(`,${parts[1]}`);
  }

  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const toCurrency = (money: number | string): number | string => {
  return Number.isNaN(money) ? money : `Rp${thousandSeparator(money)}`;
};
