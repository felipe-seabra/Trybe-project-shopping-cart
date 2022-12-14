const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  beforeAll(() => {
    const argumento = '<ol><li>Item</li></ol>';
    saveCartItems(argumento);
  });

  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    expect(localStorage.setItem).toHaveBeenCalled(); // Espera que tenha chamado o localStorage
  });

  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', argumento); // Espera que tenha chamado com os parâmetros corretos
  });
});
