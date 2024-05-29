const translations = {
    en: {
        translation: {
            pageTitle: "Personal Blog",
            langBtnText: "Switch to Hebrew",
            navLlmTheory: "LLM Theory",
            navHistory: "History",
            navHowToBuildChatgpt: "How to Build ChatGPT",
            titleLlmTheory: "LLM Theory",
            contentLlmTheory: "Large Language Models (LLMs) are a type of artificial intelligence model that are trained on vast amounts of text data. These models can generate human-like text and perform various language-related tasks. The theory behind LLMs involves complex neural network architectures, typically transformers, which enable the models to understand and generate language.",
            titleHistory: "History",
            contentHistory: "The history of language models dates back to the early days of computer science, but significant advancements have been made in recent years. Starting from rule-based systems, the field evolved to statistical models and then to the deep learning approaches we see today. Notable milestones include the development of RNNs, LSTMs, and eventually transformers, which revolutionized the field with models like GPT-3 and beyond.",
            titleHowToBuildChatgpt: "How to Build ChatGPT",
            contentHowToBuildChatgpt: "Building a model like ChatGPT involves several key steps:<ul><li>Data Collection: Gathering a large and diverse text dataset.</li><li>Preprocessing: Cleaning and preparing the data for training.</li><li>Model Architecture: Using a transformer-based architecture.</li><li>Training: Using powerful GPUs/TPUs to train the model over weeks or months.</li><li>Fine-tuning: Adjusting the model on specific tasks or datasets to improve performance.</li></ul>OpenAI's GPT models are among the most advanced in this field, demonstrating the power of LLMs in understanding and generating natural language.",
            chatHeader: "Chat with GPT",
            chatPlaceholder: "Type a message..."
        }
    },
    he: {
        translation: {
            pageTitle: "בלוג אישי",
            langBtnText: "עבור לאנגלית",
            navLlmTheory: "תיאוריית מודלים גדולים לשפה",
            navHistory: "היסטוריה",
            navHowToBuildChatgpt: "כיצד לבנות ChatGPT",
            titleLlmTheory: "תיאוריית מודלים גדולים לשפה",
            contentLlmTheory: "מודלים גדולים לשפה (LLMs) הם סוג של מודלים של בינה מלאכותית שמאומנים על כמות עצומה של נתוני טקסט. מודלים אלו יכולים לייצר טקסט דמוי אדם ולבצע מגוון משימות הקשורות לשפה. התיאוריה מאחורי LLMs כוללת ארכיטקטורות רשת עצבית מורכבות, בדרך כלל טרנספורמרים, המאפשרות למודלים להבין ולייצר שפה.",
            titleHistory: "היסטוריה",
            contentHistory: "ההיסטוריה של מודלים לשפה מתחילה מימי המחשב הראשונים, אך התקדמות משמעותית נעשתה בשנים האחרונות. החל ממערכות מבוססות חוקים, התחום התפתח למודלים סטטיסטיים ולאחר מכן לגישות למידה עמוקה שאנו רואים כיום. אבני דרך משמעותיות כוללות את הפיתוח של RNNs, LSTMs ולבסוף טרנספורמרים, ששינו את התחום עם מודלים כמו GPT-3 ומעבר.",
            titleHowToBuildChatgpt: "כיצד לבנות ChatGPT",
            contentHowToBuildChatgpt: "בניית מודל כמו ChatGPT כוללת מספר שלבים מרכזיים:<ul><li>איסוף נתונים: איסוף מערך נתונים גדול ומגוון של טקסט.</li><li>עיבוד מוקדם: ניקוי והכנת הנתונים לאימון.</li><li>ארכיטקטורת מודל: שימוש בארכיטקטורה מבוססת טרנספורמרים.</li><li>אימון: שימוש ב-GPU/TPU חזקים לאימון המודל במשך שבועות או חודשים.</li><li>כוונון עדין: התאמת המודל למשימות או מערכי נתונים ספציפיים לשיפור הביצועים.</li></ul>מודלי GPT של OpenAI הם מהמתקדמים ביותר בתחום זה, ומדגימים את הכוח של LLMs בהבנה ויצירת שפה טבעית.",
            chatHeader: "שוחח עם GPT",
            chatPlaceholder: "הקלד הודעה..."
        }
    }
};

i18next.init({
    lng: 'en',
    debug: true,
    resources: translations
}, function(err, t) {
    if (err) console.error(err);
    updateContent();
});

function updateContent() {
    document.querySelector('h1').innerHTML = i18next.t('pageTitle');
    document.querySelector('.lang-btn span').innerHTML = i18next.t('langBtnText');
    document.querySelector('[data-i18n="navLlmTheory"]').innerHTML = i18next.t('navLlmTheory');
    document.querySelector('[data-i18n="navHistory"]').innerHTML = i18next.t('navHistory');
    document.querySelector('[data-i18n="navHowToBuildChatgpt"]').innerHTML = i18next.t('navHowToBuildChatgpt');
    document.querySelector('[data-i18n="titleLlmTheory"]').innerHTML = i18next.t('titleLlmTheory');
    document.querySelector('[data-i18n="contentLlmTheory"]').innerHTML = i18next.t('contentLlmTheory');
    document.querySelector('[data-i18n="titleHistory"]').innerHTML = i18next.t('titleHistory');
    document.querySelector('[data-i18n="contentHistory"]').innerHTML = i18next.t('contentHistory');
    document.querySelector('[data-i18n="titleHowToBuildChatgpt"]').innerHTML = i18next.t('titleHowToBuildChatgpt');
    document.querySelector('[data-i18n="contentHowToBuildChatgpt"]').innerHTML = i18next.t('contentHowToBuildChatgpt');
    document.querySelector('.chat-header').innerHTML = i18next.t('chatHeader');
    document.getElementById('chat-input').placeholder = i18next.t('chatPlaceholder');
}

function toggleLanguage() {
    const newLng = i18next.language === 'en' ? 'he' : 'en';
    i18next.changeLanguage(newLng, function(err, t) {
        if (err) return console.log('something went wrong loading', err);
        updateContent();
        document.body.style.direction = newLng === 'en' ? 'ltr' : 'rtl';
    });
}

function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = chatContainer.style.display === 'none' || chatContainer.style.display === '' ? 'flex' : 'none';
}

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (message.trim() === '') return;

    const chatBody = document.getElementById('chat-body');
    const userMessage = document.createElement('div');
    userMessage.textContent = 'You: ' + message;
    chatBody.appendChild(userMessage);

    input.value = '';

    const responseMessage = document.createElement('div');
    responseMessage.textContent = 'GPT: ...';
    chatBody.appendChild(responseMessage);

    // Send the message to your backend
    const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    const data = await response.json();
    responseMessage.textContent = 'GPT: ' + data.reply;
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Initial call to set the text based on the default language
updateContent();
