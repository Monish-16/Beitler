export const contact = {
    Name: "",
    Type: "",
    Email: "",
    Phone: "",
    Title: "",
    Mobile: "",
    IsActive: true,
    Entity_Id: 2141,
    Extension: "",
    IsDeleted: false,
    Entity_Type: 1,
    Department_Id: "",
    IsSendInviteEmail: "false"
};

export const coOP = {
    Entity_Type_Id: 1,
    id: 0,
    LegalName: "",
    SCAC: "",
    dbaName: "",
    Type: "Customer",
    MC_Number: "",
    IsW9_YN: false,
    DOT_Number: "",
    DUNS_Number: "",
    Federal_Tax_ID: "",
    IsActive: true,
    IsCarrier: false,
    IsDeleted: false,
    IsEdi: false,
    IsEntityAdmin: false,
    Comments: "",
    Fax: "",
    City: "",
    Phone: "",
    State: "",
    Zipcode: "",
    Address1: "",
    Address2: "",
    Id: 0,
};

export const billTo = {
    ContactEmail: "",
    ContactName: "",
    ContactPhone: "",
 Type: "",
    Terms: "",
    IsActive: true,
    Comments: "",
    Fax: "",
    City: "",
    Phone: "",
    State: "",
    Zipcode: "",
    Address1: "",
    Address2: "",
};


export const initalValuepay = {
    ContactEmail: "",
    ContactName: "",
    ContactPhone: "",
    Type: "",
    Terms: "",
    IsActive: true,
    Comments: "",
    Fax: "",
    City: "",
    Phone: "",
    State: "",
    Zipcode: "",
    Address1: "",
    Address2: "",
}

// const postData = {
//     CorporateOffice: {
//         DOT_Number: corp.DOT_Number,
//         Comments: corp.Comments,
//         DUNS_Number: corp.DUNS_Number,
//         Entity_Type_Id: 1,
//         Federal_Tax_ID: corp.Fax,
//         IsActive: corp.IsActive,
//         IsCarrier: false,
//         IsDeleted: false,
//         IsEdi: corp.IsEdi,
//         IsEntityAdmin: false,
//         IsW9_YN: corp.IsW9_YN,
//         LegalName: corp.LegalName,
//         MC_Number: corp.MC_Number,
//         SCAC: "",
//         Type: "",
//         dbaName: corp.dbaName,
//         Address_Id: {
//             Address1: corp.Address1,
//             Address2: corp.Address2,
//             City: corp.City,
//             Fax: corp.Fax,
//             IsActive: false,
//             Phone: corp.Phone,
//             State: corp.State,
//             Type: 14,
//             Zipcode: corp.Zipcode,
//         },
//         Contacts: [{
//             Department_Id: corpCon.Department_Id,
//             Email: corpCon.Email,
//             Entity_Type: 1,
//             Extension: corpCon.Extension,
//             IsActive: false,
//             IsSendInviteEmail: false,
//             Mobile: corpCon.Mobile,
//             Name: corpCon.Name,
//             Phone: corpCon.Phone,
//             Title: corpCon.Title,
//             Type: corpCon.Type
//         }]
//     },
//     BillTo: {
//         Bill_Address_Id: {
//             Address1: billData.Address1,
//             Address2: billData.Address2,
//             City: billData.City,
//             Fax: billData.Fax,
//             IsActive: false,
//             Phone: billData.Phone,
//             State: billData.State,
//             Type: 16,
//             Zipcode: billData.Zipcode,
//         },
//         Comments: billData.Comments,
//         ContactEmail: billData.ContactEmail,
//         ContactName: billData.ContactName,
//         ContactPhone: billData.ContactPhone,
//         IsActive: false,
//         Phone: billData.Phone,
//         Terms: billData.Terms,
//         Type: 19,
//     }
//     ,
//     DCInfo: [],
//     poolLocation: [
//         {
//             Address1: pool.Address1,
//             City: pool.City,
//             CurrentPoolProviderId: pool.CurrentPoolProviderId,
//             CustomerId: 0,
//             CustomerPoolStores: [],
//             Id: 0,
//             IsActive: true,
//             IsDeleted: false,
//             State: pool.State,
//             Zipcode: pool.Zipcode,
//             address: [{ Id: 0, Address1: pool.Address1, City: pool.City, State: pool.State, Zipcode: pool.Zipcode, IsActive: true, IsDeleted: false }],
//             address_id: 0,
//             poolDuration: [],
//             poolLocationName: pool.poolLocationName,
//             shipperRefName2: pool.shipperRefName2,
//         }
//     ]
// }