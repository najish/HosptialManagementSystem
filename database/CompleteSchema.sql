create database hospitalmanagementsystem;
use hospitalmanagementsystem;
create table if not exists ApplicationUser (
	id char(36) primary key,
    employeeName varchar(255) not null,
    employeeEmail varchar(255) not null,
    contactNumber varchar(255) not null,
    username varchar(255) not null,
    password varchar(255) not null,
    lastLoginTime varchar(255) not null
);

-- insert into AppicationUser values 
-- (id,employeename,employeeemail,contactnumber,username,password,lastLoginTime)

insert into ApplicationUser values
('b13e2765-9d0f-45d8-a028-37ed4fa33f92','Employee1','employee1@gmail.com','9993846101','username1','Password@123','lastLoginTime'),
('29c7c04f-613f-46bd-81e8-4e92a835e2fb','Employee2','employee2@gmail.com','9993846102','username2','Password@123','lastLoginTime'),
('2d754fc3-666e-4c0d-86a3-3b2dfd9363df','Employee3','employee3@gmail.com','9993846103','username3','Password@123','lastLoginTime'),
('277a325d-08e4-4883-a5b1-942c822445ee','Employee4','employee4@gmail.com','9993846104','username4','Password@123','lastLoginTime'),
('1ddacfb5-273b-4991-a938-e5102727a412','Employee5','employee5@gmail.com','9993846105','username5','Password@123','lastLoginTime'),
('a5332943-0cfe-4850-8090-b9339d2d50ac','Employee6','employee6@gmail.com','9993846106','username6','Password@123','lastLoginTime'),
('af8f970b-057e-4805-b7c5-a8d27035ae6f','Employee7','employee7@gmail.com','9993846107','username7','Password@123','lastLoginTime'),
('0973b2f8-b076-4f9a-ad64-0614d665a965','Employee8','employee8@gmail.com','9993846108','username8','Password@123','lastLoginTime'),
('254b22f3-fed0-402a-9770-da92b60641e3','Employee9','employee9@gmail.com','9993846109','username9','Password@123','lastLoginTime'),
('5d557cb7-13da-4e7a-9405-4947ac8df1eb','Employee10','employee10@gmail.com','9993846110','username10','Password@123','lastLoginTime');

select * from applicationuser;


-- insert into Appointment values 
-- (id,applyDate,patientName,email,phoneNumber,appointmentDate,lastLoginTime)
create table if not exists Appointment (
	id char(36) primary key,
    applyDate date not null,
    patientName varchar(255) not null,
    email varchar(255) not null,
    phoneNumber varchar(255) not null,
    appointmentDate date not null,
    uniqueId varchar(255) not null,
    doctorName varchar(255) not null,
    description varchar(255) not null,
    status varchar(255) not null,
    doctorResponse varchar(255) not null
);

describe appointment;

insert into appointment values
('53a0861c-f008-424b-87ac-16738b58617d','2024-04-07','Patient1','patient1@gmail.com','8862892061','2024-04-07','unique1','doctor1','description1','status1','DoctorResponse1'),
('ebb034ec-a299-48ba-bb54-ed0bee1b8d46','2024-04-07','Patient2','patient2@gmail.com','8862892062','2024-04-07','unique2','doctor2','description2','status2','DoctorResponse2'),
('0f26d2a1-77b6-4e91-9e06-5b3f4f0a9989','2024-04-07','Patient3','patient3@gmail.com','8862892063','2024-04-07','unique3','doctor3','description3','status3','DoctorResponse3'),
('dfe1436c-cb6a-4200-aa2e-bc594e3d89fe','2024-04-07','Patient4','patient4@gmail.com','8862892064','2024-04-07','unique4','doctor4','description4','status4','DoctorResponse4'),
('e1329b79-bef7-430a-b8b7-29cf738feb7c','2024-04-07','Patient5','patient5@gmail.com','8862892065','2024-04-07','unique5','doctor5','description5','status5','DoctorResponse5'),
('5418463d-17c5-4be3-80ba-fcfe556e9c36','2024-04-07','Patient6','patient6@gmail.com','8862892066','2024-04-07','unique6','doctor6','description6','status6','DoctorResponse6'),
('9ad4adfd-b3c4-49a6-b314-e702b3744bfe','2024-04-07','Patient7','patient7@gmail.com','8862892067','2024-04-07','unique7','doctor7','description7','status7','DoctorResponse7'),
('9e00871b-d4e4-4465-8e82-cc19e2d1c18d','2024-04-07','Patient8','patient8@gmail.com','8862892068','2024-04-07','unique8','doctor8','description8','status8','DoctorResponse8'),
('189b1e74-6d5d-45d1-9367-2d2ca6fb2a2e','2024-04-07','Patient9','patient9@gmail.com','8862892069','2024-04-07','unique9','doctor9','description9','status9','DoctorResponse9'),
('e27adc32-48d9-4431-b6e2-9378c9fc732d','2024-04-07','Patient10','patient10@gmail.com','8862892010','2024-04-07','unique10','doctor10','description10','status10','DoctorResponse10'),
('e139a7d2-f23c-4a3b-af43-943e839f6ec7','2024-04-07','Patient11','patient11@gmail.com','8862892011','2024-04-07','unique11','doctor11','description11','status11','DoctorResponse11');

