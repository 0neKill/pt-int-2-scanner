import type { InitialState } from '@/entities/scanner/model/slice';


export const getIp = ({ reduceScanner }: { reduceScanner: InitialState }) => reduceScanner.sshClient.ip;
export const getPort = ({ reduceScanner }: { reduceScanner: InitialState }) => reduceScanner.sshClient.port;
export const getLogin = ({ reduceScanner }: { reduceScanner: InitialState }) => reduceScanner.sshClient.login;
export const getPassword = ({ reduceScanner }: { reduceScanner: InitialState }) => reduceScanner.sshClient.password;
