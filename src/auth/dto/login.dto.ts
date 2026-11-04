import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @IsEmail({}, { message: 'Informe um e-mail válido' })
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}