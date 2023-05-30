# Lessons:

## 1. Demo And Installation

- [x] Install [NodeJs](https://nodejs.org/en)
- [x] Install [Visual Studio Code](https://code.visualstudio.com)
- [x] Install [Git](https://git-scm.com)

## 2. Creating React App

- [x] Create React App
- [x] Remove Unnecessary Codes

## 3. Adding Header

- [x] Add Header.js
- [x] Use Header in App.js
- [x] Install react-router-dom in frontend
- [x] Add header.module.css
- [x] Use BrowserRouter inside index.js
- [x] Update Header.js
- [x] Update header.module.css

## 4. Adding Thumbnails

- [x] Add HomePage component
- [x] Add AppRoutes component
- [x] Use AppRoutes in App.js
- [x] Add data.js
- [x] Add food Images
- [x] Add foodService.js
- [x] Update HomePage.js
  - [x] Add Reducer
  - [x] Load foods
  - [x] Add Thumbnails.js
    - [x] Add CSS File
    - [x] Add Image
    - [x] Add Title
    - [x] Add Favorite Icon
    - [x] Add StarRating.js
      - [x] Add Star Images
      - [x] Add CSS
    - [x] Add Origins
    - [x] Add Cook Time
    - [x] Add Price.js
    - [x] Update CSS File

## 5. Adding Search

- [x] Add Search Route to AppRoutes.js
- [x] Add Search function to foodService.js
- [x] Use Search Inside HomePage.js
- [x] Add Search Component
  - [x] Add CSS

## 6.Adding Tags Bar

### Showing The Tags:

- [x] Add sample_tags to data.js
- [x] Add getAllTags function to foodService.js
- [x] Add Tags Component
  - [x] Add Css
- [x] Use Tags Component in HomePage.js

### Showing Foods By Tag

- [x] Add Tag route to AppRoutes.js
- [x] Add getAllByTag function to foodService.js
- [x] Use tag param in HomePage.js

## 7. Food Page

- [x] Create FoodPage Component
- [x] Add route to AppRoutes.js
- [x] Add getById function to foodService.js
- [x] Update FoodPage Component
  - [x] Load food
  - [x] Create Template
  - [x] Add Css

## 8. Cart Page

- [x] Create Cart Page Component
  - [x] Create css
- [x] Add cart route to the Routes
- [x] Create useCart Hook
  - [x] Add CartProvider to index.js
  - [x] Initialize cart with sample foods
- [x] Update Cart Page Compnent
  - [x] useCart hook
  - [x] Add Title Component
  - [x] Add JSX
  - [x] Add CSS
- [x] Update useCart Hook
  - [x] Add to cart
  - [x] Remove from cart
  - [x] Change quantity
  - [x] Saving To LocalStorage
- [x] In Food Page useCart for Add to cart buttons
- [x] In Header useCart for cart total count

## 9.Not Found!

- [x] Create NotFound Component
  - [x] Add CSS
- [x] Add Not Found To:
  - [x] Home Page
  - [x] Food Page
  - [x] Cart Page
- [x] Fixing Search Issue

## 10. Connect To Backend

- [x] Create backend folder
- [x] Initializing NPM Project
- [x] Copy data.ts to backend/src
- [x] npm install express cors
- [x] Create .gitignore
- [x] Create server.js
  - [x] Add & Config Express
    - [x] Add & Config Cors
  - [x] Add Food Router
    - [x] Add jsconfig.json
    - [x] Add Apis
- [x] npm install nodemon
  - [x] Add dev Script into the package.json
  - [x] npm run dev
- [x] Add axios package
  - [x] axiosConfig.js file
- [x] Connect food service to the Apis

## 11. Login Page

### Backend

- [x] Create User Router
  - [x] npm install jsonwebtoken
  - [x] Add Login Api
    - [x] Add sample_users to data.js
    - [x] Add httpStatus.js
  - [x] Add generateTokenResponse function
- [x] Add User Router To server.js

### Frontend

- [x] Create user service
  - [x] Add getUser function
  - [x] Add login function
  - [x] Add logout function
- [x] npm install react-toastify
- [x] Create useAuth hook
  - [x] Add user state
  - [x] Add Login function
  - [x] Add logout function
- [x] Create LoginPage component
  - [x] Add to AppRoutes.js
  - [x] Create Custom Components
    - [x] Input Container
      - [x] CSS
    - [x] Input
      - [x] CSS
    - [x] Button
      - [x] CSS
- [x] Add useAuth to the Header component
