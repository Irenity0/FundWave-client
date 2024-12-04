import React from 'react';

const RunningCampaign = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">Current Campaigns</h2>
        <p className="text-lg text-accent text-center mb-12">
          Be a part of our mission to create impactful change. Explore our ongoing campaigns and help us achieve meaningful milestones. 
          Your contributions drive progress and transformation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Campaign 1 */}
          <div className="p-6 bg-neutral/70 shadow-lg rounded-lg">
            <h3 className="text-2xl text-secondary font-bold mb-4">Empower Education</h3>
            <p className="text-accent mb-4">
              Help provide essential resources for schools in underprivileged communities.  
              Your support can make quality education accessible to more students.
            </p>
            <button className="btn btn-secondary w-full">Donate Now</button>
          </div>

          {/* Campaign 2 */}
          <div className="p-6 bg-neutral/70 shadow-lg rounded-lg">
            <h3 className="text-2xl text-secondary font-bold mb-4">Reforest Our Future</h3>
            <p className="text-accent mb-4">
              Join us in planting 10,000 trees to combat climate change and restore ecosystems.  
              Every contribution helps us move closer to a greener planet.
            </p>
            <button className="btn btn-secondary w-full">Contribute</button>
          </div>

          {/* Campaign 3 */}
          <div className="p-6 bg-neutral/70 shadow-lg rounded-lg">
            <h3 className="text-2xl text-secondary font-bold mb-4">Healthcare for All</h3>
            <p className="text-accent mb-4">
              Support our initiative to bring essential medical supplies to remote areas.  
              Together, we can ensure better healthcare access for everyone.
            </p>
            <button className="btn btn-secondary w-full">Support Now</button>
          </div>

          {/* Campaign 4 */}
          <div className="p-6 bg-neutral/70 shadow-lg rounded-lg">
            <h3 className="text-2xl text-secondary font-bold mb-4">Clean Water Initiative</h3>
            <p className="text-accent mb-4">
              Help us provide clean water solutions to communities facing water scarcity.  
              Your contribution can help save lives and improve health in underserved areas.
            </p>
            <button className="btn btn-secondary w-full">Donate Now</button>
          </div>

          {/* Campaign 5 */}
          <div className="p-6 bg-neutral/70 shadow-lg rounded-lg">
            <h3 className="text-2xl text-secondary font-bold mb-4">Fight Hunger</h3>
            <p className="text-accent mb-4">
              Join our mission to fight hunger by providing food relief to those in need.  
              Every donation helps us feed families and individuals struggling with food insecurity.
            </p>
            <button className="btn btn-secondary w-full">Help Now</button>
          </div>

          {/* Campaign 6 */}
          <div className="p-6 bg-neutral/70 shadow-lg rounded-lg">
            <h3 className="text-2xl text-secondary font-bold mb-4">Women's Empowerment</h3>
            <p className="text-accent mb-4">
              Support women’s empowerment programs that focus on education, leadership, and financial independence.  
              Your involvement helps build a better future for women worldwide.
            </p>
            <button className="btn btn-secondary w-full">Join Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningCampaign;
