export default async function handler(req, res) {

    const {
        GoogleGenerativeAI,
        HarmCategory,
        HarmBlockThreshold,
    } = require("@google/generative-ai");

    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    //   console.log('hello', apiKey)

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };
    const msg = req.body.qns

    async function run(i) {

        const result = await model.generateContent(i);
        const response = await result.response;
        const text = response.text();
        // console.log(text);
        return text
        // const chatSession = model.startChat({
        //     generationConfig,
        //     // safetySettings: Adjust safety settings
        //     // See https://ai.google.dev/gemini-api/docs/safety-settings
        //     history: [
        //     ],
        // });

        // const result = await chatSession.sendMessage(i);
        // console.log(result);
    }

    const responseText = await run(msg);
    res.status(200).json({ text: responseText});
}