'use client';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFormField from '@/components/TextFormField';
import { env } from '@/config';
import axiosApi from '@/api';
import Toast from '@/components/Toast';
import { useState } from 'react';
import { object, string } from 'yup';

function validationSchemaContactForm() {
    return object().shape({
        firstName: string()
            .required('Nome é obrigatório')
            .matches(/^[a-zA-Z\s]+$/, 'Nome não pode conter números'),
        lastName: string()
            .required('Sobrenome é obrigatório')
            .matches(/^[a-zA-Z\s]+$/, 'Sobrenome não pode conter números'),
        email: string()
            .email('E-mail inválido')
            .required('Email é obrigatório')
            .test('email', 'Email inválido', (value) => {
                if (value) {
                    const email = value as string;
                    const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

                    return emailRegex.test(email);
                }

                return false;
            }),
        message: string()
            .required('Mensagem é obrigatória')
            .min(10, 'Mensagem deve ter no mínimo 10 caracteres'),
        phoneNumber: string().required('Telefone é obrigatório')
    });
}

const defaultValuesContactForm = {
    firstName: null,
    lastName: null,
    email: null,
    message: null,
    phoneNumber: ''
};

function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: defaultValuesContactForm,
        resolver: yupResolver(validationSchemaContactForm())
    });
    const [toast, setToast] = useState({
        message: '',
        type: 'error'
    });

    const onSubmit = async (data: FieldValues) => {
        const url = `${env.BASE_API_URL}/Contact`;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            await axiosApi.post(url, data, config);
            setToast({
                message: 'Mensagem enviada com sucesso!',
                type: 'success'
            });
        } catch (error) {
            setToast({
                message: `Erro ao enviar mensagem! ${error}`,
                type: 'error'
            });
        }
    };

    const handleToastClose = () => {
        setToast({
            message: '',
            type: 'error'
        });
    };

    return (
        <>
            {toast.message && (
                <Toast message={toast.message} type={toast.type} onClose={handleToastClose} />
            )}
            <section className="min-h-screen flex flex-col items-center justify-center mx-4 py-24">
                <div className="flex flex-col items-center justify-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                        Fale <span className="text-sky-500">Conosco!</span>
                    </h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl">
                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextFormField
                                name="firstName"
                                label="Nome"
                                placeholder="Seu nome"
                                required
                                register={register}
                                errors={errors.firstName}
                                message={errors.firstName?.message ?? ''}
                                type="text"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <TextFormField
                                name="lastName"
                                label="Sobrenome"
                                placeholder="Seu sobrenome"
                                required
                                register={register}
                                errors={errors.lastName}
                                message={errors.lastName?.message ?? ''}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextFormField
                                name="phoneNumber"
                                label="Telefone Celular"
                                placeholder="(xx) xxxxx-xxxx"
                                required
                                register={register}
                                errors={errors.phoneNumber}
                                message={errors.phoneNumber?.message ?? ''}
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    const { value } = event.target;
                                    const phoneNumber = value
                                        .replace(/\D/g, '')
                                        .replace(/(\d{2})(\d)/, '($1) $2')
                                        .replace(/(\d{5})(\d)/, '$1-$2')
                                        .replace(/(-\d{4})\d+?$/, '$1');

                                    event.target.value = phoneNumber;
                                }}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <TextFormField
                                name="email"
                                label="E-mail"
                                placeholder="Seu e-mail"
                                required
                                register={register}
                                errors={errors.email}
                                message={errors.email?.message ?? ''}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                htmlFor="grid-message"
                            >
                                Mensagem *
                            </label>
                            <textarea
                                {...register('message')}
                                className={`appearance-none block w-full bg-[#112e42] text-white border-[3px] ${
                                    errors.message
                                        ? 'border-red-500 focus:shadow-none'
                                        : 'border-sky-500 focus:shadow-sm focus:shadow-cyan-500'
                                }   rounded py-3 px-4 mb-2  leading-tight focus:outline-none `}
                                id="grid-message"
                                placeholder="Digite sua mensagem..."
                                rows={9}
                            />
                            <p className="text-red-500 text-xs italic">{errors.message?.message}</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="bg-sky-600  hover:bg-transparent border border-sky-500 text-[#081b29] hover:text-sky-500 font-bold py-3 px-10 rounded-lg"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}
export default ContactPage;
