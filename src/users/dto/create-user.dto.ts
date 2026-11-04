import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsOptional()
    @IsEnum(['ADMIN', 'GERENTE', 'OPERADOR'])
    role?: 'ADMIN' | 'GERENTE' | 'OPERADOR';
}