export function removeFirstCharIfZero(str) {
  if (str.charAt(0) === "0" && str.length > 1) {
    str = str.substring(1);
  }

  return str;
}

export function formatCurrency(amount) {
  return amount.toLocaleString("en-En", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function formatMoney(amount) {
  if (amount < 1000) {
    return `$${amount.toFixed(2)}`;
  } else if (amount < 1000000) {
    return `$${(amount / 1000).toFixed(2)}k`;
  } else if (amount < 1000000000) {
    return `$${(amount / 1000000).toFixed(2)}m`;
  } else {
    return `$${(amount / 1000000000).toFixed(2)}b`;
  }
}
