# Routing

we will learn to do routing with [react-router](https://reactrouter.com/)

## Install

```
> npm install react-router-dom
```

## data in web

- Server
- Persistent in Client browser - localStorage, sessionStorage, cookies, Inner browser database
  - reload supported
  - cross browser/platform not supported
- using the url
  - reload supported
  - cross browser/platform
- Memory based - context, redux, useState,  
  - reload is not supported
  - cross browser/platform not supported
  
## data in url
  
  - redirect - yariv katz
  - search
  - filter
  - sort
  - resource/entity
  
## the way data is passed
  
  - query params
    - `google.com?q=hello&aqs=chrome`
	
  - path params
    - `/questions/37521557/how-to-correctly-use-react-router`

	

# EX.

- Add navigation to the header
- /
- /todo
- when the user logs in navigate him to the todo list

# EX. Search todo list

- we want to add a search for our todo list
- you need a form with a material text field and a submit button
- when submitting the form you change the url: `?q=what the user typed`
- the todo list when getting a search query need to send a request to the server

```
http://nztodo.herokuapp.com/api/tasks/?format=json&search=test
```

the todo list displays a new list of the new result from the server