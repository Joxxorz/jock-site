export default function Index() {
    return (
      <div>
          <div className="container">
            <h1>Jock Perkins</h1>
            <hr />

            <p>Flat 1, 300 Countess Way, Brooklands, Milton Keynes, MK10 7HZ</p>
            <p>07814 159 265</p>
            <p>joxxorz@me.com</p>
            <hr />

            <h2>Education</h2>
            <h3>BSc Computing and IT Practice (part-time, ongoing) Open University, Milton Keynes</h3>
            <p>Foundation Degree: Computing and IT Practices completed in 2018</p>

            <h3>Denbigh School, Milton Keynes</h3>
            <p>A-Level: Product Design (B), ICT (C), Physics (D)</p>
            <p>GCSE: Science x 2 (A), Maths (B), English x 2 (C), ICT x 2 (A*), Business Studies (A), Humanities (B), German (C), Statistics (C)</p>
            <hr />

            <h2>Work Experience</h2>
            <h3>May 2019 - Present : SOTechnology : Front End Developer</h3>
            <p>Tech used: PHP, Magento2, React, Vue, jQuery, HTML, CSS (SASS), Laravel, Git, Agile</p>
            <p>Role: building the front end for client websites from scratch, working with clients to achieve their needs.</p>
            
            <h3>Oct 2018 - May 2019 : Open University : Software Engineer</h3>
            <p>Tech used: Javascript, Node, HTML, CSS, jQuery, IoT</p>
            <p>Role: development of software to work with university hardware, such as telescopes and robotic arms.</p>
            <p>Reason for leaving: opportunity to work with more react, and new frameworks I hadn’t used previously.</p>

            <h3>Oct 2017 - Sep 2018 : Argos : Software Development Engineer</h3>
            <p>Tech used: React, Node, Jest, Selenium, Java, Typescript, HTML, CSS (SASS), Git, Agile, AWS</p>
            <p>Role: front end delivery of new features for internal call centre platform, from design to development.</p>
            <p>Reason for leaving: left for personal development with new technologies.</p>

            <h3>Jun 2016 - Oct 2017 : Little Star Media : Software Engineer</h3>
            <p>Tech used: React, Node, PHP, HTML, CSS (SASS), jQuery, Git, AWS, Nginx</p>
            <p>Role: management of internal sites, including new features; development of internal financial tools.</p>
            <p>Reason for leaving: moved into a react focussed role, whilst I was using it only 50% of the time here.</p>

            <h3>Feb 2015 - May 2016 : Melon Web Design : Junior Web Designer</h3>
            <p>Tech used: PHP, HTML, CSS (LESS), jQuery, Git</p>
            <p>Role: development of bespoke client sites using custom internal content management system.</p>
            <p>Reason for leaving: moving into a position where I could further develop and learn new technologies.</p>

            <h3>May 2014 - Feb 2015 : Kypera : Junior Developer</h3>
            <p>Tech used: ASP.NET, VB.NET, HTML, CSS, jQuery</p>
            <p>Role: development of features for housing association software and microsoft excel addons.</p>
            <p>Reason for leaving: had previously applied to Melon, and was re-approached, so took their offer as I wanted to work for a client agency for the variations in projects.</p>
            <hr />

            <h2>Additional Skills and Experience</h2>
            <p>HTML - 7 years</p>
            <p>CSS - 7 years</p>
            <p>LESS/SASS - 6 years</p>
            <br />
            <p>JavaScript - 6 years</p>
            <p>jQuery - 6 years</p>
            <p>React - 3 years</p>
            <p>Vue - 6 months</p>
            <p>Node - 3 years</p>
            <br />
            <p>PHP - 5 years</p>
            <p>Laravel - 6 months</p>
            <p>MySQL - 6 years</p>
            <br />
            <p>Java - 1 year</p>
            <p>VB.NET - 9 months</p>
            <p>ASP.NET - 9 months</p>
            <hr />

            <h2>Current Personal Projects and Hobbies</h2>
            <h3>2D Platformer Game for PC</h3>
            <p>Tech used: GML (game maker language - javascript derivative), React, HTML, CSS, NextJS</p>
            <br />

            <h3>Donald Trump Quotes iOS app</h3>
            <p>Tech used: React Native</p>
            <br />

            <h3>World of Warcraft Prices PWA</h3>
            <p>Tech used: React, Node, HTML, CSS</p>
            <hr />

            <h2>Professional References</h2>
            <h3>Azad Atadjanov - Line Manager at Little Star Media</h3>
            <p>“Jock is a diligent and efficient employee, and his professional attitude is commendable. As a previous sub-ordinate of mine,  I learnt that he is a team player that learns quickly and adapts to new situations well. Jock is enthusiastic when it comes to approaching problems and is always on the lookout for new challenges. I highly endorse Jock for any positions he would be considered for in the future.”</p>
            <hr />
            
            <h3 className="center">Additional references available upon request.</h3>
        </div>
        <style jsx>{`
            .container {
                max-width: 80%;
                padding: 20px;
                margin: 0 auto;
                background-color: white;
            }
            .center {
                text-align: center;
            }
            h1 {
                font-family: 'Helvetica';
                font-weight: normal;
                font-size: 36px;
                font-weight: bold;
            }
            h2 {
                font-family: 'Helvetica';
                font-size: 24px;
                font-weight: bold;
            }
            h3 {
                font-family: 'Helvetica';
                font-size: 16px;
                font-style: italic;
                font-weight: normal;
                margin-top: 40px;
            }
            p {
                font-family: 'Helvetica';
                font-weight: normal;
                font-size: 14px;
                margin-bottom: 15px;
            }
        `}
        </style>
      </div>
    );
  }