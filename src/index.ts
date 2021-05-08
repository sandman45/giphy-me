import _ from 'lodash';
import { writeFileSync } from 'fs';
import Buffer from 'buffer';
import giphy from 'giphy-api';

export const giphyMe = async () => {
  const now = _.now();
  const GiphyApi = giphy();
  const giphyResult = await GiphyApi.random('top gun');
  console.log(`result: ${giphyResult.data.bitly_url}`);
  const fileBuffer = Buffer.Buffer.from(`The now date is: ${now}. \n ${giphyResult.data.bitly_url}`);
  writeFileSync('./myCoolFile.txt', fileBuffer);
  return 'Success';
};

giphyMe().then(res => {
  console.log(res);
});
