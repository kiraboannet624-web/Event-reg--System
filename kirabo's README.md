# TechConf 2025 - Event Registration System

A simple and attractive web-based registration system for the Tech Innovation Conference 2025, built with React, Vite, and Tailwind CSS.

##  Project Overview

This application allows users to:
- View conference information
- Register for the event through a multi-step form
- Review their registration details
- Confirm their registration
- Automatically recognize returning users
- Edit or cancel their registration

All registration data is stored in the browser's localStorage, so users remain registered even after closing the browser.



##  Features & Requirements Met

###  Multi-Step Registration Flow
1. **Event Information Page** - Displays conference details, speakers, and highlights
2. **Registration Form** - Collects user information with validation
3. **Review Page** - Shows summary of entered information
4. **Confirmation Page** - Confirms successful registration

###  Form Fields
- Full Name (required)
- Email Address (required, validated)
- Phone Number (required)
- Organization/Institution (optional)
- Ticket Type (Student/Standard/VIP)
- Dietary Requirements (optional)
- Additional Notes (optional)

###  Client-Side Routing
- Uses React Router for navigation
- Protected routes for registered users
- Automatic redirects based on registration status

###  State Management
- Context API for sharing state across components
- Form data persists across pages
- Centralized state management

###  Local Storage Persistence
- Registration data saved to browser localStorage
- Data persists after browser close/refresh
- Automatic detection of returning users

###  Returning User Handling
- Checks localStorage on app load
- Redirects registered users to their registration page
- Allows editing or canceling registration

###  Form Validation
- Required field validation
- Email format validation
- Error messages displayed to users

###  Attractive UI with Tailwind CSS
- Modern gradient backgrounds
- Responsive design
- Clean card-based layouts
- Progress indicator
- Hover effects and transitions
- Color-coded ticket types

##  Design Features

- **Gradient Backgrounds**: Blue to indigo gradient for visual appeal
- **Card Layouts**: Clean white cards with shadows
- **Progress Bar**: Visual indicator showing current step
- **Color Coding**: Different colors for ticket types and status
- **Responsive**: Works on desktop and mobile devices
- **Smooth Transitions**: Hover effects on buttons and cards

## 🔄 User Flow

### New User:
1. Lands on Event Info page
2. Clicks "Register Now"
3. Fills out registration form
4. Reviews their information
5. Confirms registration
6. Sees confirmation page
7. Data saved to localStorage

### Returning User:
1. Lands on Event Info page
2. Automatically detected as registered
3. "Register Now" button changes to "View My Registration"
4. Can view, edit, or cancel their registration

 Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router 6** - Client-side routing
- **Tailwind CSS 4** - Styling framework
- Context API - State management
- LocalStorage API - Data persistence


 Pages Explained

 EventInfo.jsx (Home Page)
- Displays conference name, date, and location
- Shows event highlights (speakers, attendees, days, workshops)
- Features 4 keynote speakers
- Call-to-action buttons
- Detects if user is already registered

 RegistrationForm.jsx
- Three sections: Personal Info, Ticket Selection, Additional Info
- Form validation for required fields
- Real-time error messages
- Progress bar showing Step 1 of 3
- Radio buttons for ticket selection

 ReviewPage.jsx
- Displays all entered information
- Progress bar showing Step 2 of 3
- Edit button to go back
- Confirm button to proceed
- Information note about registration

 ConfirmationPage.jsx
- Success message with checkmark
- Progress bar showing Step 3 of 3 (all complete)
- Summary of registration details
- Buttons to view full registration or go home

 AlreadyRegistered.jsx
- Shows "Already Registered" status
- Displays full registration details
- Ticket type highlighted
- Edit registration button
- Cancel registration button (with confirmation)

Code Explanation

RegistrationContext.jsx
- Creates a Context for sharing registration state
- Manages formData state object
- Handles localStorage operations (save/load/remove)
- Provides functions: updateFormData, confirmRegistration, cancelRegistration
- Checks localStorage on mount to detect returning users

 App.jsx
- Sets up React Router with BrowserRouter
- Wraps app in RegistrationProvider
- Defines all routes
- Implements protected routes (redirects based on registration status)

 Form Validation
- Checks for empty required fields
- Validates email format using regex
- Displays error messages below fields
- Prevents submission if validation fails

 How It Works

1. **State Management**: Context API stores form data and registration status
2. **Routing**: React Router handles navigation between pages
3. **Persistence**: localStorage saves registration data as JSON
4. **Validation**: Client-side validation before allowing form submission
5. **User Detection**: On app load, checks localStorage for existing registration

 Tips for Testing

1. **Test New User Flow**: Clear localStorage and register
2. **Test Returning User**: Refresh page after registering
3. **Test Validation**: Try submitting empty form
4. **Test Edit**: Register, then edit your registration
5. **Test Cancel**: Register, then cancel registration
 Why This Design?

- **Simple & Clean**: Easy to understand and navigate
- **Professional**: Looks like a real conference website
- **User-Friendly**: Clear instructions and feedback
- **Responsive**: Works on all screen sizes
- **Modern**: Uses latest React and Tailwind CSS features

---

