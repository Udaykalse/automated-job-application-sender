const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "udaykalse123@gmail.com",
    pass: "lrzw xvsh umew duhs",
  },
});

const recipients = [


  "careers@koshertechsolution.com",
"careers@mindtree.com",
"careers@mithi.com",
"careers@nexeia.com",
"careers@nextbitcpu.com",
"nethraj@tratumtech.com",
"nutan@onmobile.com",
"ori-ramanaguda@gramsat.nic.in",
"pallavig@nds.com",
"people@mindtree.com",
"Peoplezeal.freshers@gmail.com",
"pituonnet@yahoo.co.in",
"placement@aljadid.in",
"pooja.bhatia@integral.com",
"prabuddhab@endroittechnologies.com",
"prachis@packtpub.com",
"Pramod.n@marlabs.com",
"pratibha@infobase.in",
"priya.anand@avl.com",
"priya@tspl.com",
"priyankak@interactcrm.com",
"Prkumar8@in.ibm.com",
"projects@ascendindia.com",
"ps.careers@philips.com",
"Psofreshers@subexazure.com",
"Puja.raj@mafoi.com",
"qa@chakrainteractive.com",
"ragarwal@informatica.com",
"rajbir@techraysolutions.com",
"ramakrishna.g@atiric.com",
"Rameshwar.Singh@hp.com",
"ramvivek21@yahoo.com",
"rashi.arora@igate.com",
"rec_mumbai@yahoo.com",
"recruit@eds.com",
"recruit@phmhelth.com",
"recruiting@prapansol.com",
"recruiting@vistasoftindia.com",
"recruitment_fresher@inbox.com",
"recruitment_nipuna@nipunaservices.com",
"recruitment.Chennai@nokia.com",
"recruitment@goelganga.com",
"recruitment@safran.in",
"refual@india.hp.com",
"register@bsi.co.in",
"reji@maaguns.com",
"Rekhaaranha@gmail.com",
"resume@consecoindia.com",
"resume@lohitsagowra.com",
"resume@multitech.co.in",
"resume@thekshanplacements.com",
"resumeasap.infodesk@jataayusoft.com",
"resumeindia@informatica.com",
"resumes.bangalore@siemens.com",
"resumesindia@firstam.com",
"Resumesubmition@novell.com",
"riya.freshers@rediffmail.com",
"roja.J@ge.com",
"rs_placementconsultants@yahoo.com",
"ruchir@ering-cad.com",
"sai_prashanth@dell.com",
"samarpita.banerjee@wipro.com",
"sameer.panda@intecbilling.com",
"sandhya.raghavan@3i-infotech.com",
"saritha@vmoksha.com",
"sgi@ggheewala.com",
"shalu@ewaretechnologies.com",
"shamshersingh2k@rediffmail.com",
"shapethefuture.in@siemens.com",
"sheela.venkatesh@sap.com",
"sheik.ahmed@in.tesco.com",
"shikha.arora@iapinfotech.com",
"shish.juneja@macfee.com",
"shivam_swaroop@yahoo.com",
"shivani@quantum-bso.com",
"shruti.sharan@avl.com",
"sivaranjan@in.ibm.com",
"solutions@edcindia.com",
"SrinivasaRao.B@mphasis.com",
"srividya_m@trigent.com",
"ssachinkumar@hcl.in",
"steve@sysnetts.com",
"su_mehra@rediffmail.com",
"Sujukh.banerjee@mafoi.com",
"supportteam@icsi.net",
"sushma.jyothi@supportsoft.com",
"syamala.j@inetframe.com",
"sylvie@sarayusoftech.com",
"LIMITED.Ramya.Hg@in.bosch.com",
"lingesh_kumar@dell.com",
"lipsan@triumphsys.com",
"liz@itti.co.in",
"maagschrdjob@maersk.com",
"Maathungi.Gopalakrishnan@iflexsolutions.com",
"madhavi@captronicsystems.com",
"madhu.yiligar@ecanarys.com",
"madhukar.kapoor@iflexsolutions.com",
"mahasweta.pandit@unisys.com",
"maheshm@scalepeak.com",
"mahindia@vsnl.com",
"mail@conceptsindia.co.in",
"malik@sunexsolutions.com",
"malleshwaram@systelinfos.com",
"management.trainee@gsk.com",
"manas.reddy@lgsoftindia.com",
"Mani.Cn@kpitcummins.com",
"mani.thamanam@relianceada.com",
"manjunair@macmet.com",
"manjuneeraja.murlidhar@capgemini.com",
"manuel.george@subexazure.com",
"marshneil@6dtech.co.in",
"mastan.sab@peopletalents.com",
"mayank.jain@birlasoft.com",
"mcv@csc.com",
"meena.suryavanshi@patni.com",
"meenacg@qsoftindia.com",
"MEENU.N@sonata-software.com",
"megharani.p@growelsoftech.com",
"mintualex@huawei.com",
"minu@purehrc.com",
"miprabha@in.ibm.com",
"mithun@elogic.co.in",
"MITHUN.MUKHERJEE@iflexsolutions.com",
"mittal_nidhi@emc.com",
"mlakshmi@novoit.net",
"mohamed@logesys.com",
"mohamed@vmoksha.com",
"mohamed.anjum@intecbilling.com",
"MOHAN.KUMAR@acs-inc.com",
"monika@prolificiss.com",
"mr@nous.soft.net",
"mrali@iteamic.com",
"ms@maventic.com",
"mycareer@progen.com",
"mycareer@incat.com",
"mythili.thamodharam@digitaljuice.co.in",
"n1@nfotecindia.com",
"Nagalakshmi.Jagannatha@capco.com",
"nalini.n@sonata-software.com",
"nameeta.kagva@honeywell.com",
"NAMEETA.KAGVATE@honeywell.com",
"nameeta.maskikar@verinon.com",
"namratap@bsil.com",
"nanditha.sudhindra@oracle.com",
"narayan@asmltd.com",
"naresh.m@saptec.in",
"nataraju@quicklogic.com",
"nath.nallapeta@capgemini.com",
"naveen@renaitree.com",
"naveen@careerdestiny.net",
"Naveen.Kukutapu@teradata.com",
"navneeta.surve@zenithinfotech.com",
"nchandra@xavient.com",
"neema@signatrix.in",
"neeraja.murlidhar@capgemini.com",
"neeraja.pyaraka@vijai.co.in",
"neetha.bsn@wipro.com",
"Neetu.Satsangi@evalueserve.com",
"neha@pmssindia.com",
"nethraj@tratumtech.com",
"ngudikote@ciber.com",
"nidhi.tulsi@accenture.com",
"niki@ssn.co.in",
"nithya.medappa@marlabs.com",
"nta_loref@vsnl.co.in",
"nutan@onmobile.com",
"oasys@giasbg01.vsnl.net.in",
"offcampus@patni.com",
"offcampus.bangalore@patni.com",
"offcampus.chennai@patni.com",
"offcampus.pune@patni.com",
"office@shredskerala.org",
"ofhrd@sterlite.com",
"openings@lasonindia.com",
"ori-ramanaguda@gramsat.nic.in",
"p.bubna@zensar.com",
"padmashree.sv@sonata-software.com",
"PADMAVATHI.VAPLA@proteans.com",
"pallavig@nds.com",
"paremvir.malik@cgl.co.in",
"parithi@dgbmicro.com",
"PAWAN.BHATIA@sgcib.com",
"pelatis1@airtelbroadband.in",
"people@mindtree.com",
"peter.yorke@iflexsolutions.com",
"pic.careers@philips.com",
"pivot@freshersworld.com",
"pkm@alcatel-lucent.com",
"placement@aljadid.in",
"pms.jobs@philips.com",
"pooja@ees-india.com",
"pooja.bhatia@integral.com",
"pooja.dhillon@mafoi.com",
"pooja.maruthi@apcc.com",
"poojadhillon@mafoi.com",
"ppanthula@sapient.com",
"ppundir@cisco.com",
"prabuddhab@endroittechnologies.com",
"prachi.rane@cgi.com",
"prachis@packtpub.com",
"Pradeep.Unni@relianceada.com",
"PradeepG@nds.com",
"prajkta.salvi@eyeglobal.com",
"pramila.Fernandes@kpitcummins.com",
"Pramod.n@marlabs.com",
"prasad.m@in.bosch.com",
"prasanna.a@matsoftwaresolutions.com",
"prasannaa@matsoftwaresolutions.com",
"prasanth@kalkitech.com",
"Prasath.p@hcl.in",
"prashant@infynita.com",


];

const resumePath = path.join(__dirname, "Udaysinh_kalse_Resume.pdf");
const resume = fs.readFileSync(resumePath);

const sendEmails = async () => {
  for (const email of recipients) {
    const mailOptions = {
      from: "codeuday6@gmail.com",
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
      console.log(`✅ Email sent to ${email}: ${info.response}`);
    } catch (error) {
      console.error(`❌ Error sending email to ${email}:`, error);
    }
  }
};

sendEmails();
