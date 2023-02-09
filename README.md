# README

## Heads up!

I didn't realized that this homework had to use styled-components until the last moment, so I couldn't apply it to the whole project, but you can find styled components in src/screens/RootScreen/BrandItem/components, I didn't had time to move more components to SC.

I added a Google Cloud Key so you can use the app normally, I'd NEVER add that into a production project, but I'm doing it here so you can try the complete functionality. As soon as you review the homework, I'm deleting the GCP project.

## Start the application

### Preconditions

node installed
npm/yarn installed
expo installed as a global dependency (you can skip this by using npx)
Install Expo Go in your phone

### Steps

In the repo folder:

yarn
npx expo start
scan QR code with Expo Go from your phone to run the app

### Further improvements

I'd add logs to the app so we can track the user behaviours and be able to get a sense on how the app is performing in more detail (not just knowing the top of the funnel and the amount of conversions, but rather getting to know the conversions of each step in detail)

I'd also use logs to track potential errors and fix them ASAP. 

This is missing a good battery of tests. I'd start by doing some end-to-end tests for the most important test cases, then move to integration tests and finally do some unit tests coupled with some snapshot tests for the most basic components. 

Depending on the needs of the company, internationalization could be important if different languages need support (or even variants of the same language sometimes need i18n).

In terms of the user experience, understanding that this is just a toy project, but if this would be a real project, I'd suggest to remove the screen where you have to type for a specific store and instead bring the user back to the main screen with the stores and products filtered based on the user address. I'd also suggest to reduce the margins between the sections in the main screen so that we can put more content above the fold.

Thanks for the experience, it was fun.

Ignacio Ureta
