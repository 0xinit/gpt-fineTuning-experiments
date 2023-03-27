import { openai } from './api.js'

async function createCompletion() {
    try {
        const response = await openai.createCompletion({
            model: 'davinci:ft-personal-2023-03-27-01-34-05',
            prompt: 'What is Lens Protocol',
            max_tokens: 300
        })
        if (response.data) {
            console.log('choices: ', response.data.choices)
        }
    } catch (err) {
        console.log('err: ', err)
    }
}

createCompletion()