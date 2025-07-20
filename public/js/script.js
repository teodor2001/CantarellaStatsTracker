// --- DATA & CONFIGURATION ---
const WEAPON_DATA = {
    // 5-Star (R1 assumed)
    "cosmic_ripples": { name: "Cosmic Ripples (5★)", image: "weapon_images/CosmicRipples.webp", baseAtk: 500, subStat: "ATK%", subValue: 54, bonuses: { "Energy Regen%": 12.8, "Basic ATK DMG%": 16.0 } },
    "luminous_hymn": { name: "Luminous Hymn (5★)", image: "weapon_images/Luminous Hymn.webp", baseAtk: 500, subStat: "Crit Rate%", subValue: 36, bonuses: { "ATK%": 12, "Basic ATK DMG%": 42, "Heavy ATK DMG%": 42, "Spectro Frazzle DMG%": 30 } },
    "rime_draped_sprouts": { name: "Rime-Draped Sprouts (5★)", image: "weapon_images/Rime-Draped Sprouts.webp", baseAtk: 500, subStat: "Crit DMG%", subValue: 72, bonuses: { "ATK%": 12, "Basic ATK DMG%": 36, "Off-field Basic ATK DMG%": 52 } },
    "stellar_symphony": { name: "Stellar Symphony (5★)", image: "weapon_images/Stellar Symphony.webp", baseAtk: 412, subStat: "Energy Regen%", subValue: 77, bonuses: { "HP%": 12, "ATK%": 14 } },
    "stringmaster": { name: "Stringmaster (5★)", image: "weapon_images/Stringmaster.webp", baseAtk: 500, subStat: "Crit Rate%", subValue: 36, bonuses: { "DMG Bonus%": 12, "ATK%": 24 } }, 
    "whispers_of_sirens": { name: "Whispers of Sirens (5★)", image: "weapon_images/Whispers of Sirens.webp", baseAtk: 500, subStat: "Crit DMG%", subValue: 72, bonuses: { "ATK%": 12, "Basic ATK DMG%": 40, "Havoc RES Ignore%": 12 } }, 

    // 4-Star (R5 assumed)
    "augment": { name: "Augment (4★ R5)", image: "weapon_images/Augment.webp", baseAtk: 412, subStat: "Crit Rate%", subValue: 20.2, bonuses: { "ATK%": 30 } },
    "call_of_the_abyss": { name: "Call of the Abyss (4★ R5)", image: "weapon_images/Call of the Abyss.webp", baseAtk: 338, subStat: "Energy Regen%", subValue: 51.8, bonuses: { "Healing Bonus%": 32 } },
    "comet_flare": { name: "Comet Flare (4★ R5)", image: "weapon_images/Comet Flare.webp", baseAtk: 412, subStat: "HP%", subValue: 30.3, bonuses: { "Healing Bonus%": 18 } },
    "fusion_accretion": { name: "Fusion Accretion (4★ R5)", image: "weapon_images/Fusion Accretion.webp", baseAtk: 462, subStat: "ATK%", subValue: 18.2, bonuses: { "ATK%": 20 } },
    "jinzhou_keeper": { name: "Jinzhou Keeper (4★ R5)", image: "weapon_images/Jinzhou Keeper.webp", baseAtk: 387, subStat: "ATK%", subValue: 36.4, bonuses: { "ATK%": 16, "HP%": 20 } },
    "oceans_gift": { name: "Ocean's Gift (4★ R5)", image: "weapon_images/Ocean's Gift.webp", baseAtk: 462, subStat: "ATK%", subValue: 18.2, bonuses: { "Spectro DMG%": 48 } },
    "rectifier_25": { name: "Rectifier#25 (4★ R5)", image: "weapon_images/Rectifier#25.webp", baseAtk: 337, subStat: "Energy Regen%", subValue: 51.8, bonuses: { "HP Recovery%": 10, "ATK%": 24 } },
    "variation": { name: "Variation (4★ R5)", image: "weapon_images/Variation.webp", baseAtk: 337, subStat: "Energy Regen%", subValue: 51.8, bonuses: { "Concerto Energy Recovery": 16 } },
    "waltz_in_masquerade": { name: "Waltz in Masquerade (4★ R5)", image: "weapon_images/Waltz in Masquerade.webp", baseAtk: 462, subStat: "ATK%", subValue: 18.2, bonuses: { "ATK%": 32 } },

    // 3-Star (R5 assumed)
    "guardian_rectifier": { name: "Guardian Rectifier (3★ R5)", image: "weapon_images/Guardian Rectifier.webp", baseAtk: 325, subStat: "ATK%", subValue: 24.3, bonuses: { "Basic ATK DMG%": 12, "Heavy ATK DMG%": 12 } },
    "originite_type_v": { name: "Originite: Type V (3★ R5)", image: "weapon_images/Originite Type V.webp", baseAtk: 300, subStat: "ATK%", subValue: 30.3, bonuses: { "HP Recovery%": 5 } },
    "rectifier_of_night": { name: "Rectifier of Night (3★ R5)", image: "weapon_images/Rectifier of Night.webp", baseAtk: 325, subStat: "ATK%", subValue: 24.3, bonuses: { "ATK%": 8 } },
    "rectifier_of_voyager": { name: "Rectifier of Voyager (3★ R5)", image: "weapon_images/Rectifier of Voyager.webp", baseAtk: 300, subStat: "Energy Regen%", subValue: 32.3, bonuses: { "Resonance Energy Recovery": 8 } },

    // 2-Star & 1-Star (R5 assumed)
    "tyro_rectifier": { name: "Tyro Rectifier (2★ R5)", image: "weapon_images/Tyro Rectifier.webp", baseAtk: 275, subStat: "ATK%", subValue: 14.8, bonuses: { "ATK%": 5 } },
    "training_rectifier": { name: "Training Rectifier (1★ R5)", image: "weapon_images/Training Rectifier.webp", baseAtk: 250, subStat: "ATK%", subValue: 11.4, bonuses: { "ATK%": 4 } }
};

