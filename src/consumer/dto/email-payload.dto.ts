export interface EmailPayloadDto {
  client: {
    name: string;
    email: string;
  };
  product: {
    name: string;
    price: number;
  };
}
