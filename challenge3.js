const listBuku = [
    {judul: 'Buku IPA', jumlah: 2},
    {judul: 'Buku IPS', jumlah: 5},
    {judul: 'Buku MATEMATIKA', jumlah: 3},
]

const sumJumlahBuku = (buku) => {
    //tambahkan kode disini
    let totalBuku = buku.reduce((accumulator, curr) => {
        console.log("🚀 ~ file: challenge3.js:11 ~ totalBuku.reduce ~ curr:", curr)
        return accumulator += curr['jumlah']
    }, 0)

    let accumulator = 0
    buku.map((item) => {
        accumulator += item['jumlah']
    })

    return totalBuku
}

const getBuku = (buku, calculate) => {
    const totalBuku = calculate(buku)
    console.log(`Saya punya ${buku.length} jenis buku`)
    console.log(`Total jumlah buku ada ${totalBuku}`)
}

getBuku(listBuku, sumJumlahBuku)