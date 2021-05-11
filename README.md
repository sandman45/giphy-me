#Giphy Me

A fun node module for giphys and me experimenting with
yarn 2.0 and publishing with yarn.



### Creating new Yarn 2.0 project

https://yarnpkg.com/getting-started/install

`npm install -g yarn`

`cd ~/path/to/project`

`yarn set version berry`

`yarn add [package]`

`yarn add [package] --dev` or `yarn add [package] -D` // dev dependency

### Publishing to NPM

-  Login to npm

    `yarn npm login` 

- Prepare creates a build

    `yarn run prepare`

- Pre publish Only runs tests & linting

    `yarn run prepublishOnly`

- Preversion runs lint
  
    `yarn run preversion`

- Version runs format and `git add -A src`
  
    `yarn run version`

- Post Version `git push && git push --tags`
  
    `yarn run postVersion`

- Publish

  `yarn npm publish`
