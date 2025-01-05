import { motion } from "framer-motion";
import image from "../assets/logo.png";

const Faq = () => {
  return (
    <div className="text-primary py-16">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column: FAQ Accordion */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* Question 1 */}
            <motion.div
              className="collapse collapse-plus bg-base-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How can I start a campaign?
              </div>
              <div className="collapse-content">
                <p>
                  Starting a campaign is easy! Log into your account, navigate to
                  the "Create Campaign" page, and fill in the necessary details such
                  as title, description, type, and goal amount. Once submitted, your
                  campaign will go live for donations.
                </p>
              </div>
            </motion.div>
            {/* Question 2 */}
            <motion.div
              className="collapse collapse-plus bg-base-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                Can I donate without creating an account?
              </div>
              <div className="collapse-content">
                <p>
                  No, you can not. Creating an
                  account allows you to track your donations, receive updates on
                  campaigns, and participate more actively in the community.
                </p>
              </div>
            </motion.div>
            {/* Question 3 */}
            <motion.div
              className="collapse collapse-plus bg-base-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                How do I know my donations are being used correctly?
              </div>
              <div className="collapse-content">
                <p>
                  We ensure transparency by requiring campaign owners to provide
                  updates and reports on their progress. You can view these updates
                  on the campaign page.
                </p>
              </div>
            </motion.div>
            {/* Question 4 */}
            <motion.div
              className="collapse collapse-plus bg-base-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                What types of campaigns can I support?
              </div>
              <div className="collapse-content">
                <p>
                  Our platform hosts a variety of campaigns, including education,
                  medical aid, disaster relief, community projects, and more. Use
                  the filters to find campaigns that align with your interests.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={image}
            alt="FAQ Illustration"
            className="w-full md:w-3/4 rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
