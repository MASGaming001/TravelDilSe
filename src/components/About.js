import React from "react";

const About = () => {
    return <>
        <section id="about" className="py-10 px-5 bg-red-100">
            <h1 className="text-3xl text-center font-semibold uppercase pb-5">About</h1>
            <div className="block md:flex items-center justify-center">
                <img className="w-full md:w-[50%] p-2 sm:p-10 rounded-md aspect-video object-cover" src="https://images.pexels.com/photos/3694706/pexels-photo-3694706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="about-img" />
                <div className="w-full md:w-[50%]">
                    <p className="my-4">Welcome to Travel DilSe, your gateway to unforgettable travel experiences and seamless hotel bookings. We understand that every journey is a story waiting to be told, and we are here to make yours extraordinary. Whether you're a seasoned traveler or embarking on your first adventure, Travel DilSe is your trusted companion in crafting the perfect getaway.</p>

                    <p className="my-4">At Travel Dilse, excellence is not just a goal; it's a standard. We continuously strive to exceed your expectations by staying ahead of industry trends, partnering with reputable establishments, and leveraging technology to enhance your booking experience.</p>

                    <button className="bg-red-700 text-slate-100 px-3 py-2 rounded-md hover:bg-red-800">View more</button>
                </div>
            </div>
        </section>
    </>
}

export default About;
