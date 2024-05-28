using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoppingList.Contracts;
using ShoppingList.DataAccess;
using ShoppingList.Models;
using System.Globalization;

namespace ShoppingList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShoppingListController : ControllerBase
    {
        private readonly ShoppingListDbContext _dbContext;

        public ShoppingListController(ShoppingListDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost("CreateItemCategory")]
        public async Task<IActionResult> CreateItemCategory([FromBody] CreateItemCategoryRequest request, CancellationToken ct)
        {
            if (request.NameItemCategory != null)
            {
                string nameItemCategory = char.ToUpper(request.NameItemCategory[0]) + request.NameItemCategory.Substring(1).ToLower();

                var foundItemCategory = await _dbContext.ItemCategories
                                                        .FirstOrDefaultAsync(n => n.NameItemCategory == nameItemCategory);
                if (foundItemCategory == null)
                {
                    var category = new ItemCategory(nameItemCategory, request.Items);

                    await _dbContext.ItemCategories.AddAsync(category, ct);
                    await _dbContext.SaveChangesAsync(ct);
                    return Ok();
                }
                return NotFound();
            }
            return BadRequest();
        }

        [HttpPatch("EditItemCategory")]
        public async Task<IActionResult> EditCategory([FromBody] EditItemCategoryRequest request, CancellationToken ct)
        {
            var category = await _dbContext.ItemCategories
                .FirstOrDefaultAsync(x => x.Id == request.Id);

            if (category == null)
            {
                return NotFound();
            }

            if (!string.IsNullOrWhiteSpace(request.nNameItemCategory))
            {
                category.NameItemCategory = request.nNameItemCategory.Trim().ToLower();
            }

            await _dbContext.SaveChangesAsync(ct);

            return Ok();
        }

        [HttpDelete("DeleteItemCategory")]
        public async Task<IActionResult> DeleteItemCategory([FromBody] Guid Id, CancellationToken ct)
        {
            var category = await _dbContext.ItemCategories
            .Include(x => x.Items)
            .FirstOrDefaultAsync(x => x.Id == Id);

            if (category == null)
            {
                return NotFound();
            }

            _dbContext.Items.RemoveRange(category.Items);

            _dbContext.ItemCategories.Remove(category);

            await _dbContext.SaveChangesAsync(ct);

            return Ok();
        }

        [HttpPost("CreateItem")]
        public async Task<IActionResult> CreateItem([FromBody] CreateItemRequest request, CancellationToken ct)
        {
            int quantity = request.Quantity ?? 1;
            bool isBought = request.IsBought ?? false;
            string nameItem = string.Empty;
            string nameItemCategory = string.Empty;

            if (!string.IsNullOrEmpty(request.NameItem))
            {
                nameItem = request.NameItem.Trim();
            }
            else
            {
                nameItem = "Без названия";
            }

            if (!string.IsNullOrEmpty(request.NameItemCategory))
            {
                nameItemCategory = char.ToUpper(request.NameItemCategory[0]) + request.NameItemCategory.Substring(1).ToLower();
            }
            else
            {
                nameItemCategory = "Без категории";
            }

            var foundItemCategory = await _dbContext
                .ItemCategories
                .Include(x => x.Items)
                .FirstOrDefaultAsync(x => x.NameItemCategory == nameItemCategory);

            if (foundItemCategory == null)
            {
                var item = new Item(nameItem, quantity, isBought, null);

                var category = new ItemCategory(nameItemCategory, new List<Item> { item });

                item.ItemCategoryId = category.Id;

                await _dbContext.Items.AddAsync(item, ct);

                await _dbContext.ItemCategories.AddAsync(category, ct);
            }
            else
            {
                var item = new Item(nameItem, quantity, isBought, foundItemCategory.Id);

                foundItemCategory.Items.Add(item);

                await _dbContext.Items.AddAsync(item, ct);
            }

            await _dbContext.SaveChangesAsync(ct);

            return Ok();
        }

        [HttpPatch("EditItem")]
        public async Task<IActionResult> EditItem([FromBody] EditItemRequest request, CancellationToken ct)
        {
            var item = await _dbContext.Items.FirstOrDefaultAsync(x => x.Id == request.Id);

            if (item == null)
            {
                return NotFound();
            }

            item.NameItem = request.nNameItem ?? item.NameItem;
            item.Quantity = request.nQuantity ?? item.Quantity;
            item.IsBought = request.nIsBought ?? item.IsBought;
            item.ItemCategoryId = request.nItemCategoryId ?? item.ItemCategoryId;

            await _dbContext.SaveChangesAsync(ct);

            return Ok();
        }

        [HttpDelete("DeleteItem/{id}")]
        public async Task<IActionResult> DeleteItem([FromRoute] Guid id, CancellationToken ct)
        {
            var item = await _dbContext.Items.FirstOrDefaultAsync(x => x.Id == id);

            if (item == null)
            {
                return NotFound();
            }

            var category = await _dbContext.ItemCategories.FirstOrDefaultAsync(c => c.Id == item.ItemCategoryId);

            if (category != null)
            {
                category.Items.Remove(item);
            }

            _dbContext.Items.Remove(item);
            await _dbContext.SaveChangesAsync(ct);

            return Ok();
        }

        [HttpGet("GetItemCategories")]
        public async Task<IActionResult> GetItemCategories(CancellationToken ct)
        {
            var categoryDtos = await _dbContext.ItemCategories
               .Include(n => n.Items)
               .OrderBy(n => n.CreatedAt) // Сортировка в памяти
               .Select(n => new ItemCategoryDto(
                   n.Id,
                   n.NameItemCategory,
                   n.Items.OrderBy(i => i.CreatedAt).ToList(), // Сортировка элементов
                   n.CreatedAt))
               .ToListAsync();

            return Ok(new GetItemCategoriesResponse(categoryDtos));
        }

        [HttpGet("GetItems")]
        public async Task<IActionResult> GetItems(CancellationToken ct)
        {
            var itemDtos = await _dbContext.Items
                .OrderBy(n => n.CreatedAt) // сортировка элементов
                .Select(n => new ItemDto(n.Id, n.NameItem, n.Quantity, n.IsBought, n.ItemCategoryId))
                .ToListAsync(ct);

            return Ok(new GetItemsResponse(itemDtos));
        }

        [HttpGet("GetItemsByCategory")]
        public async Task<IActionResult> GetItemsByCategory([FromQuery] Guid Id, CancellationToken ct)
        {
            var foundItemCategory = await _dbContext.ItemCategories
                                                    .Include(n => n.Items)
                                                    .FirstOrDefaultAsync(n => n.Id == Id);

            if (foundItemCategory != null)
            {
                var itemDtos = foundItemCategory.Items
                    .OrderBy(n => n.CreatedAt) // сортировка элементов внутри категории
                    .Select(n => new ItemDto(n.Id, n.NameItem, n.Quantity, n.IsBought, n.ItemCategoryId))
                    .ToList();
                return Ok(new GetItemsResponse(itemDtos));
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
