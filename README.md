# WeChat Link Relay Mini-Program

## Objective

This application is a reference implementation for how to integrate
Medallia's web-based surveys and conversations with WeChat's template
messages.

## Theory of Operation

After a WeChat engagement with a customer, an API call is made to Medallia
Experience Cloud to trigger survey sampling.  The API call must contain the
WeChat Open ID and is recommended to include details about the transaction,
customer, and other relevant information.

Once an invitation record is created, an API call from Medallia to WeChat
is made.  The API call initiates a Template Message on WeChat, passing in
the WeChat Open ID, survey URL (encoded in Base64 format), and a reference
to the mini program's identifier to use.  Note that this API call must be
made within 48 hours of the original WeChat engagement with the customer
as per the WeChat platform requirements.

The customer receives a message in their WeChat app.  The message contains
a clickable link to the mini program.  When the customer clicks the link,
the mini program is opened.  The mini program then decodes the survey URL
and opens a web view with the survey shown.  The customer then finishes
the survey and closes the web view.

## Configurability

Change the `appid` property in [project.config.json](project.config.json)
to replace `YOUR_APP_ID_HERE` with the application id that you've been
assigned from WeChat.

## Dependencies

This reference implementation was built on the following dependencies:

- [WeChat Developer Tools][wechat-dev-tools]

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


[wechat-dev-tools]: https://developers.weixin.qq.com/miniprogram/en/dev/devtools/download.html
