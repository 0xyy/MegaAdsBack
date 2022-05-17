import { AdRecord } from '../records/ad.record';

test('AdRecord return data from database for one entry', async () => {
    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');
    expect(ad.name).toBe('bob');
});

test('AdRecord return null from database of unexisting entry.', async () => {
   const ad = await AdRecord.getOne('...');
   expect(ad).toBeNull();
});

test('AdRecord return array of AdRecords for listing all entries.', async () => {
    const ads = await AdRecord.getAll();

    expect(ads).toBeDefined();
    expect(ads).toBeInstanceOf(Array);
});

test('AdRecord return null from database when listing empty entries.', async () => {
    const ads = await AdRecord.getAll();
    expect(ads).toBeNull();
});

test('Added Record return id of the new Ad.', async () => {
    const newAd = new AdRecord({
        name: 'Oskar',
        description: '123',
        price: 212,
        url: 'xd.pl',
        lat: 33,
        lon: 11,
    });

    await expect(await newAd.insert()).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/);
});