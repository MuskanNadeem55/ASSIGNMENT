function sandwitch(...items: string[]): void {
    console.log("Sandwich Order")

    for (let i=0; i<items.length; i++) {
console.log(`- ${items[i]}`)
    }
}
console.log("Enjoy Your Sandwich ")

sandwitch('BEEF', 'Tomato', 'Chicken')
sandwitch('Beef', 'Cheese')
sandwitch('Garlic Chicken', 'Mayo Sauce')