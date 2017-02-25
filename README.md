# dutrink.st
[![CircleCI](https://circleci.com/gh/just-kile/dutrinkst/tree/master.svg?style=svg)](https://circleci.com/gh/just-kile/dutrinkst/tree/master)

Dutrinkst is the famous famous self explanatory game. It is based on serverless and react.
 
## Access
https://rhy7gvx9t1.execute-api.eu-west-1.amazonaws.com/dev/dutrinkst

or 

go to http://www.dutrink.st

## Local Development
Just start 
```
npm run watch
```
and go to http://localhost:3000/dutrinkst. 
This will spawn the serverless offline plugin and starts a browsersync instance.
Also all your files are watched and the browser reloads itself on changes.

The tests are executed with ava, whenever you save your changes, the unit tests are executed immediately.
There is no hot module replacement, because it requires a lot of overhead if you try to integrate also a server component.

##Deployement
* You have to have valid AWS credentials in your .aws folder or as environment variables.
* you should change under gulp/s3-deploy your S3 location for the assets.
* change in lib/server/config/config.js the location of these assets (I used cloudfront as a CDN which I configured without cloudformation). (see https://github.com/hapijs/confidence to know how the config file works)
* If you like, you can change the serverless.yml to your service name and your custom configs. 

Then you just have to run 
```
npm run deploy
```
and serverless should take care of the rest.

When the javascript is build, it will create a rev-manifest.json, which contains the filename of the fingerprinted assets. This file will be bundled by serverlss/webpack and is directly deployed into the lambda function.





