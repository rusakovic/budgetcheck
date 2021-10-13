## Preview

### iOS

https://user-images.githubusercontent.com/17801144/137176112-37831756-0b0a-4e5b-926a-efcc04d254e5.MP4

### Android


https://user-images.githubusercontent.com/17801144/137176857-5e67e4ff-9730-4456-a8b3-3adece6c3129.mp4



## How to run app?
1. `npm i`
2. `cd ios && pos install && ..`
3. For runnig on iOS simulator: `npm run ios`, for Android `npm run adnroid`
4. For running on iOS real device: `npm run ios-device`. Replace your phone name here: 
```json
"device-ios": "ENVFILE=.staging.env react-native run-ios  --device 'iPhone Max' ",
```

## How to run tests
- For running jest test: `npm run test`



## Comments
1. Test is written in Jest for one function `transformFetchedData.spec.ts` as an example. Sure for all functions tests should be written.




## TASK
Create a React app that fetches data containing a list of card transactions for a group of users. Process the transactions and compute the final balance for each user. Display the final balances in the app in a sensible way for a fraud department to review.

## NOTES
- We expect you to compute the main balance processing logic without the help of any dedicated third party libraries, but you can leverage any general purpose tools (e.g. [lodash](https://lodash.com/) or [decimal.js](https://mikemcl.github.io/decimal.js/)).
- You can use specialized libraries for any other aspect functional to the task (e.g. UI components, testing libraries).
- You'll have to make network requests, but use whatever API or library you're familiar with. Loading indicators and HTTP mocks are nice-to-haves.
- Imagine this to be a project you submit to the team for code review, if approved we should be in a position to ship it to all our users.
- Take care of edge cases (e.g. misuse of the tool, missing or malformed data, large input files). Handle exceptions if necessary.
- The solution should include some tests that cover the main processing logic. The granularity of the tests is left for you to decide. The project template includes a sample test using Jest and `@testing-library/react`, however you may use any testing library you are comfortable with.
- Include a minimal `README.md` file with any assumptions, decisions or notes about your approach to the problem.

