import Head from '../../../ui/Head';
import Thumbnail from '../../../ui/Thumbnail';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="gallery" id="gallery">
            <div className="container">
                <Head
                    tagline="Memori Kisah Cinta Kami"
                    title="Galeri Foto"
                    desc="Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quo, laboriosam."
                />

                <div className="row  row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
                    <Thumbnail
                        thumbnail="images/thumbnail.jpg"
                        image="images/gallery/thumbnail.jpg"
                    />
                    <Thumbnail
                        thumbnail="images/thumbnail2.jpg"
                        image="images/gallery/thumbnail2.jpg"
                    />
                    <Thumbnail
                        thumbnail="images/thumbnail3.jpg"
                        image="images/gallery/thumbnail3.jpg"
                    />
                    <Thumbnail
                        thumbnail="images/thumbnail4.jpg"
                        image="images/gallery/thumbnail4.jpg"
                    />
                    <Thumbnail
                        thumbnail="images/thumbnail5.jpg"
                        image="images/gallery/thumbnail5.jpg"
                    />
                    <Thumbnail
                        thumbnail="images/thumbnail6.jpg"
                        image="images/gallery/thumbnail6.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
