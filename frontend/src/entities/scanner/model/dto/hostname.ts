export type HostnameRequest = {
    ip: string,
    port: string,
    login: string,
    password: string,
}


export type HostnameResponse = HostnameRequest & {
    id: number,
    staticHostname: string,
    operatingSystem: string,
    architecture: string
    version: string,
}