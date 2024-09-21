import React from 'react'

export default function Atividade(props) {

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
    <div key={props.atividade.id} className="card mb-2 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between">                    
                    <h5 className="card-title">
                        <span className="badge bg-primary me-2">{props.atividade.id}</span>
                        - {props.atividade.titulo}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Prioridade: 
                    <span className={"badge me-2 bg-" + prioridadestyle(props.atividade.prioridade)}>
                        <i className={"ms-2 me-2 far fa-" + prioridadestyle(props.atividade.prioridade, true)}></i>
                        {prioridadeLabel(props.atividade.prioridade)}
                    </span>
                    </h6>
                </div>
                <p className="card-text"> {props.atividade.descricao}</p>
                <div className="d-flex justify-content-end">
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-primary me-2" onClick={() => props.editarAtividade(props.atividade.id)}>
                    <i className="fas fa-pen me-2"></i>
                    Editar</button>
                    <button type="button" className="btn btn-sm btn-outline-danger me-2" onClick={() => props.deletarAtividade(props.atividade.id)}>
                    <i className="fas fa-trash me-2"></i>
                    Excluir</button>
                </div>                    
            </div>
        </div>
    </div>
  )
}
