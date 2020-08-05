import { Equalness } from '../utils';

export class DeliveryAddress implements Equalness<DeliveryAddress> {
    constructor(
        public country: string,
        public city: string,
        public addressLine1: string,
        public addressLine2: string,
        public phoneNumber: string,
        public additionalDetails?: string
    ) {}

    public isEqual(otherAddress: DeliveryAddress): boolean {
      return this.country === otherAddress.country &&
             this.city === otherAddress.city &&
             this.addressLine1 === otherAddress.addressLine1 &&
             this.addressLine2 === otherAddress.addressLine2 &&
             this.phoneNumber === otherAddress.phoneNumber &&
             this.additionalDetails === otherAddress.additionalDetails;
    }
}
