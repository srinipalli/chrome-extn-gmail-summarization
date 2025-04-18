# chrome-extn-gmail-summarization
chrome-extn-gmail-summarization
===================================================
How to Run It.

Go to chrome://extensions/ in your Chrome browser.
Enable Developer Mode (toggle at the top right).
Click “Load Unpacked” and select project folder.
Pin the extension and click on it.
Try changing the page color using the buttons!
===================================================

Feature   
🧠 Summarize thread : Extract a concise summary of entire conversation

✅ Extract action items : Identify tasks, deadlines, people assigned

✍️ Auto-compose update reply : Draft a smart response or update to team

📤 One-click send/update : Send response, or copy to clipboard for review

===================================================


🛠️ How It Works (Flow)

✅ User highlights email thread (or the plugin auto-detects Gmail thread)

📤 Text is sent to OpenAI/Gemini API

🤖 Prompt Example:

You are an executive assistant. Summarize the email thread below in 5 lines. Then extract 3 key action items and generate a polite update email.

📥 Output:
🔹 **Summary**: We've been discussing the Q2 marketing campaign delays, causes, and proposed adjustments.

✅ **Action Items**:

- Jane to finalize revised schedule by Friday.
- Marketing team to share new budget by Wednesday.
- IT team to upgrade CMS system before April 30.


✍️ **Suggested Reply**:
Thanks everyone for your input. I've noted the updated timeline and will coordinate with Jane and IT on next steps. Expect a follow-up with detailed plans by Monday.

Required Tools

Part	Tool
Chrome Extension	HTML + JS + Manifest V3
LLM Backend	OpenAI / Gemini / Claude
Gmail Parsing	DOM scraping or Gmail API
Email Actions	Gmail Compose API or simulate input
Task Integration	(Optional) Notion/Jira API
UI Framework	Simple popup + buttons + loader

 Security Note
For Gmail, OAuth 2.0 is required if you access email content via Gmail API.
But scraping Gmail DOM is possible in-browser for simpler offline use.

