import React from "react";

const data = [
    {
        section: "Languages",
        description: "JavaScript",
    },
    {
        section: "Technologies",
        description: "Web3 · React · Redux · Puppeteer · Nginx · NodeJS · Express · MongoDB",
    },
    {
        section: "Knowledge",
        description: "Blockchain · Ethereum",
    },
    {
        section: "Proficiency",
        description: "Thai-Native · English-Upper Intermediate",
    },
]

function Skill({ detail }) {

    const { sectionId: id, title: sectionTitle } = detail;

    return (
        <section className="space-y-5" id={id}>
            <span className="text-primaryHeader pl-3">{sectionTitle}</span>
            <div className="grid">
                {
                    data.map(({ section, description }) => (
                        <div
                            key={section}
                            className="grid grid-cols-8 p-2 mx-1 hover:bg-primarySubContent2 hover:bg-opacity-10 hover:rounded-xl"
                        >
                            <div className="col-span-2 text-primarySubContent1 truncate">{section}</div>
                            <div className="col-span-6 pl-2">
                                <div className="flex flex-col space-y-2">
                                    <div className="text-primaryContent">{description}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export default Skill;