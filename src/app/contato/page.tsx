import dynamic from 'next/dynamic';
const DynamicLayout = dynamic(() => import('@/components/Layout'));
const DinamicContactPage = dynamic(() => import('@/pages/contact'), {
    loading: () => <p>Carregando...</p>
});

export default function Contact() {
    return (
        <DynamicLayout>
            <DinamicContactPage />
        </DynamicLayout>
    );
}
