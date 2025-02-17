import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { Separator } from '@/src/components/ui/separator';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - WorkShive',
  description:
    'Learn more about WorkShive, your trusted job portal application. Discover our mission, vision, and how we help job seekers find their dream jobs.',
  keywords: [
    'about us',
    'job portal',
    'WorkShive',
    'find jobs',
    'career opportunities',
    'job search',
  ],
  openGraph: {
    title: 'About Us - WorkShive',
    description:
      'Learn more about WorkShive, your trusted job portal application. Discover our mission, vision, and how we help job seekers find their dream jobs.',
    url: 'https://workshive.vercel.app/about-us',
    siteName: 'WorkShive',
    images: [
      {
        url: 'https://workshive.vercel.app/about-us.png',
        width: 1200,
        height: 630,
        alt: 'About Us - WorkShive',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - WorkShive',
    description:
      'Learn more about WorkShive, your trusted job portal application. Discover our mission, vision, and how we help job seekers find their dream jobs.',
    images: ['https://workshive.vercel.app/about-us.png'],
  },
};

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-center">About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Welcome to our <strong>WorkShive</strong>! We are dedicated to
            connecting job seekers with top employers in the industry. Our
            platform simplifies the job search process, making it easier for
            candidates to find opportunities that match their skills and
            aspirations.
          </p>
          <Separator className="my-6" />
          <h2 className="text-xl">Our Mission</h2>
          <p className=" leading-relaxed">
            Our mission is to bridge the gap between employers and job seekers
            by providing a seamless and efficient platform. We aim to empower
            individuals to achieve their career goals and help organizations
            find the right talent.
          </p>
          <Separator className="my-6" />
          <h2 className="text-xl">Why Choose Us?</h2>
          <ul className="list-disc pl-6 ">
            <li>Extensive job listings across various industries.</li>
            <li>User-friendly interface for easy navigation.</li>
            <li>Advanced search filters to find the perfect job.</li>
            <li>Dedicated support team to assist with any queries.</li>
          </ul>
          <Separator className="my-6" />
          <Button>
            <Link href="/">Explore jobs</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
