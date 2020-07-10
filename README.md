# WeChat Survey Relay Mini-Program

## Objective

This application is a reference implementation for how to integrate
Medallia's web-based surveys and conversations with WeChat's template
messages.

## Theory of Operation

TBD

## Configurability

Change the `appid` property in [project.config.json](project.config.json)
to replace `YOUR_APP_ID_HERE` with the application id that you've been
assigned from WeChat.

## Dependencies

This reference implementation was built on the following dependencies:

- Java 11
- An available K-field in the Medallia system named
  `k_initialfinishdate_epoch_int` (or similar)

## Compile/Run

Edit the `application.properties` file for your instance's settings,
then run the following commands:

```
./compile.sh

./run.sh
```

## License

Copyright 2020.  Medallia, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License.  You may obtain
a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
