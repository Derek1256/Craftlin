console.log('Initlizating Modular Machines: Custom Miners.js!')
ServerEvents.recipes(craftlin => {
    let mmr = craftlin.recipes.modular_machinery_reborn.machine_recipe
    // Custom Miners
    mmr("craftlin:mine_tier_2", 5600) // Tier 2
        .requireEnergy(5000, 0, 0)
        .produceItem('1x minecraft:iron_ore', 0, 0)
        .produceItem('1x alltheores:tin_ore', 1, 0)
        .produceItem('1x minecraft:copper_ore', 2, 0)
        .produceItem('1x minecraft:coal_ore', 3, 0)
        .produceItem('1x alltheores:osmium_ore', 4, 0)
        .produceItem('1x minecraft:lapis_ore', 5, 0)
        .produceItem('1x minecraft:diamond_ore', 6, 0)
        .produceItem('1x alltheores:nickel_ore', 7, 0)
        .produceItem('1x minecraft:redstone_ore', 8, 0)
})
console.log('Modular Machines: Custom Miners.js is loaded!')