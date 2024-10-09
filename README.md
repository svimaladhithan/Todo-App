# Techno-Functional Document: TODO App

 **Deployed the app via Netlify: https://vimaltodoapp.netlify.app/**

 **To run the app locally, please follow the below commands**
 - npm install
 - npm run dev

## Development Approach

### Project Setup and Planning

- Successfully set up the development environment using **React** with **Vite**, **Tailwind CSS**, and necessary dependencies.
- Analyzed the project requirements for frontend integration.

### UI Design and Component Implementation

- Developed the user interface according to the specified requirements.
- Integrated the **Flowbite** design component library for modals and loaders.
- Created the Home Screen with the following features:

  **Add Todo**  
  - The app fetches existing TODOs(if available) from the backend and displays a default **Create Todo Card**. 
  - Clicking the Create Todo Card opens a modal with options to enter the **Title**, **Description**, and an **Add New Todo** button.
  - A new Todo Card is generated with the **title**, **description**, and icons for **Edit** and **Delete**.

  **Edit Todo**  
  - Clicking the **Edit** icon on a Todo card opens a modal pre-filled with the title and description.
  - After making changes, click the **Edit Todo** button to save updates.

  **Delete Todo**  
  - Clicking the **Delete** icon on a Todo card removes the corresponding Todo.

  **Loaders**  
  - Added user-friendly loaders to indicate ongoing API interactions.

  **Toast Notifications**  
  - Implemented toast messages for every action performed to provide proper user feedback.

- Developed common components for **Card**, **Modal**, **Loader**, and **Toast** to promote code reusability and maintainability.
- Created a function to generate **custom background colors** for each rendered card to enhance user experience.
- Ensured the interface is responsive and user-friendly, maintaining high code quality and readability.

### API Integration and Authentication

- Analysed and integrated a **Laravel backend server** with APIs for fetching, creating, editing, and deleting TODOs.
- Integrated **Axios** to connect the app with the Laravel Todo Backend Database API, facilitating CRUD operations.
- Implemented error handling for a robust application experience.

### Testing

- Conducted thorough testing across multiple browsers and screen sizes.
- Verified the app's functionality, user interface, and responsiveness.

### Bug Fixes and Improvements

- Resolved issues identified during testing and fixed any bugs.
- Fine-tuned the user interface to enhance the overall user experience.

### Coding Standards

- Adhered to proper naming conventions and organized folder structure.
- Included comments where necessary for clarity.
- Implemented reusable components and common utilities.
- Committed and pushed changes using conventional commits.
