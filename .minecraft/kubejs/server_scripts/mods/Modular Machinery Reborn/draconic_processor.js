ServerEvents.recipes(craftlin => {
    let mmr = craftlin.recipes.modular_machinery_reborn.machine_recipe

    mmr("craftlin:draconic_processor", 16800) // Draconium Ingots, The shit way
        .progressX("64")
        .width("128")
        .height("128")
        .requireEnergy(95000, 0, 0)
        .requireFluid('1000x minecraft:lava', 30, 25)
        .requireItem('1x craftlin:draconium_ingot_dust', 30, 5)
        .produceItem('1x craftlin:draconium_ingot', 108, 5)
})


MMREvents.machines(craftlin => {
    craftlin.create("craftlin:draconic_processor")
    .color("#FF444856")
    .name('Draconic Processor')
    .structure(
        MMRStructureBuilder.create()
        .pattern([
            ["aaa","aaa","aaa"],
            ["ama","d c","aba"],
            ["aaa","aea","aaa"]
        ])
        .keys({
            "a":["craftlin:stained_casing"],
            "b":["#modular_machinery_reborn:energyinputhatch"],
            "c":["#modular_machinery_reborn:fluidinputhatch"],
            "d":["#modular_machinery_reborn:inputbus"],
            "e":["#modular_machinery_reborn:outputbus"]
        }))
    .sound("RUNNING", {
        "interaction": {
            "volume": 1,
            "pitch": 1,
            "break": "mekanism:tile.machine.laser",
            "step": "mekanism:tile.machine.laser",
            "place": "mekanism:tile.machine.laser",
            "hit": "mekanism:tile.machine.laser",
            "fall": "mekanism:tile.machine.laser"
            
        }})
})