/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const {initializeApp} = require("firebase-admin/app");
const {onRequest} = require("firebase-functions/v2/https");
const OpenAI = require("openai");
const {defineSecret, defineString} = require("firebase-functions/params");

const apiKey = defineSecret("OPENAI_API_KEY");
const organizationId = defineString("OPENAI_ORGANIZATION_ID");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

initializeApp();

const openai = new OpenAI({
  organization: organizationId,
  apiKey: apiKey,
});

/**
 * Represents a chat function.
 * @param {array} messages - Messages collection.
 */
async function main(messages) {
  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);

  return completion.choices[0];
}

exports.chat = onRequest({cors: [/dilemma-demo\.web\.app/]},
    async (req, res) => {
      const {messages} = req.body;

      try {
        const resp = await main(messages);

        res.json(resp);
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
      }
    });
