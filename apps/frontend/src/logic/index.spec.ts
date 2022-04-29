import pairs from '../logic/pairs';
import mix from '../logic/mix';

export default describe('pairs', () => {
  const pairingFn = (a, b) => `${a}->${b}`;
    it('it works', async () => {
        let duos = pairs(['a'], pairingFn);
        console.log(duos);
        duos = pairs(['a', 'b'], pairingFn);
        console.log(duos);
        duos = pairs(['a', 'b', 'c'], pairingFn);
        console.log(duos);
        return true;
      });
})

describe('mix', () => {
  // const pairingFn = (a, b) => `${a}->${b}`;
    it('it works', async () => {
        let duos = mix(['a'], ['b']);
        console.log(duos);
        duos = mix(['a', 'c', 'e'], ['b', 'd']);
        console.log(duos);
        duos = mix(['a', 'c', 'e'], ['b', 'd', 'f']);
        console.log(duos);
        return true;
      });
})
