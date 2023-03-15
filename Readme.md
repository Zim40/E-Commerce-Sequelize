<br>

# E-commerce: Sequelize Back-end

<br>

<!-- LICENCE GOES HERE -->
### Table of Contents <br>
***
 [**About**](#about)<br>
 [**Description**](#description)<br>
 [**Future Development**](#future-development)<br>
 [**Installation**](#installation)<br>
 [**Usage**](#usage)<br>
 [**Contributer**](#contributer)<br>
 [**Contact**](#contact)<br>
 [**Licence Information**](#licence)<br>
 [**Demo**](#demo)<br>


## About
This project demonstrates the capabilities of data storage and managable databases using technologies such as: <br>
**Express** | **Sequelize** | **nodeJS** | **MySQL**


***
## Description
The back-end to this project revolves around CRUD operations, *Create*, *Read*, *Update*, *Delete*, aswell as using *Sequelize* in conjunction with *MySQL* to manipulate the data within the database. 
 ```js
 router.post('/', async (req, res) => {... // Create
 router.get('/', async (req, res) => {... // Read
 router.put('/:id', async (req, res) => {... // Update
 router.delete('/:id', async (req, res) => {... // Delete
 ```
> Note: All testing of routes to databases were performed using [**Insomnia**](https://insomnia.rest/)
>
Unique identifiers were used in the form of *auto_incrementing* ids and primary keys referencing associations between tables and data. 
```js
// Associations
Product.belongsTo(Category); 

Category.hasMany(Product,...

Product.belongsToMany(Tag,...

Tag.belongsToMany(Product,...
```
***
## Installation
Performing these steps in order will install the application and allow for access to mock database seed data and express operations.

**1. First begin by opening a terminal and running the following command:**

```shell
npm install
```
 Once the necessary dependencies have installed you should be able to view the package.json file and see that it contains the following dependencies
 ```js
  "dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mysql2": "^2.1.0",
    "sequelize": "^5.21.7"
  }
 ```
**2. Next we will log into MySQL and create the database.**

>
To log into MySQL run the following command in your terminal:
```shell
mysql -u root -p
# Enter your Password when prompted
```
>**Note:** You *need valid Mysql credentials to create the database*<br>

> **Warning!** This Application deletes and creates a database named "*ecommerce_db*"<br>

**3. Next run the following command to create the database and then exit MySQL.**
```shell 
source db/schema.sql
```
***
**4. Once you have exited from the MySQL database you can finally run the following command to complete setup and seed the newly created Database with data. Following this run 'npm start' to activate the server and begin using routes.**
```shell
node seeds/index.js
```
```shell
# Runs server, ready for API calls
npm start 
```

## Usage
<!-- Describe what can be done in this application and how to do it using insommnia, Screenshot of insomnia with fetch calls -->

***
## Contributer
This application was created by [Zim40](https://github.com/Zim40)
## Contact
[Contact via Email](mailto:michaelm810129@gmail.com)
## Licence

## Demo(OPTIONAL)

## Screenshot (OPTIONAL)