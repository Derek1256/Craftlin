ServerEvents.recipes(craftlin => {
    craftlin.shaped(Item.of('craftlin:draconium_ingot_block', 1), ['AAA', 'AAA', 'AAA'], { A: 'craftlin:draconium_ingot' }).id('craftlin:crafting/draconium_block')

    // Multiblock related

    craftlin.shaped(Item.of('craftlin:quantum_glass', 2), ['ACA', 'DBD', 'ACA'], { A: 'modern_industrialization:quantum_circuit_board', B: 'allthecompressed:glass_2x', C: 'mekanismgenerators:reactor_glass', D: 'advanced_ae:quantum_alloy_block' }).id('craftlin:crafting/quantum_glass')
    craftlin.shaped(Item.of('craftlin:stained_casing', 1), ['ABA', 'BCB', 'ABA'], { A: 'modern_industrialization:stainless_steel_ingot', B: 'mekanism:steel_casing', C: 'modular_machinery_reborn:casing_plain' }).id('craftlin:crafting/stained_casing')
    craftlin.shaped(Item.of('craftlin:molecular_casing', 1), ['BCB', 'DAD', 'BCB'], { A: 'craftlin:stained_casing', B: 'mekanism_extras:supreme_control_circuit', C: 'megacells:accumulation_processor', D: 'alltheores:netherite_plate'}).id('craftlin:crafting/molecular_casing')












})