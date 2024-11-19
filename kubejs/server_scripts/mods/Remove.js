//priority 20
const removerecipebyid = [
    'mysticalagriculture:machine_frame',
    'mysticalagriculture:soulium_spawner',
    'mekanism:reaction/coal_gasification/dusts_coals',
    'mekanism:reaction/coal_gasification/blocks_coals',
    'mekanism:reaction/coal_gasification/coals',
    'mekanismgenerators:generator/gas_burning',
    'ae2things:disk_housing',
    'ae2things:disk_drive_1k',
    'ae2things:disk_drive_4k',  
    'ae2things:disk_drive_16k',
    'ae2things:disk_drive_64k',
    'ae2things:disk_drive_1k_with_housing',
    'ae2things:disk_drive_4k_with_housing',
    'ae2things:disk_drive_16k_with_housing',
    'ae2things:disk_drive_64k_with_housing',
    'pylons:infusion_pylon',
    'pylons:potion_filter',
    'justdirethings:creaturecatcher',
    'enderio:silicon',
    'refinedstorage:silicon'
]
ServerEvents.recipes(craftlin => {
    console.log('Initlizating Recipe Removal.js!')
    removerecipebyid.forEach((recipe) => {
        craftlin.remove({ id: recipe })
    })
    console.log('Recipe Removal.js is loaded!')
})