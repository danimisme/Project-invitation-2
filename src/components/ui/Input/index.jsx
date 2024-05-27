export default function Input(prop) {
    const { name, type, label, ...rest } = prop;
    return (
        <div className="col-12">
            <div className="mb-3 mt-1">
                <label htmlFor="inputName" className="form-label">
                    {label}
                </label>
                <input
                    type={type}
                    className="form-control"
                    id={name}
                    name={name}
                    {...rest}
                />
            </div>
        </div>
    );
}
