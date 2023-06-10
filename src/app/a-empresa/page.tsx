import dynamic from 'next/dynamic';
const DynamicLayout = dynamic(() => import('@/components/Layout/layout'));

export default function AboutUs() {
    return (
        <DynamicLayout>
            <h1 className="h-screen">PageAboutUs</h1>
        </DynamicLayout>
    );
}
