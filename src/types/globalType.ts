export interface IContact{
    _id?:string;
    first_name: string,
    last_name: string,
    phone: string,
    email: string,
    address: string,
}

export interface IContactArray {
    data: IContact[];
}

export interface IContactId{
    id: string
}

export interface FormEvent {
    preventDefault: () => void;
    target: {
        first_name: { value: string };
        last_name: { value: string };
        phone: { value: string };
        email: { value: string };
        address: { value: string };
    };
}


export interface ContactFormState {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    address: string;
  }