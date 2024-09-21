import './App.css';
import { useState } from 'react';

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
    
    console.log(atividades)
    setAtividades([...atividades, atividade])
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id)
    setAtividades(atividadesFiltradas)
  }

  function editarAtividade(id) {
    // const atividade = atividades.find(atividade => atividade.id === id)
    // document.getElementById('id').value = atividade.id
    // document.getElementById('prioridade').value = atividade.prioridade
    // document.getElementById('titulo').value = atividade.titulo
    // document.getElementById('descricao').value = atividade.descricao
    // setAtividades(atividades.filter(atividade => atividade.id !== id))
  }

  function prioridadeLabel(prioridade) {
    switch (prioridade) {
      case 1:
        return 'Baixa'
      case 2:
        return 'Normal'
      case 3:
        return 'Alta'
      default:
        return 'Não definida'
    }
  }

  function prioridadestyle(prioridade, icon) {
    switch (prioridade) {
        case 1:
            return icon ? 'smile' : 'primary'
        case 2:
            return icon ? 'meh' : 'warning'
        case 3:
            return icon ? 'frown' : 'danger'
        default:
            return icon ? 'question' : 'secondary'
    }
  }

  return (
    <>
      <form classname="row g-3">
        <div classname="col-md-6">
          <label for="inputEmail" classname="form-label">Id</label>
          <input id="id" type="text" classname="form-control" 
            value={Math.max(...atividades.map(atividade => atividade.id)) + 1} disabled />
        </div>

        <div classname="col-md-6">
          <label for="inputState" classname="form-label">Prioridade</label>
          <select id="prioridade" classname="form-select">
              <option defaultValue="0">Escolha...</option>
              <option value="1">Alta</option>
              <option value="2">Normal</option>
              <option value="3">Baixa</option>
          </select>
        </div>
      
        <div classname="col-md-6">
          <label for="inputEmail" classname="form-label">Título</label>
          <input id="titulo" type="text" classname="form-control" />
        </div>

        <div classname="col-md-6">
          <label for="inputEmail" classname="form-label">Descrição</label>
          <input id="descricao" type="text" classname="form-control" />
        </div>
        <button classname="btn btn-outline-success" onClick={adicionarAtividade}>Adicionar</button>
      </form>
     
      <div className="mt-3">
            {atividades.map(atividade => (
              <div key={atividade.id} className="card mb-2 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between">                    
                    <h5 className="card-title">
                      <span className="badge bg-primary me-2">{atividade.id}</span>
                      - {atividade.titulo}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Prioridade: 
                        <span className={"badge me-2 bg-" + prioridadestyle(atividade.prioridade)}>
                          <i className={"ms-2 me-2 far fa-" + prioridadestyle(atividade.prioridade, true)}></i>
                          {prioridadeLabel(atividade.prioridade)}
                        </span>
                      </h6>
                    </div>
                  <p className="card-text"> {atividade.descricao}</p>
                  <div className="d-flex justify-content-end">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-primary me-2" onClick={() => editarAtividade(atividade.id)}>
                        <i className="fas fa-pen me-2"></i>
                        Editar</button>
                      <button type="button" className="btn btn-sm btn-outline-danger me-2" onClick={() => deletarAtividade(atividade.id)}>
                        <i className="fas fa-trash me-2"></i>
                        Excluir</button>
                    </div>                    
                </div>
                </div>
              </div>
            ))}         
      </div>
    </>
  );
}

export default App;
