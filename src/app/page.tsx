import dynamic from 'next/dynamic';
const DynamicLayout = dynamic(() => import('@/components/Layout/layout'), {
    loading: () => <p>Aguarde...</p>
});

export default function Home() {
    return (
        <DynamicLayout>
            <section className="min-h-screen flex flex-col items-center justify-center bg-[#081b29]">
                <h1 className="text-6xl font-bold">Home</h1>
            </section>
        </DynamicLayout>
    );
}
