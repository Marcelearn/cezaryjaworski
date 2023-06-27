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
  }

  
]

function App() {
  

  return (
   
    <main>
        <div class="firstImg">
          <img src="./imagenes/HombresDeLaLuz.JPG" alt="light photography"/>
        </div>
        <div class="text">
          <h1>Cezary Jaworski</h1>
        </div>
        <div class="bio">
          <img src="https://yt3.ggpht.com/ytc/AKedOLTCQy2XExYclDBJatoHrjBSMPcA0fYWdfW7QVaoGw=s900-c-k-c0x00ffffff-no-rj" alt=""/>
        </div>
        <div>
          <iframe width="720" height="480" src="https://www.youtube.com/embed/T77gtlw1KuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <iframe width="720" height="480" src="https://www.youtube.com/embed/XnG2MkSCByg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
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
