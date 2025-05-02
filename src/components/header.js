export function createHeader(text) {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = text;
  header.appendChild(h1);
  return header;
}