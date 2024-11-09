
import { useState, useEffect } from 'react';
import './App.css';
import { Modal, Button } from 'react-bootstrap';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';
import api from './api/atividade';

function App() {
  const [show, setShow] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });

  const handleShow = () => setShow(!show);
  const handleShowConfirmModal = (id) => {
    if (id !== 0 && id !== undefined) {
      const atividade = atividades.filter((atividade) => atividade.id === id);
      setAtividade(atividade[0]);
    }
    else {
      setAtividade({ id: 0 });
    }
    setShowConfirmModal(!showConfirmModal);
  }

  const pegarTodasAtividades = async () => {
    const response = await api.get('atividade');
    return response.data;
  }

  useEffect(() => {
    const getAtividades = async () => {
      const todasAtividades = await pegarTodasAtividades();
      if (todasAtividades) setAtividades(todasAtividades);
    };
    getAtividades();
  }, []);

  const addAtividade = async (atividade) => {
    const response = await api.post('atividade', atividade);
    setAtividades([...atividades, response.data]);
    handleShow();
  };

  const novaAtividade = () => {
    setAtividade({ id: 0 });
    handleShow();
  }

  const cancelarAtividade = () => {
    setAtividade({ id: 0 });
    handleShow();
  }

  const atualizarAtividade = async (atividade) => {
    await api.put(`atividade/${atividade.id}`, atividade);
    setAtividades(
      atividades.map((ativ) => (ativ.id === atividade.id ? atividade : ativ))
    );
    setAtividade({ id: 0 });
    handleShow();
  }
  const deletarAtividade = async (id) => {
    handleShowConfirmModal(0);
    await api.delete(`atividade/${id}`);
    setAtividades(atividades.filter((ativ) => ativ.id !== id));
    handleShowConfirmModal();
  }
  const pegarAtividade = async (id) => {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0]);
    handleShow();
  }
  return (
    <>
      <div className='d-flex justify-content-between align-items-end mt-2 pb-2 border-bottom border-2'>
        <h2>Atividades</h2>
        <Button variant='primary' onClick={handleShow}>
          Adicionar Atividade
        </Button>
      </div>

      <AtividadeLista
        atividades={atividades}
        pegarAtividade={pegarAtividade}
        handleShowConfirmModal={handleShowConfirmModal}
      />

      <Modal show={show} onHide={novaAtividade}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Atividade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AtividadeForm
            addAtividade={addAtividade}
            cancelarAtividade={cancelarAtividade}
            atualizarAtividade={atualizarAtividade}
            ativSelecionada={atividade}
            atividades={atividades}
          />
        </Modal.Body>
      </Modal>

      <Modal size='sm' show={showConfirmModal} onHide={handleShowConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Excluindo Atividade {' ' + atividade.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Confirma a exclusão da atividade?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => handleShowConfirmModal(0)}>
            Cancelar
          </Button>
          <Button variant='danger' onClick={() => deletarAtividade(atividade.id)}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default App;