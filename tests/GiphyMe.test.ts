import * as assert from 'assert';
import expect from 'expect';

import GiphyMe from '../src/index';

// TODO: fix the errors
describe('test', () => {
  // eslint-disable-next-line no-undef
  it('should call GiphyMe', async () => {
    // expect(GiphyMe.GiphyMe()).toHaveBeenCalled();
    assert.deepStrictEqual(1, 1);
    const val = await GiphyMe.GiphyMe();
    expect(val).toEqual('Success');
  });
});
