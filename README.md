# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


                                                BLOG APPLICATION SYSTEM
 
TABLE OF CONTENTS:-

1. Introduction
1.1 Purpose
	1.2 Scope
2. System Perspective
	2.1 Product Perspective
	2.2 Product Features
3. System Requirements
	3.1 User Interfaces
	3.2 User Roles
	3.3 Functional Requirements
	3.4 Interface Requirements
	3.5 Performance Requirements
	3.6 Security Requirements
4. Non-Functional Requirements
5. Constraints
	5.1 Technology Stack Constraint
	5.2 Third Party API Dependency
	5.3 Dependency
6. Conclusion
 
1. INTRODUCTION
1.1 Purpose:   The purpose of this Software Requirements Specification (SRS) document is to provide a detailed outline of the requirements for the development of the MERN Blog Application. This document serves as a reference for the development team, stakeholders, and quality assurance personnel.

1.2 Scope:   The MERN Blog Application is a full-stack web application designed to facilitate the creation, management, and interaction with blog posts. Users can like and unlike posts created by others, leave comments, and utilize a user and admin dashboard. The application also provides a WYSIWYG (What You See Is What You Get) editor and enables users to upload images, which are stored in Cloudinary. The system is based on the MERN stack, with MongoDB used to store user credentials and data.

2. SYSTEM OVERVIEW

2.1 Product Perspective:  The MERN Blog Application is a standalone system that operates independently. It is designed to provide an all-inclusive and engaging blogging platform with essential features, including user management, post creation and management, and user interactions.

2.2 Product Features:  The system will include the following features:
•	User Registration and Authentication
•	User and Admin Dashboards
•	Create, Edit, and Delete Blog Posts
•	Like and Unlike Posts
•	Comment on Blog Posts
•	WYSIWYG Editor for Post Creation
•	Image Upload with Cloudinary Integration

3. SYSTEM REQUIREMENTS
3.1 User Interfaces:
•	User registration module
•	Post management module
•	User interactions module
•	Content creation module
•	User and Admin dashboard module

3.2 User Roles:
•	User: Registered users who can like, unlike, and interact with posts.
•	Admin: Users with administrative privileges to manage posts and users.		

3.3 FUNCTIONAL REQUIREMENTS:

3.3.1 User Authentication:
•	User and Admin can create accounts (signups) and log in using their credentials.
•	User profile management.
•	Role management (admin, user).


3.3.2 Post Management Module: 
•	Users can create new posts with a title, content, and optional media attachments.
•	Edit and delete own posts.
•	Posts can be categorized.
•	Users can view comments on posts and comment on them.
•	Users can like and unlike posts.


3.3.3 User Interactions:
•	Like and unlike post functionality.
•	Admin can create, edit, and delete the posts.
•	Users can view, like, unlike and comment on those posts.
•	Real-time blog functionality for users to interact and share experiences


3.3.4 Content Management Module:
•	A user-friendly WYSIWYG editor for post creation.
•	Image upload and storage through Cloudinary.
•	Embed media such as videos and GIFs.

3.3.5 Dashboard Management Module:
•	Admin and user dashboard.
•	Management with roles and permissions.
•	Personalized dashboard for users displaying posts.


3.3.6 Image Handling and Integration Module:
•	Cloudinary cloud services is been used.
•	Cloudinary automatically optimizes images and videos for end users.
•	Drag-and-drop image upload with integration to Cloudinary storage.

3.4 INTERFACE REQUIREMENTS:
	SOFTWARE INTERFACE:
		FRONT-END:
        •	REACTJS
        •	HTML
        •	CSS
        BACK-END:
        •	Node.js
        •	MongoDB
        •	Cloudinary services

ADDITIONAL:
•	Git
•	Visual studio Code
•	Github
•	MongoDB Atlas / Compass

3.5 PERFORMANCE REQUIREMENTS:
•	The System should provide a seamless and responsive user experience with minimal latency in loading posts and process user actions.
•	The system should handle a significant number of concurrent users without degradation in performance.

3.6 SECURITY REQUIREMENTS:
•	Security measures must be in place to protect user data and application functionality.
•	This includes user authentication, authorization, and secure image storage using Cloudinary.

4. NON-FUNCTIONAL REQUIREMENTS:
•	Scalability: The system should be designed to handle increasing user traffic and data volume without major architectural design.
•	Reliability: The system should have high availability to ensure users can access it at all times.
•	Compatibility: The frontend should be compatible with various web browsers and devices, ensuring a consistent experience.
•	The database should be able to accommodate items details according to the size.

5. CONSTRAINTS:
	
	5.1 Technology Stack Constraint:
    •	The development stack is limited to the MERN stack (MongoDB, Express, React, Node.js).
5.2 Third-Party API Dependency: 
    •	Integration with Cloudinary is required for image storage.
5.3 Dependencies:
    •	The Users and Administrator must have basic knowledge of computers and English Language.
    •	Properly managing and ensuring the availability and reliability of these dependencies will contribute to the stability and functionality of the project.

6. CONCLUSION:
	In conclusion, the MERN Blog Application is poised to deliver a robust and user-centric blogging platform with a rich feature set, intuitive interfaces, and stringent security measures. By adhering to the outlined requirements, we aim to create a seamless and engaging user experience while ensuring scalability and reliability. This project holds the potential to provide users with a dynamic space for content creation and interaction, setting the stage for a successful and satisfying blogging experience.



 


 


 
 



 


 


 
  	




 

