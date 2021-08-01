# INSTRUCTIONS FOR THIS API  DEPLOYED TO HEROKU

## POST admin
### Request
`POST /createAdmin`

 https://stark-mountain-88053.herokuapp.com/createAdmin

### Posted Data
    username: doreen,
    password: 12345
### Response

    HTTP/1.1 200 OK
    {"_id"::"60d58ff33576761336f4c15d",
    "username":"doreen",
    "password":"$2b$10$JdYgzOgJ1P3thKHDavefNOknSiNgYbuKTf/CZaJSzCYoSNre3aiR.",
    "__v":{:"0"}}



## POST admin login
### Request
`POST /signinAdmin`
 https://stark-mountain-88053.herokuapp.com/signinAdmin
### Posted Data
    username: doreen,
    password: 12345
### Response
    HTTP/1.1 200 OK
    logged in





 ## POST user(client)

### Request

`POST /registerClient`

 https://stark-mountain-88053.herokuapp.com/registerClient

### Posted Data
  * passed via form 

   fullname: mwape doreen,

   dateofBirth: 02-03-2000,

   nrcPassportNo: 12344/10/1,
   
   phonenumber: +260963333211, with country code
   address:  lusaka, garden house,
   pin: 1234, only four digits
   img: profile.jpg, choose a picture 
### Response
   HTTP/1.1 200 OK
   fullname: mwape doreen,
   dateofBirth: 02-03-2000,
   nrcPassportNo: 12344/10/1,
   phonenumber: +260963333211
   address:  lusaka, garden house,
   pin: "$2b$10$JdYgzOgJ1P3thKHDavefNOknSiNgYbuKTf/CZaJSzCYoSNre3aiR.",
   img: uploads/profile.jpg,
   sim: MTN,
   verified: false


## POST  verify user(client)
### Request
`POST /verifyClient`
 https://stark-mountain-88053.herokuapp.com/verifyClient
### Posted Data
   phonenumber: +260963333211,   can only login upon verify there phonenumber with code send to their mobile line
   code : 2345
### Response
   HTTP/1.1 200 OK
   fullname: mwape doreen,
   dateofBirth: 02-03-2000,
   nrcPassportNo: 12344/10/1,
   phonenumber: +260963333211
   address:  lusaka, garden house,
   pin: "$2b$10$JdYgzOgJ1P3thKHDavefNOknSiNgYbuKTf/CZaJSzCYoSNre3aiR.",
   img: uploads/profile.jpg,
   sim: MTN,
   verified: true   // user has beem veified


## POST  user(client)
### Request
`POST /registerClient`
 https://stark-mountain-88053.herokuapp.com/registerClient
### Posted Data
   phonenumber: +260963333211,   can only login upon verify there phonenumber with code send to their mobile line
   pin: 1234,
### Response
    HTTP/1.1 200 OK
    logged in



## POST user(company)
### Request
`POST /registerCompany`
 https://stark-mountain-88053.herokuapp.com/registerCompany
### Posted Data
   companyName: dodo devs
        
   companyAddress: matero 

   companyRep: doreen mwansa
       
   occupation: accountant
       
   email: doreenmwamsa@gmail.com
        
   passwordComp: 23456
### Response
   HTTP/1.1 200 OK
   companyName: dodo devs
        
   companyAddress: matero 

   companyRep: doreen mwansa
       
   occupation: accountant
       
   email: doreenmwamsa@gmail.com
        
   passwordComp: "$2b$10$JdYgzOgJ1P3thKHDavefNOknSiNgYbuKTf/CZaJSzCYoSNre3aiR."



## POST  user(client)
### Request
`POST /loginCompany`
 https://stark-mountain-88053.herokuapp.com/loginCompany
### Posted Data
   email: doreenmwamsa@gmail.com  
   passwordComp: 23456
### Response
    HTTP/1.1 200 OK
    logged in

    






   







