import { Pokedex } from '../../raw/pokemon/pokedex';
import { KeyData } from '../KeyData';

const keyData: KeyData[] = [];

for (const pokemon of Object.values(Pokedex)) {
    // real pokemon have a num of >=1
    if (pokemon.num <= 0) {
        continue;
    }

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
                    .map(([gender, ratio]) => `${gender}=${ratio * 100}%`)
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

    keyData.push(pokemonKeyData);
}
