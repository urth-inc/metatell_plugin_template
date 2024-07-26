# CustomToolbarButton template

## Description

This template is used to create a custom toolbar button in metatell.

## Pre-requisites

- Node.js 20 (We recommend using volta to manage node versions)

## How to Develop

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

Update the package.json file to add metadata about the custom toolbar button. The metadata includes the name, description, and icon of the custom toolbar button.

You can update the following fields to the package.json file:

```json
{
  "name": "my-cool-toolbar-button",
  "version": "0.0.1",
  "description": "A custom toolbar button"
}
```

4. Build the project

Run the following command to build the project:

```
npm run build
```

5. Publish the project

You can publish the plugin from metatell-admin in future.

## Tips

### Restrictions

- Do not use default export. export Component as named export
- Component name should be `CustomToolbarButton`
- component should be placed in `src/CustomToolbarButton` directory
  - You can change the directory to update federation config in `/configs/federationConfig.js`

### Styling

You can use CSS Modules. The CSS Modules are scoped to the component and do not affect other components.

If you want to use different styling systems like styled-components, you can do so by installing the required packages.

