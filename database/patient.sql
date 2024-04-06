create database if not exists hospitalmanagementsystem;
use hospitalmanagementsystem;


/*
	patientId, name, gender, address, location, doctorName, department, ratePlan, sponser, referredBy,
    description, description, consultingFee
    
    patientId: char(36) primary key,
    name : varchar(255) not null
    gender: char(1) not null,
    address: varchar(255) not null,
    location: varchar(255) not null,
    doctorId: varchar(255) not null,
    department: varchar(255) not null,
    ratePlan: varchar(255) not null,
    sponser: varchar(255) not null,
    referredBy: varchar(255) not null,
    description: varchar(255)  not null,
    contactNumber: varchar(255) not null
    consultingFee: int not null
    
    3e71c784-d971-4533-936a-55fd7243ca77
    7da1a520-5b4e-412b-b5c6-c8717eabc4e5
    414c4550-d6ab-4b31-96c1-f5ea6c9f706d
	3e816509-edb7-4bff-aac6-fbc384f8747e
	ef037169-1bb0-41ac-afd5-0672a1e5070e
    7ddb5f2b-5e2a-419a-8419-2a139f7c34d9
    407eda6d-2ad2-443a-a73d-188322d78728
    7f3811be-8086-44b8-b971-fbda93d9baa8
    08bb7e41-ec61-490d-80d7-5cec2bae82f7
    6fcd0cb4-c8a7-42e7-8300-2532b30c118c
    50372205-c0a3-4c61-8946-90008000d821
*/

create table if not exists patient (
	patientId char(36) primary key,
    name varchar(255) not null,
    gender char(1) not null,
    address varchar(255) not null,
	location varchar(255) not null,
    doctorId char(36) not null,
    department varchar(255) not null,
    ratePlan varchar(255) not null,
    sponser varchar(255) not null,
    referredBy varchar(255) not null,
	description varchar(255) not null,
	contactNumber int not null,
    consultingFee int not null
);

/*
 id, name, gender, address, location, doctorName, department, ratePlan, sponser, 
 refferedBy, description, contactNumber, consultingFee
 cardiology, dermatology, Orthopedics, Neurology, Obstetrics, Gynocology
    Psychiatry, Pediatrics, Urology, Ophthalmogy
    
    Shifa Iqbal, Khusboo Ansari, Hasnain Ansari, Dilnawaz Alam
    Sujeet Kumar, Ravish Kumar, Arbaaz Khan, Taukir Alam, Naushad Anwer, Abdul Gaffar, Venkatesh Reddy

*/
insert into patient values
('3e71c784-d971-4533-936a-55fd7243ca77','Shifa Iqbal','F',
'Gaya','Location1','Jawed Alam','cardiology','ratePlan1','sponser1','refferredBy1','abdominal pain','9993846107',500),
('7da1a520-5b4e-412b-b5c6-c8717eabc4e5','Khusboo Ansari','F',
'Gaya','Location2','Gyan Prakash','cardiology','ratePlan2','sponser2','refferredBy2','Headache','8298537263',600),
('414c4550-d6ab-4b31-96c1-f5ea6c9f706d','Hasnain Ansari','M',
'Gaya','Location3','Durga Prasad','cardiology','ratePlan1','sponser1','refferredBy1','abdominal pain','9993846107',300),
('3e816509-edb7-4bff-aac6-fbc384f8747e','Dilnawaz Alam','M',
'Gaya','Location4','Binod Kumar','cardiology','ratePlan1','sponser1','refferredBy1','abdominal pain','9993846107',400),
('ef037169-1bb0-41ac-afd5-0672a1e5070e','Sujeet Kumar','M',
'Gaya','Location5','Amir Hussain','cardiology','ratePlan1','sponser1','refferredBy1','abdominal pain','9993846107',500),
('7ddb5f2b-5e2a-419a-8419-2a139f7c34d9','Ravish Kumar','M',
'Gaya','Location6','Jawed Alam','cardiology','ratePlan1','sponser1','refferredBy1','abdominal pain','9993846107',400),
('407eda6d-2ad2-443a-a73d-188322d78728','Arbaaz Khan','M',
'Gaya','Location7','Durga Prasad','cardiology','ratePlan1','sponser1','refferredBy1','abdominal pain','9993846107',500),
('7f3811be-8086-44b8-b971-fbda93d9baa8','Taukir Alam','M',
'Gaya','Location8','Jawed Alam','cardiology','ratePlan1','sponser1','refferredBy1','abdominal pain','9993846107',500),
('08bb7e41-ec61-490d-80d7-5cec2bae82f7','Naushad Anwer','M',
'Gaya','Location9','Tabrez Hussain','cardiology','ratePlan1','sponser1','refferredBy1','abdominal pain','9993846107',500),
('6fcd0cb4-c8a7-42e7-8300-2532b30c118c','Abdul Gaffar','M',
'Gaya','Location10','Ramesh Kumar','cardiology','ratePlan1','sponser1','refferredBy1','abdominal pain','9993846107',500),
('50372205-c0a3-4c61-8946-90008000d821','Venkatesh Reddy','M',
'Gaya','Location11','Shyamli Gupta','cardiology','ratePlan1','sponser1','refferredBy1','abdominal pain','9993846107',500);

select * from patient;


describe patient;

