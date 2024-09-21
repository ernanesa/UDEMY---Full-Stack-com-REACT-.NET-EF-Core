import './App.css';
import { useState } from 'react';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';


function App() {
  const initialState = [
    {
      id: 1,
      prioridade: 1,
      titulo: 'Acordar',
      descricao: 'Acordar cedo para tomar café'
    },
    {
      id: 2,
      prioridade: 2,
      titulo: 'Tomar café',
      descricao: 'Tomar café para transformar café em código'
    },
    {
      id: 3,
      prioridade: 3,
      titulo: 'Transformar café em código',
      descricao: 'Transformar café em código'
    }
  ]
  const [atividades, setAtividades] = useState(initialState);

  function adicionarAtividade(event) {
    event.preventDefault()
    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value
    }
    
    setAtividades([...atividades, atividade])
    console.log(atividades)
  }



  function editarAtividade(id) {
    // const atividadicionarAtividade={adicionarAtividade}ade = atividades.find(atividade => atividade.id === id)
    // document.getElementById('id').value = atividade.id
    // document.getElementById('prioridade').value = atividade.prioridade
    // document.getElementById('titulo').value = atividade.titulo
    // document.getElementById('descricao').value = atividade.descricao
    // setAtividades(atividades.filter(atividade => atividade.id !== id))
  }
  
  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id)
    setAtividades(atividadesFiltradas)
  }


  return (
    <>
      <AtividadeForm 
        adicionarAtividade={adicionarAtividade} 
        atividades={atividades}
      />    
     
     <AtividadeLista
        atividades={atividades}
        editarAtividade={editarAtividade}
        deletarAtividade={deletarAtividade}
      />
    </>
  );
}

export default App;
