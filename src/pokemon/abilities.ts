import { AbilitiesText } from '../../raw/pokemon/abilitiesText';
import { KeyData } from '../KeyData';
import { ensureData } from '../refreshData';

const getKeyData = (): KeyData[] => {
    return Object.values(AbilitiesText).map((ability) => {
        const abilityKeyData: KeyData = {
            key: ability.name,
            data: [
                {
                    name: 'Name',
                    value: ability.name,
                },
                {
                    name: 'Description',
                    value: (ability as any).desc || ability.shortDesc,
                },
            ],
        };

        return abilityKeyData;
    });
};

ensureData('pokemon-abilities', getKeyData());
