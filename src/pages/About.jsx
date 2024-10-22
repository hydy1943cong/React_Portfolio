import '../App.css'; 
export default function About() {
    return (
      <div>
         <h1>About Me</h1>
            <div className="about-content">
                <img
                    src="../public/img/Cong-headshot.jpg" 
                    alt="Cong Wang"
                    className="profile-photo"
                />
                <p>
                    As a passionate back-end developer and database management enthusiast, I am dedicated to leveraging technology to create transformative learning experiences for all individuals. With a background as an educational researcher, I understand the challenges faced by students, especially those from less privileged backgrounds. My original career has instilled in me a strong commitment to making education more accessible and effective. I aim to use my technical skills to design innovative solutions that simplify learning processes, empowering individuals to achieve their full potential. By harnessing the power of technology, I aspire to contribute to a more equitable educational landscape that fosters growth and opportunity for everyone.
                </p>
            </div>
        </div>
    );
}