require('dotenv').config();
const express = require("express");
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
const app = express();
const PORT = 5000;
let cors = require("cors");
app.use(cors());



const APP_PORT = process.env.APP_PORT || 8000;
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || 'sandbox';

// Initialize the Plaid client
const configuration = new Configuration({
    basePath: PlaidEnvironments[PLAID_ENV],
    baseOptions: {
      headers: {
        'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
        'PLAID-SECRET': PLAID_SECRET,
        'Plaid-Version': '2020-09-14',
      },
    },
  });
  
  const client = new PlaidApi(configuration);
  
console.log(client)

app.use(express.json());

//get account balances
app.post('/accounts_balance', async (req, res) => {
  try{
    const response = await client.getBalance(req.body.access_token).catch((err) => {
      // handle error
      console.log(err);
    });
    //const accounts = response.accounts;
    res.json({
      accounts: response.accounts
    });
  }
  catch(e){
    console.log(e)
  }
 
});


//endpoint exchanges public token for an access token currently working on this part
app.post('/exchange_public_token', async (request, res, next) => {
  try{
  //public token cant be found
    const response = await client
    .exchangePublicToken(request.body.public_token)
    .catch((err) => {
      console.log(err)
    });
  const accessToken = response.access_token;
  const itemId = response.item_id;
  // ACCESS_TOKEN = response.access_token;
  // ITEM_ID = response.item_id;
  res.json({
    access_token: accessToken,
    item_id: itemId
  });
  console.log("access token below");
  console.log(accessToken);
  }
  catch(e){
    console.log(e)
  }
 
});

// app.post('/create_link_token', async (request, response, next) => {
//     try{
//       // 1. Grab the client_user_id by searching for the current user in your database
//       const user = "testUser"
//       const clientUserId = "123";
//       // 2. Create a link_token for the given user
//       const linkTokenResponse = await client.linkTokenCreate({
//         user: {
//           client_user_id: clientUserId,
//         },
//         client_name: 'My App',
//         products: ['transactions'],
//         country_codes: ['US'],
//         language: 'en',
//       });
//       const link_token = linkTokenResponse.link_token;
//       // 3. Send the data to the client
//      response.json({ link_token });
//     }
//     catch(e){
//       console.log(e)
//     }
   
//   });

//endpoint returns link_token 
// app.post('/create_link_token', async (request, response, next) => {
//     try{
//       // 1. Grab the client_user_id by searching for the current user in your database
//       const user = "testUser"
//       const clientUserId = "123";
//       // 2. Create a link_token for the given user
//       const linkTokenResponse = await client.linkTokenCreate({
//         user: {
//           client_user_id: clientUserId,
//         },
//         client_name: 'My App',
//         products: ['transactions'],
//         country_codes: ['US'],
//         language: 'en',
//       });
//       const link_token = linkTokenResponse.link_token;
//       // 3. Send the data to the client
//       response.json({ link_token });
//     }
//     catch(e){
//       console.log(e)
//     }
   
//   });
  
  
// app.post('/create_link_token', (req, res) => {
//     let {uid} = req.body;
//     console.log(`Recieved: ${uid} as token!!!`);
//     User.findById(uid, (err, doc) => {
//         if (err){
//             res.sendStatus(400);
//             return;
//         }
//         let userId = doc._id;

//         client.createLinkToken({
//             user: {
//                     client_user_id: userId
//                 },
//             client_name: 'Lint',
//             products: ['transactions'],
//             country_codes: ['US'],
//             language: 'en'
//             }, (err, linkTokenResponse) => {
//                 res.json({link_token: linkTokenResponse.link_token});
//                 });

//         });
// });



// app.post('/create_link_token', async (req, res) => {
//     try{
//       const response = await client.linkTokenCreate({
//         user: {
//           client_user_id: '123-test-user-id',
//         },
//         client_name: 'Plaid Test App',
//         products: ['auth', 'transactions'],
//         country_codes: ['US'],
//         language: 'en',
//         webhook: 'https://sample-web-hook.com',
//         account_filters: {
//           depository: {
//             account_subtypes: ['checking', 'savings'],
//           },
//         },
//       })
//       return res.send({link_token: response.link_token}) 
//       } catch (err) {
//       return res.send({err: err.message})
//     }
//   });



app.post('/create_link_token', function (request, response, next) {
    Promise.resolve()
      .then(async function () {
        const configs = {
          user: {
            // This should correspond to a unique id for the current user.
            client_user_id: 'user-id',
          },
          client_name: 'Plaid Quickstart',
          products: ['auth', 'transactions'],
            country_codes: ['US'],
          language: 'en',
        };
  
        // if (PLAID_REDIRECT_URI !== '') {
        //   configs.redirect_uri = PLAID_REDIRECT_URI;
        // }
  
        // if (PLAID_ANDROID_PACKAGE_NAME !== '') {
        //   configs.android_package_name = PLAID_ANDROID_PACKAGE_NAME;
        // }
        const createTokenResponse = await client.linkTokenCreate(configs);
        // prettyPrintResponse(createTokenResponse);
        response.json(createTokenResponse.data);
      })
      .catch(next);
  });

app.listen(PORT, () => {
console.log(`Server running on ${PORT}`);
});