console.log('Server Scripts/Mods: Initlizating Applied Energistics 2.js!')
ServerEvents.recipes(craftlin => {
   
    // Applied Experienced

   craftlin.shaped(Item.of('appex:experience_converter', 1), ['ACA', 'CBC', 'ACA'], { A: 'ae2:engineering_processor', B: 'enderio:experience_rod', C: 'minecraft:glass' }).id('craftlin:apppliedexp/crafting/expconverter')
   
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

    function infinitycell(itemInput, output, rid) {
        craftlin.shaped(output, [
            'ABA',
            'CDC',
            'EEE'
        ], {
            A: 'ae2:quartz_glass',
            B: 'megacells:accumulation_processor',
            C: itemInput,
            D: 'craftlin:inert_infinity_cell',
            E: 'craftlin:dragonic_steel_ingot'
        }).id(rid)
       }
    
    infinitycell('minecraft:lava_bucket', 'extendedae:me_infinity_lava_cell', 'craftlin:extendedae/infinity_cell/lava')
    infinitycell('allthecompressed:dirt_4x', 'extendedae:me_infinity_dirt_cell', 'craftlin:extendedae/infinity_cell/dirt')
    infinitycell('allthecompressed:andesite_4x', 'extendedae:me_infinity_andesite_cell', 'craftlin:extendedae/infinity_cell/andesite')
    infinitycell('allthecompressed:diorite_4x', 'extendedae:me_infinity_diorite_cell', 'craftlin:extendedae/infinity_cell/diorite')
    infinitycell('allthecompressed:calcite_3x', 'extendedae:me_infinity_calcite_cell', 'craftlin:extendedae/infinity_cell/calcite')
    infinitycell('allthecompressed:netherrack_4x', 'extendedae:me_infinity_netherrack_cell', 'craftlin:extendedae/infinity_cell/netherrack')
    infinitycell('allthecompressed:soul_sand_4x', 'extendedae:me_infinity_soul_sand_cell', 'craftlin:extendedae/infinity_cell/soul_sand')
    infinitycell('allthecompressed:granite_4x', 'extendedae:me_infinity_granite_cell', 'craftlin:extendedae/infinity_cell/granite')
    infinitycell('allthecompressed:basalt_4x', 'extendedae:me_infinity_basalt_cell', 'craftlin:extendedae/infinity_cell/basalt')
    infinitycell('allthecompressed:blackstone_4x', 'extendedae:me_infinity_blackstone_cell', 'craftlin:extendedae/infinity_cell/blackstone')
    infinitycell('allthecompressed:tuff_4x', 'extendedae:me_infinity_tuff_cell', 'craftlin:extendedae/infinity_cell/tuff')
    infinitycell('allthecompressed:end_stone_5x', 'extendedae:me_infinity_endstone_cell', 'craftlin:extendedae/infinity_cell/end_stone')
    infinitycell('allthecompressed:sand_4x', 'extendedae:me_infinity_sand_cell', 'craftlin:extendedae/infinity_cell/sand')
    infinitycell('allthecompressed:moss_block_3x', 'extendedae:me_infinity_moss_cell', 'craftlin:extendedae/infinity_cell/moss_block')
})
console.log('Server Scripts/Mods: Applied Energistics 2.js is loaded!')