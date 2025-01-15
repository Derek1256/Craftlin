ServerEvents.recipes(craftlin => {

    let mmr = craftlin.recipes.modular_machinery_reborn.machine_recipe

    function circuits(itemInput, itemInput2, itemInput3, output, energy, time) {
        mmr("craftlin:circuit_dream", time)
        .progressX("64")
        .width("128")
        .height("128")
        .requireEnergy(energy, 0, 0)
        .requireItem(itemInput, 30, 5)
        .requireItem(itemInput2, 30, 25)
        .requireItem(itemInput3, 30, 45)
        .produceItem(output, 108, 5)
    }

    circuits("64x minecraft:redstone", "64x minecraft:gold_ingot", "64x ae2:silicon", "64x ae2:logic_processor", "125000", 40)
    circuits("64x minecraft:redstone", "64x ae2:certus_quartz_crystal", "64x ae2:silicon", "64x ae2:calculation_processor", "125000", 40)
    circuits("64x minecraft:redstone", "64x minecraft:diamond", "64x ae2:silicon", "64x ae2:engineering_processor", "125000", 40)
    circuits("64x minecraft:redstone", "64x megacells:sky_steel_ingot", "64x ae2:silicon", "64x megacells:accumulation_processor", "125000", 40)
    circuits("64x minecraft:redstone", "64x appflux:charged_redstone", "64x ae2:silicon", "64x appflux:energy_processor", "125000", 40)
    circuits("64x minecraft:redstone", "64x advanced_ae:quantum_alloy", "64x ae2:silicon", "64x advanced_ae:quantum_processor", "125000", 40)
})

   