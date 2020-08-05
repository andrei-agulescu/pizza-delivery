import { Equalness } from '../utils';

export class User implements Equalness<User> {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string
    ) {}

    public isEqual(otherUser: User): boolean {
        return this.firstName === otherUser.firstName &&
               this.lastName === otherUser.lastName &&
               this.email === otherUser.email &&
               this.phoneNumber === otherUser.phoneNumber;
    }
}
