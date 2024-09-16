# **Customer Management Application**

## **Overview**

The Customer Management Application is designed to streamline the management of customer data. It features functionalities for adding, editing, and deleting customer records. The application leverages **Laravel** for backend operations and **React** for the frontend user interface, ensuring a robust and dynamic experience.

### **Technologies Used**

- **Backend**: **Laravel** (PHP)
  - Provides a comprehensive API for performing CRUD operations on customer data.
  - Manages validation, authentication, and data handling.

- **Frontend**: **React** (JavaScript)
  - Offers a dynamic and responsive interface.
  - Utilizes **Tailwind CSS** for styling and layout enhancements.

- **Additional Tools**:
  - **Tailwind CSS**: For modern, utility-first styling.
  - **Axios**: For making HTTP requests to the Laravel API.
  - **React Router**: For managing client-side routing and navigation.

## **File Structure**

The file structure is organized to enhance modularity, maintainability, and scalability:

```
src/
│
├── components/
│   ├── Button.js               # Reusable button component for various actions
│   ├── Input.js                # Reusable input component with validation
│   ├── Navbar.js               # Navigation bar for accessing different pages
│   └── Router.jsx              # Centralized routing logic
│
├── pages/
│   ├── AddCustomer.jsx         # Page for adding new customers
│   ├── EditCustomer.jsx        # Page for editing existing customers
│   └── CustomerList.jsx        # Page for listing and managing customers
│
├── services/
│   └── customerService.js      # API service for CRUD operations
│
├── App.js                      # Main entry point for the application
└── index.js                    # Entry point for rendering the React app
```

### **Explanation of Each File/Folder**

#### **`components/` Folder**

- **Button.js**: A versatile button component for form submissions and other actions.
- **Input.js**: A reusable input field component with built-in validation and error handling.
- **Navbar.js**: Provides navigation links to different pages within the application.
- **Router.jsx**: Manages routing, mapping URL paths to specific page components and integrating navigation.

#### **`pages/` Folder**

- **AddCustomer.jsx**: Contains the form for adding new customers, using form controls and submission logic.
- **EditCustomer.jsx**: Includes a form for editing customer details, with data pre-filled from the backend.
- **CustomerList.jsx**: Displays a list of customers with options to edit or delete records.

#### **`services/` Folder**

- **customerService.js**: Contains functions for interacting with the API, including fetching, adding, updating, and deleting customers.

#### **Main Files**

- **App.js**: The central application file that renders the router, integrating the routing logic into the application.
- **index.js**: The entry point for React, responsible for rendering the main `App` component into the DOM.

## **Setup and Installation**

To set up the application, follow these steps:

1. **Install Tailwind CSS**: Add Tailwind CSS to your project for styling.
2. **Configure Tailwind CSS**: Update the Tailwind configuration and CSS files to include necessary directives.
3. **Import Tailwind Styles**: Ensure that Tailwind styles are imported into your main CSS file.

## **About the Developer**

**Najmul Hasan** is a Web Developer with a specialization in backend development and a degree in Software Engineering. Najmul has experience with Bangla Puzzle Limited and NGEN IT, and has worked on various projects including SEO-optimized platforms and collaborative LMS systems. 

- **Email**: najmulhasansobuj87@gmail.com
- **LinkedIn**: [Najmul Hasan](https://www.linkedin.com/in/md-najmul-hasan-/)
- **Website**: [Najmul Hasan](https://www.najmulhasan.xyz/)

