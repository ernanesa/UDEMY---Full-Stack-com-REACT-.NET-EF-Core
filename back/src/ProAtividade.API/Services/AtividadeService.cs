
using ProAtividade.API.Interfaces;
using ProAtividade.API.Models;

namespace ProAtividade.API.Services
{
    public class AtividadeService : IAtividadeService
    {
        private readonly IAtividadeRepository _atividadeRepository;

        public AtividadeService(IAtividadeRepository atividadeRepository)
        {
            _atividadeRepository = atividadeRepository;
        }

        public async Task<Atividade> AddAtividade(Atividade model)
        {
            try
            {
                _atividadeRepository.Add(model);
                return model;
            }
            catch (Exception ex)
            {
                throw new Exception($"Erro ao tentar adicionar atividade. Erro: {ex.Message}");
            }
        }

        public async Task<Atividade> UpdateAtividade(int atividadeId, Atividade model)
        {
            try
            {
                var atividade = await _atividadeRepository.GetAtividadeById(atividadeId);
                if (atividade == null) return null;

                atividade.Titulo = model.Titulo;
                atividade.Descricao = model.Descricao;
                atividade.Prioridade = model.Prioridade;

                _atividadeRepository.Update(atividade);
                return atividade;
            }
            catch (Exception ex)
            {
                throw new Exception($"Erro ao tentar atualizar atividade. Erro: {ex.Message}");
            }
        }

        public async Task<bool> DeleteAtividade(int atividadeId)
        {
            try
            {
                var atividade = await _atividadeRepository.GetAtividadeById(atividadeId);
                if (atividade == null) throw new Exception("Atividade para deletar não encontrada.");

                _atividadeRepository.Delete(atividade);
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"Erro ao tentar deletar atividade. Erro: {ex.Message}");
            }
        }

        public async Task<List<Atividade>> GetAllAtividadesAsync()
        {
            try
            {
                var atividades = await _atividadeRepository.GetAllAtividades();
                if (atividades == null) return null;

                return atividades;
            }
            catch (Exception ex)
            {
                throw new Exception($"Erro ao tentar recuperar atividades. Erro: {ex.Message}");
            }
        }

        public async Task<Atividade> GetAtividadeByIdAsync(int atividadeId)
        {
            try
            {
                var atividade = await _atividadeRepository.GetAtividadeById(atividadeId);
                if (atividade == null) return null;

                return atividade;
            }
            catch (Exception ex)
            {
                throw new Exception($"Erro ao tentar recuperar atividade. Erro: {ex.Message}");
            }
        }
    }
}