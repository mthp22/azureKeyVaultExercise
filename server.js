const express= require('express');
const {DefaultAzureCredential}= require('@azure/identity');
const {SecretClient}= require('@azure/keyvault-secrets');

const app= express();
app.use(express.json());

const credential = new DefaultAzureCredential();
const vaultUrl= "https://<your-key-vault-name>.vault.azure.net/";
const client= new SecretClient(vaultUrl, credential);


app.listen(3000, () => console.log("Server running on port 3000"));