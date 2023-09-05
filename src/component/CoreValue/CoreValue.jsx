import { GiSelfLove } from "react-icons/gi";
import { PiHandWavingThin } from "react-icons/pi";
import { MdOutlineAvTimer } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaPeopleArrows } from "react-icons/fa";
import { RiMindMap } from "react-icons/ri";
import Container from "../../Shared/Container/Container";


const CoreValue = () => {
    return (
        <div className="secondary-bg">
            <Container>

                <div>
                    <h2 className="text-center text-4xl font-bold py-5">Our Core Values</h2>
                </div>
                <div className="lg:grid grid-cols-3 gap-4 p-3">
                    <div>
                        <GiSelfLove className="text-red-400 mb-3" size={40} />
                        <h2 className="text-3xl font-bold mb-4">Adopt a customer-first mindset</h2>
                        <p>Authentically serve our customers by empowering, listening, and collaborating with our fellow Stackers.</p>
                    </div>
                    <div>
                        <PiHandWavingThin className="text-red-400 mb-3" size={40} />
                        <h2 className="text-3xl font-bold mb-4">Be flexible and inclusive</h2>
                        <p>We do our best work when a diverse group of people collaborate in an environment of respect and trust. Create space for different voices to be heard, and allow flexibility in how people work.</p>
                    </div>
                    <div>
                        <MdOutlineAvTimer className="text-red-400 mb-3" size={40} />
                        <h2 className="text-3xl font-bold mb-4">Be transparent</h2>
                        <p>Communicate openly and honestly, both inside and outside the company. Encourage transparency from others by being empathetic, reliable, and acting with integrity.</p>
                    </div>
                    <div>
                        <TbWorld className="text-red-400 mb-3" size={40} />
                        <h2 className="text-3xl font-bold mb-4">Empower people to deliver outstanding results</h2>
                        <p>Give people space to get their job done, support them when they need it, and practice blameless accountability.</p>
                    </div>
                    <div>
                        <FaPeopleArrows className="text-red-400 mb-3" size={40} />
                        <h2 className="text-3xl font-bold mb-4">Keep community at our center</h2>
                        <p>Community is at the heart of everything we do. Nurture healthy communities where everyone is encouraged to learn and give back.</p>
                    </div>
                    <div>
                        <RiMindMap className="text-red-400 mb-3" size={40} />
                        <h2 className="text-3xl font-bold mb-4">Learn, share, grow</h2>
                        <p>Adopt a Growth Mindset. Be curious and eager to learn. Aim for ethical, sustainable, long-term growth, both personally and in the company.</p>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default CoreValue;
