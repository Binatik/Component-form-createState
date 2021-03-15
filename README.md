# Component-createElement
 
Enter the path in input.  

Creating a new value for the existing type 

You can enter different types of data 

### Types 
```sh
 {type: 'panel'}
```  

```sh
 {type: 'label'}
```  

```sh
 {type: 'button'}
``` 
 
 ### settings  
  
 ```js 
 //panel
 { 
    width: 500,
    height: 200,
    visible: boolean
 }  
 ``` 
 
  ```js 
 //label
 { 
    caption: 'test',
    visible: boolean
 }  
 ``` 
 
   ```js 
 //button
 { 
    width: 150,
    height: 100,
    visible: boolean
 }  
 ``` 
 
 You can change the type by the specified path.
 
 
 The "panel" type allows you to supplement the data 
 
 ### Example 
  
  
```js 
  {
        id: 1,
        type: 'panel',
        props: {
            width: 500,
            height: 200,
            visible: false

        },
        content: [{
            id: 1,
            type: 'panel',
            props: {
                width: 500,
                height: 200,
                visible: false
            },
            content: [{
                id: 1,
                type: 'label',
                props: {
                    caption: 'test',
                    visible: false
                }
            }]
        }]
    },
 ``` 
 
