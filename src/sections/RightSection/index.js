import ContentContainer from "../../components/ContentContainer";
import { data as aboutData } from "../../contents/about";
import { data as certificationData } from "../../contents/certification";
import { data as projectData } from "../../contents/project";
import About from "../About";


const RightSection = ({ onInitial, currectSection, scrollId }) => {
    return (
        <div id={scrollId} className="w-full grid gap-32 lg:gap-40">
            <About
                onInitial={onInitial}
                title="About"
                description={aboutData.description}
                stateWatchOnHover={currectSection}
            />
            <ContentContainer
                onInitial={onInitial}
                title="Project"
                data={projectData}
                stateWatchOnHover={currectSection}
            />
            <ContentContainer
                onInitial={onInitial}
                title="Certification"
                data={certificationData}
                stateWatchOnHover={currectSection}
                pictureClassName="w-4/6 bg-primaryContent"
            />
        </div>
    )
}

export default RightSection;