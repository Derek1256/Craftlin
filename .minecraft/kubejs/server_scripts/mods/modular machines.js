console.log('Initlizating Modular Machines.js!')
ServerEvents.recipes(craftlin => {
    let mmr = craftlin.recipes.modular_machinery_reborn.machine_recipe
    // Custom Miners
    mmr("craftlin:mine_tier_2", 5600).requireEnergy(5000, 0, 0).produceItem('1x minecraft:iron_ore', 0, 0)
    mmr("craftlin:mine_tier_2", 5600).requireEnergy(5000, 0, 0).produceItem('1x alltheores:tin_ore', 1, 0)
        .produceItem('1x minecraft:copper_ore', 2, 0)
        .produceItem('1x minecraft:coal_ore', 3, 0)
        .produceItem('1x alltheores:osmium_ore', 4, 0)
        .produceItem('1x minecraft:lapis_ore', 5, 0)
        .produceItem('1x minecraft:diamond_ore', 6, 0)
        .produceItem('1x alltheores:nickel_ore', 7, 0)
        .produceItem('1x minecraft:redstone_ore', 8, 0)
    
    // Advanced Empowerer
    mmr("craftlin:empowerer", 20) // Empowered canola seeds
        .requireEnergy(5000, 0, 0)
        .requireItem('4x actuallyadditions:canola_seeds', 0, 0)
        .requireItem('1x actuallyadditions:crystallized_canola_seed', 0, 0)
        .produceItem('1x actuallyadditions:empowered_canola_seed', 0, 0)

    mmr("craftlin:empowerer", 20) // Empowered Diamatine 
        .requireEnergy(5000, 0, 0)
        .requireItem('2x minecraft:clay_ball', 0, 0)
        .requireItem('1x minecraft:clay', 0, 0)
        .requireItem('1x minecraft:light_blue_dye', 0, 0)
        .requireItem('1x actuallyadditions:diamatine_crystal', 0, 0)
        .produceItem('1x actuallyadditions:empowered_diamatine_crystal', 0, 0)
    mmr("craftlin:empowerer", 20) // Empowered Diamatine Block
        .requireEnergy(5000, 0, 0)
        .requireItem('2x minecraft:clay_ball', 0, 0)
        .requireItem('1x minecraft:clay', 0, 0)
        .requireItem('1x minecraft:light_blue_dye', 0, 0)
        .requireItem('1x actuallyadditions:diamatine_crystal_block', 0, 0)
        .produceItem('1x actuallyadditions:empowered_diamatine_crystal_block', 0, 0)
    // Modularium
    mmr("craftlin:alloy_smelter", 20)
        .requireEnergy(10000, 0, 0)
        .requireItem('2x minecraft:iron_ingot', 0, 0)
        .requireItem('2x minecraft:gold_ingot', 0, 0)
        .requireItem('3x minecraft:redstone', 0, 0)
        .produceItem('4x modular_machinery_reborn:modularium', 0, 0)


})
console.log('Modular Machines.js is loaded!')