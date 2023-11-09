import { IsIP, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class HostNameCtlDto {
    @IsNotEmpty({ message: 'The field cannot be empty' })
    @IsString({ message: 'Must be a string' })
    login: string;

    @IsNotEmpty({ message: 'The field cannot be empty' })
    @IsString({ message: 'Must be a string' })
    password: string;

    @IsNotEmpty({ message: 'The field cannot be empty' })
    @IsString({ message: 'Must be a string' })
    @IsIP('4')
        // @Matches(/\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/g)
    ip: string;

    @IsNotEmpty({ message: 'The field cannot be empty' })
    @IsNumber({ allowNaN: false }, { message: 'Must be a number' })
    port: number;
}

export type HostNameCtl = {
    staticHostname: string,
    operatingSystem: string,
    architecture: string,
    version: string,
}

export class HostNameCtlFactory {

    static create({ text }: { text: string }): HostNameCtl {

        const regexStaticHostname = /Static hostname: (.+)\n/;
        const regexOperatingSystem = /Operating System: (.+)\n/;
        const regexArchitecture = /Architecture: (.+)\n/;
        const regexVersion = /(\d+\.\d+\.\d+)/;

        const staticHostname = HostNameCtlFactory._matchByText(text, regexStaticHostname);
        const operatingSystem = HostNameCtlFactory._matchByText(text, regexOperatingSystem);
        const architecture = HostNameCtlFactory._matchByText(text, regexArchitecture);
        const version = HostNameCtlFactory._matchByText(operatingSystem, regexVersion);

        return {
            staticHostname, operatingSystem, architecture, version,
        };
    };

    private static _matchByText(text: string, regex: RegExp): string {
        return text.match(regex)[1];
    };
}