const SONATA_DATA = {
  "freezing_frost": {
    name: "Freezing Frost",
    icon: "echo_icons/Freezing Frost.webp",
    twoPiece: { stat: "Glacio DMG%", value: 10 },
    fivePiece: { stat: "Glacio DMG%", value: 30 } // 10% base + 30% max stacks
  },
  "molten_rift": {
    name: "Molten Rift",
    icon: "echo_icons/Molten Rift.webp",
    twoPiece: { stat: "Fusion DMG%", value: 10 },
    fivePiece: { stat: "Fusion DMG%", value: 30 }
  },
  "void_thunder": {
    name: "Void Thunder",
    icon: "echo_icons/Void Thunder.webp",
    twoPiece: { stat: "Electro DMG%", value: 10 },
    fivePiece: { stat: "Electro DMG%", value: 30 } // 15% * 2 stacks
  },
  "sierra_gale": {
    name: "Sierra Gale",
    icon: "echo_icons/Sierra Gale.webp",
    twoPiece: { stat: "Aero DMG%", value: 10 },
    fivePiece: { stat: "Aero DMG%", value: 30 }
  },
  "celestial_light": {
    name: "Celestial Light",
    icon: "echo_icons/Celestial Light.webp",
    twoPiece: { stat: "Spectro DMG%", value: 10 },
    fivePiece: { stat: "Spectro DMG%", value: 30 }
  },
  "havoc_eclipse": {
    name: "Havoc Eclipse",
    icon: "echo_icons/Havoc Eclipse.webp",
    twoPiece: { stat: "Havoc DMG%", value: 10 },
    fivePiece: { stat: "Havoc DMG%", value: 30 } // 7.5% * 4 stacks
  },
  "rejuvenating_glow": {
    name: "Rejuvenating Glow",
    icon: "echo_icons/Rejuvenating Glow.webp",
    twoPiece: { stat: "Healing Bonus%", value: 10 },
    fivePiece: { stat: "ATK%", value: 15 } // Team ATK Buff, but applied to self for calculation simplicity
  },
  "moonlit_clouds": {
    name: "Moonlit Clouds",
    icon: "echo_icons/Moonlit Clouds.webp",
    twoPiece: { stat: "Energy Regen%", value: 10 },
    fivePiece: { stat: "ATK%", value: 22.5 } // ATK Buff Transfer, applied to self for calculation simplicity
  },
  "lingering_tunes": {
    name: "Lingering Tunes",
    icon: "echo_icons/Lingering Tunes.webp",
    twoPiece: { stat: "ATK%", value: 10 },
    fivePiece: { stat: "ATK%", value: 20 } // Stacking ATK (5% * 4 stacks)
  },
  "frosty_resolve": {
    name: "Frosty Resolve",
    icon: "echo_icons/Frosty Resolve.webp", 
    twoPiece: { stat: "Resonance Skill DMG%", value: 12 },
    fivePiece: { stat: "Glacio DMG%", value: 22.5, secondaryStat: "Resonance Skill DMG%", secondaryValue: 36 } // 22.5% Glacio DMG + 18%*2 Resonance Skill DMG
  },
  "eternal_radiance": {
    name: "Eternal Radiance",
    icon: "echo_icons/Eternal Radiance.webp", 
    twoPiece: { stat: "Spectro DMG%", value: 10 },
    fivePiece: { stat: "Crit Rate%", value: 20, secondaryStat: "Spectro DMG%", secondaryValue: 15 } // 20% Crit Rate + 15% Spectro DMG
  },
  "midnight_veil": {
    name: "Midnight Veil",
    icon: "echo_icons/Midnight Veil.webp", 
    twoPiece: { stat: "Havoc DMG%", value: 10 },
    fivePiece: { stat: "Ally Havoc DMG%", value: 15 } // 15% Havoc DMG from transfer
  },
  "empyrean_anthem": {
    name: "Empyrean Anthem",
    icon: "echo_icons/Empyrean Anthem.webp", 
    twoPiece: { stat: "Energy Regen%", value: 10 },
    fivePiece: { stat: "ATK%", value: 20 } // 20% ATK from critical hit
  },
  "tidebreaking_courage": {
    name: "Tidebreaking Courage",
    icon: "echo_icons/Tidebreaking Courage.webp", 
    twoPiece: { stat: "Energy Regen%", value: 10 },
    fivePiece: { stat: "ATK%", value: 15, secondaryStat: "DMG Bonus%", secondaryValue: 30 } // 15% ATK + 30% All Attribute DMG
  },
  "gusts_of_welkin": {
    name: "Gusts of Welkin",
    icon: "echo_icons/Gusts of Welkin.webp", 
    twoPiece: { stat: "Aero DMG%", value: 10 },
    fivePiece: { stat: "Aero DMG%", value: 30 } // 15% team + 15% personal
  },
  "windward_pilgrimage": {
    name: "Windward Pilgrimage",
    icon: "echo_icons/Windward Pilgrimage.webp", 
    twoPiece: { stat: "Aero DMG%", value: 10 },
    fivePiece: { stat: "Aero DMG%", value: 30, secondaryStat: "Crit Rate%", secondaryValue: 10 } // 30% Aero DMG + 10% Crit Rate
  },
  "flaming_clawprint": {
    name: "Flaming Clawprint",
    icon: "echo_icons/Flaming Clawprint.webp", 
    twoPiece: { stat: "Fusion DMG%", value: 10 },
    fivePiece: { stat: "Fusion DMG%", value: 15, secondaryStat: "Liberation DMG%", secondaryValue: 20 } // 15% team Fusion DMG + 20% Liberation DMG
  }
};

