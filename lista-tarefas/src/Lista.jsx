import { useState } from "react";

export const Lista = () => {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
  }

  function removerTarefa(id) {
    const novasTarefas = tarefas.filter((tarefa) => {
      return tarefa.id != id;
    });
    setTarefas(novasTarefas);
  }
  function concluirTarefa(id) {
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefas,
          concluida: !tarefa.concluida,
        };
      }
      return tarefa;
    });
    setTarefas(tarefasAtualizadas);
  }

  return (
    <>
      <h1>Lista de tarefas:</h1>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      {tarefas.map((tarefa) => (
        <div key={tarefa.id}>
          <p>{tarefa.texto}</p>

          <button onClick={() => concluirTarefa(tarefa.id)}>Concluir</button>
          <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
        </div>
      ))}
    </>
  );
};
