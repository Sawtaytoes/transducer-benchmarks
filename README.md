# Kevin Ghadyani's Transducer Benchmarks
Transducer benchmarks used in this talk: https://www.youtube.com/watch?v=n_NheQ-smf0

## Commands
### Benchmarks
#### Development mode
```sh
yarn start
```
To make this usable, comment out sections of `loopTypes.js` and `tasks.js` until you're testing the ones you want.

#### Production mode
```sh
yarn ci:start
```
This outputs `stats.json` file in the project directory.

### Unit tests
#### Development mode
```sh
yarn dev:test
```
Use Jest CLI controls to narrow down the files you're testing.

#### Production mode
```sh
yarn ci:test
```
Verifies all benchmark unit tests pass.
