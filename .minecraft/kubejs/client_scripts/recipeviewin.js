console.log('Initializing Client script: recipeviewin.js!')
RecipeViewerEvents.removeEntriesCompletely('item', craftlin => {
    craftlin.remove('#craftlin:compressed')
})
 RecipeViewerEvents.addInformation('fluid', craftlin => {
    craftlin.add('advanced_ae:quantum_infusion_source', [
        'In a Reaction chamber: §b5 buckets of Water§f + §c1x Quantum Infused Dust§f = §51 bucket of Quantum Infusion'
    ])
 })
 RecipeViewerEvents.addEntries('item', craftlin => {
    craftlin.add('ae2:facade[ae2:facade_item="minecraft:stone"]')
 })
console.log('recipeviewin.js has been loaded!')