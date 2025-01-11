console.log('Initializing Client script: recipeviewin.js!')
RecipeViewerEvents.removeEntriesCompletely('item', craftlin => {
    craftlin.remove('#craftlin:compressed')
})
 RecipeViewerEvents.addInformation('fluid', craftlin => {
    craftlin.add('advanced_ae:quantum_infusion_source', [
        'In a Reaction chamber: §b5 buckets of Water§f + §c1x Quantum Infused Dust§f = §51 bucket of Quantum Infusion'
    ])
 })
 RecipeViewerEvents.addInformation('item', craftlin => {
    craftlin.add('industrialforegoing:dryrubber', ['In a latex processing unit:§b1 bucket of water§f & 1 bucket of Latex = 1 dry rubber. '])
    craftlin.add('enderio:grains_of_infinity', ['aWhen using xycraft to make this you HAVE to place fire under the obsidian, you can also use netherrack to keep the fire going.'])
})
console.log('recipeviewin.js has been loaded!')