import { HttpParams } from "@angular/common/http";

export class Filters {

    query: string;

    constructor(data?: Partial<Filters>) {
        Object.assign(this, data);
    }

    toParams(): HttpParams {
        let params = new HttpParams();

        Object.keys(this).forEach(key => {

            const property = this[key as keyof Filters];

            if (property) {
                if (Array.isArray(property)) {
                    params = property.reduce((params, id) => params.append(`${key}[]`, String(id)), params);
                } else
                    params = params.append(key, String(property));
            }

        });

        return params;
    }
}