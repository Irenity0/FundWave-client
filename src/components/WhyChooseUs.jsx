import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Us?</h2>
        <p className="text-lg text-accent mb-12">
          We're committed to transparency, impact, and making every contribution count.  
          Here's why donors trust us to make a difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reason 1 */}
          <div className="p-6 bg-base-100 border-r-2 border-r-secondary">
            <h3 className="text-2xl text-secondary font-bold mb-4">Proven Impact</h3>
            <p className="text-accent">
              Over 5,000 individuals have benefitted from our campaigns, gaining valuable skills and knowledge that 
              can be applied in their everyday lives. Each project we take on is designed with measurable outcomes 
              that can be tracked, ensuring accountability and transparency. Our supporters have seen first-hand the 
              direct impact their contributions make, from helping a student complete a course to enabling a community 
              to access life-changing resources. Every contribution counts, and we celebrate the growth and success 
              of those we've impacted together.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="p-6 bg-base-100 lg:border-r-2 lg:border-r-secondary">
            <h3 className="text-2xl text-secondary font-bold mb-4">100% Transparency</h3>
            <p className="text-accent">
              Transparency is at the core of everything we do. We believe that every donor, supporter, and partner 
              deserves to know exactly where their contributions are going. That’s why we provide detailed, easy-to-understand 
              reports outlining how funds are spent and what results have been achieved. Whether it's funding for a specific 
              project or the general support of our mission, we are committed to sharing the impact of every dollar, ensuring 
              that every supporter can feel confident in the difference they're making. Our commitment to transparency fosters 
              trust and helps us build lasting relationships with those who believe in our cause.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="p-6 bg-base-100">
            <h3 className="text-2xl text-secondary font-bold mb-4">Sustainable Goals</h3>
            <p className="text-accent">
            Our initiatives prioritize sustainability, ensuring that our impact lasts well into the future. We empower communities with the knowledge and tools they need to thrive independently, whether through education, job training, or environmental efforts. Our goal is to create lasting solutions that continue to benefit people after the campaign ends. We collaborate with local partners to ensure cultural relevance and lasting change. By supporting us, you're helping build a future where resources are shared, conservation is prioritized, and communities become self-sufficient
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
