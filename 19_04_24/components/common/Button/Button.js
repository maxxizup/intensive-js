export function Button(title, onClickCallBack) {
    const btnElement = document.createElement("button")

    btnElement.append(title)
    btnElement.addEventListener("click", onClickCallBack)

    return btnElement
}