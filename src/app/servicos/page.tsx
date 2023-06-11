import ServicesPage from '@/pages/services-page';
import dynamic from 'next/dynamic';
const DynamicLayout = dynamic(() => import('@/components/Layout'));

export default function Services() {
    return (
        <DynamicLayout>
            <ServicesPage />
        </DynamicLayout>
    );
}
