export interface ServerResponse {
    payload:  Payload;
    errors:   any[];
    response: Response;
    meta:     Meta;
}

export interface Meta {
    startedAt: Date;
    endAt:     Date;
}

export interface Payload {
    _id:       string;
    name:      string;
    last_name: string;
    brand:     Brand;
    phone:     number;
    email:     string;
    token:     string;
}

export interface Brand {
    _id:  string;
    name: string;
}

export interface Response {
    title:   string;
    message: string;
}
