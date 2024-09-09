import Layout from '@/components/layout';
import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <Layout>
      <div className="bg-primary min-h-screen flex flex-col justify-center items-center text-white">
        <div className="w-full h-screen">
          <iframe
            src="/pdf/aditya_resume.pdf"
            className="w-full h-full"
            title="Aditya's Resume"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
