import axios from 'axios';
import { KeyData } from './KeyData';
import * as dotenv from 'dotenv';

dotenv.config();

export const ensureData = async (
    group: string,
    data: KeyData[],
): Promise<void> => {
    const url = `${process.env.STRING_SIMILARITY_SERVER_URL}/${group}`;
    // delete all of the group
    await axios.delete(url);
    // create the new ones
    await axios.post(url, { data });
};
