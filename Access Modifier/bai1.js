var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.role = Role.USER;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    Object.defineProperty(User.prototype, "getInfo", {
        get: function () {
            var info = [];
            info.push(this.name, this.email, this.role);
            return info;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.isAdmin = function () {
        if (this.role = 1) {
            console.log("".concat(this.name, " la admin"));
        }
        else {
            console.log("".concat(this.name, " la nguoi dung binh thuong"));
        }
    };
    Object.defineProperty(User.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setRole", {
        set: function (role) {
            this.role = role;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
