'use client';

import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";

import { VisibilityIcon } from "@/shared/components/icons";
import { Button, Input } from "@/shared/components/ui";

const registerSchema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    cellphone: Yup.string().matches(/^\(\d{2}\) \d{5}-\d{4}$/, "Número de celular inválido").required("Celular é obrigatório"),
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: Yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
    confirmationPassword: Yup.string().oneOf( [Yup.ref('password')], 'As senhas não coincidem' ).required("Confirmar senha é obrigatório"),
});

export default function Register() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmationPasswordVisible, setConfirmationPassword] = useState(false);

    return(
    <main className="mx-auto max-w-md px-6 py-12">
      <div className="mb-8">
        <h1 className="mb-2 text-(--dark)">
          Crie sua conta
        </h1>

        <p className=" leading-[150%] text-(--dark)">
          Preencha os dados abaixo para começar sua jornada gastronômica.
        </p>
      </div>

        <Formik
        initialValues={{ email: '', password: '', name: '', cellphone: '', confirmationPassword: '' }}
        validationSchema={registerSchema}
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
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Ex: João da Silva"
                    label="Nome completo"
                    errors={errors.name && touched.name ? errors.name : undefined}
                />
                <Input
                    type="cellphone"
                    name="cellphone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cellphone}
                    placeholder="(11) 98888-8888"
                    label="Celular"
                    errors={errors.cellphone && touched.cellphone ? errors.cellphone : undefined}
                />
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
                <div className="flex gap-5">
                    <div className="flex flex-col w-full">
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
                        <div className="mt-2 flex gap-1.5">
                            <div className={`h-1 w-full rounded-full ${values.password.length >= 1 ? "bg-red-500" : "bg-red-100"}`} />
                            <div className={`h-1 w-full rounded-full ${values.password.length >= 3 ? "bg-red-500" : "bg-red-100"}`} />
                            <div className={`h-1 w-full rounded-full ${values.password.length >= 6 ? "bg-red-500" : "bg-red-100"}`} />
                        </div>
                    </div>
                    
                    <Input
                        type={isConfirmationPasswordVisible ? "text" : "password"}
                        placeholder="••••••••"
                        label="Confirmar Senha"
                        errors={errors.confirmationPassword && touched.confirmationPassword ? errors.confirmationPassword : undefined}
                        name="confirmationPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmationPassword}
                        iconRight={<VisibilityIcon isVisible={isConfirmationPasswordVisible} />}
                        onIconRightClick={() => setConfirmationPassword(!isConfirmationPasswordVisible)}
                    />
                </div>
               

                <Button className="w-full" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Criando..." : "Criar conta"}
                </Button>
            </form>
        )}
        </Formik>

          <p className="mt-8.5 text-center text-sm text-(--dark)">
            Já tenho uma conta:
            <Link
              href="/login"
              className="ml-1 font-bold text-red-500 hover:underline"
            >
              Fazer Login
            </Link>
          </p>
    </main>
  );
}