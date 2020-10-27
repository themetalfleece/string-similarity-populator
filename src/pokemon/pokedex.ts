import { Pokedex } from '../../raw/pokemon/pokedex';
import { KeyData } from '../KeyData';
import { ensureData } from '../refreshData';

export const TypeChart = {
    Bug: {
        damageTaken: {
            Bug: 1,
            Dark: 1,
            Dragon: 1,
            Electric: 1,
            Fairy: 1,
            Fighting: 0.5,
            Fire: 2,
            Flying: 2,
            Ghost: 1,
            Grass: 0.5,
            Ground: 0.5,
            Ice: 1,
            Normal: 1,
            Poison: 1,
            Psychic: 1,
            Rock: 2,
            Steel: 1,
            Water: 1,
        },
    },
    Dark: {
        damageTaken: {
            Bug: 2,
            Dark: 0.5,
            Dragon: 1,
            Electric: 1,
            Fairy: 2,
            Fighting: 2,
            Fire: 1,
            Flying: 1,
            Ghost: 0.5,
            Grass: 1,
            Ground: 1,
            Ice: 1,
            Normal: 1,
            Poison: 1,
            Psychic: 0,
            Rock: 1,
            Steel: 1,
            Water: 1,
        },
    },
    Dragon: {
        damageTaken: {
            Bug: 1,
            Dark: 1,
            Dragon: 2,
            Electric: 0.5,
            Fairy: 2,
            Fighting: 1,
            Fire: 0.5,
            Flying: 1,
            Ghost: 1,
            Grass: 0.5,
            Ground: 1,
            Ice: 2,
            Normal: 1,
            Poison: 1,
            Psychic: 1,
            Rock: 1,
            Steel: 1,
            Water: 0.5,
        },
    },
    Electric: {
        damageTaken: {
            Bug: 1,
            Dark: 1,
            Dragon: 1,
            Electric: 0.5,
            Fairy: 1,
            Fighting: 1,
            Fire: 1,
            Flying: 0.5,
            Ghost: 1,
            Grass: 1,
            Ground: 2,
            Ice: 1,
            Normal: 1,
            Poison: 1,
            Psychic: 1,
            Rock: 1,
            Steel: 0.5,
            Water: 1,
        },
    },
    Fairy: {
        damageTaken: {
            Bug: 0.5,
            Dark: 0.5,
            Dragon: 0,
            Electric: 1,
            Fairy: 1,
            Fighting: 0.5,
            Fire: 1,
            Flying: 1,
            Ghost: 1,
            Grass: 1,
            Ground: 1,
            Ice: 1,
            Normal: 1,
            Poison: 2,
            Psychic: 1,
            Rock: 1,
            Steel: 2,
            Water: 1,
        },
    },
    Fighting: {
        damageTaken: {
            Bug: 0.5,
            Dark: 0.5,
            Dragon: 1,
            Electric: 1,
            Fairy: 2,
            Fighting: 1,
            Fire: 1,
            Flying: 2,
            Ghost: 1,
            Grass: 1,
            Ground: 1,
            Ice: 1,
            Normal: 1,
            Poison: 1,
            Psychic: 2,
            Rock: 0.5,
            Steel: 1,
            Water: 1,
        },
    },
    Fire: {
        damageTaken: {
            Bug: 0.5,
            Dark: 1,
            Dragon: 1,
            Electric: 1,
            Fairy: 0.5,
            Fighting: 1,
            Fire: 0.5,
            Flying: 1,
            Ghost: 1,
            Grass: 0.5,
            Ground: 2,
            Ice: 0.5,
            Normal: 1,
            Poison: 1,
            Psychic: 1,
            Rock: 2,
            Steel: 0.5,
            Water: 2,
        },
    },
    Flying: {
        damageTaken: {
            Bug: 0.5,
            Dark: 1,
            Dragon: 1,
            Electric: 2,
            Fairy: 1,
            Fighting: 0.5,
            Fire: 1,
            Flying: 1,
            Ghost: 1,
            Grass: 0.5,
            Ground: 0,
            Ice: 2,
            Normal: 1,
            Poison: 1,
            Psychic: 1,
            Rock: 2,
            Steel: 1,
            Water: 1,
        },
    },
    Ghost: {
        damageTaken: {
            Bug: 0.5,
            Dark: 2,
            Dragon: 1,
            Electric: 1,
            Fairy: 1,
            Fighting: 0,
            Fire: 1,
            Flying: 1,
            Ghost: 2,
            Grass: 1,
            Ground: 1,
            Ice: 1,
            Normal: 0,
            Poison: 0.5,
            Psychic: 1,
            Rock: 1,
            Steel: 1,
            Water: 1,
        },
    },
    Grass: {
        damageTaken: {
            Bug: 2,
            Dark: 1,
            Dragon: 1,
            Electric: 0.5,
            Fairy: 1,
            Fighting: 1,
            Fire: 2,
            Flying: 2,
            Ghost: 1,
            Grass: 0.5,
            Ground: 0.5,
            Ice: 2,
            Normal: 1,
            Poison: 2,
            Psychic: 1,
            Rock: 1,
            Steel: 1,
            Water: 0.5,
        },
    },
    Ground: {
        damageTaken: {
            Bug: 1,
            Dark: 1,
            Dragon: 1,
            Electric: 0,
            Fairy: 1,
            Fighting: 1,
            Fire: 1,
            Flying: 1,
            Ghost: 1,
            Grass: 2,
            Ground: 1,
            Ice: 2,
            Normal: 1,
            Poison: 0.5,
            Psychic: 1,
            Rock: 0.5,
            Steel: 1,
            Water: 2,
        },
    },
    Ice: {
        damageTaken: {
            Bug: 1,
            Dark: 1,
            Dragon: 1,
            Electric: 1,
            Fairy: 1,
            Fighting: 2,
            Fire: 2,
            Flying: 1,
            Ghost: 1,
            Grass: 1,
            Ground: 1,
            Ice: 0.5,
            Normal: 1,
            Poison: 1,
            Psychic: 1,
            Rock: 2,
            Steel: 2,
            Water: 1,
        },
    },
    Normal: {
        damageTaken: {
            Bug: 1,
            Dark: 1,
            Dragon: 1,
            Electric: 1,
            Fairy: 1,
            Fighting: 2,
            Fire: 1,
            Flying: 1,
            Ghost: 0,
            Grass: 1,
            Ground: 1,
            Ice: 1,
            Normal: 1,
            Poison: 1,
            Psychic: 1,
            Rock: 1,
            Steel: 1,
            Water: 1,
        },
    },
    Poison: {
        damageTaken: {
            Bug: 0.5,
            Dark: 1,
            Dragon: 1,
            Electric: 1,
            Fairy: 0.5,
            Fighting: 0.5,
            Fire: 1,
            Flying: 1,
            Ghost: 1,
            Grass: 0.5,
            Ground: 2,
            Ice: 1,
            Normal: 1,
            Poison: 0.5,
            Psychic: 2,
            Rock: 1,
            Steel: 1,
            Water: 1,
        },
    },
    Psychic: {
        damageTaken: {
            Bug: 2,
            Dark: 2,
            Dragon: 1,
            Electric: 1,
            Fairy: 1,
            Fighting: 0.5,
            Fire: 1,
            Flying: 1,
            Ghost: 2,
            Grass: 1,
            Ground: 1,
            Ice: 1,
            Normal: 1,
            Poison: 1,
            Psychic: 0.5,
            Rock: 1,
            Steel: 1,
            Water: 1,
        },
    },
    Rock: {
        damageTaken: {
            Bug: 1,
            Dark: 1,
            Dragon: 1,
            Electric: 1,
            Fairy: 1,
            Fighting: 2,
            Fire: 0.5,
            Flying: 0.5,
            Ghost: 1,
            Grass: 2,
            Ground: 2,
            Ice: 1,
            Normal: 0.5,
            Poison: 0.5,
            Psychic: 1,
            Rock: 1,
            Steel: 2,
            Water: 2,
        },
    },
    Steel: {
        damageTaken: {
            Bug: 0.5,
            Dark: 1,
            Dragon: 0.5,
            Electric: 1,
            Fairy: 0.5,
            Fighting: 2,
            Fire: 2,
            Flying: 0.5,
            Ghost: 1,
            Grass: 0.5,
            Ground: 2,
            Ice: 0.5,
            Normal: 0.5,
            Poison: 0,
            Psychic: 0.5,
            Rock: 0.5,
            Steel: 0.5,
            Water: 1,
        },
    },
    Water: {
        damageTaken: {
            Bug: 1,
            Dark: 1,
            Dragon: 1,
            Electric: 2,
            Fairy: 1,
            Fighting: 1,
            Fire: 0.5,
            Flying: 1,
            Ghost: 1,
            Grass: 2,
            Ground: 1,
            Ice: 0.5,
            Normal: 1,
            Poison: 1,
            Psychic: 1,
            Rock: 1,
            Steel: 0.5,
            Water: 0.5,
        },
    },
};

