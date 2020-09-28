import { ItemsText } from '../../raw/pokemon/itemsText';
import { KeyData } from '../KeyData';
import { ensureData } from '../refreshData';

const getKeyData = (): KeyData[] => {
    return Object.values(ItemsText).map((item) => {
        const itemKeyData: KeyData = {
            key: item.name,
            data: [
                {
                    name: 'Name',
                    value: item.name,
                },
                {
                    name: 'Description',
                    value: item.desc,
                },
            ],
        };

        return itemKeyData;
    });
};

ensureData('pokemon-items', getKeyData());
