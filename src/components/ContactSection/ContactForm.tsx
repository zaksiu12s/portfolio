import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from 'emailjs-com';
import i18n from "../../hooks/18n";
import Input from "../Input";
import Label from "../Label";
import TextArea from "../TextArea";
import SubmitButton from "../SubmitButton";
import { FormFieldContainer } from "./FormFieldContainer";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [status, setStatus] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setStatusMessage("");
        setStatus(false);
    };

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMessage('');

        const form = e.target as HTMLFormElement;

        emailjs
            .sendForm(
                'service_goac1ku',
                'template_to474c2',
                form,
                'pnDfZKa8XPJpywhH8'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatusMessage('Message has been sent! Thank you for contacting me.');
                    setStatus(true);
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    console.log(error.text);
                    setStatusMessage('An error occurred. Please try again.');
                    setStatus(false);
                }
            )
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <form onSubmit={sendEmail} className="p-8 sm:pl-20 max-w-[900px]">
            <input title="User language (auto)" readOnly className="hidden" name="userLang" value={i18n.language} />

            <FormFieldContainer>
                <Label text={t("Name")} htmlFor="name" />
                <Input data={formData.name} onChange={handleChange} required={true} id="name" name="name" placeholder={t("Enter your name")} />
            </FormFieldContainer>

            <FormFieldContainer>
                <Label text={t("Email")} htmlFor="email" />
                <Input data={formData.email} onChange={handleChange} required={true} id="email" name="email" type="email" placeholder={t("Enter your e-mail")} />
            </FormFieldContainer>

            <FormFieldContainer>
                <Label text={t("Message")} htmlFor="message" />
                <TextArea data={formData.message} onChange={handleChange} required={true} id="message" name="message" placeholder={t("Enter your message")} />
            </FormFieldContainer>

            <SubmitButton text={t("Sign up")} isLoading={isLoading} />
            <p className={" pt-1.5 " + (status == true ? " text-orange-700 " : " text-red-500 ")}>{t(statusMessage)}</p>
        </form>
    );
}