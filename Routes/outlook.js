const express = require('express');
const outlookRouter = express.Router();

// Route to handle incoming emails from Outlook
outlookRouter.post('/outlook', (req, res) => {
  // Parse and process incoming email from Outlook
  // Implement logic to handle email content
  const { from, to, subject, body, attachments } = req.body;

  // Process email content
  console.log('Sender:', from);
  console.log('Recipient(s):', to);
  console.log('Subject:', subject);
  console.log('Body:', body);

  if (attachments && attachments.length > 0) {
    console.log('Attachments:', attachments);
  }

  res.send('Received email from Outlook');
});

module.exports = outlookRouter;
