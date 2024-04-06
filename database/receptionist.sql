/*
	columns: id, name, phone, address
    
    
    id, name, phone, address
    
    
    receptionist: receptionist1, receptionist2, receptionist3, receptionist4
	
*/

create database if not exists hospitalmanagementsystem;
use hospitalmanagementsystem;

create table if not exists receptionist (
	id char(36) primary key,
    name varchar(255) not null,
    phone varchar(255) not null,
    address varchar(255) not null
);

select * from receptionist;
describe receptionist;
drop table receptionist;

drop table user;
select * from user;

insert into receptionist values
('b41f3d67-3aa0-43f7-af31-342731e0bac9','receptionist1','9993846107','Gaya'),
('bb1efa14-ed35-4afa-8a24-11cb8698ed72','receptionist2','8298537263','Rafiganj'),
('bb9815aa-4c14-4f06-bdd8-9f93918b2b5c','receptionist3','8235222717','Rajabagicha'),
('428af484-16ca-4601-9444-60cf4fb37466','receptionist4','9006236115','Abudul Pur');



