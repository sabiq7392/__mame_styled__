export default function hexToRgba(hex: string, opacity: string): string {
  if (hex.length !== 7 || !hex.startsWith("#")) {
    throw Error("INVALID HEX VALUE: Must start with # and length is 7 include #");
  }

  const r = parseInt(hex.substring(1,3), 16);
  const g = parseInt(hex.substring(3,5), 16);
  const b = parseInt(hex.substring(5,7), 16);
  
  const rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  return rgba;
}
