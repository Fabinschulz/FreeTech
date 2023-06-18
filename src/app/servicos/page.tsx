import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import LoadingSkeletonService from './loading-skeleton';
const DynamicLayout = dynamic(() => import('@/components/Layout'));
const DynamicServicesPage = dynamic(() => import('@/pages/services-page'), {
    loading: () => <LoadingSkeletonService />,
    ssr: true
});

export const metadata: Metadata = {
    title: 'Serviços',
    description: 'Conheça os serviços oferecidos pela FreeTech.'
};

export default function Services() {
    return (
        <DynamicLayout>
            <DynamicServicesPage />
        </DynamicLayout>
    );
}
