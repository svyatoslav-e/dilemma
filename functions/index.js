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
const {defineString} = require("firebase-functions/params");

const apiKey = defineString("OPENAI_API_KEY");
const organizationId = defineString("OPENAI_ORGANIZATION_ID");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

initializeApp();

/**
 * Represents a chat function.
 * @param {array} messages - Messages collection.
 */

exports.chat = onRequest({cors: [/dilemma-demo\.web\.app/]},
    async (req, res) => {
      const {messages} = req.body;

      const openai = new OpenAI({
        organization: process.env.OPENAI_ORGANIZATION_ID ||
            organizationId.value(),
        apiKey: process.env.OPENAI_API_KEY || apiKey.value(),
      });

      try {
        const resp = await openai.chat.completions.create({
          messages,
          model: "gpt-3.5-turbo",
        });

        res.json(resp.choices[0]);
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
      }
    });
