/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck Ejemplo: ['2C','JD','AS','KH',.....]
 * @returns {string} retorna la carta del deck
 */


export const pedirCarta = (deck) => {
  if (deck.length === 0 || !deck) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};