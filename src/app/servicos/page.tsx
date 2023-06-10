import dynamic from 'next/dynamic';
const DynamicLayout = dynamic(() => import('@/components/Layout/layout'));

export default function Services() {
    return (
        <DynamicLayout>
            <h1 className="h-screen">PageServices</h1>
        </DynamicLayout>
    );
}
