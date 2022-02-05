import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function Skill() {
    return (
        <>
            <section className="py-28 bg-primarygray" id="skills">
                <div className="container mx-auto  px-10 2xl:px-0md:">
                    <SectionTitle>Skill</SectionTitle>
                    <SectionParagraph>Beberapa Kemampuan Saya</SectionParagraph>
                    <div className="flex -mx-4 mt-20 flex-wrap">
                        <div className="md:w-4/12 w-full px-4 pb-8 mb:pb-0">
                            <SkillCard
                                name="JavaScript"
                                level="Lanjutan"
                                image="/javascript.svg"
                                imageClassName="h-16 rounded-full"
                            />
                        </div>
                        <div className="md:w-4/12 w-full px-4 pb-8 mb:pb-0">
                            <SkillCard
                                name="ReactJS"
                                level="Menengah"
                                image="/react.svg"
                                imageClassName="h-16"
                            />
                        </div>
                        <div className="md:w-4/12 w-full px-4 pb-8 mb:pb-0">
                            <SkillCard
                                name="NodeJS"
                                level="Pemula"
                                image="/nodejs.svg"
                                imageClassName="h-16"
                            />
                        </div>
                        <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                            <SkillCard
                                name="JavaScript"
                                level="Lanjutan"
                                image="/javascript.svg"
                                imageClassName="h-16 rounded-full"
                            />
                        </div>
                        <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                            <SkillCard
                                name="ReactJS"
                                level="Menengah"
                                image="/react.svg"
                                imageClassName="h-16"
                            />
                        </div>
                        <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                            <SkillCard
                                name="NodeJS"
                                level="Pemula"
                                image="/nodejs.svg"
                                imageClassName="h-16"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
