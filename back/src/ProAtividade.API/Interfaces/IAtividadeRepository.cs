using ProAtividade.API.Models;

namespace ProAtividade.API.Interfaces
{
    public interface IAtividadeRepository
    {
        Task<List<Atividade>> GetAllAtividades();
        Task<Atividade> GetAtividadeById(int atividadeId);
        void Add(Atividade model);
        void Update(Atividade model);
        void Delete(Atividade model);
    }
}