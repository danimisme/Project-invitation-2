import './Gallery.css';

const Gallery = () => {
    return (
        <div className="gallery" id="gallery">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-10 text-center">
                        <span>Memori Kisah Cinta Kami</span>
                        <h2>Galeri Foto</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quo, laboriosam.
                        </p>
                    </div>
                </div>

                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
                    <div className="col mt-3">
                        <a
                            href="images/thumbnail2.jpg"
                            data-toggle="lightbox"
                            data-caption="This describes the image"
                        >
                            <img
                                src="images/gallery/thumbnail2.jpg"
                                alt="hallo"
                                className="img-fluid w-100 rounded"
                            />
                        </a>
                    </div>
                    <div className="col mt-3">
                        <a
                            href="images/thumbnail3.jpg"
                            data-toggle="lightbox"
                            data-caption="This describes the image"
                        >
                            <img
                                src="images/gallery/thumbnail3.jpg"
                                alt="hallo"
                                className="img-fluid w-100 rounded"
                            />
                        </a>
                    </div>
                    <div className="col mt-3">
                        <a href="images/thumbnail4.jpg">
                            <img
                                src="images/gallery/thumbnail4.jpg"
                                alt="hallo"
                                className="img-fluid w-100 rounded"
                            />
                        </a>
                    </div>
                    <div className="col mt-3">
                        <a href="images/thumbnail5.jpg">
                            <img
                                src="images/gallery/thumbnail5.jpg"
                                alt="hallo"
                                className="img-fluid w-100 rounded"
                            />
                        </a>
                    </div>
                    <div className="col mt-3">
                        <a href="images/thumbnail6.jpg">
                            <img
                                src="images/gallery/thumbnail6.jpg"
                                alt="hallo"
                                className="img-fluid w-100 rounded"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
