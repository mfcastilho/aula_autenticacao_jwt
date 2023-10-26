create database db_aula_jwt;

create table users(
  
	id serial primary key,
  name varchar(100) not null,
  email varchar(100) not null unique,
  password text not null
 );