define({ "api": [
  {
    "type": "get",
    "url": "/api/v2/group-by-country",
    "title": "Order by country",
    "group": "Chaotic",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Sucess to get data by country\",\n  \"data\": {\n     \"Canada\": [\n               {\n                 \"_id\": \"5ddfdde9fc13ae36960003ec\",\n                 \"order_id\": \"88735413-c2a8-4dc7-ac22-bebe16359418\",\n                 \"status\": \"Pending\",\n                 \"order_items\": [\n                                  {\n                                    \"amount\": 53557,\n                                    \"name\": \"Mushroom - Porcini Frozen\",\n                                    \"picture\": \"http://dummyimage.com/187x240.jpg/ff4444/ffffff\",\n                                    \"description\": \"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\"\n                                   },\n                                   {\n                                     \"amount\": 39020,\n                                     \"name\": \"Kaffir Lime Leaves\",\n                                     \"picture\": \"http://dummyimage.com/136x155.bmp/cc0000/ffffff\",\n                                     \"description\": \"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\\n\\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\\n\\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\"\n                                   }\n                                 ],\n                  \"shipping\": {\n                                \"address\": \"93984 Spohn Center\",\n                                \"city\": \"Unaí\",\n                                \"reference\": \"Major Banks\",\n                                \"country\": {\n                                  \"code\": \"BR\",\n                                  \"name\": \"Brazil\"\n                                }\n                             },\n                  \"person\": {\n                              \"full_name\": \"Fitzgerald Frowd\",\n                              \"gender\": \"Male\",\n                              \"phone\": \"339-309-5602\"\n                  }\n               }\n   ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Chaotic",
    "name": "GetApiV2GroupByCountry"
  },
  {
    "type": "get",
    "url": "/api/v2/order-by-status",
    "title": "Order by status",
    "group": "Chaotic",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 200 OK\n   HTTP/1.1 200 OK\n   {\n     \"message\": \"Sucess to get data\",\n     \"data\": {\n               \"Pending\": [\n\t\t\t                        {\n                               \"_id\": \"5ddfdde9fc13ae36960003ec\",\n                               \"order_id\": \"88735413-c2a8-4dc7-ac22-bebe16359418\",\n                               \"status\": \"Pending\",\n                               \"order_items\": [\n                                                 {\n                                                   \"amount\": 53557,\n                                                   \"name\": \"Mushroom - Porcini Frozen\",\n                                                   \"picture\": \"http://dummyimage.com/187x240.jpg/ff4444/ffffff\",\n                                                   \"description\": \"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\"\n                                                 },\n                                                 {\n                                                   \"amount\": 39020,\n                                                   \"name\": \"Kaffir Lime Leaves\",\n                                                   \"picture\": \"http://dummyimage.com/136x155.bmp/cc0000/ffffff\",\n                                                   \"description\": \"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\\n\\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\\n\\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\"\n                                                 }\n                                             ],\n                               \"shipping\": {\n                                 \"address\": \"93984 Spohn Center\",\n                                 \"city\": \"Unaí\",\n                                 \"reference\": \"Major Banks\",\n                                 \"country\": {\n                                   \"code\": \"BR\",\n                                   \"name\": \"Brazil\"\n                                 }\n                               },\n                             \"person\": {\n                             \"full_name\": \"Fitzgerald Frowd\",\n                             \"gender\": \"Male\",\n                             \"phone\": \"339-309-5602\"\n                           }\n                        }\n                   ],\n\n           }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Chaotic",
    "name": "GetApiV2OrderByStatus"
  },
  {
    "type": "get",
    "url": "/api/v2/order-major-values",
    "title": "Order by major values",
    "group": "Chaotic",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n     \"message\": \"Sucess to get data\",\n     \"data\": [\n         {\n             \"status\": \"Pending\",\n             \"totalAmout\": 62178359\n         },\n         {\n             \"status\": \"Cancelled\",\n             \"totalAmout\": 59239780\n         },\n         {\n             \"status\": \"Refunded\",\n             \"totalAmout\": 58222622\n         },\n         {\n             \"status\": \"Paid\",\n             \"totalAmout\": 57177356\n         },\n         {\n             \"status\": \"Expired\",\n             \"totalAmout\": 56354867\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Chaotic",
    "name": "GetApiV2OrderMajorValues"
  },
  {
    "type": "get",
    "url": "/api/v2/order-total/:status",
    "title": "Order by total by status",
    "group": "Chaotic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Sucess to get total by status Pending\",\n   \"data\": {\n       \"status\": \"Pending\",\n       \"totalAmount\": 62178359\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Chaotic",
    "name": "GetApiV2OrderTotalStatus"
  }
] });
