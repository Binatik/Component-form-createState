// =================================================
import React, { useRef, useReducer } from 'react';
import Body from "../Body";
import Input from "./Input";
import inputData from "../data/inputData";
import dataContent from "../data/dataContent";
import { CREATE } from "../../types"
// =================================================

// Component
import "./form.css";
import "./Content/content.css";
import Button from "./Button";
import Panel from "./Content/Panel";
import Label from "./Content/Label";
import reducer from "../../reducer";

function Main() {
    const [ state, dispatch ] = useReducer(reducer, {
        inputData,
        dataContent,
    })

    const inputs = useRef([]);

    function checkContent(el) {
        const { content } = el

        if (el.type === 'panel'){
            return (
                <Panel
                    key={el.id}
                    props={el.props}
                    ch={{content, checkContent}}
                />
            )

        }

        if (el.type === 'label'){
            return <Label
                    key={el.id}
                    props={el.props}
            />
        }

        if (el.type === 'button') {
            return <Button
                key={el.id}
                propsClass={'content__button button button-large'}
                text={'Зачем эта кнопка?'}
                props={el.props}
            />
        }
    }

    function createContent() {
        const value = {
            path: inputs.current[0].value,
            newData: inputs.current[1].value
        }

        dispatch({type: CREATE, value})
    }

    console.log(dataContent);

    return (
        <React.Fragment>
            <Body propsClass={'form'}>
                <form className='form__list between-items-f co-f' ref={inputs} action="#">
                    {
                        state.inputData.map((el) =>{
                            return <Input
                                key={el.id}
                                propsClass={'form__label'}
                                props={el}
                            />
                        })
                    }
                    <Button
                        propsClass={'form__button button button-small'}
                        text={'Применить'}
                        func={createContent}
                    />
                </form>
            </Body>

            <Body propsClass={'content'}>
                {
                    state.dataContent.map((el) => checkContent(el))
                }
            </Body>
        </React.Fragment>
    );
}

export default Main;