const getDamageTakenString = (types: string[]) => {
    const damageTakenFromType1 = TypeChart[types[0]].damageTaken;
    const damageTakenFromType2 = TypeChart[types[1]]?.damageTaken;

    /** the non-x1 damage taken by types */
    const damageOfTypes: Record<number, string[]> = {
        0: [],
        0.25: [],
        0.5: [],
        2: [],
        4: [],
    };

    // let's of the "Normal" types as a way to get the type keys
    for (const type in TypeChart.Normal.damageTaken) {
        /** damage taken from the Pokemon's types */
        const damageTaken =
            damageTakenFromType1[type] *
            (damageTakenFromType2 ? damageTakenFromType2[type] : 1);

        /** push it only if it isn't x1 */
        if (damageTaken !== 1) {
            damageOfTypes[damageTaken].push(type);
        }
    }

    /** parts of the strings to return. One part per damage multiplier */
    const damageStringParts: string[] = [];
    // sort the keys so it goes from x0 to x4 in order
    for (const damageMultiplier of Object.keys(damageOfTypes).sort()) {
        if (!damageOfTypes[damageMultiplier].length) {
            // continue if there are no entries of this multiplier
            continue;
        }
        const types = damageOfTypes[damageMultiplier].join(', ');
        damageStringParts.push(`x${damageMultiplier} [${types}]`);
    }

    return damageStringParts.join(' - ');
};

