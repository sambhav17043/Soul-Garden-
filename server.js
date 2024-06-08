import express from 'express';
import { urlencoded, json } from 'body-parser';
import { createTransport } from 'nodemailer';

const app = express();
const port = 3000;

app.use(urlencoded({ extended: true }));
app.use(json());

app.post('/register', async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  // Simple validation
  if (!fullName || !email || !password || password !== confirmPassword) {
    return res.status(400).send('Invalid input');
  }

  // Create a transporter object using SMTP transport
  let transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'sambhavdudhwewala17034@gmail.com',
      pass: 'sambhav17043'
    }
  });

  // Setup email data
  let mailOptions = {
    from: '"Soul Garden" <sambhavdudhwewala17034@gmail.com>', // sender address
    to: email, // list of receivers
    subject: 'Welcome to Our App', // Subject line
    text: `Hello ${fullName},\n\nThank you for registering on our platform. We are excited to have you on board!\n\nBest Regards,\nYour App Team`, // plain text body
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Registration successful, email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
