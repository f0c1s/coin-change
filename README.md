# @f0c1s/coin-change

## Library

```javascript
import {makeChange} from "@f0c1s/coin-change"
```

## Run locally

```shell

node coin-change.sh.js 1 2 4 5 6 9 10 11 24 25 26 49 50 51 74 75 76 99 100 101
[
  { target: 1, change: '1*1' },
  { target: 2, change: '1*2' },
  { target: 4, change: '1*4' },
  { target: 5, change: '5*1' },
  { target: 6, change: '5*1 + 1*1' },
  { target: 9, change: '5*1 + 1*4' },
  { target: 10, change: '10*1' },
  { target: 11, change: '10*1 + 1*1' },
  { target: 24, change: '10*2 + 1*4' },
  { target: 25, change: '25*1' },
  { target: 26, change: '25*1 + 1*1' },
  { target: 49, change: '25*1 + 10*2 + 1*4' },
  { target: 50, change: '50*1' },
  { target: 51, change: '50*1 + 1*1' },
  { target: 74, change: '50*1 + 10*2 + 1*4' },
  { target: 75, change: '50*1 + 25*1' },
  { target: 76, change: '50*1 + 25*1 + 1*1' },
  { target: 99, change: '50*1 + 25*1 + 10*2 + 1*4' },
  { target: 100, change: '50*2' },
  { target: 101, change: '50*2 + 1*1' }
]

```
