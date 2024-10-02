
export default function Footer() {
    return (
        <footer className="py-8 md:py-16 px-6 md:px-12 bg-[#010101] text-white">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-16">
                {["Safari", "Links", "Our Activities", "About Us", "Contacts"].map((title, index) => (
                    <div key={index} className="w-full md:w-56">
                        <h1 className="text-xl md:text-2xl">{title}</h1>
                        <ul>
                            {index === 0 ? (
                                <p>We are passionate about making your travel dreams come true.</p>
                            ) : index === 1 ? (
                                ["Home", "Services", "FAQ", "Testimonials"].map((link, idx) => <li key={idx}>{link}</li>)
                            ) : index === 2 ? (
                                ["Tour", "Travel", "Adventure", "Explore"].map((link, idx) => <li key={idx}>{link}</li>)
                            ) : index === 3 ? (
                                ["Our Story", "Our Team", "Our Mission", "Our Vision"].map((link, idx) => <li key={idx}>{link}</li>)
                            ) : (
                                <>
                                    <li>Address: Home Ho 204 Street</li>
                                    <li>Phone: +620 123 456 789</li>
                                    <li>Email: Safari@travel.bn</li>
                                    <li>Website: Safari.travel.bn</li>
                                </>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    )
}
