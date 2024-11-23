console.log('Initializing Mekanism.js!')
ServerEvents.recipes(craftlin => {
    craftlin.shaped(Item.of('mekanismgenerators:gas_burning_generator', 1), ['OAO', 'SCS', 'OAO'], 
    {
        O: 'alltheores:osmium_ingot',
        A: 'mekanism:ultimate_control_circuit',
        S: 'mekanism:steel_casing',
        C: 'mekanism:electrolytic_core'

    })
    // Crushers
    let crusher = craftlin.recipes.mekanism.crushing
    crusher('extendedae:entro_dust', 'extendedae:entro_crystal')
    crusher('modern_industrialization:silicon_dust', '#c:silicon')
})
console.log('Initialized Mekanism.js!')