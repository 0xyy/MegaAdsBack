import { AdRecord } from '../records/ad.record';

const defaultObj = {
    name: 'Bob',
    description: 'lol',
    url: 'https://megak.pl',
    price: 0,
    lat: 9,
    lon: 9,
};


test('Can build AdRecord', () => {
   const ad = new AdRecord(defaultObj);

   expect(ad.name).toBe('Bob');
   expect(ad.description).toBe('lol');
});

test('Validates invalid price', () => {
    expect(() => new AdRecord({
        ...defaultObj,
        price: -3,
    })).toThrow('Cena nie może być mniejsza niż 0 lub większa niż 9 999 999.')
});

// @TODO: Check all the validations