ServerEvents.recipes(craftlin => {
    console.log('Initializing Mekanism.js!')
    craftlin.shaped(Item.of('mekanismgenerators:gas_burning_generator', 1), ['OAO', 'SCS', 'OAO'], 
    {
        O: 'alltheores:osmium_ingot',
        A: 'mekanism:ultimate_control_circuit',
        S: 'mekanism:steel_casing',
        C: 'mekanism:electrolytic_core'

    })
})