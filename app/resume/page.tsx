import Layout from '@/components/layout';
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react'

const AboutPage: FC = () => {
  return (
    <Layout>
      <div className="bg-primary min-h-screen flex flex-col justify-center items-center text-white">
        {/* Hero Section */}
        Show my Resume
      </div>
    </Layout>
  );
};

export default AboutPage;
