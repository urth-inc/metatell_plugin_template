# CustomEntryPanel template

## Description

This is a template for creating a CustomEntryPanel for `metatell`.

## Pre-requisites

- Node.js 20 (We recommend using volta to manage node versions)

## npm scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project
- `npm run test`: Run unit tests
- `npm run lint`: Run all lint check
- `npm run lint:tsc`: Run code check based on tsc
- `npm run lint:prettier`: Run code check based on prettier
- `npm run lint:eslint`: Run code check based on eslint
- `npm run lint-fix`: Run all code fix
- `npm run lint-fix:prettier`: Run code fix based on prettier
- `npm run lint-fix:eslint`: Run code fix based on eslint

## Interfaces

The custom entry panel should implement the following interface:

```ts
interface CustomEntryPanelProps {
  roomName: string | undefined;
  showJoinRoom: boolean;
  isRoomFull: boolean;
  onJoinRoom: () => void;
  showEnterOnDevice: boolean;
  onEnterOnDevice: () => void;
  showSpectate: boolean;
  onSpectate: () => void;
  showOptions: boolean;
  onOptions: () => void;
  leftImage: React.ReactNode;
  rightImage: React.ReactNode;
  leftMessage: string;
  rightMessage: string;
  termsOfServiceUrl: string | undefined;
  privacyPolicyUrl: string | undefined;
}
```

- `roomName`: The name of the room.
- `showJoinRoom`: A boolean value that controls whether to display the "Join Room" button.
- `isRoomFull`: A boolean value indicating whether the room is full.
- `onJoinRoom`: A function that is executed when the "Join Room" button is clicked.
- `showEnterOnDevice`: A boolean value that controls whether to display the "Enter with VR Headset" button.
- `showSpectate`: A boolean value that controls whether to display the "Join Tour" button.
- `onSpectate`: A function that is executed when the "Join Tour" button is displayed.
- `showOptions`: A boolean value that controls whether to display the "Room Settings" button.
- `onShowOptions`: A function that is executed when the "Room Settings" button is clicked.
- `leftImage`: The image element displayed on the left side of the screen.
- `rightImage`: The image element displayed on the right side of the screen.
- `leftMessage`: The string displayed on the left side of the screen.
- `rightMessage`: The string displayed on the right side of the screen.
- `termsOfServiceUrl`: A string representing the URL link to the terms of service.
- `privacyPolicyUrl`: A string representing the URL link to the privacy policy.

## How to develop

1. Install dependencies

install the dependencies by running the following command:

```
npm install
```

2. Run the development server

Run the following command to start the development server:

the development server will start at http://localhost:3004

```
npm run dev
```

3. update package.json to add metadata

Update the package.json file to add metadata about the CustomEntryPanel. The metadata includes the name, description, and the version of plugin.

You can update the following fields to the package.json file:

```json
{
  "name": "my-cool-custom-entry-panel",
  "version": "0.0.1",
  "description": "A custom entry panel for metatell",
}
```

4. Build the project

Run the following command to build the project:

```
npm run build
```

You can find the built files in the `dist` directory.

5. Publish the project

You can publish the plugin from `metatell-admin` in future.

## Tips

### Restrictions

- Do not use default export. export Component as named export
- Component name should be `CustomEntryPanel`
- component should be placed in `src/CustomEntryPanel` directory
  - You can change the directory to update federation config in `/configs/federationConfig.js`

### Styling

You can use CSS Modules without any additional configuration.

If you want to use different styling systems like styled-components, you can do so by installing the required packages.

