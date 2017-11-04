# dutrink.st
[![CircleCI](https://circleci.com/gh/just-kile/dutrinkst/tree/master.svg?style=svg)](https://circleci.com/gh/just-kile/dutrinkst/tree/master)

Dutrinkst is the famous famous self explanatory game. It is based on AWS S3 and react.
 
## Access
https://dutrinkst.cornetto.cloud

or 

go to http://www.dutrink.st

## Local Development
Just start 
```
npm run watch
```
and go to http://localhost:3000/
 
This will open the webpage and starts a browsersync instance.
Also all your files are watched and the browser reloads itself on changes.

The tests are executed with ava, whenever you save your changes, the unit tests are executed immediately.
There is no hot module replacement, because it requires a lot of overhead if you try to integrate also a server component.

##Deployement
* You have to have valid AWS credentials in your .aws folder or as environment variables.
* Create buckets with cfn/application-resources-stack.yaml (I used cfn sphere (https://github.com/cfn-sphere/cfn-sphere)) 

Then you just have to run 
```
npm run deploy
```
