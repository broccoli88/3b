export default (determinant) => {
    const body = document.body

    unref(determinant) ? body.style.overflow = "hidden" : body.style.overflow = "initial"
}
