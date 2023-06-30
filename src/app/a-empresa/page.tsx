import AboutUsPage from '@/pages/about-us';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
const DynamicLayout = dynamic(() => import('@/components/Layout'));

export const metadata: Metadata = {
    title: 'A empresa',
    description: 'Conheça um pouco mais sobre a FreeTech e sua história.'
};

export default function AboutUs() {
    return (
        <DynamicLayout>
            <AboutUsPage />
        </DynamicLayout>
    );
}
