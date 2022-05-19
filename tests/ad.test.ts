import { AdRecord } from '../records/ad.record';
import { pool } from '../utils/db';
import { AdEntity } from '../types';

afterAll(async () => {
    await pool.end();
});

test('AdRecord.getOne return data from database for one entry', async () => {
    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');
    expect(ad.name).toBe('Bob');
});

test('AdRecord.getOne return null from database of unexisting entry.', async () => {
   const ad = await AdRecord.getOne('...');
   expect(ad).toBeNull();
});

test('AdRecord.findAll returns array of found entries.', async () => {
    const ads = await AdRecord.findAll('');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
});

test('AdRecord.findAll returns array of found entries when searching for "a".', async () => {
    const ads = await AdRecord.findAll('a');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
});

test('AdRecord.findAll returns empty array when searching for something that does not exist.', async () => {
    const ads = await AdRecord.findAll('--------------');

    expect(ads).toEqual([]);
});

test('AdRecord.findAll returns smaller amount of data.', async () => {
    const ads = await AdRecord.findAll('');

    expect((ads[0] as AdEntity).price).toBeUndefined();
    expect((ads[0] as AdEntity).description).toBeUndefined();
});

// test('Added Record return id of the new Ad.', async () => {
//     const newAd = new AdRecord({
//         name: 'Oskar',
//         description: '123',
//         price: 212,
//         url: 'xd.pl',
//         lat: 33,
//         lon: 11,
//     });
//
//     await expect(await newAd.insert()).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/);
// });
//
// test('AdRecord return array of found Entri.', async () => {
//     const ad = await AdRecord.getOne('...');
//     expect(ad).toBeNull();
// });