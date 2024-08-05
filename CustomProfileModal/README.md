# CustomProfileModal template

## Description

This is a template for creating a CustomProfileModal for `metatell`.

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

The CustomProfileModal should implement the following interface:

```ts
interface CustomProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  displayName: string;
  bio: string;
  avatarId: string | undefined;
  avatarThumbnailUrl: string | undefined;
  selectedAvatarId: string | undefined;
  selectedAvatarThumbnailUrl: string | undefined;
  openAvatarSelectModal: () => void;
  saveProfile: ({
    displayName,
    bio,
    avatarId,
  }: {
    displayName?: string;
    bio?: string;
    avatarId?: string;
  }) => void;
}
```

- `isOpen`: a boolean representing whether the CustomProfileModal is open or not.
- `onClose`: a function to close the CustomProfileModal.
- `displayName`: a string representing the user's display name.
- `bio`: a string representing the user's biography.
- `avatarId`: a string representing the ID of the user's current avatar.
- `avatarThumbnailUrl`: a string representing the URL of the user's current avatar thumbnail image.
- `selectedAvatarId`: a string representing the ID of the avatar newly selected by the user. If no avatar is selected, it will be undefined.
- `selectedAvatarThumbnailUrl`: a string representing the URL of the thumbnail image of the avatar newly selected by the user. If no avatar is selected, it will be undefined.
- `openAvatarSelectModal`: a function to open the avatar selection modal.
- `saveProfile`: a function to save profile information. This function takes an object as an argument, which includes displayName, bio, and avatarId.

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

Update the package.json file to add metadata about the CustomProfileModal. The metadata includes the name, description, and version.

You can update the following fields to the package.json file:

```json
{
  "name": "my-cool-custom-profile-modal",
  "version": "0.0.1",
  "description": "A custom profile modal for metatell",
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
- Component name should be `CustomProfileModal`
- component should be placed in `src/CustomProfileModal` directory
  - You can change the directory to update federation config in `/configs/federationConfig.js`

### Styling

You can use CSS Modules without any additional configuration.

If you want to use different styling systems like styled-components, you can do so by installing the required packages.

