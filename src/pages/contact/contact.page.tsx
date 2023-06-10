'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchemaContactForm, defaultValuesContactForm } from './schema';
import TextFormField from '@/components/TextFormField';

function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: defaultValuesContactForm,
        resolver: yupResolver(validationSchemaContactForm())
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center mx-4 py-24">
            <div className="flex flex-col items-center justify-center mb-12">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                    Envie uma <span className="text-sky-500">Mensagem!</span>
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
    );
}
export default ContactPage;
