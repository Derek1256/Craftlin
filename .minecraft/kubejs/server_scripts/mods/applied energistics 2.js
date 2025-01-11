console.log('Initlizating Applied Energistics 2.js!')
ServerEvents.recipes(craftlin => {

    // Quantum Armor

    function quantumcraft(output, armorInput) {
    craftlin.shaped(output, [
        'QWQ',
        'QNQ',
        'PSP'
    ], {
        Q: 'advanced_ae:quantum_processor',
        W: 'ae2:wireless_access_point',
        P: 'advanced_ae:quantum_alloy_plate',
        S: 'advanced_ae:quantum_storage_component',
        N: armorInput
    })
   }
   quantumcraft('advanced_ae:quantum_helmet', 'mekanism:mekasuit_helmet')
   quantumcraft('advanced_ae:quantum_chestplate', 'mekanism:mekasuit_bodyarmor')
   quantumcraft('advanced_ae:quantum_leggings', 'mekanism:mekasuit_pants')
   quantumcraft('advanced_ae:quantum_boots', 'mekanism:mekasuit_boots')

    // Inert Infinity Cell
   
    craftlin.shaped(Item.of('craftlin:inert_infinity_cell', 1), ['ACA', 'DBD', 'ACA'], 
    {
        A: 'megacells:cell_component_16m',
        B: 'megacells:mega_item_cell_housing',
        C: 'ae2:calculation_processor',
        D: 'ae2:singularity'

    }).id('craftlin:appliedenergistics2/inert_infinity_cell')
   
   
   // Infinity Cells

    function infinitycell(itemInput, output) {
        craftlin.shaped(output, [
            'ABA',
            'CDC',
            'EEE'
        ], {
            A: 'ae2:quartz_glass',
            B: 'megacells:accumulation_processor',
            C: itemInput,
            D: 'craftlin:inert_infinity_cell',
            E: 'craftlin:quantum_steel'
        })
       }
    
    infinitycell('minecraft:lava_bucket', 'extendedae:me_infinity_lava_cell')
    infinitycell('allthecompressed:dirt_4x', 'extendedae:me_infinity_dirt_cell')
    infinitycell('allthecompressed:andesite_4x', 'extendedae:me_infinity_andesite_cell')
    infinitycell('allthecompressed:diorite_4x', 'extendedae:me_infinity_diorite_cell')
    infinitycell('allthecompressed:calcite_3x', 'extendedae:me_infinity_calcite_cell')
    infinitycell('allthecompressed:netherrack_4x', 'extendedae:me_infinity_netherrack_cell')
    infinitycell('allthecompressed:soul_sand_4x', 'extendedae:me_infinity_soul_sand_cell')
    infinitycell('allthecompressed:granite_4x', 'extendedae:me_infinity_granite_cell')
    infinitycell('allthecompressed:basalt_4x', 'extendedae:me_infinity_basalt_cell')
    infinitycell('allthecompressed:blackstone_4x', 'extendedae:me_infinity_blackstone_cell')
    infinitycell('allthecompressed:tuff_4x', 'extendedae:me_infinity_tuff_cell')
    infinitycell('allthecompressed:end_stone_5x', 'extendedae:me_infinity_endstone_cell')
    infinitycell('allthecompressed:sand_4x', 'extendedae:me_infinity_sand_cell')
    infinitycell('allthecompressed:moss_block_3x', 'extendedae:me_infinity_moss_cell')
})
console.log('Applied Energistics 2.js is loaded!')