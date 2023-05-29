# README - Printi Marvel

The project consists in to build of web system where the user can search for characters of Marvel and to look the details and comics of a character.

## About the development

This project was build on React, with own Webpack config, and other technologies of the React Ecosystem, such as Redux, React router dom, etc...

This application does a integration with the <a href="https://developer.marvel.com/" target="_blank">Marvel Developer API</a> to get the characters, character's detail and your comics related and show the informations on characters's datatable and in a character's page.

### Routes of pages

- Login: /
- Characters's List: /characters
- Character's Detail: /characters/name-of-character

### Search a Character's Data

This application use Redux to share the ID of character between the datatable and the character's page. This ID is used to get the information of character on Marvel API, instead of, the route load the character ID. The slug of character is used to route of character's page only.

## Marvel API Tokens

You need to create a public and private key to use the Marvel API. This tokens cam be create in <a href="https://developer.marvel.com/" target="_blank">Marvel Developer API</a>

## Architecture

This project was published on <a href="https://www.netlify.com/" target="_blank" >Netlify Host</a>

## Runing the project

- Install the dependencies

```
npm install
```

- Run app on address <a href="http://localhost:8080">http://localhost:8080</a>

```
npm start
```

- Building app on /dist folder

```
npm run build
```

## Tecnologies on project

- React
- Redux
- React router dom
- Webpack
- Babel
- Styled components
- Typescript
- Axios
