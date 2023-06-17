import dynamic from 'next/dynamic';
import LoadingSkeleton from './loading-skeleton';
const DynamicLayout = dynamic(() => import('@/components/Layout'));
const DinamicContactPage = dynamic(() => import('@/pages/contact'), {
    loading: () => <LoadingSkeleton />,
    ssr: true
});

export default function Contact() {
    return (
        <DynamicLayout>
            <DinamicContactPage />
        </DynamicLayout>
    );
}
