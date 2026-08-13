// script.js

import { GoogleGenAI } from "https://cdn.jsdelivr.net/npm/@google/genai@1.32.0/+esm";

const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Initialize the Google GenAI client
const ai = new GoogleGenAI({
    // NOT NECESSARY -- It can find a key from the environment variable GEMINI_API_KEY
    apiKey: process.env.GEMINI_API_KEY,
});

// Create chat session
const chat = ai.chats.create({
    model: "gemini-3.6-flash",
    config: {
        systemInstruction: `You are a programming tutor
        Strict Rule:
        - You will only answer questions related to coding
        - Don't answer anything which is outside coding
        - If user asks question not related to coding, tell them directly that you only answer problems related to coding
        
        Reply Method:
        - Answer everything to the point
        - Follow the methodology of first principles`
    }

});