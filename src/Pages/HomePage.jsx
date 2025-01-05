import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import RunningCampaign from "../components/RunningCampaign";
import SuccessSection from "../components/SuccessSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Faq from "../components/FAQ";

const HomePage = () => {

    const campaigns = useLoaderData() 

    return (
        <div className="space-y-6 pt-20">
        <Hero/>
        <SuccessSection/>
        <RunningCampaign campaigns={campaigns}></RunningCampaign>
        <WhyChooseUs/>
        <Faq/>
        </div>
    );
};

export default HomePage;