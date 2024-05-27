import Head from '../../../ui/Head';
import Input from '../../../ui/Input';
import './RSVP.css';

export default function RSVP() {
    return (
        <div className="rsvp" id="rsvp">
            <div className="container">
                <Head
                    title="Konfirmasi Kehadiran"
                    desc="Harap isi form dibawah untuk melakukan konfirmasi kehadiran anda"
                />
                <form className="row row-cols-lg-auto g-3  justify-content-center align-items-center">
                    <Input name="nama" type="text" label="Nama" />
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
                            type="button"
                            onClick={() => {}}
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
