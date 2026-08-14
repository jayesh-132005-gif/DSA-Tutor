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

//  Add Message to the chat window
function addMessageToChat(text, sender) {

    const messageDiv = document.createElement('div');
    messageDiv.className = `message-${sender}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    contentDiv.innerHTML = formatMessage(text);

    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;

}

// Format message with code highlighting
function formatMessage (text) {
    text = text.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    text = text.replace(/\n/g, '<br>');
    return text;
}

// Show typing indicator
function showTyping() {

    const typingDiv = document.createElement('div');
    typingDiv.className = 'message assistant';
    typingDiv.id = 'typingIndicator';

    typingDiv.innerHTML = `
        <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

}

// Remove typing indicator 
function removeTyping() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Handle send message 
async function handleSend() {
    

















}