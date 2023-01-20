const form = document.querySelector('#formHabits')
const nlwSetup = new NLWSetup(form)
const addButton = document.querySelector('#addButton')

addButton.addEventListener('click', addNewDays)
form.addEventListener('change', saveDate)

function addNewDays() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)

    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Dia já incluso ❌")
        return
    }

    alert("Adicionado com sucesso ✔")
    nlwSetup.addDay(today)
}


function saveDate() {
    localStorage.setItem('nlwSetup@habits', JSON.stringify(nlwSetup.data))


}


const data = JSON.parse(localStorage.getItem('nlwSetup´@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()