select * from appointment;

create table if not exists AttendedPatient (
	id char(36) primary key,
    attendedBy varchar(255) not null,
    patientName varchar(255) not null,
    mrNumber varchar(255) not null,
    timeAttended datetime not null,
    registeredBy varchar(255) not null,
    diagonosisNotes varchar(255) not null,
    prescriptionNotes varchar(255) not null,
    fileName varchar(255) not null
);

insert into AttendedPatient values 
('2e866820-8fcb-48b5-a4a6-16871107c5ba','attendedBy1','patient1','mrnumber1','2024-05-12 10:44:05','REGISTEREDBY1','DISNOSISNOTES1','PRESCRIPTIONNOTES1','FILENAME1'),
('672486b4-933d-480b-8e73-391806368410','attendedBy1','patient1','mrnumber2','2024-05-12 10:44:05','REGISTEREDBY1','DISNOSISNOTES1','PRESCRIPTIONNOTES1','FILENAME1'),
('85a481e1-0af7-46f3-9f7b-2bc2b4f6a26b','attendedBy1','patient1','mrnumber3','2024-05-12 10:44:05','REGISTEREDBY1','DISNOSISNOTES1','PRESCRIPTIONNOTES1','FILENAME1'),
('94eee3b3-a092-42dc-88db-2a8be31397a5','attendedBy1','patient1','mrnumber4','2024-05-12 10:44:05','REGISTEREDBY1','DISNOSISNOTES1','PRESCRIPTIONNOTES1','FILENAME1'),
('9cca388f-e4bf-4264-9e30-c184867efba3','attendedBy1','patient1','mrnumber5','2024-05-12 10:44:05','REGISTEREDBY1','DISNOSISNOTES1','PRESCRIPTIONNOTES1','FILENAME1'),
('ad490361-52aa-4aff-989a-f2b28ccf208b','attendedBy1','patient1','mrnumber6','2024-05-12 10:44:05','REGISTEREDBY1','DISNOSISNOTES1','PRESCRIPTIONNOTES1','FILENAME1'),
('08b3d4a6-34c8-4215-9bf2-dcbd0bc238ad','attendedBy1','patient1','mrnumber7','2024-05-12 10:44:05','REGISTEREDBY1','DISNOSISNOTES1','PRESCRIPTIONNOTES1','FILENAME1'),
('31292f5f-ff25-4566-9ed6-49762435da82','attendedBy1','patient1','mrnumber8','2024-05-12 10:44:05','REGISTEREDBY1','DISNOSISNOTES1','PRESCRIPTIONNOTES1','FILENAME1'),
('fc45dbfa-97f6-4183-9b75-4cf7608f76c4','attendedBy1','patient1','mrnumber9','2024-05-12 10:44:05','REGISTEREDBY1','DISNOSISNOTES1','PRESCRIPTIONNOTES1','FILENAME1'),
('b27ef9ad-fd2e-4933-b5d8-62e5f9d3082a','attendedBy1','patient1','mrnumber10','2024-05-12 10:44:05','REGISTEREDBY1','DISNOSISNOTES1','PRESCRIPTIONNOTES1','FILENAME1');

SELECT * FROM ATTENDEDPATIENT;


