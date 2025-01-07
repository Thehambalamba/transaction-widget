function generateRandomHex(length: number): string {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join("");
}

export function generateBTCAddress(): string {
  return `bc1q${generateRandomHex(38)}`;
}

export function generateETHAddress(): string {
  return `0x${generateRandomHex(40)}`;
}

export function generateAVAXAddress(): string {
  return `X-avax1${generateRandomHex(40)}`;
}

export function generateSTRAddress(): string {
  const address = `GATQ${generateRandomHex(40)}ZMLN`;
  return `${address.slice(0, 30)}...${address.slice(-4)}`;
}

export function generateSUIAddress(): string {
  return `0x${generateRandomHex(40)}`;
}

export function generateOPAddress(): string {
  return `0x${generateRandomHex(40)}`;
}

export function getRandomAddress(unit: string): string {
  switch (unit) {
    case "BTC":
      return generateBTCAddress();
    case "AVAX":
      return generateAVAXAddress();
    case "STR":
      return generateSTRAddress();
    case "SUI":
      return generateSUIAddress();
    case "OP":
      return generateOPAddress();
    default:
      return generateETHAddress();
  }
}
