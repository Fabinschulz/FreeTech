import dynamic from 'next/dynamic';
const DynamicLayout = dynamic(() => import('@/components/Layout/layout'));
const DinamicContactPage = dynamic(() => import('@/pages/contact/contact.page'), {
    loading: () => <p>Carregando...</p>
});

export default function Contact() {
    return (
        <DynamicLayout>
            <DinamicContactPage />
        </DynamicLayout>
    );
}
