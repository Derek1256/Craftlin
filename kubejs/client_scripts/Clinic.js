console.log('Initializing Client script: Clinic.js!')
ItemEvents.modifyTooltips(craftlin => {
    craftlin.add('ae2:singularity', "§cExtendedAE's Void cell inside a ME IO Port is very good for this when filtered to cobble + infinity cobble cell.")
    craftlin.add([
        'mysticalagriculture:entro_crystal_essence', 
        'mysticalagriculture:entro_crystal_seeds', 
        'mysticalagriculture:xychorium_seeds', 
        'mysticalagriculture:xychorium_essence'], "§9Added by: Developer: §dDerek")
    craftlin.add('#craftlin:tooltip_colored', "§aCan be any color!")    
    //craftlin.add(['mekanismadditions:white_plastic_transparent_slab', 'mekanismadditions:white_plastic_slab', 'mekanismadditions:white_plastic_glow_slab', 'mekanismadditions:white_plastic', 'mekanismadditions:white_slick_plastic', 'mekanismadditions:white_plastic_glow', 'mekanismadditions:white_reinforced_plastic', 'mekanismadditions:white_plastic_road', 'mekanismadditions:white_plastic_transparent', 'mekanismadditions:white_plastic_glow_stairs', 'mekanismadditions:white_plastic_glow_stairs', 'mekanismadditions:white_plastic_stairs', 'mekanismadditions:white_plastic_fence', 'mekanismadditions:white_plastic_fence_gate', 'mekanismadditions:white_plastic_glow_stairs'], "§aCan be any color!")
})
/* RecipeViewerEvents.removeEntries('item', craftlin => {
    craftlin.remove('#craftlin:hidejei') // Go to server_scripts/tags.js to hide items from JEI.
 })
const readd = [ 
    'mekanismadditions:white_plastic_transparent_slab',
    'mekanismadditions:white_plastic_slab',
    'mekanismadditions:white_plastic_glow_slab',
    'mekanismadditions:white_plastic',
    'mekanismadditions:white_slick_plastic',
    'mekanismadditions:white_plastic_glow',
    'mekanismadditions:white_reinforced_plastic',
    'mekanismadditions:white_plastic_road',
    'mekanismadditions:white_plastic_transparent',
    'mekanismadditions:white_plastic_glow_stairs',
    'mekanismadditions:white_plastic_glow_stairs',
    'mekanismadditions:white_plastic_stairs',
    'mekanismadditions:white_plastic_fence',
    'mekanismadditions:white_plastic_fence_gate',
    'mekanismadditions:white_plastic_glow_stairs',
    'refinedstorage:controller',
    'refinedstorage:cable',
    'refinedstorage:exporter',
    'refinedstorage:external_storage',
    'refinedstorage:constructor',
    'refinedstorage:destructor',
    'refinedstorage:wireless_transmitter',
    'refinedstorage:grid',
    'refinedstorage:crafting_grid',
    'refinedstorage:pattern_grid',
    'refinedstorage:detector',
    'refinedstorage:importer',
    'refinedstorage:network_transmitter',
    'refinedstorage:network_receiver',
    'refinedstorage:security_manager',
    'refinedstorage:relay',
    'refinedstorage:disk_interface',
    'refinedstorage:autocrafter',
    'refinedstorage:autocrafter_manager',
    'ae2:fluix_glass_cable',
    'ae2:fluix_smart_cable',
    'ae2:fluix_covered_cable',
    'ae2:fluix_covered_dense_cable',
    'ae2:fluix_smart_dense_cable'
]
RecipeViewerEvents.addEntries('item', craftlin => {
      readd.forEach((jei) => {
        craftlin.add(jei)
    })
}) */
console.log('Clinic.js has been loaded!')