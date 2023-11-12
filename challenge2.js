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
const kasir = async () => {
    console.log('Meminta menu')
    mintaMenu()
    const kopi = await pesanKopi
    console.log(kopi)
}
  
kasir()