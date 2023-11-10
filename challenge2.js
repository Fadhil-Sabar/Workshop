const pesanKopi = new Promise((resolve, reject) => {
    let response = ''
    setTimeout(() => {
        response = 'Kopi Americano siap'
        // console.log(response)
        return resolve(response)
    }, 3000)
})
  
const mintaMenu = () => {
    console.log('Berhasil mendapat menu')
}
const kasir = () => {
    console.log('Meminta menu')
    mintaMenu()
    const kopi = pesanKopi
    console.log(kopi)
}
  
kasir()