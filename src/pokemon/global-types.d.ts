/**
 * from https://github.com/smogon/pokemon-showdown/blob/master/sim/global-types.ts
 * will be copied to raw/pokemon, so it can be used by pokedex.ts
 */

type StatsTable = { [stat in StatName]: number };

type GenderName = 'M' | 'F' | 'N' | '';

type StatNameExceptHP = 'atk' | 'def' | 'spa' | 'spd' | 'spe';

type StatName = 'hp' | StatNameExceptHP;

interface SpeciesAbility {
    0: string;
    1?: string;
    H?: string;
    S?: string;
}

interface SpeciesData {
    name: string;
    /** National Dex number */
    num: number;

    types: string[];
    abilities: SpeciesAbility;
    baseStats: StatsTable;
    eggGroups: string[];
    weightkg: number;
    color?: string;
    heightm?: number;

    canHatch?: boolean;
    baseForme?: string;
    baseSpecies?: string;
    evoLevel?: number;
    evoMove?: string;
    evoCondition?: string;
    evoItem?: string;
    evos?: string[];
    evoType?:
        | 'trade'
        | 'useItem'
        | 'levelMove'
        | 'levelExtra'
        | 'levelFriendship'
        | 'levelHold'
        | 'other';
    forme?: string;
    gender?: GenderName;
    genderRatio?: { [k: string]: number };
    maxHP?: number;
    cosmeticFormes?: string[];
    otherFormes?: string[];
    formeOrder?: string[];
    prevo?: string;
    gen?: number;
    requiredAbility?: string;
    requiredItem?: string;
    requiredItems?: string[];
    requiredMove?: string;
    battleOnly?: string | string[];
    canGigantamax?: string;
    cannotDynamax?: boolean;
    changesFrom?: string;
    maleOnlyHidden?: boolean;
    unreleasedHidden?: boolean | 'Past';
}

interface MoveData extends EffectData, MoveEventMethods, HitEffect {
    name: string;
    /** move index number, used for Metronome rolls */
    num?: number;
    condition?: Partial<ConditionData>;
    basePower: number;
    accuracy: true | number;
    pp: number;
    category: 'Physical' | 'Special' | 'Status';
    type: string;
    priority: number;
    target: MoveTarget;
    flags: AnyObject;
    /** Hidden Power */
    realMove?: string;

    damage?: number | 'level' | false | null;
    contestType?: string;
    noPPBoosts?: boolean;

    // Z-move data
    // -----------
    /**
     * ID of the Z-Crystal that calls the move.
     * `true` for Z-Powered status moves like Z-Encore.
     */
    isZ?: boolean | string;
    zMove?: {
        basePower?: number;
        effect?: string;
        boost?: SparseBoostsTable;
    };

    // Max move data
    // -------------
    /**
     * `true` for Max moves like Max Airstream. If its a G-Max moves, this is
     * the species ID of the Gigantamax Pokemon that can use this G-Max move.
     */
    isMax?: boolean | string;
    maxMove?: {
        basePower: number;
    };

    // Hit effects
    // -----------
    ohko?: boolean | string;
    thawsTarget?: boolean;
    heal?: number[] | null;
    forceSwitch?: boolean;
    selfSwitch?: string | boolean;
    selfBoost?: { boosts?: SparseBoostsTable };
    selfdestruct?: string | boolean;
    breaksProtect?: boolean;
    /**
     * Note that this is only "true" recoil. Other self-damage, like Struggle,
     * crash (High Jump Kick), Mind Blown, Life Orb, and even Substitute and
     * Healing Wish, are sometimes called "recoil" by the community, but don't
     * count as "real" recoil.
     */
    recoil?: [number, number];
    drain?: [number, number];
    mindBlownRecoil?: boolean;
    stealsBoosts?: boolean;
    struggleRecoil?: boolean;
    secondary?: SecondaryEffect | null;
    secondaries?: SecondaryEffect[] | null;
    self?: HitEffect | null;

    // Hit effect modifiers
    // --------------------
    alwaysHit?: boolean; // currently unused
    baseMoveType?: string;
    basePowerModifier?: number;
    critModifier?: number;
    critRatio?: number;
    defensiveCategory?: 'Physical' | 'Special' | 'Status';
    forceSTAB?: boolean;
    ignoreAbility?: boolean;
    ignoreAccuracy?: boolean;
    ignoreDefensive?: boolean;
    ignoreEvasion?: boolean;
    ignoreImmunity?: boolean | { [k: string]: boolean };
    ignoreNegativeOffensive?: boolean;
    ignoreOffensive?: boolean;
    ignorePositiveDefensive?: boolean;
    ignorePositiveEvasion?: boolean;
    multiaccuracy?: boolean;
    multihit?: number | number[];
    multihitType?: string;
    noDamageVariance?: boolean;
    /** False Swipe */
    noFaint?: boolean;
    nonGhostTarget?: string;
    pressureTarget?: string;
    spreadModifier?: number;
    sleepUsable?: boolean;
    /**
     * Will change target if current target is unavailable. (Dragon Darts)
     */
    smartTarget?: boolean;
    /**
     * Tracks the original target through Ally Switch and other switch-out-and-back-in
     * situations, rather than just targeting a slot. (Stalwart, Snipe Shot)
     */
    tracksTarget?: boolean;
    useTargetOffensive?: boolean;
    useSourceDefensiveAsOffensive?: boolean;
    willCrit?: boolean;

    // Mechanics flags
    // ---------------
    hasCrashDamage?: boolean;
    isConfusionSelfHit?: boolean;
    isFutureMove?: boolean;
    noMetronome?: string[];
    noSketch?: boolean;
    stallingMove?: boolean;
    baseMove?: string;
}

// set the following as any, as they just affect the battle runtime
type EffectData = any;
type HitEffect = any;
type SecondaryEffect = any;
type SparseBoostsTable = any;
type AnyObject = any;
type MoveTarget = any;
type ConditionData = any;
type MoveEventMethods = any;
type BoostName = any;
type MoveAction = any;
type Move = any;
type Pokemon = any;
type ActiveMove = any;
type ID = any;
