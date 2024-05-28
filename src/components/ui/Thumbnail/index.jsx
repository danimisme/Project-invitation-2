export default function Thumbnail(prop) {
    const { thumbnail, image, ...rest } = prop;
    return (
        <>
            <div {...rest} className="col mt-5">
                <a
                    href={thumbnail}
                    data-toggle="lightbox"
                    data-caption="This describes the image"
                >
                    <img
                        src={image}
                        alt="hallo"
                        className="img-fluid w-100 rounded"
                    />
                </a>
            </div>
        </>
    );
}
