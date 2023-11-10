import { Injectable } from '@nestjs/common';
import { Client } from 'ssh2';

import type { HostNameCtlDto } from '../../scanner/__types__';

@Injectable()
export class SshService {
    async connect(data: HostNameCtlDto): Promise<{ getHostInformation: (command?: string) => Promise<string> }> {
        return new Promise((resolve, reject) => {
            const client = new Client();
            client.connect({
                host: data.ip,
                port: data.port,
                username: data.login,
                password: data.password,
            }).on('error', (err) => {
                reject(err.message);
            });
            resolve({
                getHostInformation: this.getHostInformation(client),
            });
        });
    }

    private getHostInformation(client: Client) {
        return (command: string = 'hostnamectl'): Promise<string> => {
            return new Promise((resolve, reject) => (
                client.on('ready', () => {
                    client.exec(command, (err, stream) => {
                        if (err) throw err;

                        stream.on('close', () => {
                            client.end();
                        });
                        stream.on('data', (data: string) => {
                            return resolve(`${data}`);
                        });
                    });
                }).on('error', (err) => {
                    reject(err.message);
                })
            ));
        };
    }
}