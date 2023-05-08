import cervelo from "../images/cervelot1.jpg"
import laptopscreen from "../images/systemvetare.jpg"

const AboutPage = () => {

  return (
    <>
    <div className="container">
      <div className="box-one">
        <img src={cervelo} alt="cervelo" height={250} width={350} />
        <h3 className="text">Outside of studies, i enjoy riding bikes...</h3>
      </div>
      <div className="box-one">
        <h3 className="text">For future studies, i've set the goal to study systems science at 
        Lunds University</h3>
        <img src={laptopscreen} alt="futurestudies" height={250} width={350} />
      </div>
    </div>
    </>
  );
};

export default AboutPage;