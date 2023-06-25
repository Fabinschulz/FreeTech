import { object, string } from 'yup';

export function validationSchemaContactForm() {
    return object().shape({
        firstName: string()
            .required('Nome é obrigatório')
            .matches(/^[a-zA-Z]+$/, 'Nome inválido'),
        lastName: string()
            .required('Sobrenome é obrigatório')
            .matches(/^[a-zA-Z]+$/, 'Sobrenome inválido'),
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

export const defaultValuesContactForm = {
    firstName: null,
    lastName: null,
    email: null,
    message: null,
    phoneNumber: ''
};
