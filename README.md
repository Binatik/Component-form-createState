# Component-createElement  

## Навигация 

1. [Обновления](#updates) 
2. [Возможности](#abcd) 
3. [Инструкция](#abcd)  
   * [Типы](#abcd)   
   * [Настройка](#abcd)   
   * [Пример](#abcd)   

  
## Updates  
 
 
### 0.1.0 
**Добавлено:** 

1. Компоненты.  
2. Поля ввода. 
 
**Изменения:** 
1. Переработан дизайн. 

### 0.1.3 
**Добавлено:** 

1. Возможность менять существующий путь.
2. Новый компонент "кнопка".

**Изменения:**  
1. Данные были перенесены в action.  
 
<a name="updates"></a>
### 0.1.5 
**Добавлено:**  
1. Возможность менять путь даже если он не существует.
 

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
 
 
 ###
 
