### React.js Assignment: Add to Cart Feature with Redux

#### Objective

This project implements a simple 'Add to Cart' feature in a React.js application using Redux for state management. The user can view a list of products, search for them locally, and add them to a shopping cart.

#### Features

  * **Product Listing Page:** Displays products fetched from the [dummyjson.com API](https://dummyjson.com/products) in a responsive grid layout.
  * **Product Card:** Each product is displayed in a `ProductCard` component showing its title, thumbnail image, price, and an "Add to Cart" button[cite: 9].
  * **Local Search:** A search bar allows users to filter the products in real-time based on their titles.
  * **Add to Cart:** Clicking the "Add to Cart" button dispatches a Redux action to update the cart state.
  * **Cart Component:** A globally visible cart component displays the current total number of items. The cart panel is also scrollable when the number of items exceeds the panel height.

#### Tech Stack

  * **React.js** 
  * **Redux Toolkit** and **react-redux** for state management 
  * **Fetch** or **Axios** to retrieve product data from the API 
  * **Tailwind CSS** for styling 
  * **Vite** for the development server and build tool

#### Project Structure

The project follows a component-based structure to organize the code logically.

```
src/
├── components/
│   ├── Cart.jsx
│   ├── ProductCard.jsx
│   ├── SearchBar.jsx
│   └── (Additional components for styling and layout)
├── pages/
│   └── ProductListPage.jsx
├── redux/
│   ├── store.js
│   ├── cartSlice.js
│   └── productSlice.js
├── App.jsx
└── index.js
```

#### Getting Started

This project uses **Vite** as a build tool for a fast and efficient development experience.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

#### Running the Project

To run the project locally and view the webpage with live edits, use the Vite development server:

```bash
npm run dev
# or
yarn dev
```

This command will start the server, and the application will be accessible at `http://localhost:5173` (or a similar port). Any changes you save to the files will be reflected in the browser automatically.
