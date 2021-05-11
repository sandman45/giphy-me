import * as assert from 'assert';
import expect from 'expect';

import GiphyMe from '../src/index';

describe('test', () => {
  // eslint-disable-next-line no-undef
  it('should call GiphyMe and return a string', async () => {
    assert.deepStrictEqual(1, 1);
    const val = await GiphyMe.GiphyMe();
    expect.stringContaining(val);
  });
});
