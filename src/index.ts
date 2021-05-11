import _ from 'lodash';
import { writeFileSync } from 'fs';
import Buffer from 'buffer';
import giphy from 'giphy-api';

const GiphyMe = async () => {
  const now = _.now();
  const GiphyApi = giphy();
  const giphyResult = await GiphyApi.random('top gun');
  const giphyUrl = giphyResult.data.bitly_url;
  console.log(`result: ${giphyUrl}`);
  const fileBuffer = Buffer.Buffer.from(`The now date is: ${now}. \n ${giphyUrl}`);
  writeFileSync('./myCoolFile.txt', fileBuffer);
  return giphyUrl;
};

export default {
  GiphyMe,
};
