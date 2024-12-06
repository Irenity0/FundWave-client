import React from 'react';
import CountUp from 'react-countup';
import { Typewriter } from 'react-simple-typewriter';

const SuccessSection = () => {
  return (
    <div className="py-16 bg-neutral rounded-2xl">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6"><Typewriter
            words={['Our Milestones']}
            loop={false} // Animates only once
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h2>
        <p className="text-lg text-accent mb-12">
          Together, we’re shaping the future! From impactful campaigns to meaningful change, 
          our journey has been one of purpose, passion, and progress. Here’s what we’ve achieved so far:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Total Supporters */}
          <div className="p-6 bg-base-100 shadow-2xl rounded-lg">
            <h3 className="text-2xl text-accent mb-2">Supporters</h3>
            <p className="text-4xl font-bold text-secondary">
              <CountUp start={0} end={5000} duration={3} />
            </p>
          </div>

          {/* Campaigns Funded */}
          <div className="p-6 bg-base-100 shadow-2xl rounded-lg">
            <h3 className="text-2xl text-accent mb-2">Campaigns Funded</h3>
            <p className="text-4xl font-bold text-secondary">
              <CountUp start={0} end={35} duration={3} />
            </p>
          </div>

          {/* Total Donations */}
          <div className="p-6 bg-base-100 shadow-2xl rounded-lg">
            <h3 className="text-2xl text-accent mb-2">Total Donations</h3>
            <p className="text-4xl font-bold text-secondary">
              <CountUp start={0} end={150000} duration={3} />$
            </p>
          </div>

          {/* Active Campaigns */}
          <div className="p-6 bg-base-100 shadow-2xl rounded-lg">
            <h3 className="text-2xl text-accent mb-2">Active Campaigns</h3>
            <p className="text-4xl font-bold text-secondary">
              <CountUp start={0} end={8} duration={3} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
