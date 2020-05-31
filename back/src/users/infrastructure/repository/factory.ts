import MemoryUsersRepository from "./MemoryUsersRepository.ts";

export const memoryUsersRepository = () => new MemoryUsersRepository();
