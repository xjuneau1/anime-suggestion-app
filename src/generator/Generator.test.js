import {render} from "@testing-library/react"
import GeneratorButton from "./GeneratorButton"
import TextBox from "./TextBox"

describe("Generator", ()=> {
    test('renders the generator button', ()=>{
        render(<GeneratorButton/>)
    })
    test('renders the text box', ()=>{
        render(<TextBox/>)
    })
})