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
