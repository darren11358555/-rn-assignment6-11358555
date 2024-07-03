# -rn-assignment6-11358555

# Open Fashion Store App

This is a simple React Native application for an online fashion store. The app allows users to view a list of products, add them to a shopping cart, and view the items in their cart. The cart items are stored locally

## Features

- View a list of available products
- Add products to the shopping cart
- Remove products from the shopping cart
- View items in the shopping cart

## Screens

- **Home Screen**: Displays a list of products and allows users to add them to the cart.
- **Cart Screen**: Displays the items added to the cart and allows users to remove them.

### Dependencies

-react: ^18.0.0
-react-native: ^0.68.0
-@react-navigation/native: ^6.0.0
-@react-navigation/stack: ^6.0.0
-react-native-async-storage/async-storage: ^1.15.0
-react-native-screens: ^3.10.0
-react-native-safe-area-context: ^3.3.2

## file structures 
```bash
.
├── App.js
├── README.md
├── package.json
├── screens
│   ├── HomeScreen.js
│   └── CartScreen.js
└── components
    └── Product.js
```
## components

### app.js
The main entry point of the application. It sets up the navigation container and stack navigator.

### HomeScreen.js
Displays a list of products and allows users to add them to the cart.
![homepage](https://github.com/darren11358555/-rn-assignment6-11358555/assets/152318064/665a8422-cf64-41f3-a21f-dd0d52093648)


### cartscreen.js
Displays the items in the cart and allows users to remove them.
![checkout](https://github.com/darren11358555/-rn-assignment6-11358555/assets/152318064/3d6240f8-003b-4b9b-b6ba-2582f7990e70)

### Usage
-View Products: On the home screen, you can see a list of available products.
-Add to Cart: Click on the "Add to Cart" button to add a product to the shopping cart.
-View Cart: Navigate to the cart screen to see the items added to the cart.
-Remove from Cart: Click on the "Remove" button next to a product to remove it from the cart.
