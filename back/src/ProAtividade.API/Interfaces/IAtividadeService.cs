using ProAtividade.API.Models;

namespace ProAtividade.API.Interfaces
{
    public interface IAtividadeService
    {
        Task<Atividade> AddAtividade(Atividade model);
        Task<Atividade> UpdateAtividade(int atividadeId, Atividade model);
        Task<bool> DeleteAtividade(int atividadeId);
        Task<List<Atividade>> GetAllAtividadesAsync();
        Task<Atividade> GetAtividadeByIdAsync(int atividadeId);
    }
}