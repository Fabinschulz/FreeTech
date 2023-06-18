import dynamic from 'next/dynamic';
import LoadingSkeleton from './loading-skeleton';
import { Metadata } from 'next';
const DynamicLayout = dynamic(() => import('@/components/Layout'));
const DinamicContactPage = dynamic(() => import('@/pages/contact'), {
    loading: () => <LoadingSkeleton />,
    ssr: true
});

export const metadata: Metadata = {
    title: 'Contato',
    description: 'Entre em contato com a FreeTech.'
};

export default function Contact() {
    return (
        <DynamicLayout>
            <DinamicContactPage />
        </DynamicLayout>
    );
}
