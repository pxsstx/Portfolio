import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({ link, title, isHighlight }) => {

    if (!link) {
        return <span className={isHighlight ? "text-primaryTitle text-lg" : "text-primaryHeader text-lg"}>{title}</span>
    }

    return (
        <a
            className={isHighlight ? 'text-primaryTitle text-lg' : 'text-primaryHeader text-lg'}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="pr-1 text-lg">{title}</span>
            <FontAwesomeIcon
                icon={faArrowUp}
                className={`${isHighlight ? "-translate-y-1 translate-x-1" : "translate-y-0"} rotate-45 text-sm ease-out duration-500`}
            />
        </a>

    )
}

export default TitleLink;