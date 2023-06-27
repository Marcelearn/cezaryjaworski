import hombresdelaluz from "../imagenes/HombresDeLaLuz.jpg"
const images = [
  {
    id: 1,
    description: "Baltyk, Polska",
    date: "1975",
    src: "/imagenes/StronaWeb/Baltyk-Polska-1975.jpg"
  },
  {
    id: 2,
    description: "Caracas, Venezuela",
    date: "1983",
    src: "/imagenes/StronaWeb/Caracas-Venezuela:1983.jpg"
  },
  {
    id: 3,
    description: "Amazonas, Ecuador",
    date: "1981",
    src: "/imagenes/StronaWeb/Ecuador-Amazonas:1981.jpg"
  },
  {
    id: 4,
    description: "Ecuador",
    date: "1981",
    src: "/imagenes/StronaWeb/Ecuador1:1981.jpg"
  },
  {
    id: 5,
    description: "Ecuador",
    date: "1981",
    src: "/imagenes/StronaWeb/Ecuador2:1981.jpg"
  },
  {
    id: 6,
    description: "Ecuador",
    date: "1981",
    src: "/imagenes/StronaWeb/Ecuador3:1981.jpg"
  },
  {
    id: 7,
    description: "Hel, Polska",
    date: "2015",
    src: "/imagenes/StronaWeb/Hel-Polska:2015.jpg"
  },
  {
    id: 8,
    description: "Lago de Maracaibo, Venezuela",
    date: "1981",
    src: "/imagenes/StronaWeb/LagoMaracaibo-Venezuela:1981.jpg"
  },
  {
    id: 9,
    description: "La Guaira, Venezuela",
    date: "1983",
    src: "/imagenes/StronaWeb/LaGuaira1-Venezuela:1982.jpg"
  },
  {
    id: 10,
    description: "La Guaira, Venezuela",
    date: "1982",
    src: "/imagenes/StronaWeb/LaGuaira2-Venezuela:1982.jpg"
  },
  {
    id: 11,
    description: "La Guaira, Venezuela",
    date: "1982",
    src: "/imagenes/StronaWeb/LaGuaira3-Venezuela:1982.jpg"
  },
  {
    id: 12,
    description: "La Guaira, Venezuela",
    date: "1982",
    src: "/imagenes/StronaWeb/LaGuaira4-Venezuela:1982.jpg"
  },
  {
    id: 13,
    description: "La Guaira, Venezuela",
    date: "1982",
    src: "/imagenes/StronaWeb/LaGuaira5-Venezuela:1982.jpg"
  },
  {
    id: 14,
    description: "La Guaira, Venezuela",
    date: "1982",
    src: "/imagenes/StronaWeb/LaGuaira6-Venezuela:1982.jpg"
  }
]

function App() {
  

  return (
   
    <main>
        <div class="firstImg">
          <img src={hombresdelaluz} alt="light photography"/>
        </div>
        <div class="text">
          <h1>Cezary Jaworski</h1>
        </div>
        <div class="bio">
          <img src="https://yt3.ggpht.com/ytc/AKedOLTCQy2XExYclDBJatoHrjBSMPcA0fYWdfW7QVaoGw=s900-c-k-c0x00ffffff-no-rj" alt=""/>
        </div>
        <div class="iframe-container">
          <iframe width="720" height="480" src="https://www.youtube.com/embed/T77gtlw1KuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="iframe-container">
          <iframe width="720" height="480" src="https://www.youtube.com/embed/XnG2MkSCByg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="iframe-container">
          <iframe width="720" height="480" src="https://www.youtube.com/embed/t3lcaSp1xYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <section id="gallery-container">
          {images.map((el, index) =>{
            return <div class="img-container"><img src={images[index].src} /><p>{el.description} {el.date}</p> </div>
          }
            )}
          
        </section>
        <div class = "iconContainner">
          <i class="fa-brands fa-imdb"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
    </main>
      
  
  )
}

export default App
