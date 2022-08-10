// COMPONENTE CRIADO MANUALMENTE
// O IMPORT REACT É NECESSÁRIO EM TODOS OS COMPONENTES
// FAREMOS DESTRUCTURING { exemplo } PARA CRIAR UMA CLASSE QUE HERDE DO ELEMENTO DESTRUCUTRING
import React, { Component } from 'react';

// IMPORT DOS COMPONENTES FORM / TAREFAS
import Form from './Form';
import Tarefas from './Tarefas';

// IMPORT DO ARQUIVO DE ESTILO
import './Main.css';

// AQUI VAMOS EXPORTAR A CLASSE MAIN EXTENDENDO O COMPONENT
export default class Main extends Component {
  // COMPONENTES QUE TEM ESTADO, COMO ESSE, NECESSITAM TER UM ESTADO
  // IREMOS CRIAR O ESTADO COM UM RECURSO CHAMADO CLASS FIELD
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1, // SEMPRE QUE O ESTADO DESSE INDEX NÃO FOR -1, ESTAREMOS EDITANDO A PAGINA
  };

  // IREMOS CRIAR AGORA AS FUNÇÕES PARA SALVAR OS ITENS NO localStorage DO NAVEGADOR
  // O HOOK COMPONENT ABAIXO É EXECUTADO UMA VEZ SEMPRE QUE O COMPONENTE FOR MONTADO
  componentDidMount() {
    // PEGANDO OS ITENS DO LOCALSTORAGE
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    // CASO NÃO EXISTAM TAREFAS NÓS NÃO FAREMOS NADA
    if (!tarefas) return;

    // SE EXISTIREM TAREFAS NÓS SETAMOS O ESTADO
    this.setState({ tarefas });
  }

  // O HOOK COMPONENT ABAIXO RECEBE ATUALIZAÇÕES SEMPRE QUE O COMPONENTE RECEBE QUALQUER ATUALIZAÇÃO
  // USAREMOS DOIS PARAMETROS QUE RECEBEM PROPRIEDADES E ESTADO(prevProps E prevState)
  // AMBOS PARAEMTROS RECEBEM UMA ENTAPA ATERIOR DAS PROPS E ESTADOS EM QUE ESTÃO NO MOMENTO
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    // SE A TAREFA JA EXISTIR, NÃO OCORRERÁ EVENTO DE MUDANÇA
    if (tarefas === prevState.tarefas) return;

    // AGORA IREMOS PASSAR AS TAREFAS PARA O LOCALSTORAGE
    // TEMOS QUE PASSAR COMO JSON.stringfy
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  // CRIANDO UMA FUNÇÃO PARAO EVENTO DE SUNMIT
  handleSubmit = (e) => {
    // PASSANDO UM EVENTO PADRÃO PARA O ENVIO DO FORM
    e.preventDefault();
    // PEGANDO OS STATES QUE SERÃO ALTERADOS
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    // ELIMINANDO ESPAÇOS DE DIGITAÇÃO COM O TRIM
    novaTarefa = novaTarefa.trim();

    // CHECANDO SE UMA NOVA TAREFA JÁ EXISTE NA LISTA DE TAREFA
    if (tarefas.indexOf(novaTarefa) !== -1) return; /* SE O ÍNDICE DA NOVA TAREFA FOR MAIOR QUE 0,
    ESSA TAREFA JÁ EXISTE! LOGO, SÓ RETORNAMOS O QUE JA TEMOS */

    // CRIANDO NOVAS TAREFAS
    const novasTarefas = [...tarefas];

    // ATUALIZANDO O ESTADO DAS TAREFAS PRA RECEBER NOVAS TAREFAS
    if (index === -1) { // SE O ESTADO index QUE CRIAMOS FOR -1, ESTAMOS RECEBENDO TAREFAS
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '', // DEIXANDO O INPUT VAZIO APÓS O SUBMIT
      });
    } else { // SE O ESTADO index NÃO FOR -1, ESTAREMOS EDITANDO
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  // CRIANDO UMA FUNÇÃO PARA MUDAR O VALOR DE UM INPUT
  handleChange = (e) => {
    this.setState({ // USAMOS O SET PARA FAZER ALTERAÇÕES NO ESTADO
      novaTarefa: e.target.value,
    });
  };

  // CRIANDO UMA FUNÇÃO PARA EDITAR UMA TAREFA
  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  // CRIANDO UMA FUNÇÃO PARA EXCLUIR UMA TAREFA
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1); // ELIMINANDO O ELEMENTO PELO INDICE

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  // PRECISAMOS RENDERIZAR O CONTEUDO
  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      // PARA USARMOS CLASSE E ID EM JSX TEMOS UMA NOTAÇÃO DIFERENTE
      <div className="main">
        <h1> LISTA DE TAREFAS </h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}
