import { useState } from 'react';
import Head from '../../../ui/Head';
import Input from '../../../ui/Input';
import './RSVP.css';
import { useSelector } from 'react-redux';

export default function RSVP() {
    const [isLoading, setIsLoading] = useState(false);
    const isUrl = useSelector((state) => state.url.url);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const action = form.action;

        try {
            const response = await fetch(action, {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                form.reset();
                setIsLoading(false);
                alert(
                    'Terima kasih sudah melakukan konfirmasi kehadiran anda!'
                );
            } else {
                setIsLoading(false);
                alert('Gagal melakukan konfirmasi kehadiran anda!');
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error', error);
        }
    };

    return (
        <div className="rsvp" id="rsvp">
            <div className="container">
                <Head
                    title="Konfirmasi Kehadiran"
                    desc="Harap isi form dibawah untuk melakukan konfirmasi kehadiran anda"
                />
                <form
                    onSubmit={handleSubmit}
                    className="row row-cols-lg-auto g-3  justify-content-center align-items-center"
                    id="formsheet"
                    method="POST"
                    action="https://script.google.com/macros/s/AKfycbz9CmpaUYOwUbftFJlaCmpSeqv8-0dsNSoJ8wYa_eT1bgVes1Gc1AL5FnMlohjTTivU/exec"
                >
                    <Input name="nama" type="text" label="Nama" value={isUrl} />
                    <Input
                        name="jumlah"
                        type="number"
                        label="Jumlah Tamu"
                        min="1"
                        max="5"
                        length="1"
                        defaultValue="1"
                    />
                    <div className="col-12">
                        <div className="mb-3 mt-1">
                            <label className="form-label">
                                Status Kehadiran
                            </label>
                            <select
                                name="status"
                                id="status"
                                className="form-select"
                            >
                                <option selected disabled>
                                    --Pilih Kehadiran--
                                </option>
                                <option value={'hadir'}>Hadir</option>
                                <option value={'tidak_hadir'}>
                                    Tidak Hadir
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="mb-4 mt-1"></div>
                        <label htmlFor="" className="form-label"></label>
                        <button
                            className="btn"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading...' : 'Confirm'}
                        </button>
                    </div>
                </form>

                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 mt-5">
                        <div id="disqus_thread"></div>
                        {(function () {
                            // DON'T EDIT BELOW THIS LINE
                            var d = document,
                                s = d.createElement('script');
                            s.src = 'https://wedding14.disqus.com/embed.js';
                            s.setAttribute('data-timestamp', +new Date());
                            (d.head || d.body).appendChild(s);
                        })()}
                        <noscript>
                            Please enable JavaScript to view the{' '}
                            <a href="https://disqus.com/?ref_noscript">
                                comments powered by Disqus.
                            </a>
                        </noscript>
                    </div>
                </div>
            </div>
        </div>
    );
}
