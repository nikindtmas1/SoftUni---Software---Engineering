export default function Contact(){
    return (
        <div className="contact" id="contact">
            <div className="violet-overlay">
                <div className="container">
                    <h2 className="text-center">Get in touch</h2>
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Phone" />
                            <textarea placeholder="Message"></textarea>
                            <input type="submit" value="SEND" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};