create table if not exists Doctor (
	id char(36) primary key,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    email varchar(255) not null,
    city varchar(255) not null,
    about varchar(255) not null,
    enabled boolean not null,
    profile varchar(255) not null,
    username varchar(255) not null,
    password varchar(255) not null
);
-- (id,firstName, lastName, email, city, about, enabled, profile, username, passwrod)
insert into Doctor values 
('9d9c786c-c380-4ab6-a14b-200a69292b08','FirstName1','LastName1','CITY1','doctor1@gmail.com','about1',true,'profile1','userame1','password1'),
('f632c75f-6d82-4bf0-b2d3-a916ba805abb','FirstName2','LastName2','CITY2','doctor2@gmail.com','about2',true,'profile2','userame2','password2'),
('bb9da872-7271-4d02-957e-7a5a1c640d56','FirstName3','LastName3','CITY3','doctor3@gmail.com','about3',false,'profile3','userame3','password3'),
('3ec79d5f-e076-4986-a1e0-04a8a743e5fa','FirstName4','LastName4','CITY4','doctor4@gmail.com','about4',true,'profile4','userame4','password4'),
('e678be2c-fc35-4645-ae8b-3c9e5a755776','FirstName5','LastName5','CITY5','doctor5@gmail.com','about5',true,'profile5','userame5','password5'),
('0cde2236-4a22-48ed-9a81-4c56d068c0d3','FirstName6','LastName6','CITY6','doctor6@gmail.com','about6',false,'profile6','userame6','password5'),
('25efe461-3a14-417f-b3cc-47273f2ce647','FirstName7','LastName7','CITY7','doctor7@gmail.com','about7',true,'profile7','userame7','password6'),
('27491230-ead5-444c-83bd-91fed76027de','FirstName8','LastName8','CITY8','doctor8@gmail.com','about8',true,'profile8','useram8','password7'),
('a8ec4f73-d3d7-4c3e-9d55-97e2a4c8538e','FirstName9','LastNam9','CITY9','doctor9@gmail.com','about9',false,'profile9','userame9','password8');

select * from Doctor;

create table if not exists Employee (
    employeeId char(36) primary key,
    employeeName varchar(255) not null,
    joiningDate date not null,
    dateOfBirth date not null,
    department varchar(255) not null,
    designation varchar(255) not null,
    nationality varchar(255) not null,
    mobileNumber varchar(255) not null,
    emailId varchar(255) not null,
    username varchar(255) not null
);


-- employee(employeeId,employeeName,joiningdate,dateofBirth,department,designation,nationality,mobileNumber,emailId,username)
insert into employee values 
('eba9f444-124e-4a82-8d41-2100e9aa42f7','Employee1','2024-05-16','1995-12-20','department1','designation1','INDIAN','9852668881','employee1@gmail.com','username1'),
('478c991f-0b60-43a5-89a6-39fffc8bf5cf','Employee2','2024-05-16','1995-12-20','department2','designation2','INDIAN','9852668882','employee2@gmail.com','username2'),
('339c106c-70cc-417e-a12c-12024f2d27db','Employee3','2024-05-16','1995-12-20','department3','designation3','INDIAN','9852668883','employee3@gmail.com','username3'),
('5e40a5dc-39b6-4408-a175-8304232ffd9d','Employee4','2024-05-16','1995-12-20','department4','designation4','INDIAN','9852668884','employee4@gmail.com','username4'),
('25b2799d-c131-4e22-9873-3273f4cf98ab','Employee5','2024-05-16','1995-12-20','department5','designation5','INDIAN','9852668885','employee5@gmail.com','username5'),
('fb4c9427-ad4c-4025-a35b-7cb0d19adafc','Employee6','2024-05-16','1995-12-20','department6','designation6','INDIAN','9852668886','employee6@gmail.com','username6'),
('aa94a4e1-696a-4f48-acb1-193f13ae407e','Employee7','2024-05-16','1995-12-20','department7','designation7','INDIAN','9852668887','employee7@gmail.com','username7'),
('af3e03a0-9b9a-4478-b0f1-a700ecdeb20e','Employee8','2024-05-16','1995-12-20','department8','designation8','INDIAN','9852668888','employee8@gmail.com','username8'),
('b81eb112-7bb0-4b0c-8302-4d1f9628561f','Employee9','2024-05-16','1995-12-20','department9','designation9','INDIAN','9852668889','employee9@gmail.com','username9');

select * from employee;
-- create table if not exists JWTRequest (

-- 	


-- );


create table if not exists Medicine (
	id char(36) primary key,
    medicineName varchar(255) not null,
    uniqueId varchar(255) not null,
    type varchar(255) not null,
    manufactrerName varchar(255) not null,
    insertedBy varchar(255) not null,
    insertedDate datetime not null,
    updateCount int not null
);

