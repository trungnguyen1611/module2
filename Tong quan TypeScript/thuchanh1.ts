class Staff {
    public name: string;
    public email: string;
    public age: number;

    constructor(name:string,
    email:string,age:number) {
        this.name=name;
        this.email=email;
        this.age=age;
    }

    getName():string{
        return this.name;
    }

    setName(name:string):void{
        this.name=name;
    }

    getEmail():string{
        return this.email;
    }

    setEmail(email:string):void {
        this.email = email;
    }

    getAge():number {
        return this.age
    }

    setAge(age:number):void {
            this.age = age
        }
}

let staff=new Staff('Staff 1','staff@gmail.com',20);