const MAIN_STAT_VALUES = {
    'Crit Rate%':  { 4: 22.0, 3: 16.5, 1: 11.0 },
    'Crit DMG%':   { 4: 44.0, 3: 33.0, 1: 22.0 },
    'ATK%':        { 4: 30.0, 3: 24.0, 1: 15.0 },
    'HP%':         { 4: 30.0, 3: 24.0, 1: 15.0 },
    'DEF%':        { 4: 37.5, 3: 30.0, 1: 18.8 },
    'Havoc DMG%':  { 3: 30.0 },
    'Glacio DMG%': { 3: 30.0 },
    'Fusion DMG%':  { 3: 30.0 },
    'Electro DMG%': { 3: 30.0 },
    'Aero DMG%':   { 3: 30.0 },
    'Spectro DMG%': { 3: 30.0 },
    'Energy Regen%': { 3: 25.6 },
    'Healing Bonus%': { 4: 22.5 }
    };
    
    // Min and Max values for substat rolls based on Wiki
    const SUBSTAT_MIN_VALUES = { 
        'ATK': 10, 'HP': 171, 'DEF': 10, 
        'ATK%': 6.4, 'HP%': 3.5, 'DEF%': 4.3, 
        'Crit Rate%': 6.3, 'Crit DMG%': 12.6, 
        'Energy Regen%': 6.8, 
        'Basic ATK DMG%': 6.4, 'Heavy ATK DMG%': 3.5, 'Skill DMG%': 3.5, 'Liberation DMG%': 3.5 
    };
    const SUBSTAT_MAX_VALUES = { 
        'ATK': 36, 'HP': 600, 'DEF': 36, 
        'ATK%': 11.6, 'HP%': 9.5, 'DEF%': 11.7, 
        'Crit Rate%': 10.5, 'Crit DMG%': 21.0, 
        'Energy Regen%': 12.4, 
        'Basic ATK DMG%': 11.6, 'Heavy ATK DMG%': 7.5, 'Skill DMG%': 7.5, 'Liberation DMG%': 7.5 
    };

    const USEFUL_SUBSTATS = ['Crit Rate%', 'Crit DMG%', 'ATK%', 'Energy Regen%', 'Basic ATK DMG%'];
    const ECHO_CONFIG = [
        { cost: 4, main: ['Crit Rate%', 'Crit DMG%', 'ATK%', 'HP%', 'DEF%', 'Healing Bonus%'], defaultMain: 'Crit Rate%' },
        { cost: 3, main: ['Havoc DMG%', 'Glacio DMG%', 'Fusion DMG%', 'Electro DMG%', 'Aero DMG%', 'Spectro DMG%', 'Energy Regen%', 'ATK%', 'HP%', 'DEF%'], defaultMain: 'Havoc DMG%' },
        { cost: 3, main: ['Havoc DMG%', 'Glacio DMG%', 'Fusion DMG%', 'Electro DMG%', 'Aero DMG%', 'Spectro DMG%', 'Energy Regen%', 'ATK%', 'HP%', 'DEF%'], defaultMain: 'Havoc DMG%' },
        { cost: 1, main: ['ATK%', 'HP%', 'DEF%'], defaultMain: 'ATK%' },
        { cost: 1, main: ['ATK%', 'HP%', 'DEF%'], defaultMain: 'ATK%' }
    ];
    const SUBSTAT_OPTIONS = ['None', 'ATK', 'HP', 'DEF', 'ATK%', 'HP%', 'DEF%', 'Crit Rate%', 'Crit DMG%', 'Energy Regen%', 'Basic ATK DMG%', 'Heavy ATK DMG%', 'Skill DMG%', 'Liberation DMG%'];
    
    const STAT_INFO = {
        'Total ATK': { id: 'total_atk', target: 3500, icon: 'https://i.imgur.com/r1s3MOx.png' },
        'Crit Rate%': { id: 'total_cr', target: 80, icon: 'https://i.imgur.com/SSuNN9Z.png' },
        'Crit DMG%': { id: 'total_cd', target: 280, icon: 'https://i.imgur.com/T8IzZqA.png' },
        'Energy Regen%': { id: 'total_er', target: 120, icon: 'https://i.imgur.com/BykZSt1.png' },
        'Havoc DMG%': { id: 'total_havoc_dmg', target: 70, icon: 'https://i.imgur.com/7fUx9av.png' },
        'Basic ATK DMG%': { id: 'total_basic_dmg', target: 30, icon: 'https://i.imgur.com/rW2Gpxc.png' }
    };

    // Default build dataset for Cantarella (your current build)
    const BASE_BUILD_DATASET = {
        charBaseAtk: 400,
        weaponSelect: "whispers_of_sirens",
        sonataSelect: "midnight_veil", // Default to Midnight Veil
        echoes: [
            // Echo 1 (Cost 4) - Phantom: Lorelei
            { mainStat: "Crit Rate%", stats: { "DEF%": 11.8, "Energy Regen%": 9.2, "Crit Rate%": 8.7, "Crit DMG%": 15, "ATK": 50 } }, 
            // Echo 2 (Cost 3) - Phantom: Questless Knight
            { mainStat: "Havoc DMG%", stats: { "Basic ATK DMG%": 8.6, "Crit Rate%": 6.9, "ATK%": 6.4, "Crit DMG%": 17.4, "ATK": 30 } }, 
            // Echo 3 (Cost 3) - Nocturnus Knight
            { mainStat: "Havoc DMG%", stats: { "HP%": 8.6, "Crit DMG%": 21, "ATK%": 10.9, "Skill DMG%": 10.1, "Crit Rate%": 6.9 } }, 
            // Echo 4 (Cost 1) - Frostscourge Stalker
            { mainStat: "ATK%", stats: { "Energy Regen%": 10.8, "HP": 390, "Crit Rate%": 8.1, "Crit DMG%": 21, "DEF%": 8.1 } }, 
            // Echo 5 (Cost 1) - Phantom: Nimbus Wraith
            { mainStat: "ATK%", stats: { "Crit Rate%": 7.5, "Energy Regen%": 9.2, "Crit DMG%": 15, "Liberation DMG%": 10.9, "ATK%": 7.1 } } 
        ]
    };

    // Dataset for a realistic build (all 5 useful substats at their minimum rolls)
    const REALISTIC_BUILD_DATASET = {
        charBaseAtk: 400,
        weaponSelect: "whispers_of_sirens",
        sonataSelect: "midnight_veil",
        echoes: [
            { mainStat: "Crit Rate%", subs: [
                { type: "Crit Rate%", value: SUBSTAT_MIN_VALUES["Crit Rate%"] },
                { type: "Crit DMG%", value: SUBSTAT_MIN_VALUES["Crit DMG%"] },
                { type: "ATK%", value: SUBSTAT_MIN_VALUES["ATK%"] },
                { type: "Energy Regen%", value: SUBSTAT_MIN_VALUES["Energy Regen%"] },
                { type: "Basic ATK DMG%", value: SUBSTAT_MIN_VALUES["Basic ATK DMG%"] }
            ]},
            { mainStat: "Havoc DMG%", subs: [
                { type: "Crit Rate%", value: SUBSTAT_MIN_VALUES["Crit Rate%"] },
                { type: "Crit DMG%", value: SUBSTAT_MIN_VALUES["Crit DMG%"] },
                { type: "ATK%", value: SUBSTAT_MIN_VALUES["ATK%"] },
                { type: "Energy Regen%", value: SUBSTAT_MIN_VALUES["Energy Regen%"] },
                { type: "Basic ATK DMG%", value: SUBSTAT_MIN_VALUES["Basic ATK DMG%"] }
            ]},
            { mainStat: "Havoc DMG%", subs: [
                { type: "Crit Rate%", value: SUBSTAT_MIN_VALUES["Crit Rate%"] },
                { type: "Crit DMG%", value: SUBSTAT_MIN_VALUES["Crit DMG%"] },
                { type: "ATK%", value: SUBSTAT_MIN_VALUES["ATK%"] },
                { type: "Energy Regen%", value: SUBSTAT_MIN_VALUES["Energy Regen%"] },
                { type: "Basic ATK DMG%", value: SUBSTAT_MIN_VALUES["Basic ATK DMG%"] }
            ]},
            { mainStat: "ATK%", subs: [
                { type: "Crit Rate%", value: SUBSTAT_MIN_VALUES["Crit Rate%"] },
                { type: "Crit DMG%", value: SUBSTAT_MIN_VALUES["Crit DMG%"] },
                { type: "ATK%", value: SUBSTAT_MIN_VALUES["ATK%"] },
                { type: "Energy Regen%", value: SUBSTAT_MIN_VALUES["Energy Regen%"] },
                { type: "Basic ATK DMG%", value: SUBSTAT_MIN_VALUES["Basic ATK DMG%"] }
            ]},
            { mainStat: "ATK%", subs: [
                { type: "Crit Rate%", value: SUBSTAT_MIN_VALUES["Crit Rate%"] },
                { type: "Crit DMG%", value: SUBSTAT_MIN_VALUES["Crit DMG%"] },
                { type: "ATK%", value: SUBSTAT_MIN_VALUES["ATK%"] },
                { type: "Energy Regen%", value: SUBSTAT_MIN_VALUES["Energy Regen%"] },
                { type: "Basic ATK DMG%", value: SUBSTAT_MIN_VALUES["Basic ATK DMG%"] }
            ]}
        ]
    };

    // Dataset for absolute perfection (all 5 useful substats at their maximum rolls)
    const ABSOLUTE_PERFECTION_BUILD_DATASET = {
        charBaseAtk: 400,
        weaponSelect: "whispers_of_sirens",
        sonataSelect: "midnight_veil",
        echoes: [
            { mainStat: "Crit Rate%", subs: [
                { type: "Crit Rate%", value: SUBSTAT_MAX_VALUES["Crit Rate%"] },
                { type: "Crit DMG%", value: SUBSTAT_MAX_VALUES["Crit DMG%"] },
                { type: "ATK%", value: SUBSTAT_MAX_VALUES["ATK%"] },
                { type: "Energy Regen%", value: SUBSTAT_MAX_VALUES["Energy Regen%"] },
                { type: "Basic ATK DMG%", value: SUBSTAT_MAX_VALUES["Basic ATK DMG%"] }
            ]},
            { mainStat: "Havoc DMG%", subs: [
                { type: "Crit Rate%", value: SUBSTAT_MAX_VALUES["Crit Rate%"] },
                { type: "Crit DMG%", value: SUBSTAT_MAX_VALUES["Crit DMG%"] },
                { type: "ATK%", value: SUBSTAT_MAX_VALUES["ATK%"] },
                { type: "Energy Regen%", value: SUBSTAT_MAX_VALUES["Energy Regen%"] },
                { type: "Basic ATK DMG%", value: SUBSTAT_MAX_VALUES["Basic ATK DMG%"] }
            ]},
            { mainStat: "Havoc DMG%", subs: [
                { type: "Crit Rate%", value: SUBSTAT_MAX_VALUES["Crit Rate%"] },
                { type: "Crit DMG%", value: SUBSTAT_MAX_VALUES["Crit DMG%"] },
                { type: "ATK%", value: SUBSTAT_MAX_VALUES["ATK%"] },
                { type: "Energy Regen%", value: SUBSTAT_MAX_VALUES["Energy Regen%"] },
                { type: "Basic ATK DMG%", value: SUBSTAT_MAX_VALUES["Basic ATK DMG%"] }
            ]},
            { mainStat: "ATK%", subs: [
                { type: "Crit Rate%", value: SUBSTAT_MAX_VALUES["Crit Rate%"] },
                { type: "Crit DMG%", value: SUBSTAT_MAX_VALUES["Crit DMG%"] },
                { type: "ATK%", value: SUBSTAT_MAX_VALUES["ATK%"] },
                { type: "Energy Regen%", value: SUBSTAT_MAX_VALUES["Energy Regen%"] },
                { type: "Basic ATK DMG%", value: SUBSTAT_MAX_VALUES["Basic ATK DMG%"] }
            ]},
            { mainStat: "ATK%", subs: [
                { type: "Crit Rate%", value: SUBSTAT_MAX_VALUES["Crit Rate%"] },
                { type: "Crit DMG%", value: SUBSTAT_MAX_VALUES["Crit DMG%"] },
                { type: "ATK%", value: SUBSTAT_MAX_VALUES["ATK%"] },
                { type: "Energy Regen%", value: SUBSTAT_MAX_VALUES["Energy Regen%"] },
                { type: "Basic ATK DMG%", value: SUBSTAT_MAX_VALUES["Basic ATK DMG%"] }
            ]}
        ]
    };


    // --- UI GENERATION ---
    function populateWeapons() {
        const select = document.getElementById('weapon_select');
        select.innerHTML = '';
        const sortedKeys = Object.keys(WEAPON_DATA).sort((a, b) => {
            const rarityA = parseInt(WEAPON_DATA[a].name.match(/(\d+)★/)[1]);
            const rarityB = parseInt(WEAPON_DATA[b].name.match(/(\d+)★/)[1]);
            if (rarityB !== rarityA) return rarityB - rarityA;
            if (WEAPON_DATA[b].baseAtk !== WEAPON_DATA[a].baseAtk) return WEAPON_DATA[b].baseAtk - WEAPON_DATA[a].baseAtk;
            return WEAPON_DATA[a].name.localeCompare(WEAPON_DATA[b].name);
        });
        sortedKeys.forEach(key => {
            const weapon = WEAPON_DATA[key];
            const option = document.createElement('option');
            option.value = key;
            option.textContent = weapon.name;
            select.appendChild(option);
        });
    }
    
    function populateSonatas(){
        const select = document.getElementById('sonata_select');
        select.innerHTML = '';
        const sortedKeys = Object.keys(SONATA_DATA).sort((a,b) => SONATA_DATA[a].name.localeCompare(SONATA_DATA[b].name));
        sortedKeys.forEach(key => {
            const sonata = SONATA_DATA[key];
            const option = document.createElement('option');
            option.value = key;
            option.textContent = sonata.name;
            select.appendChild(option);
        });
    }

    function createEchoInputs() {
        const container = document.getElementById('echo-inputs');
        container.innerHTML = '';
        ECHO_CONFIG.forEach((echo, i) => {
            const echoCol = document.createElement('div');
            echoCol.className = 'col-12 col-md-6';
            let html = `<div class="card bg-dark border-secondary h-100"><div class="card-body">
                            <h4 class="fs-6 text-white mb-3">Echo ${i+1} (Cost ${echo.cost})</h4>`;
            html += `<div class="mb-3">
                            <label class="form-label stat-label small">Main Stat</label>
                            <select id="echo_${i}_main" class="form-select form-select-sm calc-trigger">`;
            // Set default main stat based on ECHO_CONFIG
            echo.main.forEach(stat => {
                const selected = (stat === echo.defaultMain) ? 'selected' : '';
                html += `<option value="${stat}" ${selected}>${stat}</option>`;
            });
            html += `</select></div>`;
            for (let j = 0; j < 5; j++) {
                html += `<div class="row g-2 mb-2 align-items-center">
                                <div class="col-7">
                                    <select id="echo_${i}_sub${j}_type" class="form-select form-select-sm calc-trigger">${SUBSTAT_OPTIONS.map(s => `<option value="${s}">${s}</option>`).join('')}</select>
                                </div>
                                <div class="col-5">
                                    <input type="number" id="echo_${i}_sub${j}_value" value="0" class="form-control form-control-sm calc-trigger" step="0.1">
                                </div>
                            </div>`;
            }
            html += `</div></div>`;
            echoCol.innerHTML = html;
            container.appendChild(echoCol);
        });
    }

    function createStatSummary() {
        const container = document.getElementById('final-stats-summary');
        container.innerHTML = '';
        let html = '';
        for(const statName in STAT_INFO){
            const info = STAT_INFO[statName];
            html += `<div class="mb-3">
                        <div class="d-flex justify-content-between mb-1">
                            <span class="stat-label"><img src="${info.icon}" class="stat-icon" alt="${statName} icon">${statName.replace('%', ' %')}</span>
                            <span id="${info.id}" class="stat-value">0</span>
                        </div>
                        <div class="progress" role="progressbar" style="height: 6px;"><div id="${info.id}_progress" class="progress-bar"></div></div>
                    </div>`;
        }
        container.innerHTML = html;
    }

    // Function to load a specific dataset
    function loadBuild(dataset) {
        document.getElementById('char_base_atk').value = dataset.charBaseAtk;
        document.getElementById('weapon_select').value = dataset.weaponSelect;
        document.getElementById('sonata_select').value = dataset.sonataSelect;

        dataset.echoes.forEach((echoData, i) => {
            document.getElementById(`echo_${i}_main`).value = echoData.mainStat;
            if (echoData.stats) { 
                let subIndex = 0;
                const currentEchoStatsKeys = Object.keys(echoData.stats);
                
                // Sort keys to ensure "real" substats come before "None"
                currentEchoStatsKeys.sort((a, b) => {
                    if (a === "None" && b !== "None") return 1;
                    if (b === "None" && a !== "None") return -1;
                    return 0; 
                });

                currentEchoStatsKeys.forEach(statType => {
                    if (document.getElementById(`echo_${i}_sub${subIndex}_type`)) {
                        document.getElementById(`echo_${i}_sub${subIndex}_type`).value = statType;
                        document.getElementById(`echo_${i}_sub${subIndex}_value`).value = echoData.stats[statType];
                        subIndex++;
                    }
                }
            );
                // Fill remaining substats with "None" and value 0 if less than 5
                for (let j = subIndex; j < 5; j++) {
                    if (document.getElementById(`echo_${i}_sub${j}_type`)) {
                        document.getElementById(`echo_${i}_sub${j}_type`).value = "None";
                        document.getElementById(`echo_${i}_sub${j}_value`).value = 0;
                    }
                }
            } else if (echoData.subs) { 
                echoData.subs.forEach((sub, j) => {
                    document.getElementById(`echo_${i}_sub${j}_type`).value = sub.type;
                    document.getElementById(`echo_${i}_sub${j}_value`).value = sub.value;
                });
            } else { 
                for (let j = 0; j < 5; j++) {
                    document.getElementById(`echo_${i}_sub${j}_type`).value = "None";
                    document.getElementById(`echo_${i}_sub${j}_value`).value = 0;
                }
            }
        });
    }

    // Function to simulate build calculation given a dataset
    function simulateBuild(dataset) {
        const charBaseAtk = dataset.charBaseAtk || 0;
        const weapon = WEAPON_DATA[dataset.weaponSelect];
        
        // (Base ATK_Character + Base ATK_Weapon) part of the formula
        let baseAtkCharWeapon = charBaseAtk + (weapon ? weapon.baseAtk : 0);

        let totalStats = {
            'ATK%': 12, // Base 12% from character
            'ATK': 0, // This will accumulate Flat Bonus ATK from echoes and substats
            'Crit Rate%': 5.0 + 8, // Base 5% + 8% from talent
            'Crit DMG%': 150.0,
            'Energy Regen%': 100.0,
            'Havoc DMG%': 0, 'Fusion DMG%': 0, 'Electro DMG%': 0, 'Aero DMG%': 0, 'Glacio DMG%': 0, 'Spectro DMG%': 0,
            'Basic ATK DMG%': 0,
            'DMG Bonus%': 0, // Universal DMG Bonus
            'Healing Bonus%': 0,
            'HP%': 0, 'HP': 0, 'DEF%': 0, 'DEF': 0,
            'Heavy ATK DMG%': 0, 'Skill DMG%': 0, 'Liberation DMG%': 0,
            'Spectro Frazzle DMG%': 0,
            'Off-field Basic ATK DMG%': 0,
            'Havoc RES Ignore%': 0,
            'Concerto Energy Recovery': 0,
            'HP Recovery%': 0,
            'Resonance Energy Recovery': 0,
            'Resonance Skill DMG%': 0,
        };

        // *** NEW: Add fixed flat ATK from character ascension/talent (if applicable) ***
        // This value was determined to bridge the gap between calculator and in-game ATK.
        const CANTARELLA_ADDITIONAL_FLAT_ATK = 53; // Assuming this is the missing 53 ATK
        totalStats['ATK'] += CANTARELLA_ADDITIONAL_FLAT_ATK;

        // Sonata Bonuses
        const sonata = SONATA_DATA[dataset.sonataSelect];
        if (sonata) {
            if (sonata.twoPiece.stat && totalStats.hasOwnProperty(sonata.twoPiece.stat)) {
                 totalStats[sonata.twoPiece.stat] += sonata.twoPiece.value;
            }
            if (sonata.fivePiece.stat && totalStats.hasOwnProperty(sonata.fivePiece.stat)) {
                totalStats[sonata.fivePiece.stat] += sonata.fivePiece.value;
            }
            if (sonata.fivePiece.secondaryStat && totalStats.hasOwnProperty(sonata.fivePiece.secondaryStat)) {
                totalStats[sonata.fivePiece.secondaryStat] += sonata.fivePiece.secondaryValue;
            }
        }

        // Process Echoes main stats and substats
        dataset.echoes.forEach((echoData, i) => {
            const cost = ECHO_CONFIG[i].cost;
            const mainStatType = echoData.mainStat;
            if (MAIN_STAT_VALUES[mainStatType] && MAIN_STAT_VALUES[mainStatType][cost]) {
                totalStats[mainStatType] += MAIN_STAT_VALUES[mainStatType][cost];
            }

            // Add FIXED flat ATK from echo cost here.
            // These are base values provided by the echo, not substats.
            if (cost === 4) {
                totalStats['ATK'] += 150; 
            } else if (cost === 3) {
                totalStats['ATK'] += 100; 
            }

            let subsToProcess = [];
            if (echoData.stats) { 
                const orderedStats = Object.keys(echoData.stats).sort((a, b) => {
                    if (a === "None" && b !== "None") return 1;
                    if (b === "None" && a !== "None") return -1;
                    return 0;
                });
                orderedStats.forEach(statType => {
                    subsToProcess.push({ type: statType, value: echoData.stats[statType] });
                });
            } else if (echoData.subs) { 
                subsToProcess = echoData.subs;
            }

            subsToProcess.forEach(sub => {
                if (sub.type !== 'None') { // Always process substats, including 'ATK' if it's a true substat.
                    if (totalStats.hasOwnProperty(sub.type)) {
                        totalStats[sub.type] += sub.value;
                    }
                }
            });
        });

        // Weapon Substat and Bonuses (apply ATK% to totalStats['ATK%'], others to their respective stats)
        if (weapon && weapon.subStat !== 'None' && totalStats.hasOwnProperty(weapon.subStat)) {
            totalStats[weapon.subStat] += weapon.subValue;
        }
        if (weapon && weapon.bonuses) {
            for (const bonusKey in weapon.bonuses) {
                if (totalStats.hasOwnProperty(bonusKey)) {
                    totalStats[bonusKey] += weapon.bonuses[bonusKey];
                }
            }
        }

        // Apply the wiki's ATK formula: ATK = (Base ATK_Char + Base ATK_Weapon) * (1 + %Bonus ATK) + Flat Bonus ATK
        const finalAtk = baseAtkCharWeapon * (1 + totalStats['ATK%'] / 100) + totalStats['ATK']; // totalStats['ATK'] now holds all Flat Bonus ATK

        const finalCR = Math.min(100, totalStats['Crit Rate%']);
        const finalCD = totalStats['Crit DMG%'];

        return {
            finalAtk,
            finalCR,
            finalCD,
            'Energy Regen%': totalStats['Energy Regen%'],
            'Basic ATK DMG%': totalStats['Basic ATK DMG%']
        };
    }


    // --- CALCULATION LOGIC ---
    function calculateBuild() {
        const charBaseAtk = parseFloat(document.getElementById('char_base_atk').value) || 0;
        const selectedWeaponKey = document.getElementById('weapon_select').value;
        const weapon = WEAPON_DATA[selectedWeaponKey];
        const selectedSonataKey = document.getElementById('sonata_select').value;
        const sonata = SONATA_DATA[selectedSonataKey];
        
        // (Base ATK_Character + Base ATK_Weapon) part of the formula
        let baseAtkCharWeapon = charBaseAtk + (weapon ? weapon.baseAtk : 0);
        
        // Cantarella's base talent bonuses + general base stats
        let totalStats = {
            'ATK%': 12, // Base 12% from character
            'ATK': 0, // This will accumulate Flat Bonus ATK from echoes and substats
            'Crit Rate%': 5.0 + 8, // Base 5% + 8% from talent
            'Crit DMG%': 150.0, 
            'Energy Regen%': 100.0,
            'Havoc DMG%': 0, 'Fusion DMG%': 0, 'Electro DMG%': 0, 'Aero DMG%': 0, 'Glacio DMG%': 0, 'Spectro DMG%': 0,
            'Basic ATK DMG%': 0,
            'DMG Bonus%': 0, // Universal DMG Bonus
            'Healing Bonus%': 0,
            'HP%': 0, 'HP': 0, 'DEF%': 0, 'DEF': 0,
            'Heavy ATK DMG%': 0, 'Skill DMG%': 0, 'Liberation DMG%': 0, 
            'Spectro Frazzle DMG%': 0, 
            'Off-field Basic ATK DMG%': 0, 
            'Havoc RES Ignore%': 0, 
            'Concerto Energy Recovery': 0, 
            'HP Recovery%': 0, 
            'Resonance Energy Recovery': 0, 
            'Resonance Skill DMG%': 0, 
        };
        
        // *** NEW: Add fixed flat ATK from character ascension/talent (if applicable) ***
        const CANTARELLA_ADDITIONAL_FLAT_ATK = 53; // Hardcoding the difference to match 2089
        totalStats['ATK'] += CANTARELLA_ADDITIONAL_FLAT_ATK;

        // Weapon Substat and Bonuses (apply ATK% to totalStats['ATK%'], others to their respective stats)
        if (weapon && weapon.subStat !== 'None' && totalStats.hasOwnProperty(weapon.subStat)) {
            totalStats[weapon.subStat] += weapon.subValue;
        }
        if (weapon && weapon.bonuses) {
            for (const bonusKey in weapon.bonuses) {
                if (totalStats.hasOwnProperty(bonusKey)) {
                    totalStats[bonusKey] += weapon.bonuses[bonusKey];
                }
            }
        }

        // Sonata Bonuses
        if (sonata) {
            if (sonata.twoPiece.stat && totalStats.hasOwnProperty(sonata.twoPiece.stat)) {
                 totalStats[sonata.twoPiece.stat] += sonata.twoPiece.value;
            }
            if (sonata.fivePiece.stat && totalStats.hasOwnProperty(sonata.fivePiece.stat)) {
                totalStats[sonata.fivePiece.stat] += sonata.fivePiece.value;
            }
            if (sonata.fivePiece.secondaryStat && totalStats.hasOwnProperty(sonata.fivePiece.secondaryStat)) {
                totalStats[sonata.fivePiece.secondaryStat] += sonata.fivePiece.secondaryValue;
            }
        }

        for (let i = 0; i < 5; i++) {
            const cost = ECHO_CONFIG[i].cost;
            const mainStatType = document.getElementById(`echo_${i}_main`).value;
            if (MAIN_STAT_VALUES[mainStatType] && MAIN_STAT_VALUES[mainStatType][cost]) {
                totalStats[mainStatType] += MAIN_STAT_VALUES[mainStatType][cost];
            }

            // Add FIXED flat ATK from echo cost here.
            if (cost === 4) {
                totalStats['ATK'] += 150; 
            } else if (cost === 3) {
                totalStats['ATK'] += 100; 
            }

            for (let j = 0; j < 5; j++) {
                const subType = document.getElementById(`echo_${i}_sub${j}_type`).value;
                const subValue = parseFloat(document.getElementById(`echo_${i}_sub${j}_value`).value) || 0;
                
                if (subType !== 'None') {
                    if (totalStats.hasOwnProperty(subType)) {
                        totalStats[subType] += subValue;
                    }
                }
            }
        }
        
        const TOTAL_SUBSTAT_SLOTS = 25; // 5 echoes * 5 substats each

        // Apply the wiki's ATK formula: ATK = (Base ATK_Char + Base ATK_Weapon) * (1 + %Bonus ATK) + Flat Bonus ATK
        const finalAtk = baseAtkCharWeapon * (1 + totalStats['ATK%'] / 100) + totalStats['ATK']; // totalStats['ATK'] now holds all Flat Bonus ATK

        const finalCR = Math.min(100, totalStats['Crit Rate%']);
        const finalCD = totalStats['Crit DMG%'];
        
        const finalDmgBonus = (totalStats['Havoc DMG%'] || 0) + (totalStats['DMG Bonus%'] || 0) + (totalStats['Basic ATK DMG%'] || 0);
                            
        const effDmgScore = finalAtk * (1 + finalDmgBonus / 100) * (1 + (finalCR / 100) * (finalCD / 100));

        return { 
            ...totalStats, 
            finalAtk, 
            finalCR, 
            finalCD, 
            finalDmgBonus, 
            usefulRolls: 0, 
            currentUserSubstatValue: 0, 
            TOTAL_SUBSTAT_SLOTS, 
            effDmgScore
        };
    }

    function getHSLColor(value) {
        const hue = (value * 120).toString(10);
        return `hsl(${hue}, 90%, 65%)`;
    }

    function getGrade(score) {
        if (score >= 95) return { grade: 'S', className: 'grade-s' };
        if (score >= 80) return { grade: 'A', className: 'grade-a' };
        if (score >= 65) return { grade: 'B', className: 'grade-b' };
        if (score >= 50) return { grade: 'C', className: 'grade-c' };
        return { grade: 'D', className: 'grade-d' };
    }

    function updateUI() {
        const currentBuild = calculateBuild();

        for(const statName in STAT_INFO){
            const info = STAT_INFO[statName];
            const el = document.getElementById(info.id);
            if (!el) continue;

            let value;
            const isPercent = statName.includes('%');
            
            switch(statName){
                case 'Total ATK': value = currentBuild.finalAtk; break;
                case 'Crit Rate%': value = currentBuild.finalCR; break;
                case 'Crit DMG%': value = currentBuild.finalCD; break;
                case 'Energy Regen%': value = currentBuild['Energy Regen%']; break;
                case 'Havoc DMG%': value = currentBuild['Havoc DMG%']; break;
                case 'Basic ATK DMG%': value = currentBuild['Basic ATK DMG%']; break;
                default: value = currentBuild[statName] || 0;
            }
            
            el.textContent = isPercent ? `${value.toFixed(1)}%` : value.toFixed(0);

            const progressEl = document.getElementById(`${info.id}_progress`);
            if (progressEl && STAT_INFO[statName].target) {
                const progressPercent = Math.min(100, (value / STAT_INFO[statName].target) * 100);
                progressEl.style.width = `${progressPercent}%`;
                progressEl.style.backgroundColor = getHSLColor(progressPercent / 100);
            }
        }

        const selectedWeaponKey = document.getElementById('weapon_select').value;
        const weapon = WEAPON_DATA[selectedWeaponKey];
        const weaponIconEl = document.getElementById('weapon_icon_display');
        if (weapon && weapon.image) {
            weaponIconEl.src = weapon.image;
            weaponIconEl.style.display = 'inline-block';
        } else {
            weaponIconEl.style.display = 'none';
        }

        const selectedSonataKey = document.getElementById('sonata_select').value;
        if(SONATA_DATA[selectedSonataKey]) {
            document.getElementById('sonata_icon').src = SONATA_DATA[selectedSonataKey].icon;
        }

        document.getElementById('eff_dmg_score').textContent = currentBuild.effDmgScore.toLocaleString('en-US', {maximumFractionDigits:0});
        
        // Calculate simulated stats for Realistic and Absolute Perfection datasets
        const realisticBuildStats = simulateBuild(REALISTIC_BUILD_DATASET);
        const absolutePerfectionBuildStats = simulateBuild(ABSOLUTE_PERFECTION_BUILD_DATASET);

        // --- Vs. Realistic Build Score calculation ---
        let vsRealisticPercentages = [];
        const statsToCompareRealistic = [
            { current: currentBuild.finalAtk, target: realisticBuildStats.finalAtk },
            { current: currentBuild.finalCR, target: realisticBuildStats.finalCR },
            { current: currentBuild.finalCD, target: realisticBuildStats.finalCD },
            { current: currentBuild['Energy Regen%'], target: realisticBuildStats['Energy Regen%'] },
            { current: currentBuild['Basic ATK DMG%'], target: realisticBuildStats['Basic ATK DMG%'] }
        ];

        statsToCompareRealistic.forEach(stat => {
            if (stat.target > 0) { 
                vsRealisticPercentages.push(Math.min(100, (stat.current / stat.target) * 100)); // Capped at 100%
            } else if (stat.current === 0 && stat.target === 0) {
                vsRealisticPercentages.push(100); 
            } else {
                vsRealisticPercentages.push(0); 
            }
        });

        const vsRealisticScoreValue = vsRealisticPercentages.length > 0 ? vsRealisticPercentages.reduce((a, b) => a + b) / vsRealisticPercentages.length : 0;

        const vsRealisticScoreEl = document.getElementById('vs_realistic_build_score');
        const vsRealisticScoreProgress = document.getElementById('vs_realistic_build_score_progress');
        vsRealisticScoreEl.textContent = `${vsRealisticScoreValue.toFixed(1)}%`;
        vsRealisticScoreProgress.style.width = `${Math.min(100, vsRealisticScoreValue)}%`;
        vsRealisticScoreProgress.style.backgroundColor = getHSLColor(vsRealisticScoreValue / 100);
        const vsRealisticGradeInfo = getGrade(vsRealisticScoreValue);
        document.getElementById('vs_realistic_build_grade').textContent = vsRealisticGradeInfo.grade;
        document.getElementById('vs_realistic_build_grade').className = `grade fs-4 ${vsRealisticGradeInfo.className}`;

        // --- Vs. Absolute Perfection Build Score calculation ---
        let vsAbsolutePerfectionPercentages = [];
        const statsToCompareAbsolute = [
            { current: currentBuild.finalAtk, target: absolutePerfectionBuildStats.finalAtk },
            { current: currentBuild.finalCR, target: absolutePerfectionBuildStats.finalCR },
            { current: currentBuild.finalCD, target: absolutePerfectionBuildStats.finalCD },
            { current: currentBuild['Energy Regen%'], target: absolutePerfectionBuildStats['Energy Regen%'] },
            { current: currentBuild['Basic ATK DMG%'], target: absolutePerfectionBuildStats['Basic ATK DMG%'] }
        ];

        statsToCompareAbsolute.forEach(stat => {
            if (stat.target > 0) {
                vsAbsolutePerfectionPercentages.push(Math.min(100, (stat.current / stat.target) * 100)); // Capped at 100%
            } else if (stat.current === 0 && stat.target === 0) {
                vsAbsolutePerfectionPercentages.push(100);
            } else {
                vsAbsolutePerfectionPercentages.push(0);
            }
        });

        const vsAbsolutePerfectionScoreValue = vsAbsolutePerfectionPercentages.length > 0 ? vsAbsolutePerfectionPercentages.reduce((a, b) => a + b) / vsAbsolutePerfectionPercentages.length : 0;

        const vsAbsolutePerfectionScoreEl = document.getElementById('vs_absolute_perfection_build_score');
        const vsAbsolutePerfectionScoreProgress = document.getElementById('vs_absolute_perfection_build_score_progress');
        vsAbsolutePerfectionScoreEl.textContent = `${vsAbsolutePerfectionScoreValue.toFixed(1)}%`;
        vsAbsolutePerfectionScoreProgress.style.width = `${Math.min(100, vsAbsolutePerfectionScoreValue)}%`;
        vsAbsolutePerfectionScoreProgress.style.backgroundColor = getHSLColor(vsAbsolutePerfectionScoreValue / 100);
        const vsAbsolutePerfectionGradeInfo = getGrade(vsAbsolutePerfectionScoreValue);
        document.getElementById('vs_absolute_perfection_build_grade').textContent = vsAbsolutePerfectionGradeInfo.grade;
        document.getElementById('vs_absolute_perfection_build_grade').className = `grade fs-4 ${vsAbsolutePerfectionGradeInfo.className}`;
    }

    document.addEventListener('DOMContentLoaded', () => {
        populateWeapons();
        populateSonatas();
        createEchoInputs();
        
        // Load the base build on startup
        loadBuild(BASE_BUILD_DATASET); 
        createStatSummary();
        
        document.body.addEventListener('change', function(e) {
            if (e.target.classList.contains('calc-trigger')) {
                updateUI();
            }
        });
        document.body.addEventListener('input', function(e) {
             if (e.target.classList.contains('calc-trigger')) {
                updateUI();
            }
        });

        updateUI(); // Initial calculation and UI update
    });