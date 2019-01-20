// Задача 1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function addItemInfoDecorator(target, method, descriptor) {
    descriptor.value = function () {
        const ourDate = new Date().toLocaleString("ru");
        const info = "Celphon " + this.name + " - " + this.price + " $";
        return {
            name: this.name,
            price: this.price,
            date: ourDate,
            info: info
        };
    };
}
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getItemInfo() {
        return {
            name: this.name,
            price: this.price
        };
    }
}
__decorate([
    addItemInfoDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Item.prototype, "getItemInfo", null);
let item = new Item('Apple', 100);
// console.log(item.getItemInfo());
// Задача 2
function addDate(type) {
    return function (targetFunction) {
        return class {
            constructor() {
                this.date = new Date().toLocaleString("Ru");
                this.type = type;
            }
        };
    };
}
let User = class User {
};
User = __decorate([
    addDate("Admin")
], User);
const newUser = new User();
console.log(newUser);
class NewsService {
    constructor() {
        this.apiurl = 'https://news_api_usa_url';
    }
    getNews() { } // method
}
class NewsService2 {
    constructor() {
        this.apiurl = 'https://news_api_2_url';
    }
    getNews() { } // method get all news
    addToFavorite() { } // method add to favorites
}
var ApiModels;
(function (ApiModels) {
    class NewsService {
        getNews() { }
        ;
    }
    ApiModels.NewsService = NewsService;
    class NewsService2 {
        getNews() { }
        ;
        addToFavorite() { }
        ;
    }
    ApiModels.NewsService2 = NewsService2;
})(ApiModels || (ApiModels = {}));
// Задача 4
class Junior {
    doTasks() {
        console.log('Actions!!!');
    }
}
class Middle {
    createApp() {
        console.log('Creating!!!');
    }
}
class Senior {
    doTasks() { }
    ;
    createApp() { }
    ;
    createArchitecture() {
        console.log('I have created architecture !!!');
    }
}
applyMixins(Senior, [Junior, Middle]);
function applyMixins(targetClass, baseClasses) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            targetClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
let alex = new Senior();
alex.createApp();
alex.doTasks();
alex.createArchitecture();
