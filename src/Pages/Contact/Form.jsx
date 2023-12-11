import Button from "../../shareItem/Button/Button";


const Form = () => {
    return (
        <div className="px-6 pb-10">
            <div>
                <form action="">
                    <div className="block md:flex gap-6">
                        <input className="w-full border border-[#182336] text-white py-3 px-5 bg-[#131c31] focus:border-[#EDAA09] focus:rounded-lg outline-none " type="text" placeholder="Your Fast Name" />

                        <input className="w-full border border-[#182336] text-white py-3 px-5 bg-[#131c31] focus:border-[#EDAA09] focus:rounded-lg outline-none " type="text" placeholder="Your Last Name" />

                    </div>
                    <div className="block md:flex gap-6 mt-6">

                        <input className="w-full border border-[#182336] text-white py-3 px-5 bg-[#131c31] focus:border-[#EDAA09] focus:rounded-lg outline-none " type="email" placeholder="Your Email" />

                        <input className="w-full border border-[#182336] text-white py-3 px-5 bg-[#131c31] focus:border-[#EDAA09] focus:rounded-lg outline-none " type="number" placeholder="Your Number" />

                    </div>

                    <div>
                        <textarea  className="w-full border mt-6 border-[#182336] text-white py-3 px-5 bg-[#131c31] focus:border-[#EDAA09] focus:rounded-lg outline-none " name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className="mt-6 mx-2">
                        <Button type='submit' title='Submit' width='100%'></Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;