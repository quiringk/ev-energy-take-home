# Charging Station Locator: A React Native App

## Introduction

This React Native application allows users to find nearby public charging stations for electric vehicles. Users can also select a station and notify a backend system of their intention to use it. This project uses the `openchargemap.org` API to fetch data about charging stations.

## Installation & Testing

To run and test the app locally using Expo, follow these steps:

### Prerequisites:

- Ensure you have [Node.js](https://nodejs.org/) installed.
- Install [Expo CLI](https://docs.expo.dev/get-started/installation/): `npm install -g expo-cli`
- For mobile testing, download the Expo Go app from the [iOS App Store](https://apps.apple.com/app/apple-store/id982107779) or the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www).

### Setup Steps:

1. **Clone the Repository and Install Dependencies**:

```bash
git clone https://github.com/quiringk/ev-energy-take-home
cd ev-energy-take-home
npm install
npx expo start
```

## Design Decisions

### Why a map?

I considered both map and list views for displaying charging stations. Here are the reasons I chose a map view:

- **Visual Appeal**: Maps offer an intuitive and visually appealing way to find and locate charging stations.
- **Dynamic Loading**: Dragging the map to different locations automatically triggers the loading of charging stations centered around the new location. This dynamic feature makes the app more interactive and user-centric.

### Future Enhancements

1. **List View**: In addition to the map view, implementing a list view sorted by distance could be beneficial. As the user moves, the list could auto-update, ensuring the nearest stations are always at the top.
2. **Location Services**: Integrating location services would make the app even more user-centric. This would allow users to find stations based on their current position. For the scope of this project, I started with a default location in Portland, my hometown. However, users have the flexibility to navigate to different locations by dragging the map.
3. **API Key Private**: The API key is currently hardcoded in the app. This is not ideal as it exposes the key to the public. A better approach would be to store the key in a `.env` file and use a library like `react-native-config` to access it.
4. **Real API to Charge**: When you click "Start Charging" there is an error, "Network request failed". In the future we would want to hook this up to a real API.

## Conclusion & Next Steps

Although this project is an initial implementation, it lays the foundation for a comprehensive EV charging station locator app. Given more time, I'd integrate location services and introduce a list view for better user experience. The goal would be to create a holistic solution catering to users on the go, ensuring they find a charging station whenever they need one.
