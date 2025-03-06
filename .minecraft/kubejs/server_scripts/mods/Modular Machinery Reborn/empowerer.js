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
        .requireItem('minecraft:nether_brick', 30, 5)
        .requireItem('minecraft:red_dye', 30, 25)
        .requireItem('minecraft:redstone', 30, 45)
        .requireItem('minecraft:brick', 30, 65)
        .requireItem('actuallyadditions:restonia_crystal', 30, 85)
        .produceItem('1x actuallyadditions:empowered_restonia_crystal_block', 120, 5)

    mmr("craftlin:empowerer", 20) // Double-layer-capacitor
        .requireEnergy(10000, 0 ,0)
        .requireItem('2x enderio:basic_capacitor', 30, 5)
        .requireItem('2x enderio:energetic_alloy_ingot', 30, 25)
        .requireItem('1x mekanism:dust_coal', 30, 45)
        .produceItem('1x enderio:double_layer_capacitor', 120, 5)


    mmr("craftlin:empowerer", 20) // Octadic-Capacitor
        .requireEnergy(10000, 0 ,0)
        .requireItem('2x enderio:double_layer_capacitor', 30, 5)
        .requireItem('2x enderio:vibrant_alloy_ingot', 30, 25)
        .requireItem('1x minecraft:glowstone', 30, 45)
        .produceItem('1x enderio:octadic_capacitor', 120, 5)
})
console.log('Modular Machines: Advanced Empowerer.js is loaded!')