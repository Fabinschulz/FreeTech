import AboutUsPage from '@/pages/about-us';
import dynamic from 'next/dynamic';
const DynamicLayout = dynamic(() => import('@/components/Layout'));

export default function AboutUs() {
    return (
        <DynamicLayout>
            <AboutUsPage />
        </DynamicLayout>
    );
}
