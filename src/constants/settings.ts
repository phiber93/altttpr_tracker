export const multiSelectSettings: { [key: string]: { name: String; options: String[] } } = {
  worldState: {
    name: 'World State',
    options: ['Open', 'Standard', 'Inverted'],
  },
  goal: {
    name: 'Goal',
    options: [
      'Defeat Ganon',
      'Fast Ganon',
      'Pedestal',
      'Triforce Hunt',
      'Ganon Hunt',
      'Trinity',
      'Duality',
    ],
  },
  ganonCrystals: {
    name: 'Crystals for Ganon',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', 'Random'],
  },
  gtCrystals: {
    name: 'Crystals for GT',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', 'Random'],
  },
  pottery: {
    name: 'Pottery',
    options: [
      'None',
      'Key Pots',
      'Cave Pots',
      'Cave + Key Pots',
      'Reduced / Clustered Dungeon Pots',
      'Excludes Empty Pots',
      'Dungeon Pots',
      'Lottery',
    ],
  },
  enemyDrops: {
    name: 'Enemy Drops',
    options: ['Keys', 'Underworld Enemies'],
  },
  layoutShuffle: {
    name: 'Layout Shuffle',
    options: ['Vanilla', 'Parallel', 'Full'],
  },
  owCrossed: {
    name: 'Crossed',
    options: ['None', 'Grouped / Polar / Chaos'],
  },
  fluteShuffle: {
    name: 'Flute Shuffle',
    options: ['Vanilla', 'Balanced / Random'],
  },
  entrancShuffle: {
    name: 'Entrance Shuffle',
    options: ['Vanilla', 'Dungeons Simple / Full', 'Lite / Lean', 'Other'],
  },
  smallKeyShuffle: {
    name: 'Small Key Shuffle',
    options: ['In Dungeon', 'Random', 'Universal'],
  },
  doors: {
    name: 'Door Shuffle',
    options: ['Vanilla / Basic', 'Partitioned / Crossed'],
  },
}

export const toggleSettings: { [key: string]: string } = {
  shops: 'Shopsanity',
  bonkDrops: 'Bonk Drops',
  mixed: 'Tile Flip (Mixed OW)',
  whirlpoolShuffle: 'Whirlpool Shuffle',
  freeTerrain: 'Free Terrain',
  keepSimilar: 'Keep Similar',
  gtAndGanon: 'Include GT and Pyramid Hole',
  includeLinks: 'Include Links House',
  includeTavern: 'Include Back of Tavern',
  shuffleMaps: 'Shuffle Maps',
  shuffleCompass: 'Shuffle Compasses',
  enemyShuffle: 'Shuffle Enemies',
}
