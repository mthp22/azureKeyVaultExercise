const express= require('express');
const {DefaultAzureCredential}= require('@azure/identity');
const {SecretClient}= require('@azure/keyvault-secrets');

const app= express();
app.use(express.json());

const credential = new DefaultAzureCredential();
const vaultUrl= "https://<your-key-vault-name>.vault.azure.net/";
const client= new SecretClient(vaultUrl, credential);

async function getQuestion(id) {
    try {
        const question = await client.getSecret(`QUESTION_${id}`);
        return question.value;
    } catch (error) {
        console.error(`Error retrieving secret ${id}:`, error);
        throw error;
    }
}

async function getAnswer(id) {
    try {
        const answer = await client.getSecret(`ANSWER_${id}`);
        return answer.value;
    } catch (error) {
        console.error(`Error retrieving secret ${id}:`, error);
        throw error;
    }
}

app.get("/quiz/:id", async (req, res) =>{
    try {
        const question = await getQuestion(req.params.id);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve quiz data" });
    }
});

app.get("/quiz/:id", async(req, res) => {
    const id = req.params.id;
    try {
        const correctAnswer= await getAnswer(id);        
        const userAnswer = req.body.answer;
        const isCorrect = userAnswer.trim().lowerCase() === correctAnswer.trim().lowerCase();
        res.json({ correct: isCorrect, expected: correctAnswer });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve quiz data" });
    }

});

app.listen(3000, () => console.log("Server running on port 3000"));