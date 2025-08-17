

### Live Link : https://giga-gadget-cd35f.web.app/

# GigaGadgets
GigaGadgets is a full-stack e-commerce web application specializing in a wide range of electronic products. The platform allows users to browse products, view details, and manage a cart, with a dedicated section for logged-in users to manage their added products. The application features user authentication, protected routes, and dynamic content loading.

# Features
Product Browsing: Users can browse a variety of gadgets by brand or view all products on the homepage.

Brand-based Filtering: Products are categorized by brand, allowing users to easily find items from their favorite manufacturers.

Product Details: Clicking on a product card navigates to a detailed page with comprehensive information.

User Authentication: Secure sign-in and sign-up with email/password, Google, and GitHub.

Protected Routes: Certain pages, such as "Add Product," "Product Details," and "My Added Products," are protected and require a user to be logged in.

User Profile Management: Authenticated users can view their profile and log out.

# Dynamic UI: The interface dynamically changes based on user authentication status and dark/light mode preferences.

Responsive Design: The application is built to provide a seamless experience across various devices.

Add and Delete Products: Logged-in users can add new products and remove products from their cart.

Toast Notifications: Provides instant feedback to users for actions like successful login, logout, or product additions.

# Technologies Used
# Frontend
React: A JavaScript library for building user interfaces.

React Router DOM: For handling routing and navigation within the application.

Tailwind CSS: A utility-first CSS framework for styling components.

Swiper.js: For creating the carousel/slider on the homepage.

React Hot Toast: For simple and elegant toast notifications.

Firebase Authentication: Provides secure authentication services (Email/Password, Google, GitHub).

# Backend
Node.js & Express.js: The backend is built using Node.js with the Express.js framework.

MongoDB: A NoSQL database used to store product and user data.

Vercel: The application is deployed on Vercel for hosting.
# Git Repo-> https://github.com/MOBASSHIR07/Giga-Gadget-Shop-Server

Project Structure
The project follows a component-based architecture, making the code modular and easy to maintain.
```
bash
src/
├── components/
│   ├── Cards/
│   │   ├── BrandCard.jsx
│   │   ├── BrandProducts.jsx
│   │   ├── EmptyCart.jsx
│   │   └── ProductCard.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── header/
│   │   ├── BrandAdvertise.jsx
│   │   ├── Hero.jsx
│   │   └── Navber.jsx
│   └── Spinner.jsx
├── Context/
│   └── AuthContextProvider.jsx
├── hooks/
│   └── useAuth.jsx
├── layouts/
│   └── Root.jsx
├── pages/
│   ├── AddProductPage.jsx
│   ├── BrandProductPage.jsx
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── MyCartPage.jsx
│   ├── NotFoundPage.jsx
│   ├── ProductsDetails.jsx
│   └── RegisterPage.jsx
├── Routes/
│   └── Route.jsx
├── utilitis/
│   ├── LoaderHandle.jsx
│   ├── ProtectedRoute.jsx
│   └── Url.js
├── main.jsx
├── index.css
└── App.jsx 
```





