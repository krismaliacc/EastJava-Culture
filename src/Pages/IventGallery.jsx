import Navbar from "../Components/Navbar"
import Footer from "../Components/bundle/Footer";
import IventHero from "../Elements/Bundle/IventHero"
import thumb from '../assets/Festival/gallery-thum.png';
import "../css/Festival/ivent-kalender.css"
const IventGallery = () => {
    return (<>
        <Navbar />
        <div className="nav-gap"></div>
        <IventHero title="Festival Gandrung Sewu" desc="adalah perayaan budaya yang diadakan setiap tahun di Banyuwangi, Jawa Timur, Indonesia. Gandrung adalah tarian tradisional yang diiringi oleh musik khas daerah tersebut. Acara ini menjadi bagian penting dari upaya promosi pariwisata Banyuwangi, menampilkan kekayaan seni dan budaya lokal." image={thumb} />
        <h2 className="title-ivent">berikut ini adalah galeri foto kegiatan
            festival gandrung sewu banyuwangi</h2>

        <Footer />
    </>)
}

export default IventGallery