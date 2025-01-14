ServerEvents.recipes(craftlin => {
    console.log('Initializing Minecraft.js!')
    craftlin.shaped(Item.of('minecraft:chest', 4), ['LLL', 'L L', 'LLL'], 
    {
        L: '#minecraft:logs'
    })

    // stonecutter

   // craftlin.stonecutting('modular_machinery_reborn:controller[modular_machinery_reborn:machine="craftlin:dragon_forge"]', 'modular_machinery_reborn:blueprint')
    craftlin.stonecutting('modular_machinery_reborn:controller[modular_machinery_reborn:machine="craftlin:alloy_smelter"]', 'modular_machinery_reborn:blueprint')
    craftlin.stonecutting('modular_machinery_reborn:controller[modular_machinery_reborn:machine="craftlin:empowerer"]', 'modular_machinery_reborn:blueprint')
    craftlin.stonecutting('modular_machinery_reborn:controller[modular_machinery_reborn:machine="craftlin:circuit_dream"]', 'modular_machinery_reborn:blueprint')

    console.log('Minecraft.js has loaded!')
})

// Loot Tables

LootJS.lootTables(craftlin => {

    // Edit Ender Dragon Loot Pool

    craftlin.getLootTable("minecraft:entities/ender_dragon").firstPool().addEntry("craftlin:draconium_ingot_dust")
})

