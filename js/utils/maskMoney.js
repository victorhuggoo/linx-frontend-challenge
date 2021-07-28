/**
 * This function receives a cpf to be formatter 
 * and returns the formatted CPF
 * 
 * @param {string} cpf 
 * @returns {string}
 */

const maskMoney = (cpf) => {
  return cpf.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

export default maskMoney