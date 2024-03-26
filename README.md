# Hamburger Shop using TypeScript

🧾✍ This is a personal project using React + Vite + TypeScript.

[Click here to visualize the project in your web browser](https://hamburger-shop.vercel.app).

<img src="./src/screenshots/project-concluded.jpg" alt="desktop preview">

## Summary

- [General Vision](#general-vision)
  - [The objective](#the-objective)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Used technologies](#used-technologies)
  - [Project functionality](#project-functionality)
  - [How to execute the project](#how-to-execute-the-project)
  - [Continuous development](#continuous-development)
  - [Thanks](#thanks)
  - [Usefull resources](#usefull-resources)
- [Author](#author)


## General Vision

### The objective

- Create a hamburger shop, with home, shop, about and cart page
    - Home: Introduce the user to the shop page
    - Shop: Create a list of snack cards that can be added to the shopping cart
    - About: An "about us" page that the user can see the establishment address and know a little more about the service and the team
    - Cart: the final page that the user will use to concluded your order, where he can see the snacks that were added to the cart, remove any of them, if it's necessary and see the shopping total value.

### Screenshots

#### Functionality

<img src="./src/screenshots/project-functionality.gif" alt="Project functionality" width="80%">

#### Responsivity

<img src="./src/screenshots/project-responsivity.gif" alt="Project responsivity" width="80%">

## My process

### Used technologies

- [React](https://react.dev)
- [Styled-Components](https://styled-components.com)
- [Context-API](https://legacy.reactjs.org/docs/context.html)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [React-router-dom](https://reactrouter.com/en/main)
- [Typescript](https://www.typescriptlang.org)
- [Font-awesome-icons](https://fontawesome.com)

### Project funcionality

First of all, we create the home page, that do not have a complex code. Here was used just styled code, to align the images to its places.
It was just created a cart icon that changes its value when a new product is added to it.
There are other fields that allow the user to see how many items he already choosed. So, it was used a context to store the snack informations from the shopping to be used and shown on the cart page.

```tsx
export const CartProvider: React.FC<ICartProviderProps> = ({children}) => {
    const [cartItems, setCartItems] = useState<ISnackData[]>(() => {
        const localCartData = localStorage.getItem('cartData');
        return localCartData ? JSON.parse(localCartData) : [];
    });

    useEffect(() => {
        window.localStorage.setItem('cartData', JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}
```

Here we can collect the id, name, flavor, price and other informations from the snack choosed.

```tsx
export interface ISnackData {
    id: number;
    name: string;
    flavor?: string;
    ml?: number;
    price: number;
    image: string;
    ingredients?: string[];
    weight?: string;
}
```

To collect that data, before to create the store, a json file was created to contain these informations and to be accesed later.

```json
{
    "data": [
        {
            "id": 1,
            "name": "Big Bacon Delight",
            "ingredients": [
                "ingredients list"
            ],
            "price": 15.99,
            "image": "image-url",
            "weight": "250g"
        },
    ]
}
```

That way, the json data was stored in an state, using useState, and for each snack, using the ```.map``` method, an Card component is rendered in the screen. Inside the component, we transfer the json data using a prop, then it is used to render the snack information.

```tsx
{snackData.flavor &&
    <p className="flavor">
        <span>Flavor:</span> {snackData.flavor}
    </p>
}
{snackData.weight &&
    <p className="weight">
        <span>Weight:</span> {snackData.weight}
    </p>
}
<div className="price">
    {snackData.price &&
        <p className="price">
            <span>Price: </span> ${snackData.price}
        </p>
    }
    {snackData.ml &&
        <p className="price">
            <span className="mlMeasure">- {snacml}ml</span>
        </p>
    }
</div>
```
At this point, that is the result:

<img src="./src/screenshots/shopping-store.jpg" alt="Shopping preview">

Now, the focus is on to add the user options to his cart. When the user click on the cart button, in any of the snack cards, it'll be open a new card to confirm the order and select how many of that snack will be added to the cart.
After confirm the order, the snack details will be added to the cartItems context to be used in the cart.

If the ```cartItems.length > 0``` (to be even one item stored in the state), the items will be show on the screen. Else, a message will advice the user that his cart is empty.

At the bottom of the page, it's possible to see the final price of the purchase. This sum was made using the ```reduce``` method, to sum the price of every snack added to the cartItems state.

```tsx
    useEffect(() => {
        setTotalValue(0);
        const total = cartItems.reduce((acc, snack) => acc + snack.price, 0);
        setTotalValue(Number(total.toFixed(2)));
    }, [cartItems])
```

Every time that the cartItems is changed, as when the user delete an item insinde the cart, the useEffect is called again, seting the totalValue state to zero again, to remake the sum.

Finally, at the bottom of the cart page, its possible to conclude the purchase using the "finalize purchase" button. When this button is clicked, a shopping summary is shown, with the name of all items, their values and the total value of the purchase. Then, the user can confirm your purchase.

```tsx
{cartItems.length > 0
    ? <>
        <h2 className="summaryTitle">Shopping Summary</h2>
        <ul className="items">
            {cartItems.map((item, index) =>
                <li key={index} className="item"><p className="name"><span>{index + 1}.</span> {item.name}</p><span>${item.price}</span></li>
            )}
        </ul>
        <h3 className="totalValue">Total value: <span>${totalValue}</span></h3>
        <button className="finalizePurchase" onClick={handleCompletePurchase}>Confirm Purchase?</button>
    </>
    : <div className="thankYou">
        <h2>Thank you for your choice!</h2>
        <p>Your delicious snacks will arrive really soon, enjoy! 🍔😋</p>
    </div>
}
```

<img src="./src/screenshots/shopping-summary.jpg" alt="shopping summary" width="80%">

### How to execute the project
- The project was created with [React-Vite](https://vitejs.dev).

- To download the project, open the terminal in the VSCode and write the dependencies code installations: **npm install**

The package.json file already contains the version of the library in its data, so all the libraries used in this project will be installed on your machine in the same way. But if you are interested in how to download, use, or learn more about the libraries and APIs that were used in my code, as well as the localStorage, access the links in the [Usefull resources](#usefull-resources).

- To run the project in the browser, it is necessary to activate **NPM Scripts** in the three dots next to the EXPOLORER of VSCode.

<img src='./src/screenshots/Instruções-passo-1.bmp' alt="instruções passo 1">

- Then, in the bottom-left window of **NPM SCRIPTS**, click on the **run** button next to package.json/dev vite.

<img src='./src/screenshots/Instruções-passo-2.bmp' alt="instruções passo 2">


- Finally, in the terminal, keep the **localhost** link will appear where the project will be running in your browser. Hover over it and click **Follow link**, or press the ctrl button on your keyboard and click on the **localhost**, and the page will open in your default browser.

<img src='./src/screenshots/Instruções-passo-3.bmp' alt="instruções passo 3">

There are other ways to open the project, but that form it is the one that I'm used to use.


### Continuous development

This project was made to improve my [Typescript](https://www.typescriptlang.org) knowledge and to get familiar with it. Everything I know is only possible today thanks to the entire team of teachers at [DevQuest](https://www.linkedin.com/school/devquest-dev-em-dobro/), that guide me to be a frontend developer. I hope to put in practice my knowledge to improve the users life with some way.

### Recursos úteis

- [Styled-Components](https://styled-components.com): Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

- [Context-API](https://legacy.reactjs.org/docs/context.html): Context provides a way to pass data through the component tree without having to pass props down manually at every level.

- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage): The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.

- [React-router-dom](https://reactrouter.com/en/main): React Router allows "client-side routing". Pages load faster, improving the end user experience.

- [TypeScript](https://www.typescriptlang.org): TypeScript enhances JavaScript development with static typing, improved tooling, and better code readability, leading to more robust and maintainable applications.

## Autor

- GitHub - [Felipe Santiago Morais](https://github.com/SantiagoMorais)
- Linkedin - [Felipe Santiago](https://www.linkedin.com/in/felipe-santiago-873025288/)
- Instagram - [@felipe.santiago.morais](https://www.instagram.com/felipe.santiago.morais)
- Email - <a src="mailto:contatofelipesantiago@gmail.com" target="blank">contatofelipesantiago@gmail.com</a>
