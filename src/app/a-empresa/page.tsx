import AboutUsPage from '@/pages/about-us/about-us.page';
import dynamic from 'next/dynamic';
const DynamicLayout = dynamic(() => import('@/components/Layout/layout'));

export default function AboutUs() {
    return (
        <DynamicLayout>
            <AboutUsPage />
        </DynamicLayout>
    );
}
