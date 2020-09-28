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
