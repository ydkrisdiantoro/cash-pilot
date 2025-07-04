import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../schemas/loginSchema";
import { InputPassword, InputText } from "../components/Inputs";
import { Card } from "../components/Card";
import { ButtonSubmit } from "../components/Button";
import { SaveIcon } from "lucide-react";

export default function Login() {
    const { register, handleSubmit, formState: {errors} } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = (data: LoginFormData) => {
        console.log('Login data:', data);
    };

    return (
        <div className="flex h-screen">
            <Card addClassName="m-auto card-login">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText
                        {...register("email")}
                        label="Email"
                        name="email"
                        register={register}
                        error={errors.email?.message}
                        required
                    />
                    <InputPassword
                        {...register("password")}
                        label="Password"
                        name="password"
                        register={register}
                        error={errors.password?.message}
                        required
                    />
                    <ButtonSubmit>
                        <SaveIcon /> Simpan
                    </ButtonSubmit>
                </form>
            </Card>
        </div>
    );
}