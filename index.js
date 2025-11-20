const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gojocode95@gmail.com",
    pass: "fedw igit uoof clyu",
  },
});

const recipients = [
"arvind.universalhr@gmail.com",
"mskhan618@gmail.com",
"ektajobs13@gmail.com",
"careermaker.educationsociety@gmail.com",
"hooda_deepu@yahoo.co.in",
"csd_car@hotmail.com",
"inspiron.hr@gmail.com",
"hr@adglobal360.com",
"anuragpriyaarora@yahoo.com",
"babu.lal@bmw-birdautomotive.in",
"sujit@careerlauncher.com",
"ceis.jobready@gmail.com",
"vaidhrandhirsinghr@gmail.com",
"angel.wadhwa03@gmail.com",
"dheerajobroi@yahoo.com",
"ankitjobs@yahoo.in",
"dsbjobsusa@gmail.com",
"shankar199339@gmail.com",
"hr@atcprecomp.com",
"shyam@shivainternational.com",
"suresh.tiwari@corporatespectrum.in",
"ashwini.n@os.hughes.in",
"ggn.jobs18@gmail.com",
"girraj@kumarprinters.com",
"careers@classteacher.com",
"saisolution.hr@gmail.com",
"datajobscare4u@gmail.com",
"jobnest2013@gmail.com",
"himanshijindal1990@gmail.com",
"hr@sestaindia.co.in",
"bigjobtree@gmail.com",
"careers@toshiba-india.com",
"hr@ampersand-design.in",
"dhermendra.kumar@in.yusen-logistics.com",
"thefresherjobs6@gmail.com",
"hr@fashionforever.biz",
"hr@bhartirealty.com",
"shruti.ftdar@gmail.com",
"qualityhr@mayomhospital.com",
"hr@exoticbuildcon.com",
"jobyjp107@gmail.com",
"jobs.for.hrd@gmail.com",
"hr@bagmaker.in",
"mkcareer8@gmail.com",
"jobyshekhar@yahoo.com",
"indiatimesjob6@gmail.com",
"vu2dhr@yahoo.com",
"cygnetjobwork@gmail.com",
"jobfairstreet@gmail.com",
"hr@orangemantra.com",
"hr@sofworld.org",
"ashutoshggn.hr@gmail.com",
"jobpoint85@gmail.com",
"hr@vulcancoldforge.com",
"suraj.yadavhr@gmail.com",
"support@jobma.com",
"tk.ecologicbuildingsystem@gmail.com",
"gmhr@chelseamills.com",
"satishsharma8086@gmail.com",
"anand.pasupatidhr@gmail.com",
"info.palakplastic@gmail.com",
"hr@taiindia.com",
"hr@lohia.im",
"dinesh.sautomation14@gmail.com",
"hrggn@spinksworld.com",
"hr@stalwarthomestyles.com",
"psahai.hr@gmail.com",
"jobs.lazerken@gmail.com",
"amitrealtyhr@gmail.com",
"sanguinejobs@gmail.com",
"pers.p3@markexhaust.com",
"admitjobs@gmail.com",
"maquettecareersketchers@gmail.com",
"hr@elementsexports.com",
"hr@giaclothings.com",
"jobsali101@gmail.com",
"job_1977@yahoo.co.in",
"hr@euronics.co.in",
"Sahiljob30@yahoo.com",
"hrjob.rd@gmail.com",
"hr@amp-india.com",
"hr@seikoadvance.co.in",
"kpsjobsolution@gmail.com",
"thegodcans@gmail.com",
"vinmindjob@gmail.com",
"shilpimthr@gmail.com",
"abhimanyu2900@gmail.com",
"careers.gurgaon@gmail.com",
"sanjeev.mycareer@gmail.com",
"vancareequipmentcorp@gmail.com",
"Harshal.onjob@gmail.com",
"dudejachhavi@gmail.com",
"vcareenterprises01@gmail.com",
"abhishek@kickstartjobs.in",
"sainathjobs@gmail.com",
"jspundeer1974@gmail.com",
"hr@surbhituff.com",
"sagunjobs@gmail.com",
"rati.nahata.jain@gmail.com",
"ashokraonnlhr@gmail.com",
"sunaina.futurehr@gmail.com",
"balwinder.moar@advik.co.in",
"joby3566@yahoo.co.in",
"nfl.ashish.hr@yahoo.com",
"aircareengineers2005@gmail.com",
"job.corporate24@gmail.com",
"ashwini.ttsipl@gmail.com",
"itcareermentors@gmail.com",
"hr@athomeplc.com",
"risingcareers28@gmail.com",
"nfl.ashish.hr@gmail.com",
"idigitalprint@gmail.com",
"jobspankaj007@gmail.com",
"hr@amassskillventures.in",
"promotecareers@gmail.com",
"hr@eseosolutions.com",
"skrajobra.2008@gmail.com",
"nathenhr@gmail.com",
"gurgaon@careerlauncher.com",
"hr@wingscorporate.in",
"rohankaikinijobs@gmail.com",
"pacificparasinfrahr@gmail.com",
"kumarirenu012@gmail.com",
"rkehr@adityadispomed.com",
"sonaligarg125@gmail.com",
"jobservices@gmail.com",
"manikantsinghr@gmail.com",
"icssgurgaonhr@gmail.com",
"sameer.jobbox@gmail.com",
"cschandrahr@gmail.com",
"job4sandeep@gmail.com",
"ncrcareer@gmail.com",
"tiptel.in@gmail.com",
"lineshvelur@gmail.com",
"career@datainfovision.com",
"intellisensesoft@gmail.com",
"jobnersteelfabrication@gmail.com",
"muditvashistha1@gmail.com",
"sombirchauhan2@gmail.com",
"admin.hr@libsys.co.in",
"nehatiwari0593@gmail.com",
"kuldeepsinghjkhr@gmail.com",
"gsshitaljob@yahoo.in",
"gauravmarketingjob@gmail.com",
"aswini.shtc@gmail.com",
"shrishyamjob@gmail.com",
"hr@sgmpaper.com",
"hr@vinspirer.com",
"aseggnhr@gmail.com",
"sania.hr@gmail.com",
"amrita@opicle.org",
"info@jnitin.com",
"career401@gmail.com",
"bipin.gclhr@gmail.com",
"jobscom88@gmail.com",
"JobzTel@gmail.com",
"indianglasshr@gmail.com",
"sushil.singh.hr@gmail.com",
"somyasharotrihr@gmail.com",
"piyushonlinejob1@gmail.com",
"rkenergyhr@gmail.com",
"Gurgaon@jobexpertsindia.com",
"delhibankjobs@gmail.com",
"jobs4arvind@gmail.com",
"kamal.job@gmail.com",
"arjunrthr@yahoo.com",
"chiragverma2207@yahoo.com",
"namita.lohani@gmail.com",
"bharatlalsharma1886@gmail.com",
"hr@abia.in",
"hitec.career@gmail.com",
"texasales1@gmail.com",
"realgenuinejob@gmail.com",
"hr@dlifestyle.in",
"hr@qcd.in",
"sanjeevjobs77@gmail.com",
"rbsinghr@gmail.com",
"hr@windsorexports.com",
"satishsingh_66@yahoo.co.in",
"vipan.hr@gmail.com",
"avneesh.hr@gmail.com",
"hr@cityinnovates.com",
"prtshr@yahoo.co.in",
"hr@stella-indusstries.com",
"hr@superindia.co.in",
"sharmajobservice@gmail.com",
"info@g-eng.in",
"arvind_gujjar@yahoo.com",
"HR@gojavas.com",
"sanjaysinghr@gmail.com",
"bluedream.jobs@gmail.com",
"hr@neelkanthhospital.com",
"ramsewakdasandcompany@gmail.com",
"hr@dynamicdesigns.in",
"gajender1984@gmail.com",
"dc.chhr@gmail.com",
"Ashish.id.jobs@gmail.com",
"divayasiwan@gmail.com",
"hr@sidharthagroup.com",
"payalmanesar@gmail.com",
"sai.jobpoint@gmail.com",
"wexper.hr@gmail.com",
"prabharawat71@gmail.com",
"gurgaonjobportal@gmail.com",
"yasinjkkhan@gmail.com",
"meghajha810@gmail.com"
];



// const recipients=["udaykalse123@gmail.com"];


const resumePath = path.join(__dirname, "Udaysinh_kalse_Resume.pdf");
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
  <li><b>Movie Recommendation LLM</b> – 
    <a href="https://github.com/Udaykalse/movie-recommendation-llm-server" target="_blank">GitHub Server</a> |  
    <a href="https://github.com/Udaykalse/movie-recommendation-llm-client" target="_blank">GitHub Client</a>
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
