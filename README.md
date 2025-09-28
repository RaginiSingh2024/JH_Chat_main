# JH Chat Application

A Firebase-based chat application with multiple components and cloud functions.

## Project Structure

```
JH_Chat_main/
├── auth/                    # Authentication components
├── capstone/               # Capstone project implementations
│   ├── em-chat/           # EM Chat implementation
│   ├── jh-chat/           # JH Chat implementation
│   └── mz-chat-new/       # MZ Chat (new version)
├── firestore/             # Firestore database configurations
├── jh-functions/          # Firebase Cloud Functions for JH
├── play-functions/        # Playground/test Firebase Functions
├── realtime/              # Real-time database components
├── index.html             # Main application entry point
├── config.js              # Configuration file
├── fire.rules             # Firebase security rules
├── firestore-rules.rules  # Firestore security rules
└── .gitignore             # Git ignore file
```

## Features

- **File Upload**: Upload images (JPEG/PNG) to Firebase Storage
- **Real-time Chat**: Multiple chat implementations with real-time messaging
- **Firebase Integration**: Complete Firebase ecosystem integration
  - Authentication
  - Firestore Database
  - Cloud Storage
  - Cloud Functions
- **Multiple Chat Variants**: Different chat implementations for various use cases

## Prerequisites

- Node.js 18 or higher
- Firebase CLI
- Firebase project setup

## Environment Variables

Create `.env` files in the following directories with your Firebase configuration:

- `./auth/.env`
- `./capstone/em-chat/.env`
- `./capstone/jh-chat/.env`
- `./capstone/mz-chat-new/.env`
- `./firestore/.env`

Required environment variables:
```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_DATABASE_URL=your_database_url
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
```

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Set up environment variables as described above
4. Install dependencies for cloud functions:

```bash
# For JH Functions
cd jh-functions/functions
npm install

# For Play Functions
cd ../../play-functions/functions
npm install
```

## Usage

### Running the Application

1. Open `index.html` in a web browser
2. Use the file input to select an image
3. Click "Upload" to upload the file to Firebase Storage

### Firebase Functions

#### JH Functions
```bash
cd jh-functions/functions
npm run serve    # Start local emulator
npm run deploy   # Deploy to Firebase
npm run logs     # View function logs
```

#### Play Functions
```bash
cd play-functions/functions
npm run serve    # Start local emulator
npm run deploy   # Deploy to Firebase
npm run logs     # View function logs
```

## Development

### Firebase Emulator

To run the project locally with Firebase emulators:

```bash
firebase emulators:start
```

### Security Rules

The project includes Firebase security rules:
- `fire.rules` - General Firebase rules
- `firestore-rules.rules` - Firestore-specific rules

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Technologies Used

- **Frontend**: HTML5, JavaScript (ES6+)
- **Backend**: Firebase Cloud Functions (Node.js 18)
- **Database**: Firebase Firestore
- **Storage**: Firebase Cloud Storage
- **Authentication**: Firebase Auth
- **Real-time**: Firebase Realtime Database

## License

This project is part of a capstone project. Please refer to your institution's guidelines for usage and distribution.

## Support

For issues and questions, please create an issue in the repository or contact the development team.
