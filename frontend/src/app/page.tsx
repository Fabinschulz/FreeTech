import dynamic from 'next/dynamic';
import LoadingSkeletonHome from './loading-skeleton';
const DynamicLayout = dynamic(() => import('@/components/Layout'), {
    loading: () => <p>Aguarde...</p>
});
const DynamicHero = dynamic(() => import('@/pages/home'), {
    loading: () => <LoadingSkeletonHome />
});

export default function Home() {
    return (
        <DynamicLayout>
            <DynamicHero />
        </DynamicLayout>
    );
}
