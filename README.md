# **Global Groupware Solutions Limited**

## **Project Overview**
This project is a complete implementation of user authentication, user management, and responsive frontend design. The backend allows for login, user data retrieval, profile updates, and profile deletion, while the frontend provides a seamless user experience with pagination, responsiveness, and clean UI design.

---

## **Prerequisites**
To run this project on your local system, ensure you have the following installed:
- **Git**: [Download Git](https://git-scm.com/downloads) and follow the installation instructions.
- **Node.js**: [Download Node.js](https://nodejs.org/) and install it (includes npm).
- **Database**: (If applicable) Mention database name and installation instructions.

---

## **Installation Instructions**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Pushkariiit/Global-Groupware-Solutions-Limited.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd Global-Groupware-Solutions-Limited
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

   This command installs all the required packages listed in the `package.json` file.

4. **Set up Environment Variables**
   - Create a `.env` file in the root directory.
   - Add the following environment variables (update the values as required):
     ```env
     PORT=3000
     DB_URI=your-database-uri
     JWT_SECRET=your-secret-key
     ```

5. **Run the Application**
   ```bash
   npm start
   ```

6. **Access the Application**
   - Open your browser and navigate to:
     ```
     http://localhost:3000
     ```

---

## **API Endpoints**

### **1. POST /api/login**
- **Description**: Implements the login functionality.
- **Request Body**:
  ```json
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }
  ```
- **Response**: A token is returned on successful login, which is stored for future authenticated requests.

### **2. GET /api/users**
- **Description**: Fetches a list of all users.
- **Authorization**: Requires the token received from the login API.

### **3. PUT /api/users/:id**
- **Description**: Updates user profile information.
- **Request Body**: Contains the updated user data.
- **Authorization**: Requires the token.

### **4. DELETE /api/users/:id**
- **Description**: Deletes a user's profile.
- **Authorization**: Requires the token.

---

## **Frontend Implementation**
- **Technologies Used**:
  - **Material-UI**: For UI components.
  - **Bootstrap**: For responsive design.
  - **Axios**: For API calls to fetch the user list and interact with the backend.
- **Key Features**:
  - **Responsive Design**: The website is fully responsive across different devices.
  - **Pagination**: Implements pagination for the user list.
  - **Notifications**: Each user action (edit, delete, etc.) triggers proper notifications.

---

## **Features**
- **User Login**: Secure user authentication using token-based login.
- **User Management**: Users can view, edit, and delete their profiles.
- **Responsive UI**: Mobile-first design with Bootstrap and Material-UI.
- **Notifications**: User actions like login, edit, and delete have proper feedback notifications.
- **Pagination**: Efficient display of user data using a paginated UI.

---

## **Technologies Used**
- **Frontend**: HTML, CSS, Bootstrap, Material-UI, React.js, Axios
- **Backend**: Node.js, Express.js, JWT (for authentication)
- **Database**: (Specify the database used, e.g., MongoDB)

---

## **How to Contribute**
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit the changes (`git commit -m 'Add feature-name'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a pull request.

---

## **Acknowledgements**
Firstly, I would like to thank you for giving me an opportunity to showcase my skills. I am highly obliged to have the opportunity to interview for this role.

---

## **Contact**
If you have any questions or need further clarification, please reach out.

**Thanks & Regards**  
Pushkar Choudhary

