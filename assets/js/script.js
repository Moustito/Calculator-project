let main = document.createElement('main');
document.querySelector('body').appendChild(main);

let divEcran = document.createElement('div')
main.appendChild(divEcran)


    for (let i = 0; i <= 9; i++) {
        let button = document.createElement('button');
        let buttonText = document.createTextNode(i);
        button.appendChild(buttonText)
        main.appendChild(button);
    }
