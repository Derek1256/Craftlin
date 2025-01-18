ServerEvents.recipes(craftlin => {

    craftlin.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
          "ABCBA",
          "BDEDB",
          "CEFEC",
          "BDEDB",
          "ABCBA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:flux_star"
          },
          "B": {
            "item": "extendedcrafting:black_iron_slate"
          },
          "C": {
            "item": "modern_industrialization:steel_ring"
          },
          "D": {
            "item": "mekanism:alloy_reinforced"
          },
          "E": {
            "item": "fluxnetworks:flux_dust"
          },
          "F": {
            "item": "minecraft:ender_eye"
          }
        },
        "result": {
          "id": "fluxnetworks:flux_core"
        }
      })
})