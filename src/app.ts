import { countries } from 'country-data';

const blocked = ['RUS', 'AFG'];

const filtered = countries.all

  .filter((c) => !blocked.find((f) => f === c.alpha3))

  .filter((c) => c.alpha3.length > 0 && c.countryCallingCodes.length > 0);

// reformat results to {"country": "long name", "code": "3 letter code", "number": "first dialing code" }

const remapped = filtered.map((c) => ({
  country: c.name,

  code: c.alpha3,

  number: c.countryCallingCodes[0].split(' ')[0],
}));

if (remapped.length > 0) {
  console.log('success ', remapped)
}
