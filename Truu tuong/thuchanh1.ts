abstract class Animal{
    abstract makeSound():string;
}

class Tiger extends Animal{
    makeSound(): string {
        return "Tiger: roarrrrr!";
    }
}
 interface Edible{
    howToEat():string;
 }

 abstract class Fruit implements Edible {
     abstract howToEat(): string
 }

 class Chicken extends Animal implements Edible{
    makeSound(): string {
        return "Chicken: Cluck Cluck";
    }
    howToEat(): string {
        return "Could be fried";
    }
 }

 class Apple extends Fruit{
    howToEat(): string {
        return "Apple could be slided";
    }
 }

 class Orange extends Fruit{
    howToEat(): string {
        return "Orange could be juiced";
    }
 }

 let animal=[];
animal.push(new Chicken(),new Tiger());
console.log(animal[0].makeSound());
console.log(animal[1].makeSound());
animal.forEach((value, index) => {
    if(value instanceof Chicken){
        console.log(value.howToEat())
    }
})
let fruit=[];
fruit.push(new Apple(),new Orange());
console.log(fruit[0].howToEat());
console.log(fruit[1].howToEat());

