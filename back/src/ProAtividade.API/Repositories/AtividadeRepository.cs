using Microsoft.EntityFrameworkCore;
using ProAtividade.API.Data;
using ProAtividade.API.Interfaces;
using ProAtividade.API.Models;

namespace ProAtividade.API.Repositories
{
    public class AtividadeRepository : IAtividadeRepository
    {
        private readonly DataContext _context;

        public AtividadeRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Atividade>> GetAllAtividades()
        {
            return await _context.Atividades.ToListAsync();
        }

        public async Task<Atividade> GetAtividadeById(int atividadeId)
        {
            return await _context.Atividades.FirstOrDefaultAsync(a => a.Id == atividadeId);
        }

        public void Add(Atividade model)
        {
            _context.Add(model);
            _context.SaveChanges();
        }

        public void Update(Atividade model)
        {
            _context.Update(model);
            _context.SaveChanges();
        }

        public void Delete(Atividade model)
        {
            _context.Remove(model);
            _context.SaveChanges();
        }
    }
}
