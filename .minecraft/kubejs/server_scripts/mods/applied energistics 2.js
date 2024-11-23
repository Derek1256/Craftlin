console.log('Initlizating Applied Energistics 2.js!')
ServerEvents.recipes(craftlin => {
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
})
console.log('Applied Energistics 2.js is loaded!')