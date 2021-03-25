# Create react app

How to start a real professional react project.

## create-react-app

To start a new project use the following command:

```
> npx create-react-app cra-tutorial
```

## Development server

```
> npm start
```

## To install a library

```
> npm install <library name>
> npm i <library name>
```

## NPX

node package executer

activate commands

```
> npx create-react-app <project-name>
```

## To install material design

```
> npm install @material-ui/core
> npm install @material-ui/icons
```

place this in the head in the `index.html`

```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

## How to deploy our web site

### Github pages

- register for free - github. 
- create a new repository for your project
- install git on your computer: [install git](https://git-scm.com/downloads)
- place the following commands in your terminal

```base
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/ywarezk/innovation-demo-app.git
git push -u origin master
```
- modify the package.json. add the following:

```
"homepage": "https://ywarezk.github.io/innovation-demo-app",
```

- install the following package:

```
> npm install gh-pages
```

- Add the following to the `scripts` section of the `package.json`

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

- to deploy your app

- you can use git to push your code

```
git add .
git commit -m "changed something in your app"
git push origin master
```

- you can deploy your app

```
> npm run deploy
```

## EX.

- start a new project with `create-react-app`
- call that project `todo`
- create a folder called `components`
- create the following files in the `components` folder: `Login.js, Footer.js, Header.js`
- Each file should have a component inside
- Modify `App.js` to include the component and arrange them.

## EX.

- install [Material Design](https://material-ui.com/)
- In the `Login.js` place material design button as the submit button: [Button](https://material-ui.com/components/buttons/)
- In the `Login.js` place material design TextField as the email and password input: [TextField](https://material-ui.com/components/text-fields/)
- use Paper to make the login and todo component stand out a bit: [Paper](https://material-ui.com/components/paper/)
- In the `Header.js` use material  AppBar [AppBar](https://material-ui.com/components/app-bar/) 
- in the todo list place a grabage icon button [IconButton](https://material-ui.com/components/buttons/#sizes)
- place the image in an avatar component: [Avatar](https://material-ui.com/components/avatars/#avatar)