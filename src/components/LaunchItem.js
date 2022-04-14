import { HiCalendar } from "react-icons/hi";

export default function LaunchItem(launch) {

    return (
        <section>
            <div>
                <h2>{launch.name}</h2>
                <p><HiCalendar />{launch.date_local.substr(0, 4)}</p>
                <span className={launch.success ? 'succes' : 'failure'}>
                    {launch.success ? 'Success' : 'Failure'}
                </span>
                <button>More details</button>
            </div>
        </section>
    )
}
