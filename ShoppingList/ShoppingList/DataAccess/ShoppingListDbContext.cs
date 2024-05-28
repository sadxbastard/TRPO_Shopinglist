using Microsoft.EntityFrameworkCore;
using ShoppingList.Models;

namespace ShoppingList.DataAccess
{
    public class ShoppingListDbContext : DbContext
    {
        private IConfiguration _configuration;

        public ShoppingListDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DbSet<Item> Items => Set<Item>();
        public DbSet<ItemCategory> ItemCategories => Set<ItemCategory>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_configuration.GetConnectionString("default"));
        }
    }
}
