document.getElementById("analyze").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: extractEmailContent
  }, async (injectionResults) => {
    const content = injectionResults[0].result;
    const prompt = `You are an executive assistant. Analyze this email thread. Summarize in 5 lines. List 3 action items. Generate a polite update email.\n\nEMAIL:\n${content}`;
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <<apikey>>"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 500
      })
    });

    const data = await response.json();
    const message = data.choices[0].message.content;
    document.getElementById("result").value = message;
  });
});

function extractEmailContent() {
  let content = "";
  document.querySelectorAll("div[role='listitem']").forEach(email => {
    content += email.innerText + "\n---\n";
  });
  return content;
}
