# Chaotic Data

Serviço com proposito de coletar informações de um arquivo .json

Para rodar o projeto em sua maquina é necessário as ferramentas abaixo:

# Como configurar o projeto:

### 1. Instale o NodeJS

- _NodeJS:_ https://nodejs.org/en/

### 2. Instale o yarn ou npm

- _yarn:_ https://yarnpkg.com/lang/en/

- _npm:_ https://www.npmjs.com/get-npm

# Rodando o projeto:

Antes de iniciar instale as dependências do projeto:

`yarn install`

ou

`npm install`

## Comandos disponíveis

Abaixo temos alguns comandos úteis para debug, execução e build.

- Criar o build do projeto para deploy:
  `yarn build`

* Executar o projeto localmente:
  `yarn dev`

- Executar os testes com o jest:
  `yarn debug`

# Requisição dos dados

A chamada é do tipo HTTP:

- Localhost:
  BASE_URL: `http://localhost:5000/api/organize/event`

> Obs: a porta pode ser configurada no arquivo server.js

## Endpoints

#### Order by status:

Tipo: GET

Endpoint:
`/api/v2/order-by-status`

Retorno:

```
  {
    "message": "Sucess to get data",
    "data": {
        "Pending": [
			{
                "_id": "5ddfdde9fc13ae36960003ec",
                "order_id": "88735413-c2a8-4dc7-ac22-bebe16359418",
                "status": "Pending",
                "order_items": [
                    {
                        "amount": 53557,
                        "name": "Mushroom - Porcini Frozen",
                        "picture": "http://dummyimage.com/187x240.jpg/ff4444/ffffff",
                        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
                    },
                    {
                        "amount": 39020,
                        "name": "Kaffir Lime Leaves",
                        "picture": "http://dummyimage.com/136x155.bmp/cc0000/ffffff",
                        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
                    }
                ],
                "shipping": {
                    "address": "93984 Spohn Center",
                    "city": "Unaí",
                    "reference": "Major Banks",
                    "country": {
                        "code": "BR",
                        "name": "Brazil"
                    }
                },
                "person": {
                    "full_name": "Fitzgerald Frowd",
                    "gender": "Male",
                    "phone": "339-309-5602"
                }
            }
        ],
        "Paid": [
			{
                "_id": "5ddfdde9fc13ae36960003f1",
                "order_id": "1a95ee94-96dc-4243-b9b2-8611ab0a7b68",
                "status": "Paid",
                "order_items": [
                    {
                        "amount": 29606,
                        "name": "Wine La Vielle Ferme Cote Du",
                        "picture": "http://dummyimage.com/130x103.jpg/dddddd/000000",
                        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
                    },
                    {
                        "amount": 76012,
                        "name": "Foie Gras",
                        "picture": "http://dummyimage.com/194x172.bmp/dddddd/000000",
                        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
                    },
                    {
                        "amount": 81345,
                        "name": "Cheese - Mix",
                        "picture": "http://dummyimage.com/238x219.png/5fa2dd/ffffff",
                        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
                    },
                    {
                        "amount": 63614,
                        "name": "Pernod",
                        "picture": "http://dummyimage.com/186x225.png/ff4444/ffffff",
                        "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
                    },
                    {
                        "amount": 41953,
                        "name": "Bread - Wheat Baguette",
                        "picture": "http://dummyimage.com/193x177.bmp/ff4444/ffffff",
                        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
                    }
                ],
                "shipping": {
                    "address": "08225 Myrtle Plaza",
                    "city": "Rio Grande",
                    "reference": "n/a",
                    "country": {
                        "code": "BR",
                        "name": "Brazil"
                    }
                },
                "person": {
                    "full_name": "Brantley Cookes",
                    "gender": "Male",
                    "phone": "758-640-2057"
                }
            }
        ],
    }
  }
```

#### Order Total By Status:

Tipo: GET

Endpoint:
`/api/v2/order-total/:status`

Route Params:

```
  {
    "status": "Pending"
  }
```

