Lista de Tarefas em React

Projeto simples de lista de tarefas desenvolvido com React para praticar conceitos fundamentais da biblioteca.

Funcionalidades
Adicionar tarefas
Remover tarefas
Marcar tarefas como concluídas
Limpar o input após adicionar
Conceitos praticados

Este projeto utiliza:

useState
Renderização com map()
Atualização de arrays
Objetos
Eventos (onClick e onChange)
filter()
Atualização imutável com spread operator (...)
Estrutura da tarefa

Cada tarefa possui:

{
  id: Date.now(),
  texto: "Estudar React",
  concluida: false
}
Como funciona
Adicionar tarefa

Cria um novo objeto de tarefa e adiciona no array de tarefas.

setTarefas([...tarefas, novaTarefa]);
Remover tarefa

Utiliza filter() para remover a tarefa selecionada.

tarefas.filter((tarefa) => tarefa.id !== id)
Concluir tarefa

Utiliza map() para atualizar apenas a tarefa clicada.

tarefas.map((tarefa) => {})

Tecnologias utilizadas
React
JavaScript
JSX
Objetivo do projeto

Praticar a manipulação de estados e listas no React através de um CRUD básico de tarefas.

Melhorias futuras
Estilização com CSS
Persistência no LocalStorage
Editar tarefas
Filtro de concluídas
Contador de tarefas
Dark mode
Aprendizados

Durante o desenvolvimento foram praticados conceitos importantes do React como:

Componentes funcionais
Estados com useState
Manipulação de arrays
Imutabilidade
Renderização dinâmica
Passagem de parâmetros em eventos