const getKeyData = (): KeyData[] => {
    return Object.values(Pokedex)
        .filter((pokemon) => {
            // real pokemon have a num of > 0
            return pokemon.num > 0;
        })
        .map((pokemon) => {
            const pokemonKeyData: KeyData = {
                key: pokemon.name,
                data: [
                    {
                        name: 'Name',
                        value: pokemon.name,
                    },
                    {
                        name: 'Number',
                        value: pokemon.num.toString(),
                    },
                    {
                        name: 'Type',
                        value: pokemon.types.join('/'),
                    },
                    {
                        name: 'Abilities',
                        value: [
                            pokemon.abilities[0],
                            pokemon.abilities[1] || null,
                            pokemon.abilities.H
                                ? `${pokemon.abilities.H} (hidden)`
                                : null,
                            pokemon.abilities.S
                                ? `${pokemon.abilities.S} (special)`
                                : null,
                        ]
                            .filter((v) => v)
                            .join(', '),
                    },
                    {
                        name: 'HP',
                        value: pokemon.baseStats.hp.toString(),
                    },
                    {
                        name: 'Atk',
                        value: pokemon.baseStats.atk.toString(),
                    },
                    {
                        name: 'Def',
                        value: pokemon.baseStats.def.toString(),
                    },
                    {
                        name: 'Sp. Atk',
                        value: pokemon.baseStats.spa.toString(),
                    },
                    {
                        name: 'Sp. Def',
                        value: pokemon.baseStats.spd.toString(),
                    },
                    {
                        name: 'Speed',
                        value: pokemon.baseStats.spe.toString(),
                    },
                    {
                        name: 'Damage Taken',
                        value: getDamageTakenString(pokemon.types),
                    },
                    {
                        name: 'Egg Groups',
                        value: pokemon.eggGroups.join(', '),
                    },
                    {
                        name: 'Weight (kg)',
                        value: pokemon.weightkg.toString(),
                    },
                    {
                        name: 'Height (m)',
                        value: pokemon.heightm?.toString() || '',
                    },
                    {
                        name: 'Color',
                        value: pokemon.color || '',
                    },
                    {
                        name: 'Pre-Evolution',
                        value: pokemon.prevo || '',
                    },
                    {
                        name: 'Evolution',
                        value: pokemon.evos?.join(', ') || '',
                    },
                    {
                        name: 'Generation',
                        value: pokemon.gen?.toString() || '',
                    },
                    {
                        name: 'Can hatch',
                        value:
                            typeof pokemon.canHatch === 'boolean'
                                ? pokemon.canHatch
                                    ? 'Yes'
                                    : 'No'
                                : '',
                    },
                    {
                        name: 'Base forme',
                        value: pokemon.baseForme || '',
                    },
                    {
                        name: 'Base Species',
                        value: pokemon.baseSpecies || '',
                    },
                    {
                        name: 'Evolves at lvl',
                        value: pokemon.evoLevel?.toString() || '',
                    },
                    {
                        name: 'Evolves with move',
                        value: pokemon.evoMove || '',
                    },
                    {
                        name: 'Evolves with condition',
                        value: pokemon.evoCondition || '',
                    },
                    {
                        name: 'Evolves with item',
                        value: pokemon.evoItem || '',
                    },
                    {
                        name: 'Evolution type',
                        value: pokemon.evoType || '',
                    },
                    {
                        name: 'Forme',
                        value: pokemon.forme || '',
                    },
                    {
                        name: 'Gender',
                        value: pokemon.gender || '',
                    },
                    {
                        name: 'Gender Ratio',
                        value: Object.entries(pokemon.genderRatio || {})
                            .map(
                                ([gender, ratio]) =>
                                    `${gender}=${ratio * 100}%`,
                            )
                            .join(', '),
                    },
                    {
                        name: 'Max HP',
                        value: pokemon.maxHP?.toString() || '',
                    },
                    {
                        name: 'Cosmetic Formes',
                        value: pokemon.cosmeticFormes?.join(', ') || '',
                    },
                    {
                        name: 'Other Formes',
                        value: pokemon.otherFormes?.join(', ') || '',
                    },
                    {
                        name: 'Required Ability',
                        value: pokemon.requiredAbility || '',
                    },
                    {
                        name: 'Required Item',
                        value: pokemon.requiredItem || '',
                    },
                    {
                        name: 'Required Items',
                        value: pokemon.requiredItems?.join(', ') || '',
                    },
                    {
                        name: 'Required Move',
                        value: pokemon.requiredMove || '',
                    },
                    {
                        name: 'Battle-only forme of',
                        value: pokemon.battleOnly
                            ? typeof pokemon.battleOnly === 'string'
                                ? pokemon.battleOnly
                                : pokemon.battleOnly.join(', ')
                            : '',
                    },
                    {
                        name: 'Gigantamax move',
                        value: pokemon.canGigantamax || '',
                    },
                    {
                        name: 'Can Dynamax',
                        value:
                            typeof pokemon.cannotDynamax === 'boolean'
                                ? pokemon.cannotDynamax
                                    ? 'No'
                                    : 'Yes'
                                : '',
                    },
                    {
                        name: 'Changes from',
                        value: pokemon.changesFrom || '',
                    },
                    {
                        name: 'Has unreleased Hidden',
                        value:
                            typeof pokemon.unreleasedHidden === 'boolean'
                                ? pokemon.unreleasedHidden
                                    ? 'Yes'
                                    : 'No'
                                : '',
                    },
                ],
            };

            // keep the data with a non-empty value
            pokemonKeyData.data = pokemonKeyData.data.filter((v) => v.value);

            return pokemonKeyData;
        });
};

ensureData('pokemon-pokedex', getKeyData());
