
// Consts
//Gas
const $Chemical = Java.loadClass('mekanism.api.chemical.Chemical')
const $ChemicalBuilder = Java.loadClass('mekanism.api.chemical.ChemicalBuilder')
const $ChemicalAttributes = Java.loadClass('mekanism.api.chemical.attribute.ChemicalAttributes')
const $Radiation = $ChemicalAttributes.Radiation

// Radioactive Chemicals

StartupEvents.registry('mekanism:chemical', craftlin => {
    craftlin.createCustom('craftlin:shining_antimatter', () => new $Chemical($ChemicalBuilder.builder()
    .tint(0xA020F0)
    .with(new $Radiation(0.01))
));
});

StartupEvents.registry('mekanism:chemical', craftlin => {
    craftlin.createCustom('craftlin:redstone_mixture', () => new $Chemical($ChemicalBuilder.infuseType()
    .tint(0xFF0000)))
    craftlin.createCustom('craftlin:lavender_diamond', () => new $Chemical($ChemicalBuilder.infuseType()
    .tint(0x18C3D6)))
    craftlin.createCustom('craftlin:obsidrian', () => new $Chemical($ChemicalBuilder.infuseType()
    .tint(0x5B2B78)))
})

// MADE FOR CRAFTLIN