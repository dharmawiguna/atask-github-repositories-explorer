interface Geo {
  lat: string;
  lng: string;
}

export interface UserTypes {
  id: number;
  name: string;
  username?: string | undefined;
  email: string;
  address: {
    street: string;
    city: string;
    suite: string;
    geo: Geo;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
}
