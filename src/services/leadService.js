/**
 * Lead Submission Service for DIGISEVAKS Academy
 * Sends lead data to:
 * 1. Web3Forms (Instant Email Notification to digisevkswebsite@gmail.com)
 * 2. Google Sheets Webhook (Lead CRM Spreadsheet & Direct Gmail Alert)
 */

export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "20ddbcf5-3ab8-4504-a6e7-9dc2e83631df";
export const GOOGLE_SHEET_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbwkVscufOulwL_x5FPhk2BYMHLP680qQpsrOEqNDPJIwqjI0mwseMO-kASESMW4ID_EhA/exec"; 

export async function submitLead(leadData) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const payload = {
    date: timestamp,
    name: leadData.name || '',
    phone: leadData.phone || '',
    email: leadData.email || '',
    course: leadData.course || 'Classroom Digital Marketing Course',
    source: leadData.source || 'Website Lead',
    qualification: leadData.qualification || leadData.highestQualification || '',
    parentName: leadData.parentName || '',
    parentRelation: leadData.parentRelation || '',
    parentMobile: leadData.parentMobile || '',
    aadhar: leadData.aadhar || '',
    address: leadData.address || '',
    mode: leadData.mode || leadData.courseType || '',
    nearestBranch: leadData.nearestBranch || '',
    batchTime: leadData.batchTime || '',
    details: leadData.details || leadData.notes || ''
  };

  const submitPromises = [];

  // 1. Submit to Web3Forms for Instant Email Notification
  if (WEB3FORMS_ACCESS_KEY) {
    const web3FormData = new FormData();
    web3FormData.append("access_key", WEB3FORMS_ACCESS_KEY);
    web3FormData.append("subject", `New Website Lead: ${payload.name} (${payload.source})`);
    web3FormData.append("from_name", "DIGISEVAKS Academy Website");
    web3FormData.append("name", payload.name);
    web3FormData.append("email", payload.email);
    web3FormData.append("phone", payload.phone);
    web3FormData.append("course", payload.course);
    web3FormData.append("lead_source", payload.source);
    web3FormData.append("submission_date", payload.date);

    if (payload.parentName) web3FormData.append("parent_name", `${payload.parentName} (${payload.parentRelation})`);
    if (payload.parentMobile) web3FormData.append("parent_mobile", payload.parentMobile);
    if (payload.qualification) web3FormData.append("qualification", payload.qualification);
    if (payload.aadhar) web3FormData.append("aadhar_card", payload.aadhar);
    if (payload.address) web3FormData.append("address", payload.address);
    if (payload.mode) web3FormData.append("training_mode", payload.mode);
    if (payload.nearestBranch) web3FormData.append("branch", payload.nearestBranch);
    if (payload.batchTime) web3FormData.append("batch_time", payload.batchTime);

    submitPromises.push(
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      })
      .then(res => res.json())
      .catch(err => console.error("Web3Forms Submission Error:", err))
    );
  }

  // 2. Submit to Google Sheets Webhook (Appends to Sheet + Direct Email Alert)
  if (GOOGLE_SHEET_WEBHOOK_URL && GOOGLE_SHEET_WEBHOOK_URL !== "YOUR_GOOGLE_SHEET_WEBHOOK_URL") {
    submitPromises.push(
      fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      .catch(err => console.error("Google Sheets Submission Error:", err))
    );
  }

  await Promise.allSettled(submitPromises);
  return { success: true };
}
