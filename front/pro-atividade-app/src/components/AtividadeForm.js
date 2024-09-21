import React from 'react'

export default function AtividadeForm(props) {
  return (
    <form classname="row g-3">
        <div classname="col-md-6">
            <label for="inputEmail" classname="form-label">Id</label>
            <input id="id" type="text" classname="form-control" 
            value={Math.max(...props.atividades.map(atividade => atividade.id)) + 1} disabled />
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
        <button classname="btn btn-outline-success" onClick={props.adicionarAtividade}>Adicionar</button>
    </form>
  )
}