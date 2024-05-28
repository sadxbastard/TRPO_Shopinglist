using System.Collections.Generic;

namespace ShoppingList.Models
{
    public class  ItemCategory
    {
        public ItemCategory()
        {
            Id = Guid.NewGuid();
            NameItemCategory = string.Empty;
            Items = [];
        }

        public ItemCategory(string nameItemCategory, List<Item>? items)
        {
            Id = Guid.NewGuid();
            NameItemCategory = nameItemCategory;
            Items = items ?? [];
            CreatedAt = DateTime.UtcNow;
        }

        public Guid Id { get; private set; }

        public string NameItemCategory { get; set; }

        public List<Item> Items { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
