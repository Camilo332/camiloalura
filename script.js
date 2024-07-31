const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const decryptionRules = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    let encryptedText = text;

    for (const [key, value] of Object.entries(encryptionRules)) {
        encryptedText = encryptedText.split(key).join(value);
    }

    outputText.value = encryptedText;
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    let decryptedText = text;

    for (const [key, value] of Object.entries(decryptionRules)) {
        decryptedText = decryptedText.split(key).join(value);
    }

    outputText.value = decryptedText;
});

copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
});

