import { MovesText } from '../../raw/pokemon/movesText';
import { Moves } from '../../raw/pokemon/moves';
import { KeyData } from '../KeyData';
import { ensureData } from '../refreshData';

const getKeyData = (): KeyData[] => {
    return Object.entries(Moves).map(([moveKey, move]) => {
        const moveText = MovesText[moveKey];

        const moveKeyData: KeyData = {
            key: move.name,
            data: [
                {
                    name: 'Name',
                    value: move.name,
                },
                {
                    name: 'Category',
                    value: move.category,
                },
                {
                    name: 'Type',
                    value: move.type,
                },
                {
                    name: 'Base Power',
                    value: move.basePower.toString() || '',
                },
                {
                    name: 'Accuracy',
                    value:
                        move.accuracy === true ? '' : move.accuracy.toString(),
                },
                {
                    name: 'PP',
                    value: move.pp.toString(),
                },
                {
                    name: 'Priority',
                    value: move.priority !== 0 ? move.priority.toString() : '',
                },
                {
                    name: 'Description',
                    value: moveText.desc || '',
                },
                {
                    name: 'Target',
                    value: ['normal', 'any', 'self'].includes(move.target)
                        ? ''
                        : move.target,
                },
                {
                    name: 'Z-Move with item',
                    value: move.isZ || '',
                },
            ],
        };

        // keep the data with a non-empty value
        moveKeyData.data = moveKeyData.data.filter((v) => v.value);

        return moveKeyData;
    });
};

ensureData('pokemon-moves', getKeyData());
