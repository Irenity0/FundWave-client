import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import RunningCampaign from "../components/RunningCampaign";
import SuccessSection from "../components/SuccessSection";
import WhyChooseUs from "../components/WhyChooseUs";

const HomePage = () => {

    const campaigns = useLoaderData() 

    return (
        <div className="space-y-6">
        <Hero></Hero>
        <SuccessSection></SuccessSection>
        <RunningCampaign campaigns={campaigns}></RunningCampaign>
        <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default HomePage;