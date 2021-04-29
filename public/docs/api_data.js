define({ "api": [
  {
    "type": "post",
    "url": "/v1/auth/me",
    "title": "Fetch User Information",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/auth/me"
      }
    ],
    "name": "Fetch_User_Information",
    "group": "Authentication",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-key. Format: (Bearer generated-user-unique-token)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Endpoint response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "add_info",
            "description": "<p>Additional Information response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Response status code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"msg\": \"Success\",\n      \"statusCode\": 200,\n      \"data\": {\n          \"id\": 1,\n          \"email\": \"<User email>\",\n          \"name\": \"<User name>\",\n          \"username\": \"<User username>\",\n          \"status\": <User status tagging> (either 1 or 0),\n          \"rank\": <user rank tagging> (Integer),\n          \"password\": \"<User hashed password>\",\n          \"iat\": <Timestamp> (System generated)\n      }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/v1/auth/login",
    "title": "User Login",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/auth/login"
      }
    ],
    "name": "User_Login",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userhook",
            "description": "<p>Email or Username of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User given password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Endpoint response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "add_info",
            "description": "<p>Additional Information response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Response status code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"msg\": \"You are successfully logged in.\",\n      \"token\": \"<Generated token>\",\n      \"add_info\": {\n        \"name\": \"<Name of User>\"\",\n        \"username\": \"<Username of User>\"\n      },\n      \"statusCode\": 200\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/auth.js",
    "groupTitle": "Authentication"
  }
] });
