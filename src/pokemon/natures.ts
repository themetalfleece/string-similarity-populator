import { KeyData } from '../KeyData';
import { ensureData } from '../refreshData';

export const natures = {
    adamant: {
        name: 'Adamant',
        '+10%': 'Attack',
        '-10%': 'Special Attack',
    },
    bashful: {
        name: 'Bashful',
        effect: 'None',
    },
    bold: {
        name: 'Bold',
        '+10%': 'Defence',
        '-10%': 'Attack',
    },
    brave: {
        name: 'Brave',
        '+10%': 'Attack',
        '-10%': 'Speed',
    },
    calm: {
        name: 'Calm',
        '+10%': 'Special Defence',
        '-10%': 'Attack',
    },
    careful: {
        name: 'Careful',
        '+10%': 'Special Defence',
        '-10%': 'Special Attack',
    },
    docile: {
        name: 'Docile',
        effect: 'None',
    },
    gentle: {
        name: 'Gentle',
        '+10%': 'Special Defence',
        '-10%': 'Defence',
    },
    hardy: {
        name: 'Hardy',
        effect: 'None',
    },
    hasty: {
        name: 'Hasty',
        '+10%': 'Speed',
        '-10%': 'Defence',
    },
    impish: {
        name: 'Impish',
        '+10%': 'Defence',
        '-10%': 'Special Attack',
    },
    jolly: {
        name: 'Jolly',
        '+10%': 'Speed',
        '-10%': 'Special Attack',
    },
    lax: {
        name: 'Lax',
        '+10%': 'Defence',
        '-10%': 'Special Defence',
    },
    lonely: {
        name: 'Lonely',
        '+10%': 'Attack',
        '-10%': 'Defence',
    },
    mild: {
        name: 'Mild',
        '+10%': 'Special Attack',
        '-10%': 'Defence',
    },
    modest: {
        name: 'Modest',
        '+10%': 'Special Attack',
        '-10%': 'Attack',
    },
    naive: {
        name: 'Naive',
        '+10%': 'Speed',
        '-10%': 'Special Defence',
    },
    naughty: {
        name: 'Naughty',
        '+10%': 'Attack',
        '-10%': 'Special Defence',
    },
    quiet: {
        name: 'Quiet',
        '+10%': 'Special Attack',
        '-10%': 'Speed',
    },
    quirky: {
        name: 'Quirky',
        effect: 'None',
    },
    rash: {
        name: 'Rash',
        '+10%': 'Special Attack',
        '-10%': 'Special Defence',
    },
    relaxed: {
        name: 'Relaxed',
        '+10%': 'Defence',
        '-10%': 'Speed',
    },
    sassy: {
        name: 'Sassy',
        '+10%': 'Special Defence',
        '-10%': 'Speed',
    },
    serious: {
        name: 'Serious',
        effect: 'None',
    },
    timid: {
        name: 'Timid',
        '+10%': 'Speed',
        '-10%': 'Attack',
    },
};

const getKeyData = (): KeyData[] => {
    return Object.entries(natures).map(([key, data]) => ({
        key,
        data: Object.entries(data).map(([dataKey, dataValue]) => ({
            name: dataKey,
            value: dataValue,
        })),
    }));
};

ensureData('pokemon-natures', getKeyData());
