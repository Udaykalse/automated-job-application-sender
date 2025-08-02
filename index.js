const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Email",
    pass: "Password",
  },
});

const recipients = ["careers@timespro.com", "hrcommunication@eggoz.in"];

const resumePath = path.join(__dirname, "Udaysinh_kalse_CV_.pdf");
const resume = fs.readFileSync(resumePath);

const sendEmails = async () => {
  for (const email of recipients) {
    const mailOptions = {
      from: "udaykalse123@gmail.com",
      to: email,
      subject:
        "Proactive Frontend Developer Seeking Opportunities – Let's Connect!",
      html: `<p>Hi,</p>

<p>I hope you're doing well. My name is <b>Udaysinh Kalse</b>, and I'm reaching out to express my interest in any <b>frontend development opportunities</b> at your organization.</p>

<p>I’m a passionate Frontend Developer with <b>5 months of React.js internship experience</b>, well-versed in modern frontend technologies including <b>React.js, JavaScript, HTML/CSS, Bootstrap, Tailwind CSS</b>, and backend tools like <b>Node.js and PostgreSQL</b>. I take pride in building user-centric, responsive, and performance-optimized web interfaces.</p>

<p>Here are a few of my highlighted projects:</p>

<ul>
  <li><b>Tracker-Ur-Habit App</b> – 
    <a href="https://tracker-ur-habit-app-f4mo.vercel.app/" target="_blank">Live Demo</a>
  </li>
 <li><b>Ricoz Website Clone</b> – 
    <a href="https://taupe-piroshki-3a4020.netlify.app/" target="_blank">Live Demo</a>
  </li>
  <li><b>Book Store (Frontend Only)</b> – 
    <a href="https://book-store-gamma-flame.vercel.app/" target="_blank">Live Demo</a>
  </li>

  <li><b>Weather App</b> – 
    <a href="https://theweatherapp-livid.vercel.app/" target="_blank">Live Demo</a>
  </li>

 

  <li><b>To-Do List App</b> – 
    <a href="https://todo-list-fawn-omega-70.vercel.app/" target="_blank">Live Demo</a>
  </li>

  <li><b>BookStore (MERN Full Stack)</b> – 
    <a href="https://github.com/Udaykalse/MERN-Book_Shop" target="_blank">GitHub Server</a> | 
    <a href="https://github.com/Udaykalse/MERN-Book_Shop_UI" target="_blank">GitHub Client</a>
  </li>

  <li><b>AuthApp (Spring Boot + React)</b> – 
    <a href="https://github.com/Udaykalse/OAuth-Application-Backend" target="_blank">GitHub Server</a> | 
    <a href="https://github.com/Udaykalse/OAuth-Application-Frontend" target="_blank">GitHub Client</a>
  </li>

  <li><b>URL Shortener (TypeScript + React + Express)</b> – 
    <a href="https://github.com/Udaykalse/URL-Shortener-Server" target="_blank">GitHub Server</a> | 
    <a href="https://github.com/Udaykalse/url-shortner-client" target="_blank">GitHub Client</a>
  </li>

  <li><b>Live Polling System (MERN)</b> – 
    <a href="https://github.com/Udaykalse/Live-polling-system/tree/main/live-polling-backend" target="_blank">GitHub Server</a> |  
    <a href="https://github.com/Udaykalse/Live-polling-system" target="_blank">GitHub Client</a>
  </li>
</ul>

<p>I’ve attached my resume for your review. I would appreciate the opportunity to speak with you about how I can bring value to your frontend team. I’m open to interviews or technical assessments at your convenience.</p>

<p>Looking forward to hearing from you.</p>

<p>Best regards,<br><b>Udaysinh Kalse</b></p>

<p>
  📞 +91 932-599-9657 | ✉️ udaykalse123@gmail.com <br>
  <a href="https://www.linkedin.com/in/uday-kalse-5aa5862b7/" target="_blank">LinkedIn</a> | 
  <a href="https://github.com/Udaykalse" target="_blank">GitHub</a>
</p>
`,
      attachments: [
        {
          filename: "Uday_Kalse_Resume.pdf",
          content: resume,
        },
      ],
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${email}: ${info.response}`);
    } catch (error) {
      console.error(`Error sending email to ${email}:`, error);
    }
  }
};

sendEmails();
