# Shoe Store Management Application <img src="/assets/icons/favicon.ico" alt="App Icon" width="50" height="50">

| Username       | Password    |
| -------------- | ----------- |
|Admin           | Admin12341234 | 


## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
5. [Environment Variables](#environment-variables)
7. [Advanced Features](#advanced-features)
8. [Challenges Faced](#challenges-faced)
9. [Known Bugs](#known-bugs)
10. [Future Improvements](#future-improvements)
11. [Links](#links)
12. [Screenshots](#screenshots)


## Overview

The Shoe Store Management Application is a comprehensive web-based platform that allows users to browse a collection of shoes and contact the store, while providing administrators with extensive management capabilities. Built using React, this application leverages modern web technologies and libraries to deliver a responsive and interactive user experience.

## Features

### Core Functionality:
1. **Admin Login and User Access**
   - Admin users can log in to manage the store, while regular users can browse without purchasing options.

2. **Shoe Catalog**
   - Users can view details of each shoe in the store, including images and descriptions.

3. **Contact Form**
   - Users can submit their name, email, and a message to the store, facilitating customer communication.

4. **Admin Management Panel**
   - Admins can add, edit, and delete shoes from the store inventory.
   - Admins can view and manage user messages, ensuring efficient customer service.

5. **Routing and Navigation**
   - The application uses React Router to enable smooth navigation between the home, shop, and contact pages.

### Enhanced Features:
1. **CRUD Operations**
   - Admins can perform Create, Read, Update, and Delete operations on both shoes and user messages.

2. **Form Validation and Error Handling**
   - All forms include robust validation to ensure data integrity and provide user feedback on errors.

3. **Loading Indicators and Notifications**
   - Use of loaders to enhance user experience during data fetching.
   - Toastify notifications for actions like form submissions, CRUD operations, and error messages.

4. **API Integration**
   - Integrated with MockAPI to simulate backend operations for managing shoes and messages.

## Tech Stack

- **Frontend**: React, JSX, HTML, CSS, JavaScript
- **Libraries**: Axios, Toastify, React Icons, React Router
- **State Management**: React State and Context API
- **Backend**: MockAPI and Local Storage for data storage and retrieval
- **Local Storage**: Used to persist the admin login state across page refreshes

## Setup and Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository from GitHub**:

git clone https://github.com/DanielYehezkely/shoe-store-react

2. **Navigate to the project directory**:

cd shoe-store-management

3. **Install the necessary dependencies**:

npm install

4. **Start the development server**:

npm start

5. **Open the app in your web browser**:
Visit `http://localhost:3000`

## Usage

1. **Admin Login**:
- Access the admin login from the home page.
- Enter your credentials to log in and access the management panel.

2. **Browsing Shoes**:
- Users can navigate to the shop to browse the shoe collection.
- Click on a shoe to view detailed information.

3. **Contacting the Store**:
- Use the contact form to send a message to the admin.
- Fill in your name, email, and message and submit the form.

4. **Admin Management Panel**:
- Manage the shoe inventory by adding, editing, or deleting shoes.
- Review and manage user messages, marking them as dealt with or deleting them.

## Environment Variables

The application requires a `.env` file to store environment-specific configurations.

1. **Create a `.env` file**:
   - Copy the provided `.env.template` file to `.env`:
     ```sh
     cp .env.template .env
     ```

2. **Edit the `.env` file**:
   - Fill in the required environment variables. Below are examples of variables you might need:
     ```
     REACT_APP_API_URL=https://your-api-url.mockapi.io
     REACT_APP_ANOTHER_VARIABLE=value
     ```

3. **Common variables**:
   - `REACT_APP_API_URL`: The base URL for the API used by the application.
   - `REACT_APP_ANOTHER_VARIABLE`: Additional configuration variables as needed.

## Advanced Features

1. **Form Validations**:
- Real-time form validation provides immediate feedback to users for any incorrect or missing information.

2. **CRUD Operations**:
- Full support for creating, reading, updating, and deleting items in the shoe inventory and user messages.

3. **Loading and Notifications**:
- Loading spinners provide visual feedback during data operations.
- Toastify notifications inform users of successful operations or errors.

4. **Routing with React Router**:
- Seamless navigation between different pages, maintaining state and context.

## Challenges Faced

1. **Integrating Multiple APIs**:
- Handling interactions with two different MockAPI sources required careful state management and API handling.

2. **Complex State Management**:
- Managing state across multiple components and ensuring consistent updates was challenging but educational.

3. **Form Validation and Error Handling**:
- Implementing robust validation and handling various error scenarios provided significant insights into user experience design.

## Known Bugs

- **Responsive Issues**: Some components might not display perfectly on very small screens. Future improvements will address these issues.

## Future Improvements

1. **User Authentication and Role Management**:
- Implementing a more robust authentication system with user roles and permissions.

2. **Enhanced Mobile Support**:
- Improving the responsiveness and layout of the application for a better mobile experience.

3. **Advanced Analytics**:
- Adding more detailed analytics and reporting for the admin to monitor store performance and user engagement.

## Links

- **GitHub Repository**: [Shoe Store Management App](5. **Open the app in your web browser**:
Visit `http://localhost:3000`

## Usage

1. **Admin Login**:
- Access the admin login from the home page.
- Enter your credentials to log in and access the management panel.

2. **Browsing Shoes**:
- Users can navigate to the shop to browse the shoe collection.
- Click on a shoe to view detailed information.

3. **Contacting the Store**:
- Use the contact form to send a message to the admin.
- Fill in your name, email, and message and submit the form.

4. **Admin Management Panel**:
- Manage the shoe inventory by adding, editing, or deleting shoes.
- Review and manage user messages, marking them as dealt with or deleting them.

## Advanced Features

1. **Form Validations**:
- Real-time form validation provides immediate feedback to users for any incorrect or missing information.

2. **CRUD Operations**:
- Full support for creating, reading, updating, and deleting items in the shoe inventory and user messages.

3. **Loading and Notifications**:
- Loading spinners provide visual feedback during data operations.
- Toastify notifications inform users of successful operations or errors.

4. **Routing with React Router**:
- Seamless navigation between different pages, maintaining state and context.

## Challenges Faced

1. **Integrating Multiple APIs**:
- Handling interactions with two different MockAPI sources required careful state management and API handling.

2. **Complex State Management**:
- Managing state across multiple components and ensuring consistent updates was challenging but educational.

3. **Form Validation and Error Handling**:
- Implementing robust validation and handling various error scenarios provided significant insights into user experience design.

## Known Bugs

- **Responsive Issues**: Some components might not display perfectly on very small screens. Future improvements will address these issues.
- **API Rate Limits**: Occasionally, API rate limits can cause delays in data fetching or operations.

## Future Improvements

1. **User Authentication and Role Management**:
- Implementing a more robust authentication system with user roles and permissions.

2. **Enhanced Mobile Support**:
- Improving the responsiveness and layout of the application for a better mobile experience.

3. **Advanced Analytics**:
- Adding more detailed analytics and reporting for the admin to monitor store performance and user engagement.

## Links

- **GitHub Repository**: [Shoe Store Management App](https://github.com/your-username/shoe-store-management)
- **Live Deployment**: [Netlify Link](https://dyz-shoe-store.netlify.app/)

---

## Admin Screenshots

1. **Home Page**
![Home Page](/assets/readme-images/readme-homePage-image.png)
***
2. **Shoes Page**
![Shop Page](/assets/readme-images/readme-admin-shoesPage.png)
***
3. **Shoe Details Page**
![Shoe Details Page](/assets/readme-images/readme-admin-singleShoePage.png)
***
4. **Edit Page**
![Contact Page](/assets/readme-images/readme-admin-editShoePage.png)
***
5. **Add Shoe Page**
![Admin Management Panel](/assets/readme-images/readme-admin-addShoePage.png)
***
6. **Admin Panel Page**
![Admin Management Panel](/assets/readme-images/readme-admin-panelPage.png)
---

## User Screenshots

1. **Users Shoes Page**
![Shop Page](/assets/readme-images/readme-users-shoesPage.png)
***
2. **Users Shoe Details PAge**
![Shoe Details Page](/assets/readme-images/readme-users-singleShoePage.png)
***
3. **Contact Page**
![Contact Page](/assets/readme-images/readme-users-contactPage.png)
***


---
