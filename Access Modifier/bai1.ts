enum Role{
    ADMIN,
    USER
}

class User{
    protected name:string;
    protected email:string;
    public role:Role=Role.USER;

    constructor(name:string,email:string,role:Role) {
        this.name=name;
        this.email=email;
        this.role=role;
    }

    get getInfo(){
        let info:any[]=[];
        info.push(this.name,this.email,this.role);
        return info;
    }
    isAdmin(){
        if(this.role=1){
            console.log(`${this.name} la admin`);
        }
        else{
            console.log(`${this.name} la nguoi dung binh thuong`);
        }
    }
    set setName(name:string){
        this.name=name;
    }
    set setEmail(email: string){
        this.email=email;
    }
    set setRole(role:Role){
        this.role=role;
    }
}