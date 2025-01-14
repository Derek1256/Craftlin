console.log('Initlizating Modular Machines: Alloy Smelter.js!')
ServerEvents.recipes(craftlin => {
    let mmr = craftlin.recipes.modular_machinery_reborn.machine_recipe
    // Alloy Smelter
    mmr("craftlin:alloy_smelter", 20) // Modularium
        .requireEnergy(10000, 0, 0)
        .requireItem('2x minecraft:iron_ingot', 0, 0)
        .requireItem('2x minecraft:gold_ingot', 0, 0)
        .requireItem('3x minecraft:redstone', 0, 0)
        .produceItem('4x modular_machinery_reborn:modularium', 0, 0)
})
console.log('Modular Machines: Alloy Smelter.js is loaded!')