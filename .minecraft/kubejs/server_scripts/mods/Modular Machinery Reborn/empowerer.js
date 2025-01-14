console.log('Initlizating Modular Machines: Advanced Empowerer.js.js!')
ServerEvents.recipes(craftlin => {
    let mmr = craftlin.recipes.modular_machinery_reborn.machine_recipe
    // Advanced Empowerer
    mmr("craftlin:empowerer", 20) // Empowered canola seeds
        .requireEnergy(5000, 0, 0)
        .requireItem('4x actuallyadditions:canola_seeds', 0, 0)
        .requireItem('1x actuallyadditions:crystallized_canola_seed', 0, 0)
        .produceItem('1x actuallyadditions:empowered_canola_seed', 0, 0)

    mmr("craftlin:empowerer", 20) // Empowered Diamatine 
        .requireEnergy(2500, 0, 0)
        .requireItem('2x minecraft:clay_ball', 30, 5)
        .requireItem('1x minecraft:clay', 30, 25)
        .requireItem('1x minecraft:light_blue_dye', 30, 45)
        .requireItem('1x actuallyadditions:diamatine_crystal', 30, 65)
        .produceItem('1x actuallyadditions:empowered_diamatine_crystal', 120, 5)
    mmr("craftlin:empowerer", 40) // Empowered Diamatine Block
        .requireEnergy(5000, 0, 0)
        .requireItem('2x minecraft:clay_ball', 30, 5)
        .requireItem('1x minecraft:clay', 30, 25)
        .requireItem('1x minecraft:light_blue_dye', 30, 45)
        .requireItem('1x actuallyadditions:diamatine_crystal_block', 30, 65)
        .produceItem('1x actuallyadditions:empowered_diamatine_crystal_block', 120, 5)
    mmr("craftlin:empowerer", 40) // Empowered Redstonia Block
        .requireEnergy(5000, 0, 0)
        .requireItem('minecraft:nether_brick', 0, 0)
        .requireItem('minecraft:red_dye', 0, 0)
        .requireItem('minecraft:redstone', 0, 0)
        .requireItem('minecraft:brick', 0, 0)
        .requireItem('actuallyadditions:restonia_crystal', 0, 0)
        .produceItem('1x actuallyadditions:empowered_restonia_crystal_block', 0, 0)
})
console.log('Modular Machines: Advanced Empowerer.js is loaded!')