-- Medicine (id, medicineName, uniqueId, type, manufacturerName, insertedBy, insertedDate, updateCount)
insert into Medicine values 
('94d88b64-4585-41cb-8d18-a88884febd01','Medicine1','unique1','type1','manufacturer1','receptionist1','2024-04-07 23:15:44',2),
('8012a680-cc67-4f24-835a-c2860714ffa6','Medicine2','unique2','type2','manufacturer2','receptionist2','2024-04-07 23:15:44',2),
('ba2fa55e-e7bc-4289-a4c0-bd8620c4356e','Medicine3','unique3','type3','manufacturer3','receptionist3','2024-04-07 23:15:44',2),
('0ff73849-e6b3-4967-9c3a-e70030e39aff','Medicine4','unique4','type4','manufacturer4','receptionist4','2024-04-07 23:15:44',2),
('b6a7a41c-6728-4089-be97-686aa2d5a732','Medicine5','unique5','type5','manufacturer5','receptionist5','2024-04-07 23:15:44',2),
('e027b926-4427-47b5-9b79-dc7e78eafcf7','Medicine6','unique6','type6','manufacturer6','receptionist6','2024-04-07 23:15:44',2),
('09cd2642-0688-4e8b-bf13-8b568d4f411b','Medicine7','unique7','type7','manufacturer7','receptionist7','2024-04-07 23:15:44',2),
('342e4a6b-b65c-4393-b009-0860907ea3bb','Medicine8','unique8','type8','manufacturer8','receptionist8','2024-04-07 23:15:44',2),
('5332faa4-c188-4bce-95e4-e340290ba61a','Medicine9','unique9','type9','manufacturer9','receptionist9','2024-04-07 23:15:44',2),
('06db6ccf-8515-4a94-a90d-3ace0390e65b','Medicine10','unique10','type10','manufacturer10','receptionist10','2024-04-07 23:15:44',2);

select * from medicine;


create table if not exists Patient (
    patientId char(36) primary key,
    patientName varchar(255) not null,
    billNo varchar(255) not null,
    age int not null,
    gender char(1) not null,
    billDate datetime not null,
    address varchar(255) not null,
    mrNumber varchar(255) not null,
    location varchar(255) not null,
    visitedId varchar(255) not null,
    doctorName varchar(255) not null,
    ratePlan varchar(255) not null,
    sponser varchar(255) not null,
    refferedBy varchar(255) not null,
    description varchar(255) not null,
    consultingFee int not null,
    receiptNumber varchar(255) not null,
    receiptName varchar(255) not null,
    invoiceName varchar(255) not null,
    contactNumber varchar(255) not null
);

