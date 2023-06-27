import hombresdelaluz from "/src/assets/imagenes/HombresDeLaLuz.jpg";
import BaltykPolska from "/src/assets/imagenes/StronaWeb/Baltyk-Polska-1975.jpg";
import CaracasVenezuela from "/src/assets/imagenes/StronaWeb/Caracas-Venezuela:1983.jpg";
import ecuador from "/src/assets/imagenes/StronaWeb/Ecuador-Amazonas:1981.jpg";
import ecuador1 from "/src/assets/imagenes/StronaWeb/Ecuador1:1981.jpg";
import ecuador2 from "/src/assets/imagenes/StronaWeb/Ecuador2:1981.jpg";
import ecuador3 from "/src/assets/imagenes/StronaWeb/Ecuador3:1981.jpg";
import hel from "/src/assets/imagenes/StronaWeb/Hel-Polska:2015.jpg";
import maracaibo from "/src/assets/imagenes/StronaWeb/LagoMaracaibo-Venezuela:1981.jpg";
import guaira1 from "/src/assets/imagenes/StronaWeb/LaGuaira1-Venezuela:1982.jpg";
import guaira2 from "/src/assets/imagenes/StronaWeb/LaGuaira2-Venezuela:1982.jpg";
import guaira3 from "/src/assets/imagenes/StronaWeb/LaGuaira3-Venezuela:1982.jpg";
import guaira4 from "/src/assets/imagenes/StronaWeb/LaGuaira4-Venezuela:1982.jpg";
import guaira5 from "/src/assets/imagenes/StronaWeb/LaGuaira5-Venezuela:1982.jpg";
import guaira6 from "/src/assets/imagenes/StronaWeb/LaGuaira6-Venezuela:1982.jpg";


function App() {
  const images = [
    {
      id: 1,
      description: "Baltyk, Polska",
      date: "1975",
      src: BaltykPolska
    },
    {
      id: 2,
      description: "Caracas, Venezuela",
      date: "1983",
      src: CaracasVenezuela
    },
    {
      id: 3,
      description: "Amazonas, Ecuador",
      date: "1981",
      src: ecuador
    },
    {
      id: 4,
      description: "Ecuador",
      date: "1981",
      src: ecuador1
    },
    {
      id: 5,
      description: "Ecuador",
      date: "1981",
      src: ecuador2
    },
    {
      id: 6,
      description: "Ecuador",
      date: "1981",
      src: ecuador3
    },
    {
      id: 7,
      description: "Hel, Polska",
      date: "2015",
      src: hel
    },
    {
      id: 8,
      description: "Lago de Maracaibo, Venezuela",
      date: "1981",
      src: maracaibo
    },
    {
      id: 9,
      description: "La Guaira, Venezuela",
      date: "1983",
      src: guaira1
    },
    {
      id: 10,
      description: "La Guaira, Venezuela",
      date: "1982",
      src: guaira2
    },
    {
      id: 11,
      description: "La Guaira, Venezuela",
      date: "1982",
      src: guaira3
    },
    {
      id: 12,
      description: "La Guaira, Venezuela",
      date: "1982",
      src: guaira4
    },
    {
      id: 13,
      description: "La Guaira, Venezuela",
      date: "1982",
      src: guaira5
    },
    {
      id: 14,
      description: "La Guaira, Venezuela",
      date: "1982",
      src: guaira6
    }
  ]
  const imageProfil = hombresdelaluz;


  return (
   
    <main>
        <div className="firstImg">
          <img src={imageProfil} alt="light photography"/>
        </div>
        <div className="text">
          <h1>Cezary Jaworski</h1>
        </div>
        <div className="bio">
          <img src="https://yt3.ggpht.com/ytc/AKedOLTCQy2XExYclDBJatoHrjBSMPcA0fYWdfW7QVaoGw=s900-c-k-c0x00ffffff-no-rj" alt=""/>
        </div>
        <div className="iframe-container">
          <iframe width="720" height="480" src="https://www.youtube.com/embed/T77gtlw1KuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="iframe-container">
          <iframe width="720" height="480" src="https://www.youtube.com/embed/XnG2MkSCByg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="iframe-container">
          <iframe width="720" height="480" src="https://www.youtube.com/embed/t3lcaSp1xYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <section id="gallery-container">
          {images.map((el, index) =>{
            return <div key={index} className="img-container"><img src={el.src} /><p>{el.description} {el.date}</p> </div>
          }
            )}
          
        </section>
        <div className= "iconContainner">
          <i className="fa-brands fa-imdb"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
    </main>
      
  
  )
}

export default App
