import Style from "./UI.module.css"

function ErrorInput({erroMsg}) {
    console.log(erroMsg)
    return (
        <span className={Style.errorBlock}>{erroMsg}</span>
    )
}

export default ErrorInput;