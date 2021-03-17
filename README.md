# Component-createElement  

## Навигация 

1. [Обновления](#updates) 
2. [Возможности](#opportunities) 
3. [Инструкция](#manual)  
   * [Типы](#types)   
   * [Настройка](#settings)   
   * [Пример](#example)   

  
## Updates   
  
### V0.1.0  
* * * * * 
**Добавлено:** 

1. Компоненты.  
2. Поля ввода. 
 
**Изменения:** 
1. Переработан дизайн. 

### V0.1.3  
* * * * * 
**Добавлено:** 

1. Возможность менять существующий путь.
2. Новый компонент "кнопка".

**Изменения:**  
1. Данные были перенесены в action.  
 
<a name="updates"></a>
### V0.1.5  
* * * * * 
**Добавлено:**  
1. Возможность менять путь даже если он не существует. 

* * * * *   

<a name="opportunities"></a>
## Возможности  
> Данный плагин по большей части предназначен для развлечения. С ним можно создавать статические блоки используя какие-то архитектурные данные реального объекта. К таким относятся панель, текст, кнопка. Компоненты будут добавляться по мере возможности.
  
## Manual 
<a name="manual"></a>

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
<a name="types"></a>
 ### Settings  
  
 ```js 
 //panel
 { 
    width: number,
    height: number,
    visible: boolean
 }  
 ``` 
 
  ```js 
 //label
 { 
    caption: 'string',
    visible: boolean
 }  
 ``` 
 
   ```js 
 //button
 { 
    width: number,
    height: number,
    visible: boolean
 }  
 ``` 
 <a name="settings"></a>
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
 <a name="example"></a>
 
 ###
 
