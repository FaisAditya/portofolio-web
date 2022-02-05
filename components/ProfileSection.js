import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function Profile() {
    return (
        <section className="py-28" id="profile">
            <div className="container mx-auto  px-10 2xl:px-0">
                <SectionTitle>Profile</SectionTitle>
                <SectionParagraph>Tentang Saya</SectionParagraph>
                <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
                    <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
                        <img src="/Profile.png" className="w-full" />
                    </div>
                    <div className="md:w-7/12 w-full px-10">
                        <p className="text-lg leading-relaxed">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
                            ipsam! Repellat maxime praesentium, illo animi at enim in nam cum
                            deserunt odit eveniet ipsam sequi debitis dolores nobis voluptates
                            nihil, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quae a ad temporibus soluta repellat impedit sequi dolore eum
                            ratione hic! Dolorum quos soluta, fugiat necessitatibus non fugit
                            quasi aspernatur corporis.
                        </p>
                        <p className="text-lg mt-6 leading-relaxed">
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. A sed omnis doloremque accusantium voluptates
                            velit non asperiores mollitia hic eaque. Molestiae qui magnam
                            vitae id, dignissimos eum ipsam iusto fugiat. consectetur
                            adipisicing elit. Neque fuga tempore modi ipsa maxime quis natus
                            dolor sequi sed accusantium, nesciunt doloremque eum repellat,
                            ducimus deleniti. Laborum expedita beatae aliquid?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
