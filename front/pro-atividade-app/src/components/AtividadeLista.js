import React from 'react'
import Atividade from './Atividade';

export default function AtividadeLista(props) {
  return (
    <div className="mt-3">
        {props.atividades.map(atividade => (
          <Atividade 
            key={atividade.id} 
            atividade={atividade} 
            // editarAtividade={props.editarAtividade}
            deletarAtividade={props.deletarAtividade}
          />
        ))}
            
      </div>
  )
}
