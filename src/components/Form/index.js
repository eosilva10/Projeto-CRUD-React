// IMPORT PADÃO DO REACT
import React from 'react';
// IMPORT DOS ICONES // USAMOS O {} VAZIO PARA IMPORTAR TUDO O QUE O COMPONENTE TIVER
import { FaPlus } from 'react-icons/fa';
// IMPORT DA LIB PROP-TYPES
import PropTypes from 'prop-types';

// IMPORT DO ESTILO DO COMPONENTE
import './Form.css';

// CRIANDO NOSSO COMPONENTE(FUNÇÃO) SEM ESTADO,POR CONVENÇÃO NOMEAMOS A FUNÇÃO COM O MESMO NOME DO COMPONENTE
// VAMOS PASSAR A PROPRIEDADE "props" COMO  PARAMETRO, ELA PASSA PROPRIEDADES DE UM COMPONENTE PARA OUTRO
export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleChange}
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

// Form.defaultProps = {
//   novaTarefa: 'Valor Padrão',
// };

// AQUI VAMOS DEFINIR OS TIPOS DAS FUNÇÕES COM O propTypes E DEFINIRI SE SÃO REQUIRIDAS OU NÃO
// PARA FUNÇÕES QUE NÃO SÃO REQUIRIDAS, PRECISAMOS INFORMAR UM VALOR DEFALUT(ACIMA)
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};


