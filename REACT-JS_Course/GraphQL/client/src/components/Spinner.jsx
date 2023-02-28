import loader from './assets/loader.gif'

export default function Spinner() {
    return (
        <div className="d-flex justify-content-center">
            <img src={loader} alt="" srcset="" />
        </div>
    )
}