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

<!-- Write steps to installation -->

>Note: You *need valid Mysql credentials to create the database*<br>
 **Warning** This Application deletes and creates a database named "*ecommerce_db*"

***
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