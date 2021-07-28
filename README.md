# Wobble

This might be useful if common levels of irony hit their limits and huge amounts
of text need to be converted to wobble.

## API

```
npm i wobblify
```

```js
const wobblify = require('wobblify')

console.log(wobblify('test'))
// will log: tEsT
```

```ts
import { wobblify } from 'wobblify'

console.log(wobblify('test'))
// will log: tEsT
```


## Run

Wobblifies every arg as line. If no line is given wobblifies stdin or input file.
```
npx wobblify [..lines]
```

Options to set input or output file
- `--input` or `-i` option will set the input file
  (creates a readStream to that path)
- `--output` or `-o` option will set the output file
  (creates a writeStream to that path)
- `--reset` or `-r` option will reset wobble to lowercase for each arg
```
npx wobblify -i <input-file> -o <output-file>
```

## Install

### Globally

Install globally using NPM and run as as shown in [run](#run)
but with `wobblify` instead of `npx wobblify`
```
npm i -g wobblify
```