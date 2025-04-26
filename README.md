# Mobile App Project

## Overview
This mobile application is built using React Native and Expo, providing a cross-platform solution for both iOS and Android. The app connects to a REST API backend for product and order management, utilizing modern tooling for efficient development and a smooth user experience.

## Technologies

### Core Framework
- **React Native**: Build native mobile apps using JavaScript and React
- **Expo**: Streamline development with simplified tooling and workflows

### Navigation & Routing
- **Expo Router**: Handle screen navigation with file-based routing

### UI Components
- **Gluestack**: Professional and customizable UI component library

### Data Management
- **TanStack Query**: Efficient data fetching, caching, and state management
- **REST API Integration**: Connect to backend services for products and orders

## Getting Started

### Prerequisites
- Node.js (v16 or newer)
- npm or yarn
- Expo CLI
- Android Studio (for Android development) or Xcode (for iOS development)
- iOS device or simulator / Android device or emulator

### Installation

1. Clone the repository
```bash
git clone https://github.com/mwendaB/FullstackEcommerce.git
cd FullstackEcommerce
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npx expo start
```

4. Open the app on your device:
   - Scan the QR code with the Expo Go app (Android) or the Camera app (iOS)
   - Press 'a' to open on Android emulator
   - Press 'i' to open on iOS simulator


## API Integration

The app connects to a REST API for handling products and orders. Configuration for the API connection can be found in `services/api.js`.

### Example API Usage

```javascript
import { fetchProducts } from '../services/api';
import { useQuery } from '@tanstack/react-query';

function ProductScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });
  
  // Render UI based on data, loading, and error states
}
```

## Building for Production

To create production builds:

1. For Expo builds:
```bash
eas build --platform ios
eas build --platform android
```

2. For local builds:
```bash
npx expo run:ios
npx expo run:android
```

## Contributing

Please follow the project's coding standards and submit pull requests for review.

## License

[Your License Here]