create database if not exists hospitalmanagementsystem;

use hospitalmanagementsystem;
/*
	cardiology, dermatology, Orthopedics, Neurology, Obstetrics, Gynocology
    Psychiatry, Pediatrics, Urology, Ophthalmogy
	id, name, specialization, experience, licenseNumber, 
	
    1. 4462a006-99e5-4db9-b663-de6439442dc1
    2. 519f5fac-2d99-436a-8c61-080023a41378
    3. cf6cf980-3aaf-490a-aca3-bc5c7488ef6c
	4.	8ed1df27-1138-47f8-8821-f41b7feaa9dc
    5.  cc9346a0-5ae5-4041-90c3-0e494486232a
	6.	cf31594c-1d52-42ad-9b79-ca2c367d0a1a
	7.	ce19b475-fd3a-42e6-9354-d89a3914b560
	8.	6dd5989b-8cae-488e-8231-a518efc34d92
	9.	9714d876-753a-4124-a04b-54821db0a9a8
	10.	8266356e-c727-4885-a17f-e77a91b872b6
*/
create table if not exists Doctor(
	id char(36) primary key, 
    name varchar(255) not null, 
    specialization varchar(255) not null,
    experience integer not null,
    licenseNumber varchar(255) not null
);


insert into Doctor values
('4462a006-99e5-4db9-b663-de6439442dc1','Javed Alam','cardiology',15,'LIS101'),
('519f5fac-2d99-436a-8c61-080023a41378','Gyan Prakash','dermatology',15,'LIS102'),
('cf6cf980-3aaf-490a-aca3-bc5c7488ef6c','Durga Prasad','Orthopedics',15,'LIS103'),
('8ed1df27-1138-47f8-8821-f41b7feaa9dc','Binod Kumar','Neurology',15,'LIS104'),
('cc9346a0-5ae5-4041-90c3-0e494486232a','Amir Hussain','Gynocology',15,'LIS105'),
('cf31594c-1d52-42ad-9b79-ca2c367d0a1a','Pankaj Kumar','Psychiatry',15,'LIS105'),
('ce19b475-fd3a-42e6-9354-d89a3914b560','Kashif Alam','Pediatrics',15,'LIS106'),
('6dd5989b-8cae-488e-8231-a518efc34d92','Tabrez Hussain','Urology',15,'LIS107'),
('9714d876-753a-4124-a04b-54821db0a9a8','Shyamli Gupta','Ophthalmogy',15,'LIS108'),
('8266356e-c727-4885-a17f-e77a91b872b6','Ramesh Kumar','cardiology',15,'LIS109');




select * from doctor;
describe doctor;
