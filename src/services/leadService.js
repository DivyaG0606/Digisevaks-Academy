/**
 * Lead Submission Service for DIGISEVAKS Academy
 * Sends lead data to:
 * 1. Web3Forms (Instant Email Notification to digisevkswebsite@gmail.com)
 * 2. Google Sheets Webhook (Lead CRM Spreadsheet - if configured)
 */

export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "20ddbcf5-3ab8-4504-a6e7-9dc2e83631df";
export const GOOGLE_SHEET_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || ""; // Replace with your Google Apps Script Web App URL

export async function submitLead(leadData) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const payload = {
    date: timestamp,
    name: leadData.name || '',
    phone: leadData.phone || '',
    email: leadData.email || '',
    course: leadData.course || 'Classroom Digital Marketing Course',
    source: leadData.source || 'Website Demo Lead'
  };

  const submitPromises = [];

  // 1. Submit to Web3Forms for Instant Email Notification
  if (WEB3FORMS_ACCESS_KEY) {
    const web3FormData = new FormData();
    web3FormData.append("access_key", WEB3FORMS_ACCESS_KEY);
    web3FormData.append("subject", `New Student Inquiry from DIGISEVAKS Website: ${payload.name}`);
    web3FormData.append("from_name", "DIGISEVAKS Academy Website");
    web3FormData.append("name", payload.name);
    web3FormData.append("phone", payload.phone);
    web3FormData.append("email", payload.email);
    web3FormData.append("course", payload.course);
    web3FormData.append("lead_source", payload.source);
    web3FormData.append("submitted_at", payload.date);

    submitPromises.push(
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      })
      .then(res => res.json())
      .then(data => console.log("Web3Forms Response:", data))
      .catch(err => console.error("Web3Forms Submission Error:", err))
    );
  }

  // 2. Submit to Google Sheets Webhook (Lead Backup in Spreadsheet)
  if (GOOGLE_SHEET_WEBHOOK_URL && GOOGLE_SHEET_WEBHOOK_URL !== "YOUR_GOOGLE_SHEET_WEBHOOK_URL") {
    submitPromises.push(
      fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload)
      })
      .then(() => console.log("Google Sheets submission sent"))
      .catch(err => console.error("Google Sheets Submission Error:", err))
    );
  }

  // Wait for all submissions to dispatch
  await Promise.allSettled(submitPromises);
  return { success: true };
}

