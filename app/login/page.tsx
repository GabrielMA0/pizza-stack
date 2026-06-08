"use client";

import { Button, Input } from "@/shared/components/ui";
import { VisibilityIcon } from "@/shared/components/icons";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: Yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória")
});

export default function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <main className="flex flex-col items-center min-h-screen max-w-110 m-auto gap-5.5">
            <Image
                src="/logo_pizzastack 1.png"
                alt="Logo Image"
                width={215}
                height={215}
            />
            <h3>
                Bem-vindo de volta!
            </h3>

            <Formik
                initialValues={{ email: '', password: '', rememberMe: false }}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
                            <Input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="name@example.com"
                                label="E-mail"
                                errors={errors.email && touched.email ? errors.email : undefined}
                            />
                            <Input
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="••••••••"
                                label="Senha"
                                errors={errors.password && touched.password ? errors.password : undefined}
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                iconRight={<VisibilityIcon isVisible={isPasswordVisible} />}
                                onIconRightClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            />

                            <Input
                                type="checkbox"
                                label="Lembre-se de mim por 30 dias"
                                name="rememberMe"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                checked={values.rememberMe}
                            />
                        <Button className="w-full" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Entrando..." : "Entrar"}
                        </Button>
                        </form>

                )}
            </Formik>

            <p>Não tem uma conta? <Link href="/register" className="text-(--secondary) underline">Crie uma</Link> ou <Link href="/forgot-password" className="text-(--secondary) underline">Esqueceu a senha?</Link></p>

            <div className="relative w-full flex items-center justify-center">
                <p className="absolute text-(--gray) z-10 px-4 bg-(--background) text-paragraph-3">
                    OU CONTINUE COM
                </p>
                <hr className="w-full border border-(--gray) z-0" />
            </div>

            <div className="flex pb-8 gap-5 w-full">
                <button className="w-full py-3 border border-[#E5E7EB] rounded-full cursor-pointer">
                    Google
                </button>
                <button className="w-full py-3 border border-[#E5E7EB] rounded-full cursor-pointer">
                    Facebook
                </button>
            </div>
        </main>
    );
}