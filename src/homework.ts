
// Задача 1

function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {
    let origFunc = descriptor.value;
    descriptor.value = function() {
        origFunc.apply(this);
        const ourDate = new Date().toLocaleString("ru");
        const info = "Cellphone " + this.name +" - " + this.price + " $" ;    
        return {
                name: this.name, 
                price: this.price,
                date: ourDate,
                info: info
            };
    }
}
class Item {
    public price: number;
    public name: string;

    constructor(name: string ,price: number) {
        this.name = name;
        this.price = price;
    }

    @addItemInfoDecorator
    public getItemInfo() {
        return {
            name: this.name, 
            price: this.price
        };
    }
}

let item = new Item('Apple', 100);
console.log(item.getItemInfo());

// Задача 2
function addDate(type: string) {
    return function(targetFunction) {
        return class {
            public date = new Date().toLocaleString("Ru");
            public type = type
        }
    }
}
@addDate("Admin")
class User {
}
const newUser = new User();
console.log(newUser);

//  Задача 3

// News api USA
interface INews {
    id: number;
    title: string;
    text: string;
    author: string;
}

class NewsService {
    protected apiurl: string = 'https://news_api_usa_url'
    public getNews() {} // method
}

// News api Ukraine
interface INews2 {
    uuid: string;
    title: string;
    body: string;
    author: string;
    date: string;
    imgUrl: string;
}

class NewsService2 {
    protected apiurl: string = 'https://news_api_2_url'
    public getNews() {} // method get all news
    public addToFavorite() {} // method add to favorites
}
namespace newsUsa {
    export interface INews {
        id: number;
        title: string;
        text: string;
        author: string;
    }
    export class NewsService {
        apiurl: string;
        getNews() {};
    } 
    namespace newsUkraine {
    export interface INews2 {
        uuid: string;
        title: string;
        body: string;
        author: string;
        date: string;
        imgUrl: string;
    }
    export class NewsService2 {
        apiurl: string
        getNews() {};
        addToFavorite() {};
    }
}






    
    
    
}

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

class Senior implements Junior, Middle {
    public doTasks() {};
    public createApp() {};
    createArchitecture() {
        console.log('I have created architecture !!!');
    }
}
applyMixins(Senior, [Junior, Middle]);

function applyMixins(targetClass: any, baseClasses: any []) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name =>{
            targetClass.prototype[name] = baseClass.prototype[name]
        })
    })
}
let alex = new Senior();
alex.createApp();
alex.doTasks();
alex.createArchitecture();