-- Patient(patientId, patientName, billNo, age, gender, billDate, address, mrNumber, location, 
-- visitedId, doctorName, ratePlan, sponser, refferedBy, description, consultingFee,  receiptNumber, receiptName, invoiceName, contactNumber


insert into patient values
('a62996bf-8fe4-4e47-925d-14aac3b04953','Patient1','bill-101',18,'F','2024-12-20','address1','MR-101','LOCATION1','VISITEDID','DOCTORNAME1','RATEPLAN1','SPONSER1','REFERREDBY1','DESCRIPTION1',700,'RECEPT-101','RECEPT-NAME1','INVOICE-NAME-1','9993846107'),
('580ab987-0d0e-45d1-adf5-92c0473c4835','Patient2','bill-101',18,'F','2024-12-20','address2','MR-102','LOCATION2','VISITEDID','DOCTORNAME2','RATEPLAN2','SPONSER2','REFERREDBY2','DESCRIPTION2',700,'RECEPT-102','RECEPT-NAME2','INVOICE-NAME-2','9993846107'),
('1f17b07e-a096-4aa3-b51b-1f67eb640bb2','Patient3','bill-101',18,'F','2024-12-20','address3','MR-103','LOCATION3','VISITEDID','DOCTORNAME3','RATEPLAN3','SPONSER3','REFERREDBY3','DESCRIPTION3',700,'RECEPT-103','RECEPT-NAME3','INVOICE-NAME-3','9993846107'),
('9c8ee2a3-8f55-4a91-ae0a-b42563babf86','Patient4','bill-101',18,'F','2024-12-20','address4','MR-104','LOCATION4','VISITEDID','DOCTORNAME4','RATEPLAN4','SPONSER4','REFERREDBY4','DESCRIPTION4',700,'RECEPT-104','RECEPT-NAME4','INVOICE-NAME-4','9993846107'),
('8bfee129-5ca7-4edf-b084-d2ae45bf79d2','Patient5','bill-101',18,'M','2024-12-20','address5','MR-105','LOCATION5','VISITEDID','DOCTORNAME5','RATEPLAN5','SPONSER5','REFERREDBY5','DESCRIPTION5',700,'RECEPT-105','RECEPT-NAME5','INVOICE-NAME-5','9993846107'),
('f9a24af2-f0b9-48e6-b58a-ea6fb9b5a655','Patient6','bill-101',18,'F','2024-12-20','address6','MR-106','LOCATION6','VISITEDID','DOCTORNAME6','RATEPLAN6','SPONSER6','REFERREDBY6','DESCRIPTION6',700,'RECEPT-106','RECEPT-NAME6','INVOICE-NAME-6','9993846107'),
('5c2d5533-f7af-4682-aba3-73648e083ba1','Patient7','bill-101',18,'F','2024-12-20','address7','MR-107','LOCATION7','VISITEDID','DOCTORNAME7','RATEPLAN7','SPONSER7','REFERREDBY7','DESCRIPTION7',700,'RECEPT-107','RECEPT-NAME7','INVOICE-NAME-7','9993846107'),
('f54719d6-05a2-49ed-b7dc-d560c596ffee','Patient8','bill-101',18,'M','2024-12-20','address8','MR-108','LOCATION8','VISITEDID','DOCTORNAME8','RATEPLAN8','SPONSER8','REFERREDBY8','DESCRIPTION8',700,'RECEPT-108','RECEPT-NAME8','INVOICE-NAME-8','9993846107'),
('bd12beff-de34-4ff8-8db5-e880bf77ac98','Patient9','bill-101',18,'F','2024-12-20','address9','MR-109','LOCATION9','VISITEDID','DOCTORNAME9','RATEPLAN9','SPONSER9','REFERREDBY9','DESCRIPTION9',700,'RECEPT-109','RECEPT-NAME9','INVOICE-NAME-9','9993846107'),
('4414a60b-f607-4bb0-9a74-be961380522f','Patient10','bill-101',18,'M','2024-12-20','address10','MR-110','LOCATION10','VISITEDID','DOCTORNAME10','RATEPLAN10','SPONSER10','REFERREDBY10','DESCRIPTION10',700,'RECEPT-110','RECEPT-NAME10','INVOICE-NAME-10','9993846107'); 

SELECT * FROM PATIENT;


create table if not exists PrescribeMedicine (
    medicineName varchar(255) not null,
    dosage varchar(255) not null,
    freq varchar(255) not null,
    duration varchar(255) not null,
    qty varchar(255) not null,
    instructionRefills varchar(255) not null,
    controlType varchar(255) not null,
    priority varchar(255) not null,
    startDate date not null,
    endDate date not null
);



-- create table if not exists PrescriptionData (


-- );


create table if not exists Receptionist (
	id char(36) primary key,
    receptionistName varchar(255) not null,
    contactNumber varchar(255) not null,
    email varchar(255) not null,
    totalRegisteredPatients int not null,
    totalRegFeeCollected int not null,
    receptionistListId varchar(255) not null,
    username varchar(255) not null,
    password varchar(255) not null,
    receptionistImage varchar(255) not null,
    lastLoggedIn varchar(255) not null,
    loginStatus varchar(255) not null
);

insert into Receptionist values 
('07eb90d3-3b2e-4038-af40-cfd3e4ade419','Receptionist Name1','9993846107','receptionist1@gmail.com',23,5000,'receptionistlistid1','reusername','password@123','image','lastloggedin','logginstatus');

create table if not exists ReferenceDoctor (
	id char(36) primary key,
    doctorName varchar(255) not null,
    speciality varchar(255) not null,
    hospitalName varchar(255) not null,
    address varchar(255) not null,
	contactNumber varchar(255)  not null,
    email varchar(255) not null,
    contactNo varchar(255) not null,
    registeredDate varchar(255) not null
);

create table if not exists ReferPatient (
	id char(36) primary key,
    referDate date not null,
    referTo varchar(255) not null,
    referredDoctor varchar(255) not null,
    patientName varchar(255) not null
);

create table if not exists Role (
	roleId char(36) primary key,
    roleName varchar(255) not null
);

create table if not exists User (
	id char(36) primary key,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    contactNumber varchar(255) not null,
    email varchar(255) not null,
    city varchar(255) not null,
    about varchar(255) not null,
    enabled boolean not null,
    profile varchar(255) not null,
    username varchar(255) not null,
    password varchar(255) not null
);


create table if not exists UserRole (
	id char(36) primary key,
    userRoleId char(36) unique not null
);




