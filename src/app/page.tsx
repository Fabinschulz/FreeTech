import Hero from '@/pages/home';
import dynamic from 'next/dynamic';
const DynamicLayout = dynamic(() => import('@/components/Layout/layout'), {
    loading: () => <p>Aguarde...</p>
});

export default function Home() {
    return (
        <DynamicLayout>
            <Hero />
        </DynamicLayout>
    );
}
