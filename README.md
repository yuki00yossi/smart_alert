# Smart alert

Smart Alert is a JavaScript module that nicely displays alerts.  
![Videotogif](https://user-images.githubusercontent.com/44756367/225110140-f6a8d108-3ad5-49a0-b81a-3bcfa76a4499.gif)

## Getting Started
### STEP1: Load the smart_alert.js and smart_alert.css files into your html file.  
### STEP2: Let's instantiate a SmartAlert object!  
```javascript
const obj = new SmartAlert('Title',
    'This is the message to be displayed in the alert.\nDo you see it?\nWell, get started and you too can use this great module!',
    'primary',
);
```  
There are four arguments that can be used when instantiating.  
### The first argument
The first argument is a string to be displayed in the title field of the alert.
### The second argument
The second argument is a string that specifies the main message to be displayed in the alert.
### The third argument
The third argument is a string type specifying the type of alert.
Smart Alert has the following four types by default.  
If this argument is not specified, info is used.
1. info
2. primary
3. warning
4. danger
### The fourth argument
The fourth argument is a string that specifies where to display the alert.  
Specify from among the following four strings.  
If this argument is not specified, set top-right by default.  
1. top-left
2. top-right
3. btm-left
4. btm-right

## Contributing

Please read [CONTRIBUTING.md]() for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