Retorno:

```
  {
    "message": "Sucess to get total by status Pending",
    "data": {
        "status": "Pending",
        "totalAmount": 62178359
    }
  }
```

#### Order Major Values:

Tipo: GET

Endpoint:
`/api/v2/order-major-values`


Retorno:

```
  {
    "message": "Sucess to get data",
    "data": [
        {
            "status": "Pending",
            "totalAmout": 62178359
        },
        {
            "status": "Cancelled",
            "totalAmout": 59239780
        },
        {
            "status": "Refunded",
            "totalAmout": 58222622
        },
        {
            "status": "Paid",
            "totalAmout": 57177356
        },
        {
            "status": "Expired",
            "totalAmout": 56354867
        }
    ]
  }
```

#### Group By Country:

Tipo: GET

Endpoint:
`/newUser/api/v2/group-by-country`

Retorno:

```
  {
    "message": "Sucess to get data by country",
    "data": {
        "Canada": [
            {
                "_id": "5ddfdde0fc13ae6c63000032",
                "order_id": "b813aad8-30fe-4fcc-b9eb-1ccffba88db6",
                "status": "Refunded",
                "order_items": [
                    {
                        "amount": 24092,
                        "name": "Beets - Golden",
                        "picture": "http://dummyimage.com/107x156.bmp/ff4444/ffffff",
                        "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
                    },
                    {
                        "amount": 28798,
                        "name": "Tart - Butter Plain Squares",
                        "picture": "http://dummyimage.com/249x228.png/ff4444/ffffff",
                        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
                    },
                    {
                        "amount": 66967,
                        "name": "Grenadine",
                        "picture": "http://dummyimage.com/214x178.png/5fa2dd/ffffff",
                        "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
                    },
                    {
                        "amount": 13728,
                        "name": "Bar - Granola Trail Mix Fruit Nut",
                        "picture": "http://dummyimage.com/172x203.png/dddddd/000000",
                        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
                    }
                ],
                "shipping": {
                    "address": "46633 Parkside Way",
                    "state": "Québec",
                    "city": "Lorraine",
                    "reference": "Diversified Commercial Services",
                    "country": {
                        "code": "CA",
                        "name": "Canada"
                    }
                },
                "person": {
                    "full_name": "Agace Masse",
                    "gender": "Female",
                    "phone": "693-499-8324"
                }
            }
		]
        "Afghanistan": [
			{
                "_id": "5ddfdde9fc13ae36960003d5",
                "order_id": "61a6dad9-bd43-4bf5-a85f-025adacf311b",
                "status": "Cancelled",
                "order_items": [
                    {
                        "amount": 77121,
                        "name": "Pepper - Red Thai",
                        "picture": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
                        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
                    },
                    {
                        "amount": 26088,
                        "name": "Chicken - Leg / Back Attach",
                        "picture": "http://dummyimage.com/172x224.png/dddddd/000000",
                        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
                    },
                    {
                        "amount": 59045,
                        "name": "Wine - Red, Gallo, Merlot",
                        "picture": "http://dummyimage.com/249x104.bmp/5fa2dd/ffffff",
                        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
                    },
                    {
                        "amount": 47855,
                        "name": "Ranchero - Primerba, Paste",
                        "picture": "http://dummyimage.com/151x137.jpg/5fa2dd/ffffff",
                        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
                    },
                    {
                        "amount": 70433,
                        "name": "Carroway Seed",
                        "picture": "http://dummyimage.com/202x167.png/cc0000/ffffff",
                        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
                    }
                ],
                "shipping": {
                    "address": "4783 Everett Center",
                    "city": "Qala i Naw",
                    "reference": "Computer Software: Programming, Data Processing",
                    "country": {
                        "code": "AF",
                        "name": "Afghanistan"
                    }
                },
                "person": {
                    "full_name": "Myrta Antonsson",
                    "gender": "Female",
                    "phone": "802-982-0927"
                }
            }
		],
    }
}
```
