export default function ULsection() {
    return (
        <ul className="flex items-center">
            <li>
                <a className="text-primary px-4 py-2 rounded-md ml-8 hover:bg-primary hover:rounded-md hover:text-off-white  duration-700">
                    My resume
                </a>
            </li>
            <li>
                <a
                    className="text-primary px-4 py-2 rounded-md ml-8 hover:bg-primary hover:rounded-md hover:text-off-white  duration-700"
                    href="#"
                >
                    My work
                </a>
            </li>
            <li>
                <a
                    className="text-primary px-4 py-2 rounded-md ml-8 hover:bg-primary hover:rounded-md hover:text-off-white  duration-700"
                    href="#"
                >
                    About me
                </a>
            </li>
        </ul>
    );
}
