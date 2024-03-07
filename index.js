const path = require('path');
const { nodewhisper } = require('nodejs-whisper');

async function transcribeAudio() {
    const filePath = path.resolve(__dirname, '/home/aman/Downloads/english_2.mp3'); 

    try {
        const transcript = await nodewhisper(filePath, {
            modelName: 'large-v1', // Downloaded model name
            // autoDownloadModelName: 'large-v1', // (optional) autodownload a model if model is not present
            whisperOptions: {
                outputInText: false, // Get output result in txt file
                outputInVtt: false, // Get output result in vtt file
                outputInSrt: false, // Get output result in srt file
                outputInCsv: true, // Get output result in csv file
                translateToEnglish: false, // Translate from source language to English
                wordTimestamps: false, // Word-level timestamps
                splitOnWord: true, // Split on word rather than on token
            },
        });
        console.log("Transcription completed successfully.",transcript );
    } catch (error) {
        console.error("Error occurred during transcription:", error);
    }
}

// Model list
const MODELS_LIST = [
    'tiny',
    'tiny.en',
    'base',
    'base.en',
    'small',
    'small.en',
    'medium',
    'medium.en',
    'large-v1',
    'large',
    'base.hi'
];

// Call the function to transcribe the audio file
transcribeAudio();