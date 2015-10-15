# validator.js-asserts

A set of extra asserts for [validator.js](https://github.com/guillaumepotier/validator.js).

## Status

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

## Installation

Install the package via `npm`:

```sh
$ npm install --save validator.js-asserts
```

Some asserts may require additional peer dependencies. Note that from [npm 3](https://github.com/npm/npm/blob/master/CHANGELOG.md#peerdependencies) forward, you must manually install them as they become necessary.

## Asserts

The following set of extra asserts are provided by this package:

* BankIdentifierCode (*BIC*)
* BigNumber (requires `bignumber.js`)
* BigNumberGreaterThan (requires `bignumber.js`)
* BigNumberGreaterThanOrEqualTo (requires `bignumber.js`)
* BigNumberLessThan (requires `bignumber.js`)
* BigNumberLessThanOrEqualTo (requires `bignumber.js`)
* Boolean
* Country (requires `world-countries`)
* CreditCard (requires `creditcard`)
* Date
* DateDiffGreaterThan (requires `moment`)
* DateDiffLessThan (requires `moment`)
* Email (requires `validator`)
* EqualKeys
* Hash
* Integer
* InternationalBankAccountNumber (*IBAN*, requires `iban`)
* Ip
* Iso3166Country (requires `isoc`)
* Json
* NotEmpty
* NullOrDate
* NullOrString
* PlainObject
* Uri (requires `URIjs`)
* UsState (requires `provinces`)
* Uuid

### BankIdentifierCode (*BIC*)

Tests if the value is a valid Bank Identifier Code (*BIC*) as defined in the [ISO-9362](http://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=60390) standard.

### BigNumber

Tests if the value is a valid `BigNumber`.

### BigNumberGreaterThan

Tests if a `BigNumber` is greater than a given threshold.

* `threshold` (required)

### BigNumberGreaterThanOrEqualTo

Tests if a `BigNumber` is greater than or equal to a given threshold.

* `threshold` (required)

### BigNumberLessThan

Tests if a `BigNumber` is less than a given threshold.

* `threshold` (required)

### BigNumberLessThanOrEqualTo

Tests if a `BigNumber` is less than or equal to a given threshold.

* `threshold` (required)

### Boolean

Tests if the value is a boolean.

### Country

Tests if the value is a valid country by alpha-3 code, alpha-2 code, common name, official name or alternative spelling names.
The difference from the `Iso3166Country` assert is that it is less rigid in its definitions since it is based on a community-effort rather than a standards body where rules are very strict.

### CreditCard

Tests if the value is a valid credit card number using the Luhn10 algorithm.

### Date

Tests if the value is a valid date.

### DateDiffGreaterThan

Tests if the difference between two dates is greater than a given threshold.

* `threshold` (required)
* `options`
	* `absolute` - whether the comparison should use the absolute value of the measured difference.
	* `asFloat` - whether to return the difference rounded down or as float.
	* `fromDate` - the date where the diff is measured with. If omitted, defaults to `now`.
	* `unit` - the unit of the difference measurement (`years`, `months`, `weeks`, `days`, `hours`, `minutes` and `seconds`).

### DateDiffLessThan

Tests if the difference between two dates is less than a given threshold.

* `threshold` (required)
* `options`
	* `absolute` - whether the comparison should use the absolute value of the measured difference.
	* `asFloat` - whether to return the difference rounded down or as float.
	* `fromDate` - the date where the diff is measured with. If omitted, defaults to `now`.
	* `unit` - the unit of the difference measurement (`years`, `months`, `weeks`, `days`, `hours`, `minutes` and `seconds`).

### Email

Tests if the value is a valid email.

### EqualKeys

Tests if the object has the exact given set of keys.

* `keys` (required) - the keys that the object being tested must equal.

### Hash

Tests if the value is a valid hash.

* `algorithm` (required) - the algorithm to test the hash for. Supported algorithms are `sha1`, `sha256` and `sha512`.

### Integer

Tests if the value is an integer.

### InternationalBankAccountNumber (*IBAN*)

Tests if the value is a valid International Bank Account Number (*IBAN*) as defined in the [13616-1](http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=41031) standard.

### Ip

Tests if the value is a valid ip (v4 or v6).

### Iso3166Country

Tests if the value is a valid ISO-3166 country by alpha-3 code, alpha-2 code, short name or uppercase name.
All officially-assigned, transitionally-assigned and user-assigned codes are considered valid.

### Json

Tests if the value is valid json.

### NotEmpty

Tests if the value is not an empty (empty object, empty array, empty string, etc).

### NullOrString

Tests if the value is a `null` or `string`, optionally within some boundaries.

* `boundaries` (optional) - `max` and/or `min` boundaries to test the string for.

### PlainObject

Tests if the value is a plain object.

### Uri

Tests if the value is a valid `uri` which must contain at least a protocol and a hostname.

* `constraints` (optional) - additional uri parts to test for (e.g. `{ protocol: 'https' }`).

### UsState

Tests if the value is a valid US state short code (e.g. `CA`).

### Uuid

Tests if the value is a valid uuid.

* `version` (optional) - the version to test the uuid for. Supported version are `3`, `4` and `5`. Defaults to test for `all` three if omitted.

## Usage

The following is an example for the extra ip assert:

```js
var Assert = require('validator.js').Assert.extend(require('validator.js-asserts'));
var Validator = require('validator.js').Validator;
var validator = new Validator();

// Validate ip `1.3.3.7`.
var violation = validator.validate('1.3.3.7', new Assert().Ip());

if (true === violation) {
  console.log('"1.3.3.7" is a valid IP'); // => "1.3.3.7" is a valid IP
}

// Validate ip `foo`.
violation = validator.validate('foo', new Assert().Ip());

if (true !== violation) {
  console.log('"foo" is not a valid IP. Violation:', violation[0].show());
  // => "foo" is not a valid IP. Violation: { assert: 'Ip', value: 'foo' }
}
```

## Tests

```sh
$ npm test
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/validator.js-asserts.svg?style=flat-square
[npm-url]: https://npmjs.org/package/validator.js-asserts
[travis-image]: https://img.shields.io/travis/seegno/validator.js-asserts.svg?style=flat-square
[travis-url]: https://travis-ci.org/seegno/validator.js-asserts
