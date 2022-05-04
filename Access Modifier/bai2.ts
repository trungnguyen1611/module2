export class Staff {
    private _firstName: string;
    private _lastName: string;
    private _birthday: string;
    private _address: string;
    private _role: string;


    constructor(firstName: string, lastName: string, birthday: Date, address: string, role: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday.toDateString();
        this._address = address;
        this._role = role;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get birthday(): string {
        return this._birthday;
    }

    set birthday(value: string) {
        this._birthday = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }
}
