StartupEvents.registry('item', craftlin => {
    
    // Infinity Cell Housing
    
    craftlin.create('craftlin:inert_infinity_cell').displayName('Inert infinity cell').texture('craftlin:item/infinity_cells/inert_infinity_cell')
    
    // block Cells

    craftlin.create('extendedae:me_infinity_dirt_cell', 'custom_infinity_cell').itemType('minecraft:dirt').texture('craftlin:item/infinity_cells/infinity_cell_dirt')
    craftlin.create('extendedae:me_infinity_sand_cell', 'custom_infinity_cell').itemType('minecraft:sand').texture('craftlin:item/infinity_cells/infinity_cell_sand')
    craftlin.create('extendedae:me_infinity_andesite_cell', 'custom_infinity_cell').itemType('minecraft:andesite').texture('craftlin:item/infinity_cells/infinity_cell_andesite')
    craftlin.create('extendedae:me_infinity_diorite_cell', 'custom_infinity_cell').itemType('minecraft:diorite').texture('craftlin:item/infinity_cells/infinity_cell_diorite')
    craftlin.create('extendedae:me_infinity_netherrack_cell', 'custom_infinity_cell').itemType('minecraft:netherrack').texture('craftlin:item/infinity_cells/infinity_cell_netherrack')
    craftlin.create('extendedae:me_infinity_moss_cell', 'custom_infinity_cell').itemType('minecraft:moss_block').texture('craftlin:item/infinity_cells/infinity_cell_moss')
    craftlin.create('extendedae:me_infinity_tuff_cell', 'custom_infinity_cell').itemType('minecraft:tuff').texture('craftlin:item/infinity_cells/infinity_cell_tuff')
    craftlin.create('extendedae:me_infinity_endstone_cell', 'custom_infinity_cell').itemType('minecraft:end_stone').texture('craftlin:item/infinity_cells/infinity_cell_endstone')
    craftlin.create('extendedae:me_infinity_blackstone_cell', 'custom_infinity_cell').itemType('minecraft:blackstone').texture('craftlin:item/infinity_cells/infinity_cell_blackstone')
    craftlin.create('extendedae:me_infinity_basalt_cell', 'custom_infinity_cell').itemType('minecraft:basalt').texture('craftlin:item/infinity_cells/infinity_cell_basalt')
    craftlin.create('extendedae:me_infinity_calcite_cell', 'custom_infinity_cell').itemType('minecraft:calcite').texture('craftlin:item/infinity_cells/infinity_cell_calcite')
    craftlin.create('extendedae:me_infinity_soul_sand_cell', 'custom_infinity_cell').itemType('minecraft:soul_sand').texture('craftlin:item/infinity_cells/infinity_cell_soul_sand')
    craftlin.create('extendedae:me_infinity_granite_cell', 'custom_infinity_cell').itemType('minecraft:granite').texture('craftlin:item/infinity_cells/infinity_cell_granite')
    
    // Fluid Cells

    craftlin.create('extendedae:me_infinity_lava_cell', 'custom_infinity_cell').fluidType('minecraft:lava').texture('craftlin:item/infinity_cells/infinity_cell_lava')
})