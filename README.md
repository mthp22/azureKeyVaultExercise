# Azure Key Vault Quiz App

A Node.js application that tests my knowledge and understanding of **Azure Key Vault**.  
Quiz questions and answers are stored securely in **Azure Key Vault** as secrets, and the app retrieves them at runtime.

## 🚀 Features
- Fetch quiz questions from Azure Key Vault
- Validate user answers against stored secrets
- Simple REST API with Express
- Demonstrates secure secret management with Managed Identity

## 🛠️ Setup

**First login to azure cli with az login**
1. **Create Key Vault**
   ```bash
   az keyvault create --name myQuizVault --resource-group myResourceGroup --location eastus

2. **Add Quiz Questions and Answers as Secrets**
   ```bash
   az keyvault secret set --vault-name myQuizVault --name "Question1" --value "What is Azure Key Vault?"
   az keyvault secret set --vault-name myQuizVault --name "Answer1" --value "A cloud service for securely storing and accessing secrets"

3. **Assign Managed Identity to Your App**
   ```bash
   az keyvault set-policy --name myQuizVault --resource-group myResourceGroup --object-id <principalId> --secret-permissions get list

**cd key-vault-app and Run**
   npm install
   node server.js