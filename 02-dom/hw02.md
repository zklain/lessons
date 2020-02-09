# HW02

#### DOM, input, strings & arrays

## Tak

### Names app

Create a simple web application, which would allow you to input several names (both first and last name) separated by a comma,
a do several operations with them.

The input might looks like this: `Ferko Kasik, Janko Hruska, Ujo Zdeno,`

The web page should not look like shit, so try to apply some styles. (ak mas cas)
Both styles sheet and javascript should be loaded from a seperate file.

_ak volaco nebudes chapat, nevediet si rady, klido napis, snad to nie je moc overwhelming_

1. **Create a fitler for these names.**
   This filter will have several parts and fullfill these criteria:

   1. input, taking a single letter, based on which oyu will filter the names.
   2. button `FILTER` , which would filter the input after clicking on it.
   3. output => an unordered list containing the filtered names.
   4. The filter will be case insensitive (i.e. it does not metter, if the input is `'K'` or `'k`, it will return both `kasik` abd `Kasik`)

2. **Create a counter for these names**

   - this will be just a simple button and an output element, which would show the count of the current input, after pressing a `COUNT` button.

3. **BONUS: Find a name**

   1. Create an interface for checking, if the names array includes an inputed name, if so, show this name, and its position (index) in the names array. The positions shoudl be indexed from 1, not zero.
      i.e. checking for `Dada Patrasova` in the input of `['Leos Mares, Dada Patrasova, Miro Zbirka']`, should return `Dada Patrasova, 2`

## List of methods you may find helpful

- **`split( separator: string)`** - splits a string on the separator character and returns an array of substrings
  - (e.g. `"Hello, World".split(',')` will return `[ 'Hello', ' World']`)
- **`trim()`** - removes whitespace from a string
- **`toUpperCase(string), toLowerCase(string)`**
- **`filter()`** - filteres an array with a provided filter function.
- **`array.map()`**
- **`array.includes()`** [docs]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes")
- **`array.containes()`** [docs]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter")
- **`string.startsWith()`** - [docs]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith")
- **`array.find()`**
- **`for (const x of array) {do stuff...}`** (x is value of a property i.e. in the names array it would be a name)
- **`for (const i in array) {do things...}`** (i is a property, i.e. in the names array it is an index)
