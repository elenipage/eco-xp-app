# EcoXp  
[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)
## About the Project 

EcoXp is a gamified recycling app built for iOS and Android designed to make sustainable habits fun and engaging. Inspired by apps like Duolingo and MyFitnessPal, it helps users track their recycling efforts, gain XP for eco-friendly actions, and compete with others to incentivise more recycling.

EcoXp offers users an interactive experience with features like:  
- Scanning recyclable items to earn XP.  
- Tracking recycling stats across friends, postcodes, and cities.  
- Taking quizzes to test and expand recycling knowledge.  
- Viewing engaging visualizations like pie charts to see progress in recycling different materials (e.g., plastic, paper, metal).  

The front-end was built with React Native, is managed with Expo, and has been styled with React Native Paper.

The back-end is a RESTful API made with postgreSQL, you can view the database, API and the different available endpoints used [here](https://github.com/louis-emmerson/ecoxp-be-js).
Much of the council and area data has been inserted for demo purposes for the time being, but this may be developed upon in the future.

## Using the App  

### How to Run EcoXp Locally  

To view and use EcoXp on your local machine:  

### Prerequisites  

To run this project locally you will need:

- `Node.js` version `22.7.0`
- [Expo Go](https://expo.dev/go) installed on a mobile device
--- 

### Cloning and Installation

To clone this repo, run: 
```bash
git clone https://github.com/elenipage/eco-xp-app
```
Navigate into your local repo:
```bash
cd eco-xp-app
```

To install the required dependencies, run:
 
```bash
npm install
```
You will need a .env file in the root of your repo which links to a [supabase bucket](https://supabase.com/docs/guides/storage) that can store any images you might take. The contents are the file need to be something like the following:

```sh
SUPABASE_URL=example-url
SUPABASE_SERVICE_KEY=example-key
```

--- 
### Launch the app and view it using your phone
First, to go live, run:
```sh
npm run start
```
This will create a QR code that you can scan with either your phone camera if your device uses iOS, or scan it in your Expo Go app if your device uses Android.

### Now you can explore the app's UI and use it to scan your items!


---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)