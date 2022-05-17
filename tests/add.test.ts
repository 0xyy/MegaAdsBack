import { AdRecord } from '../records/ad.record';

test('AdRecord return data from database for one entry', async () => {
    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');
    expect(ad.name).toBe('bob');
});

test('AdRecord return null from database of unexisting entry.', async () => {
   const ad = await AdRecord.getOne('...');

   expect(ad).toBeNull()
});