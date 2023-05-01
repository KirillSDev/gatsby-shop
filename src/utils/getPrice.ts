export const getPrice = (name: string, status: string): string => {
  const code = name.charCodeAt(0);
  let bonus = 0;
  switch (status) {
    case "Alive":
      bonus = 1000;
      break;
    case "Dead":
      bonus = 100;
      break;
    case "unknown":
      bonus = 2000;
      break;
    default:
      bonus = 1000;
      break;
  }
  const price = String(code + bonus);
  return price;
};
