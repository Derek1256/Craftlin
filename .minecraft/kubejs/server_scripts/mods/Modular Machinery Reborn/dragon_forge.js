
ServerEvents.recipes(craftlin => {
    
    let mmr = craftlin.recipes.modular_machinery_reborn.machine_recipe

    mmr("craftlin:dragon_forge", 3600) // Draconium Ingots
        .progressX("64")
        .width("128")
        .height("128")
        .requireEnergy(45000, 0, 0)
        .requireFluid('1000x minecraft:lava', 30, 25)
        .requireItem('1x craftlin:draconium_ingot_dust', 30, 5)
        .produceItem('1x craftlin:draconium_ingot', 108, 5)


    mmr("craftlin:dragon_forge", 80) // Dragonic Steel
        .progressX("64")
        .width("128")
        .height("128")
        .requireEnergy(100000, 0, 0)
        .requireFluid('1000x minecraft:lava', 30, 45)
        .requireItem('4x alltheores:steel_ingot', 30, 5)
        .requireItem('1x craftlin:dragon_heart', 30, 25)
        .produceItem('2x craftlin:dragonic_steel_ingot', 108, 5)



    // the controller of MB

    craftlin.shaped(Item.of('modular_machinery_reborn:controller[modular_machinery_reborn:machine="craftlin:dragon_forge"]', 1), ['CDC', 'BAB', 'CDC'], { A: 'modular_machinery_reborn:blueprint', B: 'craftlin:wyvern_core', C: 'mekanism_extras:supreme_control_circuit', D: 'modular_machinery_reborn:modularium'})
})