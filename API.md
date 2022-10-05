## `/element` routes

### **POST** _`/element`_

- Objetivo: Cadastrar uma elemento.
- Código HTTP: `201 - CREATED; 500 - Internal Server Error`;
- Body req(exemplo):
```json
{
  "element": "Fire"
}
```

- Body res(exemplo):
```json
{
  "message": "create the Fire element with id 1"
}
```
```json
{
  "message": "Error when registering a new element"
}
```

### **GET** _`/element`_

- Objetivo: Obter todos os elementos cadastrados.
- Código HTTP: `200 - OK; 500 - Internal Server Error`;
- Body res(exemplo):
```json
[
  {
    "id": 1,
    "element": "Fire"
  },
  {
    "id": 2,
    "element": "Water"
  },
  {
    "id": 3,
    "element": "Dragon"
  },
]
```
```json
{
  "message": "SQL error message"
}
```

### **GET** _`/element/:id`_

- Objetivo: Obter o elemento cadastrado pelo id.
- Código HTTP: `200 - OK; 404 - Not Found; 500 - Internal Server Error`
- Body res(exemplo):
```json
[
  {
    "id": 3,
    "element": "Dragon"
  },
]
```
```json
{
  "message": "Element Not Found"
}
```
```json
{
  "message": "SQL error message"
}
```

### **PUT** _`/element/:id`_

- Objetivo: Atualizar o elemento cadastrado pelo id.
- Código HTTP: `200 - OK; 404 - Not Found; 500 - Internal Server Error`;
- Body res(exemplo):
```json
{
  "message": "Element with id 3 updated is successful";
}
```
```json
{
  "message": "Element Not Found"
}
```
```json
{
  "message": "SQL error message"
}
```
### **DELETE** _`/element/:id`_

- Objetivo: Deletar o elemento cadastrado pelo id.
- Código HTTP: `200 - OK; 404 - Not Found; 500 - Internal Server Error`;
- Body res(exemplo):
```json
{
  "message": "Element with id 3 deleted with success";
}
```
```json
{
  "message": "Element Not Found"
}
```
```json
{
  "message": "SQL error message"
}
```
---