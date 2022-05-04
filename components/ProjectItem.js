
export default function Item({ name, description, image, link }) {

    return (
        <article className="text-center">
            <a href={link}>
                <img src={image} className="w-full rounded-lg" />
            </a>

            <h3 className="text-xl font-semibold mt-4 mb-1">{name}</h3>
            <p className="text-lg text-gray-400">{description}</p>
        </article>
    )
}